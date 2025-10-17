const picker = document.getElementById('emojiPicker');
const button = document.getElementById('emojiButton');
const input = document.getElementById('messageInput');

button.addEventListener('click', () => {
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
});

picker.addEventListener('emoji-click', event => {
    input.value += event.detail.unicode;
    picker.style.display = 'none';
});