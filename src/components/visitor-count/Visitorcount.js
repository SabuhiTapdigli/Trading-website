import React,{useState,useEffect} from 'react';


const Visitorcount =()=>{
    const [Count, setCount] = useState(10000)
    useEffect(() => {
        setTimeout(() => setCount(Count + 2), 2000);
        localStorage.setItem('Count',Count)
    });
    const livecount = localStorage.getItem('Count')
    return(
        
        <span>{livecount}</span>
    )
}
export default Visitorcount