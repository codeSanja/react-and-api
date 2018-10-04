import React, { Component } from 'react';
import NewSingle from "./NewSingle";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
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
            .catch((error) => {
                console.error(error);
            })
    }

    renderItems(){
        const { news } = this.state;

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

export default News;