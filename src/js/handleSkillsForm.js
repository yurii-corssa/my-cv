import createSkill from './createSkill';
import {
  initialLanguages,
  initialSoftSkills,
  initialTechSkills,
} from './initialData';

const createInitiaSkills = (skillArr, type, formContainer, cvContainer) => {
  skillArr.forEach(value => {
    createSkill(formContainer, cvContainer, type, value);
  });
};

const addSkill = (formContainer, cvContainer) => {
  const type = formContainer.dataset.skill;
  createSkill(formContainer, cvContainer, type);
};

const cvRefs = {
  techContainer: document.querySelector('.js-tech-skills'),
  softContainer: document.querySelector('.js-soft-skills'),
  languagesContainer: document.querySelector('.js-languages'),
};

const formRefs = {
  techContainer: document.querySelector('.js-tech-inputs-container'),
  softContainer: document.querySelector('.js-soft-inputs-container'),
  languagesContainer: document.querySelector('.js-languages-inputs-container'),
  addBtn: document.querySelector('.js-skills-btn'),
};

createInitiaSkills(
  initialTechSkills,
  'tech',
  formRefs.techContainer,
  cvRefs.techContainer
);
createInitiaSkills(
  initialSoftSkills,
  'soft',
  formRefs.softContainer,
  cvRefs.softContainer
);
createInitiaSkills(
  initialLanguages,
  'languages',
  formRefs.languagesContainer,
  cvRefs.languagesContainer
);

const onClick = e => {
  const skillFormContainer = e.currentTarget.previousElementSibling;
  const skillCvContainer = cvRefs.techContainer;

  addSkill(skillFormContainer, skillCvContainer);
};

formRefs.addBtn.addEventListener('click', onClick);
