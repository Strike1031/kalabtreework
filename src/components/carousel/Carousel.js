import {Carousel, Row, Col} from "react-bootstrap";
import '../../styles/CarouselItem.css'

    // "https://img1.wsimg.com/isteam/stock/5990/:/rs=w:1920,m",

const imglist = [
    "https://img1.wsimg.com/isteam/stock/6214/:/rs=w:1920,m",
    "https://img1.wsimg.com/isteam/stock/85459/:/rs=w:1920,m",

    "https://img1.wsimg.com/isteam/stock/5223/:/rs=w:1920,m",
    "https://img1.wsimg.com/isteam/stock/4694/:/rs=w:1920,m",
    "https://img1.wsimg.com/isteam/stock/4966/:/rs=w:1920,m",

];
function Carousel_main() {
    return (
        <div className = "carousel-parent">
            <Carousel controls = {false} fade>
                {
                    imglist.map((item, index) => 
                            <Carousel.Item>
                                <img
                                    src={item}
                                    className = 'carousel-img'
                                    alt={'Slider1'} style={{opacity: "75%", width: "100vw", height: "100vh"}}
                                />
                                <Carousel.Caption className="carousel-caption">
                                    <Row>
                                        <Col>
                                            <p style={{fontSize: '4rem'}}>Be The Next To Be Hired</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p style={{fontSize: '1.5rem'}}>Get Started Today</p>
                                        </Col>
                                    </Row>
                                   
                                    
                                    {/* <button style={{borderRadius: '40px', width: '200px', height: '50px'}}>
                                        Contact Us
                                    </button> */}
                                    <div>
                                        <Row>
                                            <Col sm={2} md={2} lg={2} xl={2} xx1={2}>
                                                <button style={{borderRadius: '40px', width: '100%', height: '3.125rem'}}>
                                                    Contact Us
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>    
                    )
                }
            </Carousel>
           
            
        </div>
    );
}

export default Carousel_main;