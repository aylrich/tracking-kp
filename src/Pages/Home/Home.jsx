import React,{Component, Fragment} from 'react'
import './Home.css'
import SearchBar from '../Search/searchBarPage/SearchBar'

class Home extends Component {
    render(){
        return(
            <Fragment>
                <SearchBar/>
            </Fragment>
        );
    }
}

export default Home