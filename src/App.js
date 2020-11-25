import Dashboard from './components/dashboard.js';
import Controls from './components/controls.js';
import EssentialControls from './components/esssentialControls';
import './App.css';
import React from 'react';
import ExportToExcel from './components/exportToExcel.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sessionRecord: [],
      standardHours: 120.00,
      index: 0,
      editMultiplier: false,
      SBHratio: 0,
      overestimatedHours: 0,
      essentialPlannedHours: 0,
      additionalPlannedHours: 0,
      questions: [
        { value: 0, multiplier: 1.5 },
        { value: 0, multiplier: 1.3 },
        { value: 0, multiplier: 1.3 },
        { value: 0, multiplier: 0.5 },
        { value: 0, multiplier: 0.5 },
        { value: 0, multiplier: 0.3 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1.3 },
        { value: 0, multiplier: 0.5 },
        { value: 0, multiplier: 1.1 },
        { value: 0, multiplier: 1.5 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1},
        { value: 0, multiplier: 0.4 },
        { value: 0, multiplier: 0.5 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 0.4 }
      ],
      EssentialHours: [65, 20, 30, 10, 50, 20]
    }

    this.onSlide = this.onSlide.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
    this.handleStandardHoursChange = this.handleStandardHoursChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEssentialChange = this.handleEssentialChange.bind(this);

    this.updateEssentialHours = this.updateEssentialHours.bind(this);
    this.updateStandardBaseHours = this.updateStandardBaseHours.bind(this);
    this.sessionRecord = this.sessionRecord.bind(this);
  }

  componentDidMount() {
    this.updateEssentialHours();
  }

  updateStandardBaseHours() {
    this.setState({
      SBHratio: (this.state.essentialPlannedHours + this.state.additionalPlannedHours ) / this.state.standardHours
    }, this.sessionRecord());
  }

  updateEssentialHours() {
    let totalEssentialHours = 0;
    this.state.EssentialHours.forEach((item) => {
      totalEssentialHours = totalEssentialHours + item;
    })
    this.setState({ essentialPlannedHours: totalEssentialHours }, this.updateStandardBaseHours)
    
  }

  handleStandardHoursChange(event) {
    this.setState({
      standardHours : event.target.value
    }, this.updateStandardBaseHours);
    
  }

  handleEditChange() {
    this.setState({
      editMultiplier: !this.state.editMultiplier
    });
  }

  onSlide(event) {

    let newArray = this.state.questions
    newArray[this.state.index].value = event.target.value;
    this.setState({ questions: newArray }); // update questions

    let additionalPlannedHours2 = 0;
    this.state.questions.forEach((question) => {

      additionalPlannedHours2 = parseInt(additionalPlannedHours2) + parseInt(question.value) * parseInt(question.multiplier);

    });
    this.setState({ additionalPlannedHours: additionalPlannedHours2 }, this.updateStandardBaseHours);//update additional planned hours
    
  }

  handlePrevious() {
    this.setState({ index: this.state.index - 1 < 0 ? this.state.questions.length - 1 : this.state.index - 1 });
  }
  handleNext() {
    this.setState({ index: this.state.index + 1 > this.state.questions.length - 1 ? 0 : this.state.index + 1 });
  }

  handleMultiplierChange(event) {
    let newArray = this.state.questions
    newArray[this.state.index].multiplier = event.target.value;
    this.setState({ questions: newArray }); // update questions

    let additionalPlannedHours2 = 0;
    this.state.questions.forEach((question) => {

      additionalPlannedHours2 = additionalPlannedHours2 + question.value * question.multiplier;

    });
    this.setState({ additionalPlannedHours: additionalPlannedHours2 }, this.updateStandardBaseHours);//update additional planned hours
  }

  handleEssentialChange(index, event) {
    let newArray = this.state.EssentialHours;
    newArray[index] = event.target.value;
    let totalHours = 0;
    newArray.forEach((item)=> {
      totalHours += parseInt(item);
    });
    this.setState({EssentialHours: newArray, essentialPlannedHours : totalHours}, this.updateStandardBaseHours);
  }

  sessionRecord() {
    let data = [];

    let state = this.state;

    data.push({

      standardLXPProjectHours: state.standardHours,
      StandardBaseHoursRatio: state.SBHratio,
      essentialPlannedHours: state.essentialPlannedHours,
      additionalPlannedHours: state.additionalPlannedHours,
      question1: state.questions[0].value,
      question2: state.questions[1].value,
      question3: state.questions[2].value,
      question4: state.questions[3].value,
      question5: state.questions[4].value,
      question6: state.questions[5].value,
      question7: state.questions[6].value,
      question8: state.questions[7].value,
      question9: state.questions[8].value,
      question10: state.questions[9].value,
      question11: state.questions[10].value,
      question12: state.questions[11].value,
      question13: state.questions[12].value,
      question14: state.questions[13].value,
      question15: state.questions[14].value,
      question16: state.questions[15].value,
      question17: state.questions[16].value,
      essential1: state.EssentialHours[0],
      essential2: state.EssentialHours[1],
      essential3: state.EssentialHours[2],
      essential4: state.EssentialHours[3],
      essential5: state.EssentialHours[4],
      essential6: state.EssentialHours[5]

    });

    

    this.setState({sessionRecord: data});
  }

  render() {
    //let multiplierSection = this.state.editMultiplier ? "row lxp-multipler-btn col-xl-4" : "row lxp-multipler-btn col-xl-4 hidden";
    let index = this.state.index;
    let questions = this.state.questions;

    return (
      <div className="app">

        <header>
          <h1>CURIO</h1>
        </header>

        <h2>LXP - hours calculator</h2>
        <div class="row">

          <Dashboard essentialPlannedHours={this.state.essentialPlannedHours} 
          SBHratio={this.state.SBHratio}
          additionalPlannedHours={this.state.additionalPlannedHours}
          standardHours = {this.state.standardHours}
          editMultiplier={this.state.editMultiplier}
          onChange={this.handleStandardHoursChange} />

          <section className="lxp-controls lx-controls-additional container ">

            <Controls
              index={index}
              value={questions[index].value}
              multiplier={questions[index].multiplier}
              editMultiplier={this.state.editMultiplier}
              multiplierChange={this.handleMultiplierChange}
              onSlide={this.onSlide} />

              <div className="row">
                <div className="col-2"><button className="btn btn-primary" onClick={this.handlePrevious}>Previous</button></div>
                <div className="col-8"><p className="lxp-page-number">{this.state.index} of {this.state.questions.length}</p></div>
                <div className="col-2"><button className="btn btn-primary" onClick={this.handleNext}>Next</button></div>
              </div>

          </section>

          <section className="lxp-controls container">
            <h3>Essential hours</h3>
            {this.state.EssentialHours.map((item, i) => {
              return <EssentialControls index={i} value={this.state.EssentialHours[i]} onChange={this.handleEssentialChange}/>
            })}
            
          </section>

        </div>

        <footer className="container">
          <div className="card">
            <div className="card-body">
              <h3 className="display-12" >Edit:</h3>
              <label className="switch">
                <input type="checkbox" onChange={this.handleEditChange} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="card-body">
              <ExportToExcel csvData={this.state.sessionRecord} fileName={"sessionRecord"}/>
            </div>
          </div>
          <p>We acknowledge and pay respect to the traditional custodians of the land in which we live, learn, and work.</p>
          <p>	&#169; 2020 Curio Group PTY LTD</p>
        </footer>
      </div>
    );
  }
}

export default App;
