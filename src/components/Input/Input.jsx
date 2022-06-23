import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ error, color = 'light', type = 'text', children, ...rest }) {
  if (type === 'textarea') {
    return (
      <textarea className={`${css.input} ${css.txa} ${css[color]}`} {...rest}>
        {children}
      </textarea>
    );
  }

  return (
    <div>
      <input className={`${css.input} ${css[color]} ${error ? css.errField : ''}`} {...rest} />
      {error && <p className={css.error}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['text', 'textarea']),
  error: PropTypes.string,
  value: PropTypes.string,
};
export default Input;
