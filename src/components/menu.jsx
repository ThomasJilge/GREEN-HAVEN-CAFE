// import aboutUsImageOne from '../assets/aboutUsOne.png'
// import aboutUsImageTwo from '../assets/aboutUsTwo.png'
// import aboutUsImageThree from '../assets/aboutUsThree.png'
import menuImage from '../assets/menu.png'
import './menu.css'

export default function Menu() {
  return (
    <section className='menu'>
        <div className='menuContainer'>
            <div className='menuHeader'>
                <h2>Menu</h2>
            </div>
        <div className='imageMenuContainer'>
            <img className="menuImage" src={menuImage} alt="" />
            <div className='menuTextContainer'>
                <div className='menuOne'>
                    <div className='menuTextHeadlineOne'>
                        <h3>Coffee</h3>
                    </div>
                </div>
                <div className='menuTwo'>
                    <div className='menuTextHeadlineTwo'>
                        <h3>Non Coffee</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}