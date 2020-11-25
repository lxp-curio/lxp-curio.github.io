import React from 'react';

class Controls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [

                {
                    text: "Degree of Live Delivery to Students",
                    minLabel: "Synchronous delivery",
                    maxLabel: "Asynchronous delivery"
                },
                {
                    text: "Is Assessment required to be built?",
                    minLabel: "No assessment are featured",
                    maxLabel: "Much work on multiple assessments"
                },
                {
                    text: "Describe the information load ",
                    minLabel: "Learning involves lots of inquiry, student discovery",
                    maxLabel: "Learning involves lots of study materials"
                },
                {
                    text: "Describe the expected student navigation of materials",
                    minLabel: "Students navigate in a self-directed way",
                    maxLabel: "A learning map or approach is provided (structured curricula)"
                },
                {
                    text: "Describe the future intentions of this subject/course",
                    minLabel: "Learning will be one-off",
                    maxLabel: "Learning will be reissued"
                },
                {
                    text: "Are students expected to work",
                    minLabel: "Mostly independently",
                    maxLabel: "In groups/collaborative tasks"
                },
                {
                    text: "In regards to those delivering the course/subject",
                    minLabel: "There is a sole SME/academic",
                    maxLabel: "There is a large SME/academic delivery team"
                },
                {
                    text: "Content is expected to be",
                    minLabel: "Short, short cycle and minimal text-based activities",
                    maxLabel: "Long, long-format with large amounts of readings"
                },
                {
                    text: "Is the cohort size",
                    minLabel: "15 learners or under",
                    maxLabel: "150+ learners"
                },
                {
                    text: "Describe the media mix",
                    minLabel: "Mostly spoken or rich media (video)",
                    maxLabel: "Mostly textual elements, written activities & quizzes"
                },
                {
                    text: "Describe the reliance on existing content ",
                    minLabel: "Lots of existing content",
                    maxLabel: "Starting with a blank page"
                },
                {
                    text: "Generally, how comfortable are SMEs/academics with technology?",
                    minLabel: "Very comfortable, or expert",
                    maxLabel: "Less familiar, first time"
                },
                {
                    text: "Generally, how comfortable are students/learners with technology?",
                    minLabel: "Very comfortable, or expert",
                    maxLabel: "Less familiar, first time"
                },
                {
                    text: "What is the outcome of the learning programme?",
                    minLabel: "The learning is not accredited or warranted",
                    maxLabel: "The learning is accredited and warrant is essential"
                },
                {
                    text: "Describe the intended audience of the learning experience",
                    minLabel: "pre-university, or undergraduate",
                    maxLabel: "Post-experience, professional"
                },
                {
                    text: "To what degree are other organisations or departments involved? ",
                    minLabel: "There are no other stakeholders or schools involved",
                    maxLabel: "There are many other organisations or schools/faculties involved"
                },
                {
                    text: "How is the term for delivery best defined?",
                    minLabel: "Pre-defined and set to a schedule",
                    maxLabel: "Flexible and open, students can choose when to explore, submit"
                }

            ]
        }

        this.onSlide = this.onSlide.bind(this);
        this.handleMultiplierChange = this.handleMultiplierChange.bind(this);

    }

    onSlide(event){
        this.props.onSlide(event)
    }

    handleMultiplierChange(event) {
        this.props.multiplierChange(event)
    }

    render() {
        let multiplierSection = this.props.editMultiplier ? "" : " hidden";
        return (
            <div>
                <h3 className="display-7">Needs analysis</h3>
                <label className="lead ">{this.state.questions[this.props.index].text}</label>    
                <div className="row">
                    <div className="col-5"></div>
                    <p className="col-2 alert alert-info" >hours : {this.props.value > 0 ? "+" : ""}{this.props.value}</p>                        
                    <div className={"row lxp-multipler-btn col-5 " + multiplierSection}>

                        <label className="col-1 lxp-label-left">*</label>
                        <input id="mul1" 
                        type="text" 
                        className="form-control col-3" 
                        value={this.props.multiplier} 
                        onChange={this.props.multiplierChange} />
                    </div>
                </div>
                         
                <div className="row lxp-question">  
                    <label className="col-5 lxp-label-left">{this.state.questions[this.props.index].minLabel}</label> 
                    <input 
                    id="slider1" 
                    className="form-control col-2" 
                    type="range" 
                    min={"-" + (this.props.multiplier * 10)} 
                    max={(this.props.multiplier * 10) + ""}  
                    value={this.props.value} 
                    onChange={this.onSlide} />
                    <label className="col-5 lxp-question-lr">{this.state.questions[this.props.index].maxLabel}</label>  
                    
                    
                </div>
                
            </div>
        );
    }

}

export default Controls;