import React, {Component, Fragment} from 'react'
import './SearchBar.css'

class SearchBar extends Component{

    state = {
        dataDosen: []
    }

    searchButton = () => {
        const nip = encodeURIComponent(this.nomorInduk.value)

        if(nip == null){
            alert('Data Tidak Boleh Kosong')
        }

        var URL = "http://mutasi.sdm.kemdikbud.go.id/layanan/json/ws_status_proses_ds_kp.php?nip="+nip

        fetch(URL)
        .then(response => response.json())
        .then(json => {
                this.setState({
                    dataDosen: json
                })
                console.log(this.state.dataDosen)
        })
            
    }

    render(){
        return(
            <Fragment>
            <div className="wrap">  
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
