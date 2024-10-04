// Button.jsx
import PropTypes from 'prop-types';

const Button = ({ label, onClick, disabled, type, style }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      style={style}
      data-testid="custom-button"
    >
      {label}
    </button>
  );
};

// Default props for the Button
Button.defaultProps = {
  type: 'button',
  disabled: false,
  style: {},
};

// Prop types validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Button;