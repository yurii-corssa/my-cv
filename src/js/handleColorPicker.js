const colorPicker = document.querySelector('#color-picker');

const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color')
  .trim();

colorPicker.value = primaryColor;

const onChange = e => {
  const color = e.currentTarget.value;

  document.documentElement.style.setProperty('--primary-color', color);
};

colorPicker.addEventListener('change', onChange);
