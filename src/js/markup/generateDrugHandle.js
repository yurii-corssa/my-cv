const generateDrugHandle = () => {
  const dragHandle = document.createElement('span');
  dragHandle.classList.add('drag-handle');
  dragHandle.textContent = '⋮⋮';

  return dragHandle;
};

export default generateDrugHandle;
