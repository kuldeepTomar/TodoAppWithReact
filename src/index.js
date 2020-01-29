import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Myname=()=>{
    const [a,seta]=useState(0)


    setInterval(() => {
        seta(a+1)
    },1000);
    
    
    return (
        <h1>{a}</h1>
    )


}



ReactDOM.render(<Myname />, document.getElementById('root'));






