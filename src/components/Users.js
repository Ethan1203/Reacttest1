import React from 'react';
import ReactDOM from 'react-dom';

export default class Users extends React.Component{
   
    render(){
        let userInfo = this.props.userInfo;
        let imgStyle = {
            height : 120,
            width  : 120
        }
    
    return(
        <fieldset>
        <h1>基本資料</h1>
    <img src={userInfo.avatar_url} style={imgStyle} />
        <br/>
        Uesr Name: <p>{userInfo.login}</p>
        <br/>
        ID:<p>{userInfo.id}</p>
        </fieldset>



    )
 }
}