// script.js 
function getCurrentTimeUTC() { const now = new Date(); return now.toUTCString(); } 
document.addEventListener('DOMContentLoaded', function() { const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]'); 
if (currentTimeUTCElement) { currentTimeUTCElement.textContent = getCurrentTimeUTC(); } })