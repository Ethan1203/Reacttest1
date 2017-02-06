import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RepoRow extends Component{
    constructor(props){
        super(props);

        this.rowClick = this.rowClick.bind(this);
    }

    rowClick(e){
        console.log(e.target);
    }

    render(){
        let repoInfo = this.props.repoInfo;
        
        let fontStyle = {
            color: 'red'
        }
        // if(repoInfo.forksCount<=20){
        //     fontStyle.color = 'blue'
        // } 
        let repoName = repoInfo.forksCount<=20 ? <span style={fontStyle}>{repoInfo.repoName}</span> : repoInfo.repoName; 

        return (
            <tr onClick={this.rowClick} >
                <td>{repoName}</td>
                <td>{repoInfo.forksCount}</td>
            </tr>            
        )
    }
}

