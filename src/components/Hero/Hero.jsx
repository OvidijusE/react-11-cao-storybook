import css from './Hero.module.css';
import PropTypes from 'prop-types';

function Hero({ type = 'primary', title, subtitle }) {
  return (
    <div className={`${css.hero} ${css[type] || ''} `}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
Hero.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
};
export default Hero;
