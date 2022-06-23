import css from './Notification.module.css';
import PropTypes from 'prop-types';

function Notifications({ children, variant = 'primary', icon, cancel }) {
  return (
    <div className={`${css.notification} ${css[variant] || ''} `}>
      <div className={css.alert}>
        <i className={`fa ${icon}`} aria-hidden='true'></i>
        {children}
      </div>

      <div>
        <i className={`fa ${cancel}`} aria-hidden='true'></i>
      </div>
    </div>
  );
}
Notifications.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
  icon: PropTypes.oneOf([
    'fa-exclamation-circle',
    'fa-question-circle-o',
    'fa-info-circle',
    'fa-check-circle-o',
  ]),
  cancel: PropTypes.oneOf(['fa-times-circle-o']),
};
export default Notifications;
