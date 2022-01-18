import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPages'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

let App = () => {
    return(
        <FeedbackProvider>
            <Router>
            <div className="container">
                <Routes>
                <Route exact path='/' element= {
                    <>
                        <Header bgColor="#111235" textColor="#F1FAEE"/>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedBackList />
                    </>
                }>
                    
                </Route>
            

                <Route path='/about' element={<AboutPage/>} />

                </Routes>
                <AboutIconLink/>
            </div>
        </Router>

        </FeedbackProvider>
        
        
    )   
}

export default App;