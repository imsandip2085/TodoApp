import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

class UpdateTitleConfirmationBox extends React.Component {
    render() {
        return (
            <Modal show={this.props.Show} onHide={this.props.handleHideEditTitleModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <InputGroup className="mb-3">
                    <FormControl
                        value={this.props.titleText}
                        onChange={this.props.handleChangeTitle}
                    />
                </InputGroup>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handleEditTitleModel}>
                        Update
              </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default UpdateTitleConfirmationBox;