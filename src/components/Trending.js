import {Card, Container, Row, Col, Image } from 'react-bootstrap';
import onepieceImage from '../assets/images/trending/onepiece.jpg'

const Trending = () => {
    return(
        <div>
        <Container>
            <br/>
            <br/>
            <h1 className='text-white'>TRENDING MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className='movieWrapper' id='trending'>
                    <Card className="movieImage">
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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
                        <Image src={onepieceImage} alt="OnePiece Red" className='images'/>
                        <div className='bg-dark'>
                         <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>One Piece Red</Card.Title>
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

export default Trending