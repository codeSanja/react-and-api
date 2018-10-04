import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SingleSide from './SingleSide'
import Error from './Error'

class Sidenews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false
        };
    }

    componentDidMount() {
        const { what, query } = this.props;
        const url = `https://newsapi.org/v2/${what}?${query}&from=2018-09-04&sortBy=publishedAt&apiKey=6e5c267c79df471fb84335d6cfa58ee5`;

        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch(() => {
                this.setState({
                    error: true
                })
            })
    }

    renderItems() {
        const { sidenews, error } = this.state;

        if(error) {
            return <Error />;
        }

        return sidenews.map((item, index) => {
            return <SingleSide key={index} item={item} />;
        });
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

Sidenews.propTypes = {
    what: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
};

export default Sidenews;