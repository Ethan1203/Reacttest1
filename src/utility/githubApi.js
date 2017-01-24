import axios from 'axios';

class GithubApi{
    //1{}
    getGithubUser(userName){
    let apiurl = 'https://api.github.com/users/' + userName ;
    console.log('getGithubUser apiurl',apiurl);
    return axios.get(apiurl);
    }
 
    //2{}
    getGithubRepos(userName){
    let apiurl = 'https://api.github.com/users/' + userName +'/repos';
    console.log('getGithubRepos apiurl',apiurl);
    return axios.get(apiurl);
    }

    //3{}
    getGithubAll(userName){
    return axios.all([this.getGithubUser(userName)],[this.getGithubRepos(userName)])
    }
}

const githubApi = new GithubApi();
export default githubApi;