import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

class AddNewOptionConfirmationBox extends React.Component {
    render() {
        return (
            <Modal show={this.state.Show} onHide={this.handleHideAddNewOptionModel}>
                <Modal.Header closeButton>
                    <Modal.Title>New Option</Modal.Title>
                </Modal.Header>
                <InputGroup className="mb-3">
                    <FormControl placeholder="New Option...."
                        value={this.state.newOption}
                        onChange={this.handleChangeAddNewOption}
                    />
                </InputGroup>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleAddNewOptionModel}>
                        Add
              </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default AddNewOptionConfirmationBox;