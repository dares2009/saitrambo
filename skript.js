const cancelButton = document.querySelector('.cancel-purchase');
const messageBox = document.querySelector('.message-box');
const confirmButton = document.querySelector('.confirm-cancel');
const cancelButton2 = document.querySelector('.cancel-action');

cancelButton.addEventListener('click', function(event) {
  event.preventDefault();
  messageBox.style.display = 'block';
});

confirmButton.addEventListener('click', function() {
  messageBox.style.display = 'none';
  window.location.href = 'index.html'; // замените "index.html" на нужную страницу
});

cancelButton2.addEventListener('click', function() {
  messageBox.style.display = 'none';
});
