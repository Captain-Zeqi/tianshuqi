const copyPhoneBtn = document.getElementById('copyPhoneBtn');
const toast = document.getElementById('toast');
const phoneNumber = '18247623577';

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

copyPhoneBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(phoneNumber);
    showToast('电话号码已复制');
  } catch (error) {
    showToast('复制失败，请手动复制');
  }
});
