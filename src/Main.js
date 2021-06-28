  
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
    render() {
        return (
            <div>
                {data.map((item, index) => {
                    return (
                        <HornedBeast title={item.title} description={item.description} image_url={item.image_url} alt={item.alt} key={index} />
                    )
                })}
            </div>
        )
    }
}

export default Main