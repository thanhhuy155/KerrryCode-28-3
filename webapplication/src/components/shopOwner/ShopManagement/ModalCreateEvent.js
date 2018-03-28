import React, { Component } from 'react';

export default class ModalCreateEvent extends Component {
    render() {
        return (
            <div class="modal fade" id="modal-CreateEvent">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style= {{backgroundColor:'lightGreen'}}>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <center><h4 class="modal-title"><strong>Create a Event</strong></h4></center>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="">Start Date: </label>
                                    <input type="date" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for="">Close Date: </label>
                                    <input type="date" class="form-control" id="" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for="">Description: </label>
                                    <textarea class="form-control" rows="3" placeholder="Input field" />
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Choose Images</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};
