import Carousel_main from '../components/carousel/Carousel'
import { Container, Nav, NavDropdown, Navbar, Row, Col } from 'react-bootstrap';

const imgProjectList1 = [
    {
        myhead: "Retirement, Insurance, Wellness & More" ,
        imgUrl: "https://img1.wsimg.com/isteam/stock/NBjeBmW/:/cr=t:11.38%25,l:0%25,w:100%25,h:77.25%25/rs=w:388,h:194,cg:true",
        mycontent: "If customers can’t find it, it doesn’t exist. Clearly list and describe the services you offer. Also, be sure to showcase a premium service.", 
    }, 
    {
        myhead: "Remote Work Equipment Possible",
        imgUrl: "https://img1.wsimg.com/isteam/stock/gAEJr51/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        mycontent: "Equipping your remote teams with the right tools is essential for productivity, performance, and engagement. Get in touch with us for remote equipment recommendations to help you onboard new hires quickly and compliantly.", 
    }, 
    {
        myhead: "Workers’ Compensation Insurance" ,
        imgUrl: "https://img1.wsimg.com/isteam/stock/4694/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        mycontent: "in some jurisdictions, taking out workers’ compensation is mandatory. This protects both the employer and the employee should the employee get injured during work. Omnipresent ensures that workers' compensation insurance is taken out where applicable.", 
    }, 
    {
        myhead: "Expenses" ,
        imgUrl: "https://img1.wsimg.com/isteam/stock/85459/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        mycontent: "Whether your teams are traveling for business, buying home office equipment, or booking a special training course, the OmniPlatform makes filing expenses hassle-free. Your colleagues simply submit their work-related expenses through the platform, and we’ll automatically send the request on to their manager for approval. For extra simplicity, all approved expenses will be included in your consolidated phoenix work invoice.", 
    }, 
    {
        myhead: "Benefits Packages" ,
        imgUrl: "https://img1.wsimg.com/isteam/stock/pmrJ62V/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        mycontent: "Providing security for your colleagues and their futures can take many forms, but contributing to pensions, life insurance, and wellness programs is an esseantial part of fostering a culture of care. At Omnipresent, we can help you set up all of these employee insurance benefits and more, so you can easily prioritize your team’s long-term well-being.", 
    }, 
    {
        myhead: "Family Leave & Time Off" ,
        imgUrl: "https://img1.wsimg.com/isteam/stock/11925/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194",
        mycontent: "The phoenix offers a simple leave management solution so your colleagues can log paid and unpaid time off with ease. With expert local advice on statutory and customary leave requirements, like maternity, family, and sick leave, you’ll be well equipped to manage your team members’ time off throughout the employee lifecycle. If you need to offboard an individual, we’ll calculate and pay out accrued leave within their final payroll where applicable.", 
    },
    {
        myhead: "easy jobs",
        imgUrl: "",
        mycontent: "our jobs are said to be  easy to obtain with stress free ckients who understand your efforts and usefulness of your talents", 
    },
    {
        myhead: "fast payments",
        imgUrl: "",
        mycontent: "we offer the fastest and most secure payments through various platforms", 
    },
    {
        myhead: "Get Best opportunities for Your Jobs",
        imgUrl: "",
        mycontent: "Get the best candidates on top of your list of job applications. ", 
    },
    {
        myhead: "Get Best opportunities for Your Jobs",
        imgUrl: "",
        mycontent: "Get the best candidates on top of your list of job applications. ", 
    },
    {
        myhead: "Get Best opportunities for Your Jobs",
        imgUrl: "",
        mycontent: "Get the best candidates on top of your list of job applications. ", 
    },
    {
        myhead: "Get Best opportunities for Your Jobs",
        imgUrl: "",
        mycontent: "Get the best candidates on top of your list of job applications. ", 
    },
];
function LandingPage() {
    return (
        <div style={{position: "absolute", top: "-50px"}}>
            <Carousel_main/>
            <div style={{backgroundColor: 'black', paddingTop: '6rem'}}>
                <Container style={{backgroundColor: 'black', color: 'white'}}>
                    <Row>
                        {
                            imgProjectList1.map((item, key) => 
                                <Col md={4} sm={4} lg={4} xl={4} xxl={4} xs={12}>
                                    <p style={{fontSize: "2rem"}}> {item.myhead} </p>
                                    <img src={item.imgUrl} />
                                    <p style={{fontSize: "1rem", paddingTop: "1rem", paddingBottom: "2rem"}}> {item.mycontent}      </p>
                                </Col>
                            )
                        }
                        {/* <Col>
                            <p style={{fontSize: "2rem"}}> Retirement, Insurance, Wellness & More </p>
                            <img src="https://img1.wsimg.com/isteam/stock/NBjeBmW/:/cr=t:11.38%25,l:0%25,w:100%25,h:77.25%25/rs=w:388,h:194,cg:true" />
                            <p style={{fontSize: "1rem", paddingTop: "1rem"}}> If customers can’t find it, it doesn’t exist. Clearly list and describe the services you offer. Also, be sure to showcase a premium service.
                            </p>
                        </Col> */}
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingPage;
