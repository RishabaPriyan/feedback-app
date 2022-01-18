import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)
    let calculateAverage = 
            feedback.reduce((accumulator,current) => 
                {return accumulator + current.rating}
            ,0) /feedback.length
    calculateAverage = calculateAverage.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'> 
            <h4>{feedback.length} Reviews</h4>
            <h4>Average rating: {isNaN(calculateAverage)?0:calculateAverage}</h4>
        </div>
    )
}

export default FeedbackStats
