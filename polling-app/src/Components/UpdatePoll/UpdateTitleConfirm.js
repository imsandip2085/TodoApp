// import React from 'react';
// import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// class UpdateTitleConfirmationBox extends React.Component {
//     render() {
//         return (
//             <Modal show={this.props.Show} onHide={this.props.handleHideEditTitleModel}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Title</Modal.Title>
//                 </Modal.Header>
//                 <InputGroup >
//                     <FormControl className=" ml-5 mr-5"
//                         value={this.props.textTitle}
//                         onChange={this.props.handleChangeTitle}
//                     />
//                 </InputGroup>
//                 <Modal.Footer>
//                     <Button variant="primary" onClick={this.props.handleEditTitleModel}>
//                         Update
//               </Button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
// }
// export default UpdateTitleConfirmationBox;

import React from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

function UpdateTitleConfirmationBox (props) {
    // render() {
        return (
            <Modal show={props.Show} onHide={props.handleHideEditTitleModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <InputGroup >
                    <FormControl className=" ml-5 mr-5"
                        value={props.textTitle}
                        onChange={props.handleChangeTitle}
                    />
                </InputGroup>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleEditTitleModel}>
                        Update
              </Button>
                </Modal.Footer>
            </Modal>
        )
    // }
}
export default UpdateTitleConfirmationBox;