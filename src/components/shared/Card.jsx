import {PropTypes} from 'prop-types'
function Card({children,reverse}) {
    const cardStyling = {
        backgroundColor: reverse? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse? 'white' : '#000',
    }
    return (
        //<div className={`card ${reverse && 'reverse'}`}>
        //  {children}
        //</div>
        <div className="card" style={cardStyling}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse : false,
}
Card.prototype = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool,
}

export default Card
