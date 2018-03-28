import React, { Component, Fragment } from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div class="profile" style ={{backgroundColor:'#E0E0E0'}}>
                    <div class="profile-sidebar">
                        <div class="profile-usermenu">
                            <ul class="nav">
                                <li class="active">
                                    <Link to='/s/StoreManagementPage'>
                                        <i class="glyphicon glyphicon-home"></i>
                                        Store Management </Link>
                                </li>
                                <li>
                                    <Link to={`/s/BudgetManagementPage`}><span class="glyphicon glyphicon-usd" aria-hidden="true"></span>&nbsp;<strong>Budget Management</strong></Link>
                                </li>
                                <li><Link to= {`/s/StatisticsPage`}>
                                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;<strong>Statistics</strong></Link>
                                </li>

                                <li>
                                <Link to = '/s'><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;<strong>Message</strong></Link></li>
                            
                                <li><Link to = '/s/CreateStorePage'>
                                <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                                &nbsp;<strong>Create Store</strong></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};


