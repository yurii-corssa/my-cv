import { projects } from '../initialData';
import createDescMarkup from './helpers/createDescMarkup';
import createLinksMarkup from './helpers/createLinksMarkup';
import insertMarkup from './helpers/insertMarkup';

const experienceListEl = document.querySelector('.js-experience');

const markup = projects
  .map(({ links, technologies, description }) => {
    const linksMarkup = createLinksMarkup(links);
    const descMarkup = createDescMarkup(technologies, description);

    return `<li class="project-experience-list-item">${linksMarkup}: ${descMarkup}</li>`;
  })
  .join('');

insertMarkup(markup, experienceListEl);
