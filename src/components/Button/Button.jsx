import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ children, variant = 'primary', size = 'small', customFontSize = null, onClick }) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <button
      onClick={onClick}
      type='submit'
      style={customFontSize ? styles : {}}
      className={`${css.btn} ${css[variant] || ''} ${css[size] || ''}`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  customFontSize: PropTypes.number,
};
export default Button;
