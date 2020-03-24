import React from "react";
import { Modal, Button } from "react-bootstrap";


class DeleteOptionConfirmationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteOptionShow: false,
        }
    }
    render() {
        return (
            <Modal show={this.props.Show} onHide={this.props.handleHideModel}>
                <Modal.Header closeButton>
                    <p>Are u sure want to delete this option</p>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" size="xs" onClick={this.props.handleDeleteOption}>
                        Yes
                    </Button>
                    <Button className='m-2' variant="primary" onClick={this.props.handleHideModel}>{" "}
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DeleteOptionConfirmationBox;