import ReactGa from 'react-ga'


const useGaEventTracker = (category = 'Event Category') =>{
    const trackEvent = (action ='action' , label='label') =>{
        ReactGa.event({category,action,label})
    }
    return trackEvent
}
export default useGaEventTracker