import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import callAPI from '../../utils/apiCaller'
class RootPage extends Component {
    componentWillMount ()
    {
        callAPI ('TestResult','GET','').then (reg=>alert (JSON.stringify(reg)));
    }
    render() {
        const { dataUser } = this.props
        let myRedirect = null;
        if (dataUser ===null)
        {
            myRedirect= <Redirect to = {{pathname:'/w'}}/>
        }
        else if (dataUser.idAccountgroup ===1)
        {
            myRedirect= <Redirect to = {{pathname:'/a'}}/>
        } 
        else
        {
            myRedirect= <Redirect to = {{pathname:'/s'}}/>
        }
        return (
            <div>
                {myRedirect}
            </div>
        )
    }
};

const mapStyleToProps = (state) => {
    return {
        dataUser: state.handleLogin
    }
}
export default connect(mapStyleToProps, null)(RootPage)
