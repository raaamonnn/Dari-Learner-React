import './stylesheet/Contact.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import React, { useState } from 'react'
init("user_6zjWRKDpnvozhHSff7rNn");
const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        if (email && message && isValidEmail()) {
            const serviceId = 'service_203u2ei';
            const templateId = 'template_agfu944';
            const templateParams = {
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));
                
            alert("Thank you for your message, we will be in touch in no time!")
            setEmail('');
            setMessage('');
        } else {
            alert('Please fill in all fields.');
        }
    }

    function isValidEmail() {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div className="contactContainer">
            <Container>
                <Row className="h-100">
                    <div className="contactContentContainer container text-left ml-lg-0">
                        <h1>Contact Us</h1>
                        <p>Hey there! We love to work with our community. Please reach out to us and leave us a message with any problems or suggestions for improvement!:)</p>
                        <p>If you already have a Dari Learner account, please make sure to use that same email.</p>
                            <div id="inputEmail" role="group" className="form-group pt-3">
                                <label id="inputEmailLabel" for="inputEmail" className="d-block contentContainerLabelText ">
                                    Email Address
                                </label>
                                <input id="inputEmail" type="email" placeholder="Enter email" required="required" aria-required="true" className="form-control" value={email} onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div id="inputMessage" role="group" className="form-group">
                                <label id="inputMessageLabel" for="inputMessage" className="d-block contentContainerLabelText">
                                    Message
                                </label>
                                <textarea id="inputMessage" type="email" placeholder="Enter your Message" required="required" aria-required="true" className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="text-center pt-3">
                                <button type="submit" className="btn w-50 btn-primary" onClick={submit}>Submit</button>
                            </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
