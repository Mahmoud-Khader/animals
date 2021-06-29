

import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    result=()=>{
        this.setState({
            showOff: data.find(({title})=>
             title===this.title )
        })
    }
    render() {

        return (
            <div>

                {data.map((item, index) => {

                    return (
                        <HornedBeast title={item.title} description={item.description} image_url={item.image_url} alt={item.alt} key={index} showMod={this.handleClose} />
                    )
                })}

                {/* {data.find(title => {
                    return (
                        <SelectedBeast showMod={this.handleClose} title={this.title} description={this.description} image_url={this.image_url} />
                        )
                    })} */}

                    <SelectedBeast showMod={this.handleClose} title={this.title} description={this.description} image_url={this.image_url} show={false} />


            </div> 
        )
    }
}

export default Main