import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", marginTop: "20px" }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;