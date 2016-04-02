$(document).ready(function () {
  // Replace static definition of current month-year with dynamic date
  var d = new Date();
  var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  var curMonth = months[d.getMonth()];
  var curYear = d.getYear() + 1900;
  $('#current-month-year').html(curMonth + ' ' + curYear.toString());
});
