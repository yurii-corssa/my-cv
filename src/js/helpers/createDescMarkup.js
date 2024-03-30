const createDescMarkup = (technologies, description) => {
  const techText = `[${technologies.map(el => el).join(', ')}]`;

  return `<p class="desc-text">${techText} ${description}</p>`;
};

export default createDescMarkup;
