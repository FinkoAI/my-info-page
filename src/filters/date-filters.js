import * as moment from 'moment';

function formatDate(date, dateFormat) {
  let result;

  if (!dateFormat) {
    result = moment().format(date);
  } else {
    result = moment().format(dateFormat, dateFormat);
  }

  return result;
}

export default {
  formatDate,
};
