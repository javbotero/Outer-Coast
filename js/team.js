---
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  var hash = window.location.hash;
  var navHeight;
  var memberPos;

  {% for team in site.data.team.teams %}
      {% for member in team.members %}
        if (hash === '#{{ member.name | slugify }}') {
          showSection('{{ team.name | slugify }}-team');

          // Scroll by more than height of navbar so first lines won't be obscured
          navHeight = _.parseInt($('nav').css('height').replace(/\D/g,'')) + 10;
          memberPos = _.parseInt($('#{{ member.name | slugify }}').position().top);

          // Can't use scrollTo. Some reason won't work on load here.
          $('html, body').animate({
            scrollTop: $('#{{ member.name | slugify }}').offset().top - navHeight,
          }, 'slow');
        }
      {% endfor %}
  {% endfor %}
});

window.scrollBy(0, -74);

function showSection(sectionName) {
  hideAllSections();
  $('#' + sectionName).fadeIn(800);
}

function hideAllSections() {
  // All page sections on the site, for simplicity's sake
  pageSections = ['principal-team', 'sitka-team', 'alaska-team', 'lower-48-team', '2019-summer-staff-team', 'board-of-advisors-team', 'project-staff-team', '2018-summer-staff-team', 'collaborators-team'];

  for (i = 0; i < pageSections.length; i++) {
    $('#' + pageSections[i]).hide();
  }
}
