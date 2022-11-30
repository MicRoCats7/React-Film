import {Card, Container, Row, Col, Image } from 'react-bootstrap';
import spiderManImage from '../assets/images/superhero/spiderman1.jpg'

const SuperHero = () => {
    return(
        <div>
        <Container>
            <br/>
            <br/>
            <h1 className='text-white'>SUPERHERO MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className='movieWrapper' id='superhero'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="movieImage">
                        <Image src={spiderManImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Spiderman</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                         </div>                           
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default SuperHero