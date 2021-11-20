import './stylesheet/Footer.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import downloadImage from '../assets/Download.png'

const Footer = () => {
    return (
        <div className="footerContainer">
            <Container>
                <Row>
                    <Col className="">
                        <div className="footerContentSpacing">
                            <h1 className="footerTitle">Available Now</h1>
                            <a href="https://apps.apple.com/us/app/dari-learner/id1582253357#?platform=iphone"> <img src={downloadImage} className="footerDownload" alt="Download Link"></img> </a>
                        </div>
                    </Col>
                </Row>
                <Row className="footerInfoContainer">
                    <Col><a href="/PrivacyPolicy" className="footerStyle"> <p>Privacy Policy</p></a></Col>
                    <Col><a href="/Terms" className="footerStyle"><p>Terms</p></a></Col>
                    <Col><p className="footerReserved">© 2021 Dari Learner Inc. All Rights Reserved</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
