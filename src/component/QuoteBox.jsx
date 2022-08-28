import { useEffect, useState } from 'react';

import RandIn from '../assets/RandIn';
import QuoteAndAuthor from "./QuoteAndAuthor";

import colorList from '../json/colorList.json';

const QuoteBox = () =>{
    let [updater, setUpdater] = useState(true);

    const changeStateUpdater = () =>{setUpdater(!updater)}    
    
    const randColor = () => {
        let color = RandIn(colorList); //RandIn(colorList);
        document.querySelector('body, .QuoteAndAuthor ').style.background = color;
        document.querySelector('blockquote, quotationMarks').style.color = color;
        document.querySelector('.button-QuoteBox').style.background = color;
        document.querySelector('.quotationMarks').style.color = color;
    };

    useEffect(randColor,[updater]);

    return(
    <div className="QuoteBox">
        <span className='quotationMarks'>“</span>
        <QuoteAndAuthor updater= {updater}/>
        <div className="button-QuoteBox" onClick={changeStateUpdater}> &gt; </div>
    </div>
    );
}

export default QuoteBox;