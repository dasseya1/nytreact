// Include React
import React, {Component } from 'react';

// Create the Search Component
export default class Search extends Component {
 constructor() {
     super();
    // Here we set a generic state associated with the text being searched for
    this.State = {term: "", startYear: "", endYear: ""};
    }

    handleChange = (event) => {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    }
    setTerm = (term) => {
        this.setState({
            queryTerm: term + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101"
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.props.setTerm(this.state.term + "&begin_date=" + this.state.startYear + "0101" + "&end_date=" + this.state.endYear + "0101");

        this.setState({term: "", startYear: "", endYear: ""});
    }
    // Here we descibe this component's render method
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Search</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <h4 className="">
                                            <strong>Term</strong>
                                        </h4>

                                        <input type="text" value={this.state.term} className="form-control" id="term" onChange={this.handleChange} required/>
                                        <h4>
                                            <strong>Start Year</strong>
                                        </h4>
                                        <input type="text" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange} required/>

                                        <h4>
                                            <strong>End Year</strong>
                                        </h4>
                                        <input type="text" value={this.state.endYear} className="form-control" id="endYear" onChange={this.handleChange} required/>
                                        <br></br>
                                        <button className="btn btn-primary btn-lg" id="load" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Processing Order">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Results</h3>
                            </div>
                            <div className="panel-body">
                                <div>{this.props.results}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
