// Handle Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginScreen = document.getElementById('login-overlay');
    const appInterface = document.getElementById('app-interface');
    
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        appInterface.classList.remove('hidden');
        appInterface.style.animation = 'fadeIn 0.8s forwards';
    }, 500);
});

// Tab Switching System
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Deactivate all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.remove('hidden');
    
    // Set clicked button to active
    event.currentTarget.classList.add('active');
}