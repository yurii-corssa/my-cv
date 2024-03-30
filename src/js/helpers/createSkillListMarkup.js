const createSkillListMarkup = arr => {
  return arr.map(el => `<li class="skill-list-item" >${el}</li>`).join('');
};

export default createSkillListMarkup;
