const axios = require('axios');

let name = document.getElementById('name');
let validationResultPerson = document.getElementById('validation-result-person');
const validateName = function () {
    validationResultPerson.innerText = '...';
    axios.post(validationResultPerson.dataset.path, {input: name.value})
        .then(function(response) {
            if (response.data.valid) {
                validationResultPerson.innerHTML = ":)";
            } else {
                validationResultPerson.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            validationResultPerson.innerText = 'Error: ' + error;
        });
};


let team = document.getElementById('team');
let validationResultTeam = document.getElementById('validation-result-team');
const validateTeam = function () {
    validationResultTeam.innerText = '...';
    axios.post(validationResultTeam.dataset.path, {input: team.value})
        .then(function(response) {
            if (response.data.valid) {
                validationResultTeam.innerHTML = ":)";
            } else {
                validationResultTeam.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            validationResultTeam.innerText = 'Error: ' + error;
        });
};


name.onkeyup = validateName;
name.onchange = validateName;

team.onkeyup = validateTeam;
team.onchange = validateTeam;

