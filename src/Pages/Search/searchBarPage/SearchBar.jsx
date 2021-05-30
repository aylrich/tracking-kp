import React, {Component, Fragment} from 'react'
import './SearchBar.css'

class SearchBar extends Component{

    state = {
        dataDosen: []
    }

    searchButton = () => {

        const nip = this.nomorInduk.value;
        if(nip.length === 0){
            alert('Data Tidak Boleh Kosong')
        }else{
            this.props.history.push(`/search/${nip}`);
        }
           
    }

    render(){
        return(
            <Fragment>
            <div className="wrap-home">  
            <h1 className="text-title">Cari usulan kenaikan pangkat</h1>
                <div className="search">
                    <input type="text" className="searchTerm" name="nomorInduk" 
                    ref={(c) => this.nomorInduk = c} placeholder="Masukkan NIP anda" />
                    <button onClick={this.searchButton} className="searchButton">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            </div> 
            </Fragment>
        )
    }
}

export default SearchBar
