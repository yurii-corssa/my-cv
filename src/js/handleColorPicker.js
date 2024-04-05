const colorPicker = document.querySelector('#color-picker');

document.documentElement.style.setProperty(
  '--primary-color',
  colorPicker.value
);

const onChange = e => {
  const color = e.currentTarget.value;

  document.documentElement.style.setProperty('--primary-color', color);
};

colorPicker.addEventListener('change', onChange);
