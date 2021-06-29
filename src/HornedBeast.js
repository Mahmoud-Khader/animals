import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state={
            vote : 0,
            
        }
    }

    increaseOfVotes=()=>{
        this.setState({
            vote:this.state.vote+1
        })

    }
 
    // modelOpen=()=>{
    //     this.props.showMod();
    // }

    render() {

        return (
            <div>

                {/* <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.alt} />
                <p>{this.props.description}</p> */}


                <Card style={{ width: '18rem'}}>
                    
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.props.showMod} />
                    <Card.Body>
                        <Card.Title>{this.props.Title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        ❤️  {this.state.vote}
                        </Card.Text>
                    
                        <Button variant="primary" onClick={this.increaseOfVotes}>LIKE</Button>
                    <SelectedBeast title={this.title} description={this.description} image_url={this.image_url}/>
                    </Card.Body>
                </Card>
               


            </div>
        )
    }
}

export default HornedBeast