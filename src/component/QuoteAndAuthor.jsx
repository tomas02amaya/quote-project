import { useEffect } from "react";

import quotes from "../json/quotes.json";
import RandIn from "../assets/RandIn";

const QuoteAndAuthor = ({updater})=>{

    useEffect(()=>{quote},[updater]);


    const quote = RandIn(quotes);

    return(
    <blockquote className= "QuoteAndAuthor">
        <p>{quote.quote}</p>
        <footer>{quote.author}</footer>

    </blockquote>
    );
}

export default QuoteAndAuthor;