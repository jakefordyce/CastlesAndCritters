---
---
window.addEventListener("load", function(event) {
  var selects = document.getElementsByClassName('abilitySelect');

  {% for ability in site.data.abilities %}

    for (const abselect of selects){
      var opt = document.createElement('option');
      opt.value = "{{ability.name}}";
      opt.innerHTML = "{{ability.name}}";
      abselect.appendChild(opt);
    }

{% endfor %}
});

function addAbility(){
  abilitiesDiv = document.getElementById('characterAbilities');

  abilitySelect = document.createElement('select');

  {% for ability in site.data.abilities %}
    var opt = document.createElement('option');
    opt.value = "{{ability.name}}";
    opt.innerHTML = "{{ability.name}}";
    abilitySelect.appendChild(opt);
  {% endfor %}

  abilitiesDiv.appendChild(abilitySelect);
}
