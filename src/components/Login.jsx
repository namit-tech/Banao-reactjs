import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import img16 from "../assets/img16.png"
import img17 from "../assets/img17.png"
import img18 from "../assets/img18.png"
import Signup from './Signup';

function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Create Account.
            </Button>

            <Modal
                className='modal-lg main-modal '
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p className='top-section'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now🤘</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="second-section">
                        <h4 className='modal-head'>Create Account</h4>
                        <p className='already-text'>
                            Already have an account? <span className='sign-up'> <Signup/></span>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <Form>
                        <div className="image-settle">
                            <Form.Group className="mb-5 ">
                                <div className="names">
                                    <Form.Control type="text" placeholder="First Name" />
                                    <Form.Control type="text" placeholder="Last Name" />
                                </div>
                                <Form.Control type="Email" placeholder="Email" />
                                <Form.Control type="Password" placeholder="Password" />
                                <Form.Control type="Password" placeholder="Confirm Password" />
                                <Button className='mt-4 create-btn'>Create Account</Button>
                            </Form.Group>
                            <img src={img16} alt="" className='form-image' />
                        </div>
                    </Form>
                    <div className="d-flex">
                        <div>
                            <Button className='d-flex' variant='light'>
                                <img src={img17} alt="" />
                                Sign up with Facebook</Button>
                            <Button className='mt-3' variant='light'>
                                <img src={img18} alt="" />
                                Sign up with Google</Button>
                        </div>
                        <p className="me-5 m-auto small text-secondary">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login