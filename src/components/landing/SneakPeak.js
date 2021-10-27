import '../stylesheet/SneakPeak.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import phone from '../../assets/PhoneMain.png'

const SneakPeak = () => {
    return (
        <div className="sneakPeakContainer">
            <Container>
                <Row >
                    <Col sm={5} className="sneakPeakContentContainer">
                        <div className="sneakPeakFirst">
                            <h2 className="sneakPeakContentTitle">Practice your</h2>
                            <h1 className="sneakPearkContentSubTitle">Vocabulary</h1>
                            <p className="sneakPeakContentText">Study up on your Dari and Quiz yourself  </p>
                        </div>
                        <div className="sneakPeakSecond">
                            <h2 className="sneakPeakContentTitle">Perservere and complete all the</h2>
                            <h1 className="sneakPearkContentSubTitle">Levels and Modules</h1>
                            <p className="sneakPeakContentText">Receive Achievements throughout your journey</p>
                        </div>
                    </Col>
                    <Col sm={7} className="sneakPeakContentContainer">
                        <div>
                            <img src={phone} className="sneakPeakPhone" alt="Download Link"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SneakPeak
