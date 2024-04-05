import { getSummary } from './services/api';

const createSummary = async position => {
  const summaryEl = document.querySelector('.js-summary');
  const text = await getSummary(position);
  summaryEl.innerHTML = text;
};

export default createSummary;
