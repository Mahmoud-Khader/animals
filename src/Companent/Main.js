

import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';


class Main extends React.Component {

    render() {

        return (
            <div>

                {data.map((item, index) => {

                    return (
                        <HornedBeast renderModel={this.props.renderModel} chosenAnimal={this.props.chosenAnimal} title={item.title} description={item.description} image_url={item.image_url} alt={item.alt} key={index} handleClose={this.props.handleClose} keyword={item.keyword} />
                    )
                })}

            </div> 
        )
    }
}

export default Main