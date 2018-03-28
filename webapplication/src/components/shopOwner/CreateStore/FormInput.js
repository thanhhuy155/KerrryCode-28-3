import React, { Component, Fragment } from 'react';

export default class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtNameOfShop: '',
            txtTypeOfShop: '',
            txtPhoneNumber: '',
            txtOpenTime: '',
            txtCloseTime: '',
            txtOpenDay: '',
            txtStreet: '',
            txtDistrict: '',
            txtMinPrice: '',
            txtMaxPrice: '',
            txtDescription: '',
            formError: {
                txtNameOfShop: '',
                txtTypeOfShop: '',
                txtPhoneNumber: '',
                txtOpenTime: '',
                txtCloseTime: '',
                txtOpenDay: '',
                txtStreet: '',
                txtDistrict: '',
                txtMinPrice: '',
                txtMaxPrice: '',
                txtDescription: '',
            },
            file: '',
            imagePreviewUrl: ''
        }
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <Fragment>
                    <form>
                        <div class="row">

                            <div class="col-xs-12 col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Name Of Shop: </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtNameOfShop'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtNameOfShop}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Select Type of Shop: </label>
                                    <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                        <option value="">Fashion Store</option>
                                        <option value="">Restaurant or Coffeshop</option>
                                        <option value="">Entertainment</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="">Phone Number Of Shop: </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtPhoneNumber'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Open Time: </label>
                                    <input
                                        type="time"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtOpenTime'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtOpenTime}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Close Time: </label>
                                    <input
                                        type="time"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtCloseTime'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtCloseTime}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Open Date: </label>
                                    <br></br>
                                    <label class="form-check-label" for="exampleCheck1">Mon: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Tue: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Wed: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Thu: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Fri: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Sat: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                    <label class="form-check-label" for="exampleCheck1">Sun: </label>&nbsp;
                                    <input checked={true} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                </div>

                                <div class="form-group">
                                    <label for="">Street: </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtStreet'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtStreet}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">District: </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtDistrict'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtDistrict}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Min Price: </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtMinPrice'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtMinPrice}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Max Price: </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtMaxPrice'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtMaxPrice}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Description: </label>
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        placeholder="Input field"
                                        onChange={this.handleChange}
                                        name='txtDescription'
                                    />
                                    <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Image of Shop: </label>
                                    <input className="fileInput"
                                        type="file"
                                        onChange={(e) => this._handleImageChange(e)} />
                                    <p class={'text-danger'}>{this.state.formError.txtNameOfShop}</p>
                                    <div style={{}}>
                                        {$imagePreview}
                                    </div>
                                </div>
                            </div>

                        </div>







                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
            </Fragment>
        )
    }
};
