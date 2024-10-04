import PropTypes from 'prop-types';

const Header = ({label}) => {
  return (
    <header style={{ textAlign: "center", padding: "10px",color: "black", background: "#f1f1f1" }}>
      <h1>{label}</h1>
    </header>
  );
};

Header.propTypes = {
    label: PropTypes.string,
  };
export default Header;