import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

// class DeleteOptionConfirmationBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             deleteOptionShow: false,
//         }
//     }
//     render() {
//         return (
//             <Modal show={this.props.Show} >
//                 {this.props.Warning1 == false ? <h6 className="mt-5 text-center">Are u sure want to delete option : {this.props.optionText} </h6> : <h6 className="m-4">Sorry! {this.props.optionText} this poll already voted </h6>}
//                 <Modal.Footer>
//                     <Button variant="primary" size="xs" hidden={this.props.Warning1 != false} onClick={this.props.handleDeleteOption}>
//                         Yes
//                     </Button>
//                     <Button className='m-2' variant="primary" onClick={this.props.handleHideModel}>{" "}
//                         {this.props.Warning1 != false ? <span>Cancle</span> : <span>No</span>}
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//         )
//     }
// }

// export default DeleteOptionConfirmationBox;

function DeleteOptionConfirmationBox (props) {
        return (
            <Modal show={props.Show} >
                {props.Warning1 == false ? <h6 className="mt-5 text-center">Are u sure want to delete option : {props.optionText} </h6> : <h6 className="m-4">Sorry! {props.optionText} this poll already voted </h6>}
                <Modal.Footer>
                    <Button variant="primary" size="xs" hidden={props.Warning1 != false} onClick={props.handleDeleteOption}>
                        Yes
                    </Button>
                    <Button className='m-2' variant="primary" onClick={props.handleHideModel}>{" "}
                        {props.Warning1 != false ? <span>Cancle</span> : <span>No</span>}
                    </Button>
                </Modal.Footer>
            </Modal>

        )
}

export default DeleteOptionConfirmationBox;