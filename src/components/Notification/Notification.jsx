import css from './Notification.module.css';
import PropTypes from 'prop-types';

function Notifications({
  children,
  variant = 'primary',
  size = 'small',
  customFontSize = null,
  icon,
}) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <p
      onClick={children}
      style={customFontSize ? styles : {}}
      className={`${css.notification} ${css[variant] || ''} ${css[size] || ''}`}
    >
      {children}
    </p>
  );
}
Notifications.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
  icon: PropTypes.oneOf([
    'fa-exclamation-circle',
    'fa-question-circle-o',
    'fa-info-circle',
    'fa-check-circle-o',
  ]),
  customFontSize: PropTypes.number,
};
export default Notifications;
