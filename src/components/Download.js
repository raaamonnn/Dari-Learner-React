import './stylesheet/Download.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import phone from '../assets/PhoneProfil.png'
const Download = () => {
    return (
        <div className="downloadContainer">
            <Container>
                <Row >
                    <Col sm={6} className="">
                        <div className="downloadContentContainer">
                            <h1>On the App Store</h1>
                            <p className="">Dari Learner is only available for iPhones & iPads.</p>
                            <p>Android coming soon:)</p>
                            {/* <a href="/#appStore"> <img src={downloadImage} className="" alt="Download Link"></img> </a> */}
                        </div>
                    </Col>
                    <Col sm={6} className="">
                        <div>
                            <img src={phone} className="downloadPhone" alt="Download Link"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Download
