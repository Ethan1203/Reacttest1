import React, { Component } from 'react';
import DemoStore from '/src/tempstore/DemoStore';
import ReactDOM from 'react-dom';

import axios from 'axios';
import SearchBar from '/src/components/SearchBar.react';
import User from '/src/components/User.react';
import Repos from '/src/components/Repos.react';
import RepoRow from '/src/components/RepoRow.react';
//import PlayBack from './components/PlayBack';

import myState from '/src/tempstore/stateStore.react';
import githubApi from '/src/Utility/GithubApi';

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
  	// If value in Store change, this function will be triggered
  	// so we need to reset the state
	_onChange(){
		this.setState({
			value: DemoStore.getValue()
		});
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

