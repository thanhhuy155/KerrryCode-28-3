import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from '../../../components/shopOwner/HomePage/Header'
class HeaderCTT extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
};

export default connect (null,null) (HeaderCTT)
