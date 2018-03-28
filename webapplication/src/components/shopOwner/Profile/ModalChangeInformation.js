import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
export default class ModalChangeInformation extends Component {
    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header>
                    <button onClick = {()=> this.props.switchClose()} type="button" class="close">&times;</button>
                    <center><h4 class="modal-title"><strong>Change Information</strong></h4></center>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div class="form-group">
                            <label for="">First Name: </label>
                            <input type="text" class="form-control" id="" placeholder="Input field" />
                        </div>

                        <div class="form-group">
                            <label for="">Last Name: </label>
                            <input type="text" class="form-control" id="" placeholder="Input field" />
                        </div>

                        <div class="form-group">
                            <label for="">Phone Number: </label>
                            <input class="form-control" rows="3" placeholder="Input field" />
                        </div>

                        <div class="form-group">
                            <label for="">Gender: </label>
                            <input class="form-control" placeholder="Input field" />
                        </div>

                       
                    </form>

                </Modal.Body>

                <Modal.Footer>

                    <button type="button" class="btn btn-success">Change Information</button>
                    <button onClick = {()=> this.props.switchClose()} type="button" class="btn btn-danger">Close</button>

                </Modal.Footer>
            </Modal>
        )
    }
};
