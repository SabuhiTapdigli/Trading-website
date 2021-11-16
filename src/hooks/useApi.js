import {useState,useEffect} from 'react';
import axios from 'axios';
const useApi = (params) => {
    const [datas, setdatas] = useState({items:[],articles:[]});
    useEffect(()=>{
        axios.get(`https://findonlinebrokerforyou.com/Api/${params}`)
        .then(res => {
            console.log(res)
            setdatas(res.data)
        })
    },[params])
    
    return datas
}
export default useApi
