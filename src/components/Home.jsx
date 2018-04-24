import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg
} from 'reactstrap';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./styles/Home.css"
import Restaurant from 'components/Restaurant.jsx';
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false
        };

    }

    render() {
        const images = [
            {
                original: 'https://images.unsplash.com/photo-1510130315046-1e47cc196aa0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42549827c6ab513e2e0d86208749e05e&auto=format&fit=crop&w=850&h=600&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1510130315046-1e47cc196aa0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42549827c6ab513e2e0d86208749e05e&auto=format&fit=crop&w=850&h=600&q=80'
            }, {
                original: 'https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0038573a81b1169576b6674a3ce202&auto=format&fit=crop&w=850&h=600&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0038573a81b1169576b6674a3ce202&auto=format&fit=crop&w=850&h=600&q=80'
            }, {
                original: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82203e4d57fc0d3bdd8ffc0f66d09763&auto=format&fit=crop&w=850&h=600&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82203e4d57fc0d3bdd8ffc0f66d09763&auto=format&fit=crop&w=850&h=600&q=80'
            }, {
                original: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=850&h=600&q=80',
                thumbnail: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=850&h=600&q=80'
            }
        ]
        return (<div >
            <Container className='Center'>
                <Row>
                    <Col md="6">
                        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} autoPlay={true}/>
                    </Col>
                    <br />
                    <Col md={{
                            size: 5,
                            offset: 1
                        }}>
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <Card>
                                      <Link to="/restaurant">
                                        <img width="100%" src="https://images.unsplash.com/photo-1497289955593-2cc43390ad7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d8710fda28e90eb9243b5d4fd9ea6f9&auto=format&fit=crop&w=230&q=80" alt="Card image cap"/>
                                        <CardBody>
                                            <CardText className="TextCenter">小吃</CardText>
                                        </CardBody>
                                      </Link>
                                    </Card>
                                </Col>
                                <Col xs="6">
                                    <Card>
                                      <Link to="/restaurant">
                                        <img width="100%" src="https://images.unsplash.com/photo-1487499648633-2ade40e0f769?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f3aeab447bf6cbbe0eb5e7a9b5f83ad&auto=format&fit=crop&w=230&q=80" alt="Card image cap"/>
                                        <CardBody>
                                            <CardText className="TextCenter">水木</CardText>
                                        </CardBody>
                                      </Link>
                                    </Card>
                                </Col>
                            </Row>
                            <br/>
                            <Row >
                                <Col xs="6">
                                    <Card>
                                      <Link to="/restaurant">
                                        <img width="100%" src="https://images.unsplash.com/photo-1465086325773-459c6cfbb29f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=598097b1d2184794d6d7578ebe9a15c0&auto=format&fit=crop&w=230&q=80" alt="Card image cap"/>
                                        <CardBody>
                                            <CardText className="TextCenter">風雲</CardText>
                                        </CardBody>
                                      </Link>
                                    </Card>
                                </Col>
                                <Col xs="6">
                                    <Card>
                                        <img width="100%" src="https://images.unsplash.com/photo-1502772066658-3006ff41449b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e3179d2db8233d0104631dd1ca8f3d0&auto=format&fit=crop&w=190&h=140&q=80" alt="Card image cap"/>
                                        <CardBody>
                                            <CardText className="TextCenter">餐車</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>

        </div>);
    };
}
