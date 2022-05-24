import "./main.css"

const Main = (props) => (
    <>
        <main class="main">
            <div className='burger_div'>
                <div className="top-bun"></div>
                {props.products.length < 1 && (<h3 className='burger_empty'>Please, start by adding products...</h3>)}
                {props.products.map((product, indx) => <div key={product + '_' + indx} className={`${product} ingredient`}></div>)}
                <div className="bottom-bun"></div>
            </div>
        </main>
    </>
)

export default Main;