import React, {Component} from 'react'
import './SearchResult.css'

class SearchResult extends Component{

    constructor(props) {
        super(props)
        this.processStep = this.processStep.bind(this)
        this.state = {

            //class
            classProcessStep1: "process-step step-1",
            classProcessStep2: "process-step step-2",
            classProcessStep3: "process-step step-3",
            classProcessStep4: "process-step step-4",
            classProcessWrap: "process-wrap active-step1",
            divDisabled1 : true,
            divDisabled2 : true,
            divDisabled3 : true,
            divDisabled4 : true,
  
            //data
            dataKP : []
            
        }

    }

    

    componentDidMount(props){

        var nomor = encodeURIComponent(this.props.match.params.nip);

        fetch(`http://mutasi.sdm.kemdikbud.go.id/layanan/json/ws_status_proses_ds_kp.php?nip=${nomor}`)
        .then(response => response.json())
        .then(json => {


                this.setState({
                    dataKP: json
                })

                let dataSize = this.state.dataKP.length

                if (dataSize === 3){
                    this.setState({
                        divDisabled4 : false
                    })
                } else if (dataSize === 2){
                    this.setState({
                        divDisabled4 : false,
                        divDisabled3 : false
                    })
                } else if (dataSize === 1){
                    this.setState({
                        divDisabled4 : false,
                        divDisabled3 : false,
                        divDisabled2 : false
                    })
                }
                    const formCard = document.getElementById('card0');
                    formCard.style.display = "block"
                

                
        })
        .catch(err => {
            alert("Data tidak ditemukan")
            this.props.history.push(`/`);
        });


    }

    processStep = (event, size) =>{
        var stepClass = event.match(/(^|\s)step-\S+/g).toString();

        switch(stepClass){
            case " step-1": {
                this.setState({
                    classProcessWrap : "process-wrap active-step1"
                });

                if(size < 4){
                    document.getElementById('card0').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                    document.getElementById('card2').style.display = 'none';
                }else if(size < 3){
                    document.getElementById('card0').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                }else if(size < 2){
                    document.getElementById('card0').style.display = 'block';
                }else{
                    document.getElementById('card0').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                    document.getElementById('card2').style.display = 'none';
                    document.getElementById('card3').style.display = 'none';
                }
                
                
                break;
            }
                
            case " step-2": {
                this.setState({
                    classProcessWrap : "process-wrap active-step2"
                });

                if(size < 4){
                    document.getElementById('card1').style.display = 'block';
                    document.getElementById('card0').style.display = 'none';
                    document.getElementById('card2').style.display = 'none';
                } 
                else if(size < 3){
                    document.getElementById('card1').style.display = 'block';
                    document.getElementById('card0').style.display = 'none';
                }
                else{
                    document.getElementById('card1').style.display = 'block';
                    document.getElementById('card0').style.display = 'none';
                    document.getElementById('card2').style.display = 'none';
                    document.getElementById('card3').style.display = 'none';
                }

                
                break;
            }
            case " step-3": {
                this.setState({
                    classProcessWrap : "process-wrap active-step3"
                });

                if(size < 4){
                    document.getElementById('card2').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                    document.getElementById('card0').style.display = 'none';
                }else{
                    document.getElementById('card2').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                    document.getElementById('card0').style.display = 'none';
                    document.getElementById('card3').style.display = 'none';
                }

                break;
            }
            case " step-4": {
                this.setState({
                    classProcessWrap : "process-wrap active-step4"
                });
                document.getElementById('card3').style.display = 'block';
                document.getElementById('card0').style.display = 'none';
                document.getElementById('card1').style.display = 'none';
                document.getElementById('card2').style.display = 'none';
                break;
            }
            default: {
                    this.setState({
                        classProcessWrap : "process-wrap active-step1"
                    });
                    document.getElementById('card0').style.display = 'block';
                    document.getElementById('card1').style.display = 'none';
                    document.getElementById('card2').style.display = 'none';
                    document.getElementById('card3').style.display = 'none';
                }

        }


    }

    render(){   
        return(
            <div className="container-fluid">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2><strong>Progress Usulan KP Anda</strong></h2>
                        <div className="row">
                        <div className="col-md-12 mx-0">
                            <div className={this.state.classProcessWrap}>
                            <div className="process-main">
                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep1} 
                                    style={{pointerEvents : this.state.divDisabled1 ? 'block' : 'none'}}  
                                    onClick={() => this.processStep(this.state.classProcessStep1, this.state.dataKP.length)}></div>
                                    <span className="process-label">Tahap 1</span>
                                </div>
                                </div>
                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep2} 
                                    style={{pointerEvents : this.state.divDisabled2 ? 'block' : 'none'}} 
                                    onClick={() => this.processStep(this.state.classProcessStep2, this.state.dataKP.length)}></div>
                                    <span className="process-label">Tahap 2</span>
                                </div>
                                </div>

                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep3} 
                                    style={{pointerEvents : this.state.divDisabled3 ? 'block' : 'none'}} 
                                    onClick={() => this.processStep(this.state.classProcessStep3, this.state.dataKP.length)}></div>
                                    <span className="process-label">Tahap 3</span>
                                </div>
                                </div>
                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep4} 
                                    style={{pointerEvents : this.state.divDisabled4 ? 'block' : 'none'}} 
                                    onClick={() => this.processStep(this.state.classProcessStep4, this.state.dataKP.length)}></div>
                                    <span className="process-label">Tahap 4</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 mx-0">

                            {
                                this.state.dataKP.map((datakp, index) => {
                                    var refsId = "card"+index
                                    return(
                                    <div className="form-card" key={index} id={refsId} >
                                    <h2 className="fs-title">"{datakp.tindakan}"</h2> 
                                    <br/>
                                    <h3 className="fs-title">NIP</h3> 
                                    <input type="text" disabled="disabled" name="nip" value={datakp.nip_sk}/>
                                    <h3 className="fs-title">Nama</h3>  
                                    <input type="text" disabled="disabled" name="nama" value={datakp.nama_pemilik_sk}/> 
                                    <h3 className="fs-title">Satker</h3> 
                                    <input type="text" disabled="disabled" name="satker" value={datakp.unit_kerja_pemilik_sk}/> 
                                    <h3 className="fs-title">Periode</h3> 
                                    <input type="text" disabled="disabled" name="satker" value={datakp.periode_tahun}/>
                                    <h3 className="fs-title">Waktu Tindakan</h3> 
                                    <input type="text" disabled="disabled" name="timeUpdate" value={datakp.waktu_tindakan}/> 
                                    </div>
                                    )
                                })
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResult