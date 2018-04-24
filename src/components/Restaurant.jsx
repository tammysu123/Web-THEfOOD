import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText,
    CardDeck,
    CardBody,
    CardImg
} from 'reactstrap';

import "./styles/Restaurant.css";

export default class Restaurant extends React.Component {
    static propTypes = {

    };



    constructor(props) {
        super(props);

        this.state = {
          activebutton: 1
        };
        this.handletopClick = this.handletopClick.bind(this);

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handletopClick(index){
      this.setState({
          activebutton: index
      });
    }
    render() {
      const data = [
        {
          name: "store1",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store2",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store3",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store4",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store5",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store6",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store7",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "store8",
          background: "https://www.feds.com.tw/Uploads/Restaurant/84b1b44f-e7ba-4e5e-adfb-0a41e82bdd7d.jpg",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
      ];

        return (
            <div>
              <div className="topblock">
                <div className="toptext">水木-店家總覽</div>
                <img src="https://www.feds.com.tw/Uploads/RestaurantCategory/4539c542-329f-4a01-9c05-f967b68f9eb9.jpg" className="topimage"/>
                <div className="topbuttonlist">
                  <Button className={this.state.activebutton == 1?"activebutton":"topbutton"} color="secondary" onClick={()=>this.handletopClick(1)}>今日營業</Button>
                  <Button className={this.state.activebutton == 2?"activebutton":"topbutton"} color="#4d4d4d" onClick={()=>this.handletopClick(2)}>特惠活動</Button>
                  <Button className={this.state.activebutton == 3?"activebutton":"topbutton"} color="secondary" onClick={()=>this.handletopClick(3)}>評分最高</Button>
                  <Button className={this.state.activebutton == 4?"activebutton":"topbutton"} color="#4d4d4d" onClick={()=>this.handletopClick(4)}>我的最愛</Button>
                </div>
              </div>
              <Container>
                <Row>
                  {data.map((store,key) => (
                    <Col md="4" key={key} className="storecard">
                      <Card>
                        <CardImg top src= {store.background}/>
                          <CardBody>
                            <CardTitle>{store.name}</CardTitle>
                            <CardText>{store.description}}</CardText>
                            <Button>Buy Now</Button>
                          </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
        );
    }



}
