import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";



class DeleteOptionConfirmationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteOptionShow: false,
        }
    }
    render() {
        return (
            <Modal show={this.props.Show} >
                <h6 className="mt-5 text-center">Are u sure want to delete this option</h6><hr />
                <h6 className="mb-5 text-center">{this.props.optionText}</h6>
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