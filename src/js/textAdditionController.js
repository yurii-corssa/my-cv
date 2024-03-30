import { jobTitle, summary } from '../initialData';
import insertMarkup from './helpers/insertMarkup';

const jobTitleEl = document.querySelector('.js-job-title');
const summaryParagraph = document.querySelector('.js-summary');

insertMarkup(jobTitle, jobTitleEl);
insertMarkup(summary, summaryParagraph);
