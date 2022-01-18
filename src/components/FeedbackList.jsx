import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
    const {feedback,isLoading } = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
    return isLoading ? (
        <Spinner/>
    ): (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map( (eachFeedback) => (
                    <motion.div 
                        key={eachFeedback.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0}}
                    >
                        <FeedbackItem key={eachFeedback.id} item={eachFeedback}
                        />

                    </motion.div>
                    
                ))}

            </AnimatePresence>
                
        </div>
    )

}

export default FeedbackList
