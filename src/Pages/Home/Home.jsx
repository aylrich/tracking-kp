import React,{Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './Home.css'

import SearchBar from '../Search/searchBarPage/SearchBar'
import SearchResult from '../Search/searchResultPage/SearchResult'

class Home extends Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <div className="header">
                        <div className="container">
                        <div className="logo-box">
                            <img src="https://www.kemdikbud.go.id/main/addons/shared_addons/themes/november_theme/img/kemdikbud_64x64.png" alt=""/>
                        </div>
                        <div className="logo-title">
                            <h5>Kementerian Pendidikan, Kebudayaan,</h5>
                            <h5>Riset, dan Teknologi</h5>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/" >home</Link></li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <Route path="/" exact component={SearchBar} />
                    <Route path="/search/:nip" component={SearchResult} />
                </Fragment>
            </Router>
            
        );
    }
}

export default Home