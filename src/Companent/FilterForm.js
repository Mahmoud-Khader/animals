import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';


class FilterForm extends Component {

   

    render() {
        return (
            <div>
                <Form >




                    <Form.Group aria-label="Default select example">
                        <Form.Label>Chose The Number of Horns</Form.Label>
                        <Form.Control as='select' onChange={this.props.submitHandled} name='favoriteCatBreed'>

                            <option value="0">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>

                        </Form.Control>
                    </Form.Group>
                  
                </Form>

                
            </div>
        )
    }
}

export default FilterForm
