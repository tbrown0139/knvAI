
document.getElementById('request-access-btn').addEventListener('click', function() {
    document.getElementById('access-modal').classList.remove('hidden');
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('access-modal').classList.add('hidden');
});
