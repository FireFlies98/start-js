import  React from "react";
import './Burger.css'
import { Controls, TotalPrice, Main, MyModal, Header } from '../../components'
import axios from "axios";

class Burger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            inOrders: [],
            totalPrice: 0,
            isModalOpen: false,
            name: '',
            address: '',
            phone: '',
            delivery: false,
            orderCreationResponse: false,
        }
    }

    inputChange = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    onInputChange = (e) => {
        const computedValue =
          e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value;
        this.setState((prevState) => {
          return {
            ...prevState,
              [e.target.name]: computedValue,
          };
        });
    };

    handleOrderSave = (event) => {
        event.preventDefault();
        const products = {};
        this.state.orders.forEach((order) => {
            if (order.quantity > 0) {
              products[order.ingredient] = order.quantity;
            }
          });
        const data = JSON.stringify({
            orderPhone: this.state.phone,
            orderAddress: this.state.address,
            orderName: this.state.name,
            orderFast: this.state.delivery,
            orderPrice: this.state.totalPrice,
            orderProducts: products
        });

        const config = {
            method: 'post',
            url: 'https://beetroot-burger-app.herokuapp.com/orders',
            headers: {
                'Authorization': 'Bearer fbab44e0-5e31-4a93-bc8f-55fe77a066b0',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(() => {
              this.setState({ orderCreationResponse: true });
            })
            .catch((e) => {
              console.error(e);
            });
    }

    componentDidMount = () => {
        fetch('https://beetroot-burger-app.herokuapp.com/ingredients')
        .then(res => res.json())
        .then(result => {
            this.setState((prevState) => {
                const preparedOrder = result[0].ingredients.map(e => { return { ingredient: e.name, costPerOne: e.price, quantity: 0 } })
                return {
                    ...prevState,
                    orders: preparedOrder,
                    ingredients: result[0].ingredients,
                }
            })
        });
    }


    ShowingTheModalWindow = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isModalOpen: !prevState.isModalOpen
            }
        })
    }

    prepareCheckout = () => 
        !this.state.orderCreationResponse ? (
            <ul className="order_checkout">
                {this.state.orders.map((elem) => 
                    elem.quantity > 0 ? (
                        <li key={elem.ingredient + elem.quantity}>
                            {elem.ingredient}: {elem.quantity}
                        </li>
                    ) : ("")
                )}
            </ul>) : (
                <h1 className="order_checkout">
                    The order has been accepted for processing, expect a call :)
                </h1>
    );


    findIngredientPrice = (ingredient) => this.state.ingredients.find((e) => e.name === ingredient).price;

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
                    modalTitle='VadikBurger'
                    modalContent={this.prepareCheckout()}
                    handleOrderSave={this.handleOrderSave}
                    isCheckout
                    inputChange={this.inputChange}
                    onInputChange={this.onInputChange}
                    orderCreationState={!this.state.orderCreationResponse}
                />
                <footer className="footer">
                    <Controls onHandleIngredientQuantity={this.onHandleIngredientQuantity} ingredients={this.state.ingredients} orders={this.state.orders} />
                    <TotalPrice totalPrice={this.state.totalPrice}  modalControl={this.ShowingTheModalWindow} />
                </footer>
            </>
        )
    }

}

export default Burger;

