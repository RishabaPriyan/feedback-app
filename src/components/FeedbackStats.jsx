import PropTypes from 'prop-types'


function FeedbackStats({feedback}) {
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

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired,
}
export default FeedbackStats
