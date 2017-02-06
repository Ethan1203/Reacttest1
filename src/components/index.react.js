import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import SearchBar from './components/SearchBar';
import User from './components/User';
import Repos from './components/Repos';
import RepoRow from './components/RepoRow';
import PlayBack from './components/PlayBack';

import myState from './store/StateStore';
import githubApi from './utils/GithubApi';

export default class GithubSearch extends React.Component {
  constructor(props) {
    super(props);

    //設定state：找出state
    /*
      如何找出合適的state？inputUserName需要做為1個state嗎？
    */
    this.state = {
      inputUserName: '',
      filterRepoName: '',
      isBelow20: false,
      userInfo: {
        login: '',
        id: 0,
        avatar_url: ''
      },
      userRepos: [],
      stateIndex: 0
    }
      
    //事件綁定1
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleReposChange = this.handleReposChange.bind(this);
  }

  //事件綁定1：可以每個state單獨綁事件
  handleUserNameChange(e) {
    //console.log(this.state);
    this.setState({
      inputUserName: e.target.value,
      stateIndex: this.state.stateIndex + 1
    });
  }

  handleReposChange(e) {
    //console.log(e.target.value);
    this.setState({
      filterRepoName: e.target.value,
      stateIndex: this.state.stateIndex + 1
    });
  }

  handleCheckBoxChange(e) {
    //console.log(e.target.checked);
    this.setState({
      isBelow20: e.target.checked,
      stateIndex: this.state.stateIndex + 1
    });
  }
  //end：事件綁定1

  handleBtnClick(e) {
    githubApi.getGithubAll(this.state.inputUserName).then(
      (result) => {
        let [user, repos] = result;
        //console.log(user.data, repos.data);
        this.setState({
          userInfo: {
            login: user.data.login,
            id: user.data.id,
            avatar_url: user.data.avatar_url
          },
          userRepos: repos.data,
          stateIndex: this.state.stateIndex + 1
        });
      }
    );
  }

  
 

  render() {
    myState.store.set(this.state.stateIndex, this.state);
    return (
      <div>
        <PlayBack stateIndex={this.state.stateIndex} handleBackBtn={this.handleBackBtn.bind(this)} />
        <fieldset>
          <legend>事件綁定1</legend>
          <SearchBar handleBtnClick={this.handleBtnClick}
            handleUserNameChange={this.handleUserNameChange}
            handleCheckBoxChange={this.handleCheckBoxChange}
            handleReposChange={this.handleReposChange}
            inputUserName={this.state.inputUserName}
            filterRepoName={this.state.filterRepoName}
            isBelow20={this.state.isBelow20} />
        </fieldset>

        <br />

        <User userInfo={this.state.userInfo} />
        <br />
        <Repos userRepos={this.state.userRepos}
          filterRepoName={this.state.filterRepoName}
          isBelow20={this.state.isBelow20} />
      </div>
    )
  }
}

module.exports = GithubSearch;