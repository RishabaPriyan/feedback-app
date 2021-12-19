import PropTypes from 'prop-types'

function Header({ text , bgColor, textColor}) {

    const styleling = {
        backgroundColor : bgColor,
        color : textColor,
    }

    return (
        <header style={ styleling}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor: 'grey',
    textColor: 'pink',
}
Header.prototype = {
    text : PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header
