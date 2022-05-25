import './Controls.css'

const Controls = (props) => {
    return (
        <>
            <div className="burger_controls" onClick={(e) => {
                props.onHandleIngredientQuantity(e)
            }}>
                {props.orders.map((order) => {
                    const { ingredient, costPerOne, quantity } = order;
                    return (
                        <div key={ingredient} className='burger_control_item'>
                            <p key={ingredient.name} className='items_prices'>{ingredient}: <span>{costPerOne} $</span></p>
                            <button data-ingre={ingredient} data-action='remove' className='remove_ingredient btn_switch'>-</button>
                            <span className='number'>{quantity}</span>
                            <button data-ingre={ingredient} data-action='add' className='add_ingredient btn_switch'>+</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Controls


                            