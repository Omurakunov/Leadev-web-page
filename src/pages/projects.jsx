import survey from '../assets/images/survey.png'
import alem from '../assets/images/alem.png'
import alemPhone from '../assets/images/alem-phone.png'
import surveyPhone from '../assets/images/survey-phone.png'
function Projects() {
    return(
        <div className="projects-cards">
                <div className="project-card survey">
                    <div className="card-name">
                        <img src={survey} className="survey-bc" alt="" srcset="" />
                        <h3>Survey.</h3>
                    </div>
                    <div><img src={surveyPhone}></img></div>
                    <button className='card-images'>Подробнее</button>
                </div>
                <div className="project-card alem">
                    <div className="card-name">
                        <img src={alem} className="alem-bc" alt="" srcset="" />
                        <h3>Alemshop.</h3>
                    </div>
                    <div className='card-images'><img src={alemPhone}></img></div>
                
                    <button>Подробнее</button>
                </div>
            </div>
    )
}
export default Projects