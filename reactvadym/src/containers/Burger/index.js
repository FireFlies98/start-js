import  React from "react";
import './Burger.css'
import { Controls, TotalPrice, Main, MyModal, Header } from '../../components'

class Burger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: this.props.ingredients.map(e => { return { ingredient: e.name, costPerOne: e.price, quantity: 0} }),
            inOrders: [],
            totalPrice: 0,
            isModalOpen: false
        }
    }



    // componentDidMount = () => {
    //     fetch('https://beetroot-burger-app.herokuapp.com/ingredients').then(res => res.json()).then(result => {
    //         this.setState((prevState) => {
    //             const preparedOrder = result[0].ingredients.map(e => { return { ingredient: e.name, quantity: 0 } })
    //             return {
    //                 ...prevState,
    //                 orders: preparedOrder,
    //                 ingredients: result[0].ingredients,
    //             }
    //         })
    //     });
    // }


    ShowingTheModalWindow = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isModalOpen: !prevState.isModalOpen
            }
        })
    }

    prepareCheckout = () => <ul className="order_checkout">{this.state.orders.map((elem) => elem.quantity > 0 ? (<li key={elem.ingredient + elem.quantity}>{elem.ingredient}: {elem.quantity}</li>) : '')}</ul>;

    findIngredientPrice = (ingredient) => this.props.ingredients.find((e) => e.name === ingredient).price;

    findIngredientQuantity = (ingredient) => this.state.orders.find((e) => e.ingredient === ingredient).quantity;

    onHandleIngredientQuantity = (e) => {
        e.preventDefault();
        if (e.target.dataset.action === undefined) { return }
        switch (e.target.dataset.action) {
            case 'remove':
                this.removeIngredient(e.target.dataset.ingre);
                break;
            default:
                this.addIngredient(e.target.dataset.ingre);
                break;
        };
    };


    addIngredient = (ingredient) => {
        if (this.findIngredientQuantity(ingredient) < 5) {
            this.setState((prevState) => {
                const newOrders = prevState.orders.map((elem) => {
                    if (elem.ingredient === ingredient) {
                        return {
                            ...elem,
                            quantity: elem.quantity + 1
                        };
                    };
                    return elem;
                });

                return {
                    ...prevState,
                    orders: newOrders,
                    inOrders: [...prevState.inOrders, ingredient],
                    totalPrice: Number(prevState.totalPrice + this.findIngredientPrice(ingredient))
                };
            });
        };
    };


    removeIngredient = (ingredient) => {
        if (this.findIngredientQuantity(ingredient) > 0) {
            this.setState((prevState) => {
                const indx = prevState.inOrders.lastIndexOf(ingredient);
                const newInOrder = [...prevState.inOrders];
                newInOrder.splice(indx, 1);

                const newOrders = [...prevState.orders].map((elem) => {
                    if (elem.ingredient === ingredient) {
                        return {
                            ...elem,
                            quantity: elem.quantity - 1
                        };
                    };
                    return elem;
                });

                return {
                    ...prevState,
                    orders: newOrders,
                    inOrders: newInOrder,
                    totalPrice: Number(prevState.totalPrice - this.findIngredientPrice(ingredient))
                };
            });
        };
    };



    render() {
        return (
            <>
                <Header />
                <Main  products={this.state.inOrders} />
                <MyModal 
                    isOpen={this.state.isModalOpen}
                    handleOpenClose={this.ShowingTheModalWindow}
                    modalTitle='Please, check your order'
                    modalContent={this.prepareCheckout()}
                    handleOrderSave={this.handleOrderSave}
                    isCheckout
                />
                <footer className="footer">
                    <Controls onHandleIngredientQuantity={this.onHandleIngredientQuantity} ingredients={this.props.ingredients} orders={this.state.orders} />
                    <TotalPrice totalPrice={this.state.totalPrice}  modalControl={this.ShowingTheModalWindow} />
                </footer>
            </>
        )
    }

}

export default Burger;

