import React, {Component } from 'react';
import helpers from '../../utils/nytHelpers';
import Search from './panels/Search';

export default class SavedContainer extends Component {
    constructor() {
        super();
        this.state = { queryTerm: "" }
    }

    saveArticle(response){

        helpers.postArticle(response)

        // update state of parent
        helpers.getArticles().then(function(response) {
            var component = this;
            if (response !== this.state.articles) {

                var articulo = response.map(function(arts, i) {

                    return <div className="well" key={i}>
                        <h4 className="articleHeadline">
                            <span className="label label-success">{i + 1}</span>
                            {arts.title}</h4>
                        <h5>{arts.date}</h5>
                        <a href={arts.url}>{arts.url}</a>

                        <input type="hidden" name="articleId" value={arts._id}/>
                        <br></br>
                        <button onClick={() => component.removeArticleClick(arts._id)} className="btn btn-success">Delete</button>
                    </div>;
                })

                this.setState({articles: articulo});
                alert('article saved!');
            }
        }.bind(this));

    }

    componentDidUpdate() {

        helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then(function(data) {
            var component = this;
            var articulo = data.map(function(art, i) {

                var artTitle = art.headline.main;
                var artUrl = art.web_url;

                return <div className="well" key={i}>
                    <h4 className="articleHeadline">
                        <span className="label label-primary">{i + 1}</span>
                        {art.headline.main}</h4>
                    <h5>{art.pub_date}</h5>
                    <h5>{art.section_name}</h5>
                    <p>{art.snippet}</p>
                    <a href={art.web_url}>{art.web_url}</a>
                    <form method="POST" action="/api">
                        <input type="hidden" name="title" value={art.headline.main}/>
                        <input type="hidden" name="url" value={art.web_url}/>
                        <br></br>
                        <button onClick={() => component.saveArticle(art)} className="btn btn-primary">Save</button>

                    </form>
                </div>;
            })

            this.setState({results: articulo});

        }.bind(this));

    }

    setTerm (term){
        this.setState({queryTerm: term});
    }
    // Here we describe this component's render method
    render() {
        return (
            <div>
                <Search setTerm={this.setTerm} setStartYear={this.startYear} setEndYear={this.endYear} results={this.state.results}/>

            </div>

        );
    }

}
