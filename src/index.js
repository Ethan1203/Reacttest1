import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import Users from './components/Users';
import RepoRow from './components/RepoRow';
import Repos from './components/Repos';

import stateStore from './tempstore/stateStore';
import githubApi from './utility/GithubApi';

class GithubSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            filterReposName: '',
            isBelow20: false,
            userInfo: {
                login: '',
                id: 0,
                avatar_url: ''
            },
            userRepos: [],
            stateIndex: 0
        }
        this.btnClick = this
            .btnClick
            .bind(this);
        //Event 1
        this.userNameChange = this
            .userNameChange
            .bind(this);
        this.checkboxChange = this
            .checkboxChange
            .bind(this);
        this.reposChange = this
            .reposChange
            .bind(this);

        //Event 2
        this.userInput = this
            .userInput
            .bind(this);
    }

    //Event 1
    userNameChange(e) {
        console.log(e.target.value);
        this.setState({
            inputName: e.target.value,
            stateIndex: this.state.stateIndex + 1
        });
    }

    checkboxChange(e) {
        console.log(e.target.checked);
        this.setState({
            isBelow20: e.target.checked,
            stateIndex: this.state.stateIndex + 1
        });
    }

    reposChange(e) {
        console.log(e.target.value);
        this.setState({
            filterReposName: e.target.value,
            stateIndex: this.state.stateIndex + 1
        });
    }
    //End Event 1
    btnClick(e) {
        githubApi
            .getGithubAll(this.state.inputName)
            .then((result) => {
                let [user,
                    repos] = result;
    console.log('ttt',user.data,result, repos);
                this.setState({
                    userInfo: {
                        login: user.data.login,
                        id: user.data.id,
                        avatar_url: user.data.avatar_url
                    },
                    userRepos: repos.data,
                    stateIndex: this.state.stateIndex + 1
                });
                
            });
    }

    //Event 2
    userInput(userName, filterRepoName, isBelow20) {
        this.setState({inputName: userName, filterRepoName: filterRepoName, isBelow20: isBelow20});
        console.log('userName:', userName);
        console.log('filterRepoName:', filterRepoName);
        console.log('isBelow20:', isBelow20);
    }
    //End Event 2

    render() {
        //myState.store.set(this.state.stateIndex, this.state);
        return (
            <div>
                <fieldset>
                    <legend>Event 1</legend>
                    <SearchBar
                        btnClick={this.btnClick}
                        userNameChange={this.userNameChange}
                        checkboxChange={this.checkboxChange}
                        reposChange={this.reposChange}
                        inputName={this.state.inputName}
                        filterRepoName={this.state.filterReposName}
                        isBelow20={this.state.isBelow20}/>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Event 2</legend>
                    <SearchBar userInput={this.userInput} btnClick={this.btnClick}/>
                </fieldset>
                <br/>
                <Users userInfo={this.state.userInfo}/>
                <br/>
                <Repos
                    userRepos={this.state.userRepos}
                    filterRepoName
                    ={this.state.filterReposName}
                    isBelow20={this.state.isBelow20}/>
            </div>

        )
    }
}

ReactDOM.render(
    <GithubSearch/>, document.getElementById('app'));