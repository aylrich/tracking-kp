import React, {Component} from 'react'
import './SearchResult.css'

class SearchResult extends Component{

    state = {
        classProcessStep1: "process-step step-1",
        classProcessStep2: "process-step step-2",
        classProcessStep3: "process-step step-3",
        classProcessStep4: "process-step step-4",
        classProcessWrap: "process-wrap active-step1",
        dataKP : []
    }

    componentDidMount(){

        var nomor = encodeURIComponent(this.props.match.params.nip);

        fetch(`http://mutasi.sdm.kemdikbud.go.id/layanan/json/ws_status_proses_ds_kp.php?nip=${nomor}`)
        .then(response => response.json())
        .then(json => {
                this.setState({
                    dataKP: json
                })
                console.log("dataKP",this.state.dataKP)
        });
        
    }

    processStep = (event) => {
        var stepClass = event.match(/(^|\s)step-\S+/g).toString();

        switch(stepClass){
            case " step-1": {
                this.setState({
                    classProcessWrap : "process-wrap active-step1"
                });
                break;
            }
                
            case " step-2": {
                this.setState({
                    classProcessWrap : "process-wrap active-step2"
                });
                break;
            }
            case " step-3": {
                this.setState({
                    classProcessWrap : "process-wrap active-step3"
                });
                break;
            }
            case " step-4": {
                this.setState({
                    classProcessWrap : "process-wrap active-step4"
                });
                break;
            }
            default: {
                    this.setState({
                        classProcessWrap : "process-wrap active-step1"
                    });
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
                                    <div className={this.state.classProcessStep1} onClick={() => this.processStep(this.state.classProcessStep1)}></div>
                                    <span className="process-label">Tahap 1</span>
                                </div>
                                </div>
                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep2} onClick={() => this.processStep(this.state.classProcessStep2)}></div>
                                    <span className="process-label">Tahap 2</span>
                                </div>
                                </div>

                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep3} onClick={() => this.processStep(this.state.classProcessStep3)}></div>
                                    <span className="process-label">Tahap 3</span>
                                </div>
                                </div>
                                <div className="col-3">
                                <div className="process-step-cont">
                                    <div className={this.state.classProcessStep4} onClick={() => this.processStep(this.state.classProcessStep4)}></div>
                                    <span className="process-label">Tahap 4</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 mx-0">
                            <div className="form-card active-form-card" id="card1">
                            <h2 className="fs-title">Personal Information1</h2> 
                            <input type="text" disabled="disabled" name="status" placeholder="Status" /> 
                            <input type="text" disabled="disabled" name="fname" placeholder="NIP" /> 
                            <input type="text" disabled="disabled" name="lname" placeholder="Nama" /> 
                            <input type="text" disabled="disabled" name="phno" placeholder="Contact No." /> 
                            <input type="text" disabled="disabled" name="phno_2" placeholder="Alternate Contact No." />
                            </div>
                            <div className="form-card" id="card2">
                            <h2 className="fs-title">Personal Information2</h2> 
                            <input type="text" disabled="disabled" name="status" placeholder="Status" /> 
                            <input type="text" disabled="disabled" name="fname" placeholder="NIP" /> 
                            <input type="text" disabled="disabled" name="lname" placeholder="Nama" /> 
                            <input type="text" disabled="disabled" name="phno" placeholder="Contact No." /> 
                            <input type="text" disabled="disabled" name="phno_2" placeholder="Alternate Contact No." />
                            </div>
                            <div className="form-card" id="card3">
                            <h2 className="fs-title">Personal Information3</h2> 
                            <input type="text" disabled="disabled" name="status" placeholder="Status" /> 
                            <input type="text" disabled="disabled" name="fname" placeholder="NIP" /> 
                            <input type="text" disabled="disabled" name="lname" placeholder="Nama" /> 
                            <input type="text" disabled="disabled" name="phno" placeholder="Contact No." /> 
                            <input type="text" disabled="disabled" name="phno_2" placeholder="Alternate Contact No." />
                            </div>
                            <div className="form-card" id="card4">
                            <h2 className="fs-title">Personal Information4</h2> 
                            <input type="text" disabled="disabled" name="status" placeholder="Status" /> 
                            <input type="text" disabled="disabled" name="fname" placeholder="NIP" /> 
                            <input type="text" disabled="disabled" name="lname" placeholder="Nama" /> 
                            <input type="text" disabled="disabled" name="phno" placeholder="Contact No." /> 
                            <input type="text" disabled="disabled" name="phno_2" placeholder="Alternate Contact No." />
                            </div>
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