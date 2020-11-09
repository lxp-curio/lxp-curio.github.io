import Dashboard from './components/dashboard.js';
import Controls from './components/controls.js';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editMultiplier: false,
      SBHratio: '',
      overestimatedHours: '',
      essentialPlannedHours: '0',
      questions: [
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 },
        { value: 0, multiplier: 1 }
      ]
    }

    this.onSlide = this.onSlide.bind(this);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
    this.handleEditChange =  this.handleEditChange.bind(this);
  }

  handleEditChange() {
    this.setState({
      editMultiplier: !this.state.editMultiplier
    });
  }

  onSlide(e) {
    let q1 = parseInt(document.getElementById('slider1').value);
    let q2 = parseInt(document.getElementById('slider2').value);
    let q3 = parseInt(document.getElementById('slider3').value);
    let q4 = parseInt(document.getElementById('slider4').value);
    let q5 = parseInt(document.getElementById('slider5').value);
    let q6 = parseInt(document.getElementById('slider6').value);
    let q7 = parseInt(document.getElementById('slider7').value);
    let q8 = parseInt(document.getElementById('slider8').value);
    let q9 = parseInt(document.getElementById('slider9').value);
    let q10 = parseInt(document.getElementById('slider10').value);
    let q11 = parseInt(document.getElementById('slider11').value);
    let q12 = parseInt(document.getElementById('slider12').value);
    let q13 = parseInt(document.getElementById('slider13').value);
    let q14 = parseInt(document.getElementById('slider14').value);
    let q15 = parseInt(document.getElementById('slider15').value);
    let q16 = parseInt(document.getElementById('slider16').value);
    let q17 = parseInt(document.getElementById('slider17').value);

    this.setState({
      essentialPlannedHours: q1 * this.state.questions[0]["multiplier"]
        + q2 * this.state.questions[1]["multiplier"]
        + q3 * this.state.questions[2]["multiplier"]
        + q4 * this.state.questions[3]["multiplier"]
        + q5 * this.state.questions[4]["multiplier"]
        + q6 * this.state.questions[5]["multiplier"]
        + q7 * this.state.questions[6]["multiplier"]
        + q8 * this.state.questions[7]["multiplier"]
        + q9 * this.state.questions[8]["multiplier"]
        + q10 * this.state.questions[9]["multiplier"]
        + q11 * this.state.questions[10]["multiplier"]
        + q12 * this.state.questions[11]["multiplier"]
        + q13 * this.state.questions[12]["multiplier"]
        + q14 * this.state.questions[13]["multiplier"]
        + q15 * this.state.questions[14]["multiplier"]
        + q16 * this.state.questions[15]["multiplier"]
        + q17 * this.state.questions[16]["multiplier"],
      questions: [
        { value: q1, multiplier: this.state.questions[0]["multiplier"] },
        { value: q2, multiplier: this.state.questions[1]["multiplier"] },
        { value: q3, multiplier: this.state.questions[2]["multiplier"] },
        { value: q4, multiplier: this.state.questions[3]["multiplier"] },
        { value: q5, multiplier: this.state.questions[4]["multiplier"] },
        { value: q6, multiplier: this.state.questions[5]["multiplier"] },
        { value: q7, multiplier: this.state.questions[6]["multiplier"] },
        { value: q8, multiplier: this.state.questions[7]["multiplier"] },
        { value: q9, multiplier: this.state.questions[8]["multiplier"] },
        { value: q10, multiplier: this.state.questions[9]["multiplier"] },
        { value: q11, multiplier: this.state.questions[10]["multiplier"] },
        { value: q12, multiplier: this.state.questions[11]["multiplier"] },
        { value: q13, multiplier: this.state.questions[12]["multiplier"] },
        { value: q14, multiplier: this.state.questions[13]["multiplier"] },
        { value: q15, multiplier: this.state.questions[14]["multiplier"] },
        { value: q16, multiplier: this.state.questions[15]["multiplier"] },
        { value: q17, multiplier: this.state.questions[16]["multiplier"] }
      ]
    });
  }

  handleMultiplierChange() {
    let mul1 = document.getElementById("mul1").value;
    let mul2 = document.getElementById("mul2").value;
    let mul3 = document.getElementById("mul3").value;
    let mul4 = document.getElementById("mul4").value;
    let mul5 = document.getElementById("mul5").value;
    let mul6 = document.getElementById("mul6").value;
    let mul7 = document.getElementById("mul7").value;
    let mul8 = document.getElementById("mul8").value;
    let mul9 = document.getElementById("mul9").value;
    let mul10 = document.getElementById("mul10").value;
    let mul11 = document.getElementById("mul11").value;
    let mul12 = document.getElementById("mul12").value;
    let mul13 = document.getElementById("mul13").value;
    let mul14 = document.getElementById("mul14").value;
    let mul15 = document.getElementById("mul15").value;
    let mul16 = document.getElementById("mul16").value;
    let mul17 = document.getElementById("mul17").value;

    this.setState({
      questions: [
        { value: this.state.questions[0]["value"], multiplier: mul1 },
        { value: this.state.questions[1]["value"], multiplier: mul2 },
        { value: this.state.questions[2]["value"], multiplier: mul3 },
        { value: this.state.questions[3]["value"], multiplier: mul4 },
        { value: this.state.questions[4]["value"], multiplier: mul5 },
        { value: this.state.questions[5]["value"], multiplier: mul6 },
        { value: this.state.questions[6]["value"], multiplier: mul7 },
        { value: this.state.questions[7]["value"], multiplier: mul8 },
        { value: this.state.questions[8]["value"], multiplier: mul9 },
        { value: this.state.questions[9]["value"], multiplier: mul10 },
        { value: this.state.questions[10]["value"], multiplier: mul11 },
        { value: this.state.questions[11]["value"], multiplier: mul12 },
        { value: this.state.questions[12]["value"], multiplier: mul13 },
        { value: this.state.questions[13]["value"], multiplier: mul14 },
        { value: this.state.questions[14]["value"], multiplier: mul15 },
        { value: this.state.questions[15]["value"], multiplier: mul16 },
        { value: this.state.questions[16]["value"], multiplier: mul17 }
      ]
    });
  }

  render() {
    let multiplierSection = this.state.editMultiplier ? "row lxp-multipler-btn col-xl-4" : "row lxp-multipler-btn col-xl-4 hidden";

    return (
      <div className="app">

        <header>
          <h1>CURIO</h1>
        </header>

        <h2>LXP - hours calculator</h2>
        <div class="row">

          <section className="lxp-dashboard jumbotron container">


            <div className="card">
              <div className="card-body">
                <p className="display-9 alert alert-info">Starting hours for a standard LXP Project:<b>120.00</b></p>
                <div className="row">
                  <label className="col-sm-3">Ratio of stardard base hours to actual (aim for 1)</label>
                  <input className="form-control col-sm-3" type="text" readOnly="readonly" />
                </div>

                <h3>Essential hours</h3>
                <div className="row">
                  <label className="col-sm-3">planned:</label>
                  <input className="form-control col-sm-3" type="text" placeholder="-120.00" value={this.state.essentialPlannedHours} readOnly="readonly" />
                </div>
              </div>
            </div>
          </section>

          <section className="lxp-controls container">
            <h3 className="display-7">Needs analysis</h3>
            <div className="row lxp-question">
              <label className="col-xl-5">Degree of Live Delivery to Students</label>
              <input id="slider1" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[0]["value"] * this.state.questions[0]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul1" type="text" className="form-control col-xl-3" value={this.state.questions[0]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Is Assessment required to be built?</label>
              <input id="slider2" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[1]["value"] * this.state.questions[1]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul2" type="text" className="form-control col-xl-3" value={this.state.questions[1]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the information load</label>
              <input id="slider3" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[2]["value"] * this.state.questions[2]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul3" type="text" className="form-control col-xl-3" value={this.state.questions[2]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the expected student navigation of materials</label>
              <input id="slider4" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[3]["value"] * this.state.questions[3]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul4" type="text" className="form-control col-xl-3" value={this.state.questions[3]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the future intentions of this subject/course</label>
              <input id="slider5" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[4]["value"] * this.state.questions[4]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul5" type="text" className="form-control col-xl-3" value={this.state.questions[4]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Are students expected to work</label>
              <input id="slider6" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[5]["value"] * this.state.questions[5]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul6" type="text" className="form-control col-xl-3" value={this.state.questions[5]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">In regards to those delivering the course/subject</label>
              <input id="slider7" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[6]["value"] * this.state.questions[6]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul7" type="text" className="form-control col-xl-3" value={this.state.questions[6]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Content is expected to be</label>
              <input id="slider8" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[7]["value"] * this.state.questions[7]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul8" type="text" className="form-control col-xl-3" value={this.state.questions[7]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Is the cohort size</label>
              <input id="slider9" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[8]["value"] * this.state.questions[8]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul9" type="text" className="form-control col-xl-3" value={this.state.questions[8]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the media mix</label>
              <input id="slider10" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[9]["value"] * this.state.questions[9]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul10" type="text" className="form-control col-xl-3" value={this.state.questions[9]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the reliance on existing content</label>
              <input id="slider11" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[10]["value"] * this.state.questions[10]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul11" type="text" className="form-control col-xl-3" value={this.state.questions[10]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Generally, how comfortable are SMEs/academics with technology?</label>
              <input id="slider12" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[11]["value"] * this.state.questions[11]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul12" type="text" className="form-control col-xl-3" value={this.state.questions[11]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Generally, how comfortable are students/learners with technology?</label>
              <input id="slider13" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[12]["value"] * this.state.questions[12]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul13" type="text" className="form-control col-xl-3" value={this.state.questions[12]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">What is the outcome of the learning programme?</label>
              <input id="slider14" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[13]["value"] * this.state.questions[13]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul14" type="text" className="form-control col-xl-3" value={this.state.questions[13]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">Describe the intended audience of the learning experience</label>
              <input id="slider15" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[14]["value"] * this.state.questions[14]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul15" type="text" className="form-control col-xl-3" value={this.state.questions[14]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">To what degree are other organisations or departments involved?</label>
              <input id="slider16" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[15]["value"] * this.state.questions[15]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul16" type="text" className="form-control col-xl-3" value={this.state.questions[15]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
            <div className="row lxp-question">
              <label className="col-xl-5">How is the term for delivery best defined?</label>
              <input id="slider17" className="form-control col-xl-2" type="range" min="-10" max="10" onChange={this.onSlide} value={parseInt(this.state.questions[16]["value"] * this.state.questions[16]["multiplier"])} />
              <div className={multiplierSection}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle col-xl-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <input id="mul17" type="text" className="form-control col-xl-3" value={this.state.questions[16]["multiplier"]} onChange={this.handleMultiplierChange} />
              </div>
            </div>
          </section>
        </div>

        <footer className="container">
          <div className="card">
            <div className="card-body">
              <h3 className="display-12" >Edit multiplier:</h3>
              <label className="switch">
                <input type="checkbox" onChange={this.handleEditChange} />
                <span className="slider round"></span>
              </label>
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
