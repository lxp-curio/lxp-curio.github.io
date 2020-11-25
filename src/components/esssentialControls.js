import { render } from '@testing-library/react';
import React from 'react';

class EssentialControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [
                "Base Learning Design",
                "Project Management",
                "Development Work",
                "QA",
                "Media and Video Production",
                "Graphic Design"
            ]
        }

        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(e) {
        this.props.onChange(this.props.index, e)
    }


    render() {
        return (
            <div className="row">
                <label className="col-xl-3">{this.state.questions[this.props.index]}</label>
                <input className="form-control col-xl-3" 
                type="text" 
                id={"essentialInput" + (this.props.index + 1)} 
                value={this.props.value} 
                onChange={this.updateValue} />
            </div>
        )
    }
}



export default EssentialControls;