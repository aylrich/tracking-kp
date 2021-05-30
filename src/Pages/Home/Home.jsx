import React,{Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './Home.css'
import SearchBar from '../Search/searchBarPage/SearchBar'
import SearchResult from '../Search/searchResultPage/SearchResult'

class Home extends Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <Route path="/" exact component={SearchBar} />
                    <Route path="/search/:nip" component={SearchResult} />
                </Fragment>
            </Router>
            
        );
    }
}

export default Home