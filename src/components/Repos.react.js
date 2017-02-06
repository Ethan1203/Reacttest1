import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RepoRow from './RepoRow';


export default class Repos extends Component {

    render() {
        let repos = this.props.userRepos;
        /*當iterate產生多個相同的元件時，如果沒有加上key屬性，那麼react會針對所有相同的元件做改變，而不是針對實際上改變的那個
          所以這情況下要加上key屬性，並給唯一值  
        */
        let allRows = [];
        //console.log(this.props.filterRepoName.length);
        if (this.props.isBelow20) {
            allRows = repos.filter((curEle) => {
                return curEle.forks_count >= 20 && curEle.name.indexOf(this.props.filterRepoName) >= 0;
            }).map((curEle, idx) => {
                return <RepoRow repoInfo={{
                    repoName: curEle.name,
                    forksCount: curEle.forks_count
                }} key={curEle.id} />
            });
        } else {
            allRows = repos.filter((curEle) => {
                return curEle.name.indexOf(this.props.filterRepoName) >= 0;
            }).map((curEle, idx) => {
                return <RepoRow repoInfo={{
                    repoName: curEle.name,
                    forksCount: curEle.forks_count
                }} key={curEle.id} />
            });
        }
       
        return (
            <fieldset>                   
                <legend>專案資訊</legend>
                <table style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th>Project_Name</th>
                            <th>Fork_Counts</th>
                        </tr>
                    </thead>
                    <tbody>{allRows}</tbody>
                </table>
            </fieldset>
        )
    }
}

