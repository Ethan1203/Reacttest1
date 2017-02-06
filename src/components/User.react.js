import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class User extends Component{

    render(){
        let userInfo = this.props.userInfo;
        let imgStyle = {
            height: 120,
            width: 120
        }
        return (
            <fieldset>
                <legend>基本資料</legend>                
                <img src={userInfo.avatar_url} style={imgStyle}  />
                <br/>
                User Name:<span>{userInfo.login}</span>
                <br/>
                Id:<span>{userInfo.id}</span>
            </fieldset>

        )
    }
}