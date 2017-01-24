import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //事件綁定2
        this.handleChange = this.handleChange.bind(this);
    }

    //事件綁定2
    handleChange() {
        //在render(){}裡，我們在html element中加了ref attribute，並且指定了名稱，所以這邊就可以直接拿來用
        console.log(this.userName.value, this.filterRepoName.value, this.isBelow20.checked);
        this.props.userInput(this.userName.value, this.filterRepoName.value, this.isBelow20.checked);
    }

    render() {
        let searchbar;
        if (this.props.userInput) {
            //事件綁定2
            /*key point：what is `ref`?
              ref是react中的一種特別的屬性，可以加到任意的component上。
              ref可以是一個callback function,這個callback會在該component被mounted or unmounted後立刻執行
              當ref被加在HTML element上時，ref callback會拿到DOM element當傳入參數。
              所以可以用ref來存DOM element的參考
            */
            searchbar = <div>
                輸入使用者姓名:
                <input
                    type="text"
                    onChange={this.handleChange}
                    ref={(input) => {
                    this.userName = input
                }}/>
                <button onClick={this.props.btnClick}>查詢</button><br/>
                輸入專案名稱:
                <input
                    type="text"
                    onChange={this.handleChange}
                    ref={(input) => {
                    this.filterRepoName = input
                }}/><br/>
                <input
                    type="checkbox"
                    onChange={this.handleChange}
                    ref={(input) => {
                    this.isBelow20 = input
                }}/>只顯示fork次數大於20的專案
            </div>
            //console.log('event binding 2:',this.props);
        } else {
            //事件綁定1
            //console.log('事件綁定1:', this.props.value);
            searchbar = <div>
                輸入使用者姓名:<input type="text" onChange={this.props.userNameChange} value={this.props.inputName}/>
                <button onClick={this.props.btnClick} >查詢</button><br/>
                輸入專案名稱:
                <input type="text" onChange={this.props.reposChange} value={this.props.filterRepoName} /><br/>
                <input type="checkbox" onChange={this.props.checkboxChange} checked={this.props.isBelow20} />只顯示fork次數大於20的專案
            </div>
            //console.log('event binding 1:', this.props);
        }
        return (searchbar);
    }
}

export default SearchBar;