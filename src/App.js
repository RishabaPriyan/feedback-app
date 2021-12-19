import {useState} from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'


let App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Do you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id)
            )
        }
        
    }
    return(
        <div className="container">
            <Header bgColor="#000" textColor="pink"/>
            <FeedbackStats feedback={feedback}/>
            <FeedBackList feedback={feedback} 
            handleDelete={deleteFeedback}/>
        </div>
    )   
}

export default App;