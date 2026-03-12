// script.js — General site interactivity

// Mobile sidebar toggle
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarBackdrop').classList.add('open');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarBackdrop').classList.remove('open');
}

// Search toggle
function toggleSearch() {
    const wrapper = document.getElementById('searchWrapper');
    const input = document.getElementById('searchInput');
    if (wrapper.style.width === '240px') {
        wrapper.style.width = '0';
        wrapper.style.opacity = '0';
    } else {
        wrapper.style.width = '240px';
        wrapper.style.opacity = '1';
        input.focus();
    }
}
