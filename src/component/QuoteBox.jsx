import { useEffect, useState } from 'react';

import RandIn from '../assets/RandIn';
import QuoteAndAuthor from "./QuoteAndAuthor";

import colorList from '../json/colorList.json'


const QuoteBox = () =>{
    let [updater, setUpdater] = useState(true);

    const changeStateUpdater = () =>{setUpdater(!updater)}    
    
    const randColor = () => {
        let color = RandIn(colorList);
        document.querySelector('body, .QuoteAndAuthor').style.background = color;
        document.querySelector('blockquote').style.color = color;
    };

    useEffect(randColor,[updater]);

    return(
    <div className="quoteBox">
        <QuoteAndAuthor updater= {updater}/>
        <button onClick={changeStateUpdater}> &gt; </button>
    </div>
    );
}

export default QuoteBox;