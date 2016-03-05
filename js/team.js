---
---

$(document).ready(function () {
  var hash = window.location.hash;

  {% for team in site.data.team.teams %}
      {% for member in team.members %}
        if (hash === '#{{ member.name | slugify }}') {
          showSection('{{ team.name | slugify }}-team');
          window.location.href = "#{{ member.name | slugify }}";
        }
      {% endfor %}
  {% endfor %}
});

function showSection(sectionName) {
  console.log(sectionName);
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
