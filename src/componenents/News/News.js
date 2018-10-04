import React, { Component } from 'react';
import NewsItem from "./NewsItem";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-04&sortBy=publishedAt&apiKey=6e5c267c79df471fb84335d6cfa58ee5";

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

    rennderItems(){
        const { news } = this.state;

        return news.map((item, index) => {
            return <NewsItem key={index} title={item.title} />;
        });
    }

    render() {
        return (
            <ul>
                {this.rennderItems()}
            </ul>
        );
    }
}

export default News;