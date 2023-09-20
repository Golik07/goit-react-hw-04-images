import css from "./Button.module.css"
import PropTypes from "prop-types"


const Button = ({click}) => {
    return(
        <div className={css.Container_button}>
            <button onClick={click} className={css.Button} type="button">Load More</button>
        </div>
    )
}

export default Button;

Button.propTypes = {
    click: PropTypes.func.isRequired,
}