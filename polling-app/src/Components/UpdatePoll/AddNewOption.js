import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// class AddNewOptionConfirmationBox extends React.Component {
//     render() {
//         return (
//             <Modal show={this.props.Show} onHide={this.props.handleHideAddNewOptionModel}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>New Option</Modal.Title>
//                 </Modal.Header>
//                 <InputGroup >
//                     <FormControl className=" ml-5 mr-5"
//                         placeholder="Add new option...."
//                         onChange={this.props.handleChangeAddNewOption}
//                     />
//                 </InputGroup>
//                 <Modal.Footer>
//                     <Button variant="primary" onClick={this.props.handleAddNewOptionModel}>
//                         Add
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
// }
// export default AddNewOptionConfirmationBox;

function AddNewOptionConfirmationBox (props) {
        return (
            <Modal show={props.Show} onHide={props.handleHideAddNewOptionModel}>
                <Modal.Header closeButton>
                    <Modal.Title>New Option</Modal.Title>
                </Modal.Header>
                <InputGroup >
                    <FormControl className=" ml-5 mr-5"
                        placeholder="Add new option...."
                        onChange={props.handleChangeAddNewOption}
                    />
                </InputGroup>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleAddNewOptionModel}>
                        Add
                </Button>
                </Modal.Footer>
            </Modal>
        )
}
export default AddNewOptionConfirmationBox;