// js/auth.js
const authUi = document.getElementById('auth-ui');
auth.onAuthStateChanged(user => {
    if (user) {
        authUi.innerHTML = `<span>${user.displayName}</span> <button onclick="auth.signOut()">Выйти</button>`;
        db.ref('users/' + user.uid).update({ name: user.displayName, avatar: user.photoURL });
    } else {
        authUi.innerHTML = '<button onclick="login()">Войти через Google</button>';
    }
});

function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => alert("Ошибка: " + err.message));
}