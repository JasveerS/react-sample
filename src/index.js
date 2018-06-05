import React from 'react';
import ReactDOM from 'react-dom';

//componets
import Home from './components/home'
import Header from './components/header'

import JSON from './db.json'

class App extends React.Component{
    state={
        news:JSON,
        allNews:[]
    }

    keyWords=(event)=>{
        const target1=event.target.value.toLowerCase();
        const allNews=this.state.news.filter((item)=>
             item.title.toLowerCase().indexOf(target1)>-1
        )
        this.setState({
            allNews
        })
    }

    render(){       
        return(
            <div style={{background:'lightgray'}}>
                <Header/>
                <Home keyWord={this.keyWords} news={this.state.allNews.length===0 ? this.state.news : this.state.allNews}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))