import { jobSeekers } from './assets/js/persons.js';

document.addEventListener('DOMContentLoaded', () => {
    new gridjs.Grid({
        columns: [
            'Name', 
            'Email',
            {
                name: 'LinkedIn',
                sort: false
            }, 
            'Field', 
            'Further Details',
            'Date Added'
        ],
        data: jobSeekers.map(person => [
            person.Name,
            person.Email,
            gridjs.html(`<a href="${person.LinkedInUrl}" target="_blank">${person.LinkedInUrl}</a>`),
            person.Field,
            person.AdditionalInfo,
            person.DateAdded
        ]),
        pagination: {
            enabled: true,
            limit: 20
        },
        search: true,
        sort: true,
        resizable: true,
        autoWidth: true
    }).render(document.getElementById('personsTable'));
});