import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {

//   constructor(props) {
//         super(props)
//         this.state = {
//             show: false
//         }
//     }
//     handleClose = () => {
//         this.setState({
//             show: !this.state.show
//         })
//     }

    // modelOpen=()=>{
    //     this.props.showMod();
    // }

    render() {
        return (

           
    

            <Modal show={this.props.show} onHide={this.props.showMod}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.image_url} alt={this.props.title} width='100%' height='200px'/>

                    <p>{this.props.description}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        )
    }



}


export default SelectedBeast;