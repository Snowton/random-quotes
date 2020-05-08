import React, { Component } from "react";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            // data: {}
        };
    }

    /* 
    {
        headers:{
            "accepts":"application/json"
        }
    }

    https://api.quotable.io/random
    https://api.whatdoestrumpthink.com/api/v1/quotes/random
    */

    componentDidMount() {
        fetch("https://api.quotable.io/random") //
        .then(response => response.json())
        .then(response => {
            this.setState({quote: response.content, author: response.author});
        });
    }
    
    render() {
        return <section>
        <h1>{this.state.quote}</h1>
        <h4>{this.state.author}</h4>
        </section>;
    }
}

    // componentDidMount() {
    //     this.getNewQuote();
    // }
    // getNewQuote = async () => {
    // try {
    //     const response = await fetch("https://api.quotable.io/random", {
    //     headers:{
    //         "accepts":"application/json"
    //     }
    // });
    //     const {author, content} = await response.json();
    //     if (!response.ok) throw new Error(author, content);
    //     this.setState({ quote: content, author: author });
    // } catch (error) {
    //     // If the API request failed, log the error to console and update state
    //     // so that the error will be reflected in the UI.
    //     console.error(error);
    //     this.setState({ data: { content: "Oops... Something went wrong" } });
    // }
    // console.log(this.state);
    // };

export default Quote;