import React,{useEffect} from 'react';
import './style.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import useApi from './hooks/useApi'
import ScrollTop from './components/ScrollTop'
import ReactGa from 'react-ga'
import TagManager from 'react-gtm-module'
const Main = React.lazy(()=> import ('./components/Main'))
const Stock = React.lazy(()=> import ('./components/pages/Stock'))
const Forex = React.lazy(()=> import ('./components/pages/Forex'))
const CFDs = React.lazy(()=> import ('./components/pages/CFDs'))
const Options = React.lazy(()=> import ('./components/pages/Options'))
const Spread = React.lazy(()=> import ('./components/pages/Spread'))
// const Readreview  = React.lazy(()=> import( './components/Readreview'));
// const ReadArticle = React.lazy(()=> import( './components/ReadArticle'));
// const Contact = React.lazy(()=> import( './components/Contact'));
// const Review = React.lazy(()=> import(  './components/Review'));
// const Article = React.lazy(()=> import( './components/Article'));
// const About = React.lazy(()=> import( './components/About'));

const App = () =>{
    const datas = useApi('online-casino');
    // console.log(datas.items[0])
    // Google Analytic
    useEffect(()=>{
        ReactGa.initialize('UA-121426505-5')
        // to report path view
        ReactGa.pageview(window.location.pathname + window.location.search)
    },[])
    // Tag Manager
    const tagManagerArgs = {
        gtmId: 'GTM-TTF628B'
    }
    
    TagManager.initialize(tagManagerArgs)
    // Take gclid id
    const queryParams = new URLSearchParams(window.location.search);
    const gclid = queryParams.get('gclid');
    // Write into session storage
    if (gclid ==='gclid'){
        sessionStorage.setItem('gclid',gclid)
    }else{
        sessionStorage.removeItem(gclid);
    }
    
    
    
    
    return(
        <Router>
            <ScrollTop>
            <React.Suspense fallback={<p>Loading</p>}> 
            <div>
                <Header/>
                <Switch>
                    
                    {/* <Route path = '/review/:name'>
                        <Readreview datas = {datas} />
                    </Route>
                    <Route path = "/reviews">
                        <Review datas={datas}/>
                    </Route>
                    <Route path = '/articles'>
                        <Article datas = {datas}/>
                    </Route>
                    <Route path = '/article/:name'>
                        <ReadArticle datas = {datas}/>
                    </Route>               
                    <Route path = '/about-us'>
                        <About/>
                    </Route> */}
                    {/* <Route path = '/contact-us'>
                        <Contact/>
                    </Route> */}
                    <Route path = "/stock">
                        <Stock/>
                    </Route>
                    <Route path = "/forex">
                        <Forex/>
                    </Route>
                    <Route path = "/CFDs">
                        <CFDs/>
                    </Route>
                    <Route path = "/Options">
                        <Options/>
                    </Route>
                    <Route path = "/spreads">
                        <Spread/>
                    </Route>
                    <Route path = "/">
                        <Main datas = {datas}/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
            </React.Suspense>
            </ScrollTop>
        </Router>
        
        
    )
}
export default App