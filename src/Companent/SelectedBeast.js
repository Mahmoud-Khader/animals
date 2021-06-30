import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {


// modelData=()=>{

// }

    render() {
        return (

           
    

            <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.chosenAnimal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.chosenAnimal.image_url} alt={this.props.chosenAnimal.title} width='100%' height='200px'/>

                    <p>{this.props.chosenAnimal.description}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        )
    }



}


export default SelectedBeast;