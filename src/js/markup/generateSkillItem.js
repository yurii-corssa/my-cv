const generateSkillItem = (id, value = '') => {
  const listItem = document.createElement('li');

  listItem.classList.add('skill-list-item');
  listItem.id = id;
  listItem.textContent = value;

  return listItem;
};

export default generateSkillItem;
