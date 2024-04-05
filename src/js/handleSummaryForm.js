import createSummary from './createSummary';
import { initialSummary } from './initialData';

createSummary(initialSummary);

const summaryForm = document.querySelector('.summary-form');

const handleSubmit = e => {
  const summary = e.currentTarget.elements.summarySelect.value;
  createSummary(summary);
};

summaryForm.addEventListener('change', handleSubmit);
