import DemoDispachrt from '/src/components/DemoDispacher';

export const DemoAction = {
	User(){
		DemoDispatcher.dispatch({
			actionType:"User"
		});
	},
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
	},
	myState(){
		DemoDispatcher.dispatch({
			actionType: "StateStore"
		});
	}
};

