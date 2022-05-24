import './TotalPrice.css'

const TotalPrice = (props) => (
    <>
        <div className="burger_builder">
            <h2>Burger price: {props.totalPrice.toFixed(2)} $</h2>
            <button className='button_checkout' disabled={props.totalPrice.toFixed(2) <= 1} onClick={props.modalControl}>Checkout</button>
        </div>
    </>
)

export default TotalPrice