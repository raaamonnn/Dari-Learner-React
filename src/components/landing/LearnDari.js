import '../stylesheet/LearnDari.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import downloadImage from '../../assets/Download.png'
import phone from '../../assets/PhoneSectionCards.png'
const LearnDari = () => {
    return (
        <div className="learnDariContainer">
            <Container>
                <Row className="learnDariItemSpacing">
                    <Col sm={7}>
                        <div>
                            <img src={phone} className="learnDariPhone" alt="Download Link"></img>
                        </div>

                    </Col>
                    <Col sm={5}>
                        <div className="learnDariRightItemSpacing">
                            <h1 className="learnDariText">Learn &amp; Practice</h1>
                            <h1 className="learnDariText">Dari</h1>
                            <a href="https://apps.apple.com/us/app/dari-learner/id1582253357#?platform=iphone"> <img src={downloadImage} className="learnDariDownloadImage" alt="Download Link"></img> </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default LearnDari
