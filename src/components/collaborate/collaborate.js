import React from 'react';
import '../collaborate/collaborate.css';
import { Form, Col, Button } from 'react-bootstrap';

function Collaborate() {

    return (
        <div className='collaborate'>
            <div className='collaborate-info'>
                <h1 className='title-collaborate'><span className='top-title'>COLLABORATE</span><br />WITH US</h1>
                <p className='info-collaborate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
            <img className='crosses-collab' src='crosses.png' alt='crosses' />
            <Form className='form'>
                <Form.Row>
                    <Form.Group as={Col} className='formGridName' controlId="formGridName">
                    <Form.Label className='nameForm'>NAME</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} className='formGridSurname' controlId="formGridSurname">
                        <Form.Label className='nameForm'>SURNAME</Form.Label>
                        <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                </Form.Row>

                <Form.Group className='formGridPhone' controlId="formGridPhone">
                    <Form.Label className='nameForm'>PHONE</Form.Label>
                    <Form.Control type='numbers' placeholder="Phone" />
                </Form.Group>

                <Form.Group  controlId="formGroupEmail">
                    <Form.Label className='nameForm'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} className='formGridExperience' controlId="formGridExperience">
                    <Form.Label className='nameForm'>Experience</Form.Label>
                        <Form.Control as="select" defaultValue="Select">
                            <option>Select</option>
                            <option>Junior</option>
                            <option>Mid Level</option>
                            <option>Senior</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} className='formGridAboutUs' controlId="formGridAboutUs">
                    <Form.Label className='nameForm'>WHERE DID YOU HEAR ABOUT US?</Form.Label>
                        <Form.Control as="select" defaultValue="Select">
                            <option>Select</option>
                            <option>Friends</option>
                            <option>Family</option>
                            <option>Email Campain</option>
                            <option>...</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button className='submitButton' variant="primary" type="submit">
                    SEND
                </Button>
                </Form>
        </div>
    )
}

export default Collaborate;