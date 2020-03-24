import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

class AddNewOptionConfirmationBox extends React.Component {
    render() {
        return (
            <Modal show={this.props.Show} onHide={this.props.handleHideAddNewOptionModel}>
                <Modal.Header closeButton>
                    <Modal.Title>New Option</Modal.Title>
                </Modal.Header>
                <InputGroup className="mb-3">
                    <FormControl placeholder="New Option...."
                        value={this.props.newOption}
                        onChange={this.props.handleChangeAddNewOption}
                    />
                </InputGroup>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handleAddNewOptionModel}>
                        Add
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default AddNewOptionConfirmationBox;