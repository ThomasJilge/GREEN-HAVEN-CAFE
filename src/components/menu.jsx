import menuImage from '../assets/menu.png'
import './menu.css'

export default function Menu() {
  return (
    <section className='menu'id='menu'>
        <div className='menuContainer'>
            <div className='menuHeader'>
                <h2>Menu</h2>
            </div>
        <div className='imageMenuContainer'>
            <img className='menuImage' src={menuImage} alt="Green Haven Café drinks menu with coffee and non-coffee options, prices for hot and cold, latte on wooden tray"/>
            <div className='menuTextContainer'>
                <div className='menuOne'>
                    <div className='menuTextHeadlineOne'>
                        <h3>Coffee</h3>
                    </div>
                    <div className='hotColdContainer'>
                        <p>hot</p>
                        <p>cold</p>
                    </div>
                    <ul className='coffeeList'>
                        <span></span>
                        <li><span className='name'>Cappuccino</span><span className='hot'>90</span><span className='cold'>100</span></li>
                        <li><span className='name'>Latte Macchiato</span><span className='hot'>90</span><span className='cold'>100</span></li>
                        <li><span className='name'>Espresso</span><span className='hot'>90</span><span className='cold'>-</span></li>
                        <li><span className='name'>Caramel Macchiato</span><span className='hot'>100</span><span className='cold'>110</span></li>
                        <li><span className='name'>Americano</span><span className='hot'>100</span><span className='cold'>110</span></li>
                        <li><span className='name'>Coconut Coffee</span><span className='hot'>-</span><span className='cold'>120</span></li>
                        <li><span className='name'>Mocha</span><span className='hot'>110</span><span className='cold'>120</span></li>
                        <li><span className='name'>Dirty</span><span className='hot'>-</span><span className='cold'>130</span></li>
                        <li><span className='name'>Affogato</span><span className='hot'>-</span><span className='cold'>150</span></li>
                    </ul>
                </div>
                <div className='dividingBar'></div>
                <div className='menuTwo'>
                    <div className='menuTextHeadlineTwo'>
                        <h3>Non Coffee</h3>
                    </div>
                    <div className='hotColdContainer'>
                        <p>hot</p>
                        <p>cold</p>
                    </div>
                    <ul className='nonCoffeeList'>
                        <span></span>
                        <li><span className='name'>Orange Juice</span><span className='hot'>-</span><span className='cold'>70</span></li>
                        <li><span className='name'>Lemonade</span><span className='hot'>-</span><span className='cold'>100</span></li>
                        <li><span className='name'>Lemon Tea</span><span className='hot'>-</span><span className='cold'>90</span></li>
                        <li><span className='name'>Caramel Fresh Milk</span><span className='hot'>100</span><span className='cold'>110</span></li>
                        <li><span className='name'>Dark Cocoa</span><span className='hot'>90</span><span className='cold'>110</span></li>
                        <li><span className='name'>Green Tea</span><span className='hot'>90</span><span className='cold'>120</span></li>
                        <li><span className='name'>Thai Tea</span><span className='hot'>-</span><span className='cold'>90</span></li>
                        <li><span className='name'>Matcha</span><span className='hot'>90</span><span className='cold'>100</span></li>
                        <li><span className='name'>Matcha Latte</span><span className='hot'>110</span><span className='cold'>120</span></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}