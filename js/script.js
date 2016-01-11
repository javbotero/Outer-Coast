$(document).ready(function() {
  $('.parallax').parallax();

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  // init slider
  $('.slider').slider({
    interval: 2100,
    transition: 800,
  });
});

function showSection(sectionName) {
  hideAllSections();
  $('#' + sectionName).fadeIn(800);
}

function hideAllSections() {
  // All page sections on the site, for simplicity's sake
  pageSections = ['principal-team', 'sitka-team', 'alaska-team', 'lower-48-team'];

  for (i = 0; i < pageSections.length; i++) {
    $('#' + pageSections[i]).hide();
  }
}
