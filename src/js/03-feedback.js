import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  Object.keys(formData).forEach(key => {
    document.querySelector(`[name="${key}"]`).value = '';
  });
  localStorage.setItem(STORAGE_KEY, '');
});

document.querySelector('form').addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  throttle(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500);
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
});
