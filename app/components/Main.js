// Include React
import React from 'react';
import { Link } from 'react-router';
// Here we include all of the sub-components
import SavedContainer from './containers/SavedContainer';
import SearchContainer from './containers/SearchContainer';
import Saved from './containers/panels/Saved';
import Search from './containers/panels/Search';
import styles from '../styles';

//This is a stateless functional component
const Main = (props) => {

    return (
        <div className="wrapper">
            <div className="navbar navbar-success" style={{
                marginBottom: 0 + 'em'
            }}>
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">NYT</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/search">Search
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/saved">Saved</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="jumbotron text-center" style={styles.transparentBg}>
                <div className="container">
                    <h1>New York Times Article Scrubber</h1>
                    <p>Search for and annotate articles of interest</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;