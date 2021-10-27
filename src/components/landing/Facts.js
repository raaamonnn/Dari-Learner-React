import '../stylesheet/Facts.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import orientImage from '../../assets/AutumnWalkOrientImage.png'
import pot from '../../assets/Pot.png'
import mosque from '../../assets/Mosque.png'
import arabicMan from '../../assets/ArabicMan.png'
import swords from '../../assets/Swords.png'
import hat from '../../assets/Hat.png'
const Facts = () => {
    return (
        <div className="factsContainer">
            <Container fluid className="factsPositioning">
                <div className="factsRightSpacing">
                <Row className="factsRightSpacing ">
                    <Col sm={6} className="factsLeftSpacing">
                        <img src={orientImage} alt="Download Link" className="factsImage d-none d-lg-block"></img>
                    </Col>
                    <Col lg={6} className="factsRightSpacing">
                        <h1 className="factsTitle">Dari is ...</h1>
                        <div className="factsListContainer">
                            <div className="factsItem">
                                <img src={arabicMan} alt="Arabic Man" className="factsImageContainer factsIconSpacing"></img>
                                <h2 className="factsText">One of the official languages of Afganistan</h2>
                            </div>
                            <div className="factsItem">
                                <img src={mosque} alt="Mosque" className="factsImageContainer factsIconSpacing factsMosque"></img>
                                <h2 className="factsText"> Used in many of its  neighboring
                                    countries such as Iran</h2>
                            </div>
                            <div className="factsItem">
                                <img src={pot} alt="Pot" className="factsImageContainer factsIconSpacing"></img>
                                <h2 className="factsText"> A dialect of Farsi </h2>
                            </div>
                            <div className="factsItem">
                                <img src={swords} alt="Swords" className="factsImageContainer factsIconSpacing"></img>
                                <h2 className="factsText">Spoken by over 12.5 million people</h2>
                            </div>
                            <div className="factsItem">
                                <img src={hat} alt="Hat" className="factsImageContainer factsIconSpacing"></img>
                                <h2 className="factsText"> Mutually intelligible with Persian (Farsi), though there are some differences in pronunciation and grammar.</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Facts
