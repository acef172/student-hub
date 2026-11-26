function checkAdminAccess() {
    const path = window.location.pathname;
    if (path.includes('admin.html') && !localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'admin-login.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAdminAccess();
});

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    }
}