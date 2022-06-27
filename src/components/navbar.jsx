import logo from '../assets/images/logo.png'

function Navbar(params) {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
            <ul>
                <li><a>О Нас</a></li>
                <li><a>Почему мы?</a></li>
                <li><a>Наши работы</a></li> 
                <a><button>Контакты</button></a>
            </ul>
                
            
        </div>
    )
}
export default Navbar