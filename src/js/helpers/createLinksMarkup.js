const createLinksMarkup = arr => {
  return arr
    .map(({ name, link }) => {
      return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="project-links">${name}</a>`;
    })
    .join(', ');
};

export default createLinksMarkup;
