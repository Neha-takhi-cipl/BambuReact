import moment from 'moment';
import 'moment-timezone';

// moment.tz.guess
export const timezone = moment.tz.guess();

moment.tz.setDefault(timezone);

export default moment;
