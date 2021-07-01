

import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import FilterForm from './FilterForm';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hornsNumber: data,
            show: false
        }
    }
    
    submitHandled = (event) => {
        event.preventDefault();
        let Data;
        console.log('works')
console.log(typeof event.target.value)
console.log(typeof Number(event.target.value))

        if (Number(event.target.value)!==0){

         Data = data.filter(value => {
                    return value.horns === Number(event.target.value)
                })
        } else{
            Data=data
        }
        
    
        this.setState({
            show: !this.state.show,
            hornsNumber:Data
    })}
    



    render() {

        return (
            <div>
                <FilterForm submitHandled={this.submitHandled}/>
               

                {this.state.hornsNumber.map((item, index) => {

                    return (
                        <HornedBeast renderModel={this.props.renderModel} chosenAnimal={this.props.chosenAnimal} title={item.title} description={item.description} image_url={item.image_url} alt={item.alt} key={index} handleClose={this.props.handleClose} keyword={item.keyword} />
                    )
                })}

            </div> 
        )
    }
}

export default Main