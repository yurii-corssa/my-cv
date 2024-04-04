const generateSkillInput = (type, id, value = '') => {
  const input = document.createElement('input');

  input.type = 'text';
  input.name = id;
  input.classList.add('skill-items', `js-${type}-skill-input`);
  input.value = value;

  return input;
};

export default generateSkillInput;
