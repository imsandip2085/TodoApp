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
                {this.props.Warning == false ? <h6 className='mt-4 text-center'>Are u sure want to delete this poll : {this.props.deleteTitle}</h6> : <h6 className='mt-4 text-center'>Sorry!  {this.props.deleteTitle}  poll already voted</h6>}
                <Modal.Footer>
                    <Button variant="primary" size="xs" hidden={this.props.Warning != false} onClick={this.props.handleDeletePoll}>
                        Yes
                    </Button>
                    <Button className='m-2' variant="primary" onClick={this.props.handleDeletePollHideModel}>{" "}
                        {this.props.Warning != false ? <span>Cancle</span> : <span>No</span>}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DeletePollConfirmationBox;