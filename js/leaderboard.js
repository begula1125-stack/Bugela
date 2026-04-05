const list = document.getElementById('score-list');

db.ref('users').orderByChild('score').limitToLast(10).on('value', (snap) => {
    list.innerHTML = "";
    snap.forEach((child) => {
        const u = child.val();
        const li = document.createElement('li');
        li.textContent = `${u.name}: ${u.score || 0}`;
        list.appendChild(li);
    });
});