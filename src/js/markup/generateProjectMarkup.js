const generateProjectMarkup = ({ links, technologies, description }) => {
  const generateDescMarkup = (technologies, description) => {
    const techText = `[${technologies.map(el => el).join(', ')}]`;

    return `<p class="desc-text">${techText} ${description}</p>`;
  };

  const generateLinksMarkup = arr => {
    return arr
      .map(({ name, link }) => {
        return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="project-links">${name}</a>`;
      })
      .join(', ');
  };

  const linksMarkup = generateLinksMarkup(links);
  const descMarkup = generateDescMarkup(technologies, description);

  return `${linksMarkup}: ${descMarkup}`;
};

export default generateProjectMarkup;
