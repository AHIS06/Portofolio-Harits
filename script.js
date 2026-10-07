document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    
    // Jika tombol tidak ditemukan di HTML, hentikan script agar tidak error
    if (!toggleBtn) return;

    const currentTheme = localStorage.getItem('theme');

    // Cek tema yang tersimpan
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleBtn.textContent = '☀️';
    }

    // Event listener saat tombol diklik
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            toggleBtn.textContent = '☀️';
        } else {
            toggleBtn.textContent = '🌙';
        }
        
        localStorage.setItem('theme', theme);
    });
});