import { jobSeekers } from './assets/js/persons.js';

document.addEventListener('DOMContentLoaded', () => {
    new gridjs.Grid({
        columns: ['Name', 'Email', 'LinkedIn URL', 'Field', 'Further Details'],
        data: jobSeekers.map(seeker => [
            seeker.Name,
            seeker.Email || 'N/A',
            gridjs.html(`<a href="${seeker.LinkedInUrl}" target="_blank">${seeker.LinkedInUrl}</a>`),
            seeker.Field,
            seeker.AdditionalInfo
        ]),
        pagination: {
            enabled: true,
            limit: 20
        },
        search: true,
        sort: true,
        resizable: true
    }).render(document.getElementById('personsTable'));
});