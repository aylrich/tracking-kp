import React, {Component, Fragment} from 'react'
import './SearchBar.css'
import Logo from '../../../components/images/logo-dikbud.png';

class SearchBar extends Component{

    state = {
        dataDosen: [],
        inputNip : ''
    }

    inputChange = (e) => {
        const inputNip = (e.target.validity.valid) ? e.target.value : this.state.inputNip;
        this.setState({inputNip});
        
    }

    searchButton = () => {
        const nip = this.state.inputNip;
        if(nip.length === 0){
            alert('Data Tidak Boleh Kosong')
        }else if(nip.length < 18){
            alert('Silahkan masukkan format nip yang benar')
            this.setState({
                inputNip : ''
            })
        }else{
            this.props.history.push(`/search/${nip}`);
        }
           
    }

    render(){
        return(
            <Fragment>
             <div className="wrap-logo">
                <img className="img-logo" src={Logo} alt="" />     
             </div>   
            <div className="wrap-home">  
            <h1 className="text-title">Cari usulan kenaikan pangkat</h1>
                <div className="search">
                    <input type="text" pattern="[0-9]*" className="searchTerm" name="nomorInduk" 
                    onInput={this.inputChange.bind(this)} onKeyPress={this.searchButton} value={this.state.inputNip}
                    placeholder="Masukkan NIP anda" />
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
