import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewSingle from './NewSingle'
import Error from './Error'

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false
        };
    }

    componentDidMount() {
        const { what, query } = this.props;
        const url = `https://newsapi.org/v2/${what}?${query}&from=2018-09-04&sortBy=publishedAt&apiKey=6e5c267c79df471fb84335d6cfa58ee5`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                });
            })
            .catch(() => {
                this.setState({
                    error: true
                });
            })
    }

    renderItems(){
        const { news, error } = this.state;

        if(error) {
            return <Error />;
        }

        return news.map((item, index) => {
            return <NewSingle key={index} item={item} />;
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

News.propTypes = {
    what: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
};

export default News;