import PropTypes from 'prop-types';

/* Utilising the feature of react prop */
const NotificationItemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
});

export default NotificationItemShape;