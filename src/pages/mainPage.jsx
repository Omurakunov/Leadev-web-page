import Navbar from "../components/navbar";
import mainImg from '../assets/images/main.png'
import webPage from '../assets/images/website.png'
import smartphone from '../assets/images/smartphone.png'
import design from '../assets/images/web-design.png'
import Projects from './projects'
import leadevLogo from '../assets/images/leadevlogo.svg'
import instagram from '../assets/images/instagram.png'
import tiktok from '../assets/images/tiktok.png'
function MainPage() {
    return(
        <div className="main-page">
        <Navbar/>
        {/* <div className="blue-circle"></div> */}
        <div className="main">
            <div className="main-info">
                <div className="main-info-text">
                    <h1>Разработаем сайт<br/> 
                        и мобильное приложение<br/> 
                        в<span> Бишкеке</span>
                    </h1>
                    <p>Разработка анимированных сайтов и красивых приложений<br/>
                    с дизайном</p>
                     <button>Оставить заявку</button>
                </div>
             </div>
            <div className="main-img">
                <img src={mainImg} alt="" srcset="" />
            </div>
        </div>
        <div className="benefits">
            <h1 data-text="Наши преимущества" className="header-h1">Наши преимущества</h1>  
            <div className="benefit">
                <div className="benefit-header">
                    <div>1</div>
                    <h2>Надежность</h2>
                </div>
                <p>Наша компания предостовляет как надежные проекты,<br/> так и надежное отношение с нами</p>
            </div>
            <div className="benefit right">
                <div className="benefit-header">
                    <div>2</div>
                    <h2>Работы в срок</h2>
                </div>
                <p>Командой разработчиков управляет опытный senior проект<br/> менеджер,который распределяет работу с помощью<br/> профессиональных инструментов, таких как</p>
                <ul>
                    <li>Jira</li>
                    <li>Agile </li>
                    <li>Scrum</li>
                </ul>
            </div>
            <div className="benefit">
                <div className="benefit-header">
                    <div>3</div>
                    <h2>Постоянная связь клиентом</h2>
                </div>
                <p>В нашей компании работают опытные операторы,<br/> которые гарантируют постоянную связь с заказчиком.</p>
            </div>
            <div className="benefit right">
                <div className="benefit-header">
                    <div>4</div>
                    <h2>Продукты сделанные по <br/>новейшим стандартам</h2>
                </div>
                <p>Наша команда работает по новейшими версиями интрументов <br/>не отставая от международного стандарта </p>
            </div>
            <div className="benefit">
                <div className="benefit-header">
                    <div>5</div>
                    <h2>Дальнейшее обеспечение <br/>проектов</h2>
                </div>
                <p>После того как мы вам дадим готовый проект, вы можете <br/>вернуть для его обновления</p>
            </div>
            
        </div>
        <div className="services">
            <h1 data-text="Наши услуги" className="header-h1">Наши услуги</h1>
            <div className="service-cards">
                <div className="service-card">
                    <img src={webPage} alt="" srcset="" />
                    <h3>Сайты</h3>
                    <p>Мы верстаем самые красивые и анимированные сайты</p>
                </div>
                <div className="service-card">
                    <img src={smartphone} alt="" srcset="" />
                    <h3>Мобильные приложения</h3>
                    <p>Разрабатываем и продвигаем программное обеспечение для IOS и Android</p>
                </div>
                <div className="service-card">
                    <img src={design} alt="" srcset="" />
                    <h3>UX UI design</h3>
                    <p>Красивый дизайн для сайтов и приложений</p>
                </div>
            </div>
        </div>
        <div className="projects">
            <h1 className="header-h1" data-text="Наши работы" >Наши работы</h1>
            <Projects/>
        </div>
        <footer>
            <div className="footer-img">
                <img src={leadevLogo} className="leadev-logo" alt="" srcset="" />
                <div className="links">
                    <a href="https://www.instagram.com/leadev.company/"><img src={instagram} alt="" className="link" srcset="" /></a>
                    <a href="https://www.tiktok.com/@leadev.company"><img src={tiktok} alt="" className="link" srcset="" /></a>
                </div>
            </div>
            <div className="contacts">
                <p>Телефоны: <br/> +996707232459</p>
                <p>Адрес <br/> 1\8 ул. Анкара, Бишкек</p>
            </div>
            
        </footer>
        </div>
    )
}
export default MainPage