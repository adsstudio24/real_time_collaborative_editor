const socket = io('http://localhost:5000');
const editor = document.getElementById('editor');

socket.on('loadContent', (content) => {
    editor.value = content;
});

editor.addEventListener('input', () => {
    socket.emit('updateContent', editor.value);
});
