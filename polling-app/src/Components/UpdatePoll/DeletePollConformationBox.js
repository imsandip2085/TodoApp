import React from "react";
import { Modal, Button } from "react-bootstrap";
import UpdatePoll from './UpdatePoll';

class DeletePollConfirmationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletePollShow: false,
        }
    }
    handleDeleteYes = () => {
        this.setState({ deletePollShow: true })
    }
    handleDeleteNo = () => {
        this.setState({ deletePollShow: false })
    }
    render() {
        return (
            <Modal show={this.props.Show} onHide={this.props.handleDeletePollHideModel}>
                <Modal.Header closeButton>
                    <p>Are u sure want to delete this option</p>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" size="xs" onClick={this.props.handleDeletePoll}>
                        Yes
                    </Button>
                    <Button className='m-2' variant="primary" onClick={this.props.handleDeletePollHideModel}>{" "}
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DeletePollConfirmationBox;