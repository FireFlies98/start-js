import  React from "react";
import { Header, Main, Footer } from '../../components';

class Burger extends React.Component {

    constructor() {
        super()
        this.state = {
            meat: 0,
            bacon: 0,
            chees: 0,
            salat: 0
        }
    }

    addMeat = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                meat: oldstate.meat + 2
            }
        })
    }

    removeMeat = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                meat: oldstate.meat - 2
            }
        })
    }

    addBacon = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                bacon: oldstate.bacon + 1.5
            }
        })
    }

    removeBacon = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                bacon: oldstate.bacon - 1.5
            }
        })
    }

    addChees = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                chees: oldstate.chees + 1
            }
        })
    }

    removeChees = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                chees: oldstate.chees - 1
            }
        })
    }

    addSalat = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                salat: oldstate.salat + 0.2
            }
        })
    }

    removeSalat = () => {
        this.setState(oldstate => {
            return {
                ...oldstate,
                salat: oldstate.salat - 0.2
            }
        })
    }



    render() {
        return (
            <footer class="footer">
                <p>Price: {this.state.meat + this.state.bacon + this.state.chees + this.state.salat}$</p>
                <div>
                    <button onClick={this.addMeat}>+</button>
                    <button onClick={this.removeMeat}>-</button>
                    <p>Meat 2$</p>
                    <span>{this.state.meat}</span>
                </div>
                <div>
                    <button onClick={this.addBacon}>+</button>
                    <button onClick={this.removeBacon}>-</button>
                    <p>Bacon 1.5$</p>
                    <span>{this.state.bacon}</span>
                </div>
                <div>
                    <button onClick={this.addChees}>+</button>
                    <button onClick={this.removeChees}>-</button>
                    <p>Chees 1$</p>
                    <span>{this.state.chees}</span>
                </div>
                <div>
                    <button onClick={this.addSalat}>+</button>
                    <button onClick={this.removeSalat}>-</button>
                    <p>Salat 0.2$</p>
                    <span>{this.state.salat.toFixed(1)}</span>
                </div>
                {this.state.meat + this.state.bacon + this.state.chees + this.state.salat > 1 ? (<button class="btn_checkout">Checkout</button>) : (<button class="btn_checkout" disabled>Checkout</button>)}
            </footer>
        )     
    }
}

export default Burger;