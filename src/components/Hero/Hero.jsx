import css from './Hero.module.css';
import PropTypes from 'prop-types';

function Hero({ variant = 'primary', size = 'small', title, subtitle }) {
  return (
    <div className={`${css.hero} ${css[variant] || ''} ${css[size] || ''}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
Hero.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary']),
  customFontSize: PropTypes.number,
};
export default Hero;
