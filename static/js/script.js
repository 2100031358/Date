const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseDiv = document.getElementById('response');
const fixDateBtn = document.getElementById('fixDateBtn');
const dateChoicesDiv = document.getElementById('dateChoices');
const congratsMessage = document.getElementById('congratsMessage');
const questionSection = document.getElementById('questionSection');
const selectedDateText = document.getElementById('selectedDate');

// On Yes button click
document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('response').classList.remove('hidden');
  document.getElementById('yesBtn').style.display = 'none';
  document.getElementById('noBtn').style.display = 'none';
  document.getElementById('bearGif').src = 'static/images/Date.gif'; // Change bear GIF
});

// Make the "No" button move randomly on hover
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;

    const offsetX = Math.random() * maxX;
    const offsetY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${offsetX}px`;
    noBtn.style.top = `${offsetY}px`;
});

// When "Fix a Date" is clicked, show the date choices
fixDateBtn.addEventListener('click', () => {
  dateChoicesDiv.classList.remove('hidden');
  responseDiv.classList.add('hidden');
});

// On Date Choice click
document.querySelectorAll('.choice-item').forEach(item => {
  item.addEventListener('click', () => {
    const choice = item.querySelector('p').textContent;
    document.getElementById('selectedDate').textContent = choice;
    document.getElementById('congratsMessage').classList.remove('hidden');
    document.getElementById('questionSection').classList.add('hidden');
  });
});

// WhatsApp sharing logic with page link
document.getElementById('shareWhatsapp').addEventListener('click', () => {
  const selectedDate = document.getElementById('selectedDate').textContent;
  const pageLink = window.location.href; // Current page URL
  const message = encodeURIComponent(`Hey! I picked ${selectedDate} for our perfect date! 🥰 \nCheck it out: ${pageLink}`);
  const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
  window.open(whatsappURL, '_blank');
});

// Copy Link logic
document.getElementById('copyLinkBtn').addEventListener('click', () => {
  const link = window.location.href;
  navigator.clipboard.writeText(link).then(() => {
    alert("Link copied to clipboard! You can now share it.");
  });
});