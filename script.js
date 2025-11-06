(function(){
  const themeToggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  document.getElementById('year').textContent = new Date().getFullYear();
})();
