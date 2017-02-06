import DemoDispachrt from '../components/DemoDispacher';

let DemoAction = {
	RepoRow(){
		DemoDispatcher.dispatch({
			actionType: "RepoRow"
		});
	},

	Repos(){
		DemoDispatcher.dispatch({
			actionType: "Repos"
		});
	},
	GithubSearch(){
		DemoDispatcher.dispatch({
			actionType: "GithubSearch"
		});
	},
	Searchbar(){
		DemoDispatcher.dispatch({
			actionType: "GithubSearch"
		});
	}
};

module.exports = DemoAction;