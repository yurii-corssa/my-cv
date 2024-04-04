const generateSkillListMarkup = ({ value, name }) => {
  return `<li class="skill-list-item" id=${name}>${value}</li>`;
};

export default generateSkillListMarkup;
