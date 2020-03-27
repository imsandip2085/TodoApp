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
    render() {
        return (
            <Modal show={this.props.Show} >
                <h6>Are u sure want to delete this poll</h6><hr />
                <h6 className='ml-4 text-center'>{this.props.deleteTitle}</h6>
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