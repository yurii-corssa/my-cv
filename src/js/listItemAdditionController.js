import { techSkills, softSkills, languages } from '../initialData';
import insertMarkup from './helpers/insertMarkup';
import createSkillListMarkup from './helpers/createSkillListMarkup';

const techSkillsMarkup = createSkillListMarkup(techSkills);
const softSkillsMarkup = createSkillListMarkup(softSkills);
const languagesMarkup = createSkillListMarkup(languages);

const techSkillsList = document.querySelector('.js-tech-skills');
const softSkillsList = document.querySelector('.js-soft-skills');
const languagesList = document.querySelector('.js-languages');

insertMarkup(techSkillsMarkup, techSkillsList);
insertMarkup(softSkillsMarkup, softSkillsList);
insertMarkup(languagesMarkup, languagesList);
