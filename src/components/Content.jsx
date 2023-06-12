import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CaretDownFill, PersonPlusFill, ThreeDots, Eye, ShareFill, CalendarDateFill, GeoAlt, Briefcase, PenFill, ExclamationCircle } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.png"
import img12 from "../assets/img12.png"
import img13 from "../assets/img13.png"
import img14 from "../assets/img14.png"
import img15 from "../assets/img15.png"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
function Content() {

    return (
        <>
            <section className="background">
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </section>
            <section className="buttons-1">
                <p>All Posts(32)</p>
                <p className="p-1">Article</p>
                <p className="p-1">Event</p>
                <p className="p-1">Education</p>
                <p className="p-1">Job</p>
                <Button className="ms-auto me-5 " variant="light">
                    Write a Post
                    <CaretDownFill />
                </Button>
                <Button className="me-5">
                    <PersonPlusFill />
                    Join Group</Button>
            </section>
            <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
            </div>
            <div className="sections">
                <div className="section-1">
                    <Card style={{ width: '55rem' }} className="m-5">
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <img src={img6} alt="article-logo" />
                            <Card.Title className="mt-3 d-flex">What if famous brands had regular fonts? Meet <br /> RegulaBrands!
                                <ThreeDots className="ms-auto me-5" />
                            </Card.Title>
                            <Card.Text className="text-size" >
                                I've worked in UX for the better part of a decade.From now on, I plan to rei...
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className="m-auto me-3 d-flex">
                                <img src={img7} alt="" className="me-3 " />
                                Sarthak Kamra
                                <Card.Text className="m-auto me-5 text-color" >
                                    <Eye />
                                    1.4k views
                                </Card.Text>
                                <Button variant="light"><ShareFill /></Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '55rem' }} className="m-5">
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <img src={img9} alt="article-logo" />
                            <Card.Title className="mt-3 d-flex">Tax Benefits for Investments under National Pension <br /> Scheme launched by Government
                                <ThreeDots className="ms-auto me-5" />
                            </Card.Title>
                            <Card.Text className="text-size" >
                                I've worked in UX for the better part of a decade.From now on, I plan to rei...
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className="m-auto me-3 d-flex">
                                <img src={img10} alt="" className="me-3 " />
                                Sarah West
                                <Card.Text className="m-auto me-5 text-color" >
                                    <Eye />
                                    1.4k views
                                </Card.Text>
                                <Button variant="light"><ShareFill /></Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '55rem' }} className="m-5">
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                            <img src={img12} alt="article-logo" />
                            <Card.Title className="mt-3 d-flex head-1">Finance & Investment Elite Social Mixer @Lujiazui
                                <div className="ms-auto me-5">
                                    <DropdownButton
                                        as={ButtonGroup}
                                        align={{ lg: 'end' }}
                                        variant="light"
                                        id="dropdown-menu-align-responsive-1"
                                    >
                                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Option 3</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Body className="date-time" >
                            <CalendarDateFill />
                            <Card.Text className="date">Fri,12 Oct,2018</Card.Text>
                            <GeoAlt className="location" />
                            <Card.Text>Ahmedabad, India</Card.Text>
                        </Card.Body>
                        <Button variant="outline" className="btn-1">Visit Website</Button>
                        <Card.Body>
                            <Card.Title className="m-auto me-3 d-flex">
                                <img src={img13} alt="" className="me-3" />
                                Ronal Jones
                                <Card.Text className="m-auto me-5 text-color" >
                                    <Eye />
                                    1.4k views
                                </Card.Text>
                                <Button variant="light"><ShareFill /></Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '55rem' }} className="m-5">
                        <Card.Body>
                            <img src={img15} alt="article-logo" />
                            <Card.Title className="mt-3 d-flex head-1">Software Developer
                                <ThreeDots className="ms-auto me-5" />
                            </Card.Title>
                        </Card.Body>
                        <Card.Body className="date-time" >
                            <Briefcase />
                            <Card.Text className="date-1">Innovaccer Analytics Private Ltd.</Card.Text>
                            <GeoAlt className="location-1" />
                            <Card.Text>Noida, India</Card.Text>
                        </Card.Body>
                        <Button variant="outline" className="btn-2">Apply on Timesjobs</Button>
                        <Card.Body>
                            <Card.Title className="m-auto me-3 d-flex">
                                <img src={img14} alt="" className="me-3" />
                                Ronal Jones
                                <Card.Text className="m-auto me-5 text-color" >
                                    <Eye />
                                    1.4k views
                                </Card.Text>
                                <Button variant="light"><ShareFill /></Button>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="input">
                    <InputGroup className="mb-3 ">
                        <InputGroup.Text id="basic-addon1" className="icon">
                            <GeoAlt />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="Enter Your Location"
                            aria-label="Username"
                            className="form-input"
                            aria-describedby="basic-addon1"
                        />
                        <PenFill className="pen" />
                    </InputGroup>
                    <div className="warning-text">
                        <ExclamationCircle/>
                        Your location will help us serve better 
                    <br /> and extend a personalised experience</div>
                </div>
            </div>

        </>
    )
}


export default Content;