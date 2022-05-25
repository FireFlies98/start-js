import './Header.css'

export default function Header() {

    return (
        <>
            <header className="header">
                <div className='container_img_logo'>
                    <img src='https://inkscape.org/ru/gallery/item/27794/burger_logo.svg' alt='logo' className='img_logo' />
                </div>
                <div className='container_logo'>
                    <p className='logo'>VadikBurger</p>
                </div>
            </header>
        </>
    )
}