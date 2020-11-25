import React from 'react';

class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editStandardHours: false
        }

        this.editStandardHours = this.editStandardHours.bind(this);
    }

    editStandardHours() {
        this.setState({
            editStandardHours: !this.state.editStandardHours
        });

        document.getElementById('standard-hours').readOnly = this.state.editStandardHours;
    }

    componentDidMount() {
        
    }

    render() {
        let multiplierSection = this.props.editMultiplier ? "" : "hidden";
        return (
            <section className="lxp-dashboard jumbotron container">
                <div className="card">
                    <div className="card-body">
                        <div className="alert alert-info row">
                            <label className="display-9 col-5">Starting hours for a standard LXP Project: <b></b></label>
                            <input id="standard-hours" className="form-control col-2" type="text" value={this.props.standardHours} onChange={this.props.onChange} readOnly /> 
                            <div className="col-5">
                                <button className={this.state.editStandardHours ? "btn btn-info " + multiplierSection : "btn btn-light " + multiplierSection} 
                                    onClick={this.editStandardHours}>
                                        edit
                                </button>
                            </div>
                        </div>
                        
                        <div className="row">
                            <label className="col-5">Ratio of stardard base hours to actual (aim for 1)</label>
                            <input className="form-control col-2" type="text" value={this.props.SBHratio.toFixed(3)} readOnly="readonly" />
                        </div>
                        <h3>Essential hours</h3>
                        <div className="row">
                            <label className="col-3">planned:</label>
                            <input className="form-control col-3" type="text" value={this.props.essentialPlannedHours} readOnly="readonly" />
                        </div>
                        <h3>Additional hours</h3>
                        <div className="row">
                            <label className="col-3">Actual:</label>
                            <input className="form-control col-3" type="text" value={parseInt(this.props.additionalPlannedHours)} readOnly="readonly" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;