const picker = document.getElementById('emojiPicker');
const emojiButton = document.getElementById('emojiButton');
const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messageArea = document.getElementById('messages');

emojiButton.addEventListener('click', () => {
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
});

picker.addEventListener('emoji-click', event => {
    input.value += event.detail.unicode;
    picker.style.display = 'none';
});

sendButton.addEventListener('click', () => {
    messageArea.append(input.value);
    input.value = ''
})