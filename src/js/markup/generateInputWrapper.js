const generateInputWrapper = () => {
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input-wrapper');
  inputWrapper.draggable = true;

  return inputWrapper;
};

export default generateInputWrapper;
