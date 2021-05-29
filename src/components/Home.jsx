import React,{Component, Fragment} from 'react'
import './Home.css'
import LogoDikbud from './images/logo-dikbud.png'

class Home extends Component {
    render(){
        return(
            <Fragment>
            <div className="wrap">  
            <h1 className="text-title">Cari usulan kenaikan pangkat</h1>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Masukkan NIP anda" />
                    <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>         
            </Fragment>
        );
    }
}

export default Home