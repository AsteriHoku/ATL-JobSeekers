import { jobSeekers } from './assets/js/persons.js';

document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#personsTable tbody');
    jobSeekers.forEach(person => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = person.Name;
        tr.appendChild(nameTd);

        const emailTd = document.createElement('td');
        if (person.Email) {
            emailTd.textContent = person.Email;
            const emailCopyBtn = document.createElement('button');
            emailCopyBtn.textContent = 'copy';
            emailCopyBtn.style.marginLeft = '10px';
            emailCopyBtn.onclick = () => copyToClipboard(person.Email);
            emailTd.appendChild(emailCopyBtn);
        }
        tr.appendChild(emailTd);

        const linkedinTd = document.createElement('td');
        const linkedinLink = document.createElement('a');
        linkedinLink.href = person.LinkedInUrl;
        linkedinLink.target = '_blank';
        linkedinLink.textContent = person.LinkedInUrl;
        linkedinTd.appendChild(linkedinLink);
        tr.appendChild(linkedinTd);

        const fieldTd = document.createElement('td');
        fieldTd.textContent = person.Field;
        tr.appendChild(fieldTd);

        const additionalInfoTd = document.createElement('td');
        additionalInfoTd.textContent = person.AdditionalInfo;
        tr.appendChild(additionalInfoTd);

        tableBody.appendChild(tr);
    });
});

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Email copied to clipboard: ' + text);
}