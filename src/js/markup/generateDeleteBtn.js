const generateDeleteBtn = onDelete => {
  const deleteBtn = document.createElement('button');

  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', onDelete);

  return deleteBtn;
};

export default generateDeleteBtn;
