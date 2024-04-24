btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  text = document.getElementById('text');
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
