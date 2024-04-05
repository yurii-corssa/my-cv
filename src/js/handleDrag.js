const dragContainer = document.querySelector('.js-tech-inputs-container');
const skillList = document.querySelector('.js-tech-skills');

let dragItem = null;

const onDragStart = e => {
  dragItem = e.target.closest('.input-wrapper');
  dragItem.classList.add('dragging');
};

const onDragEnd = e => {
  if (dragItem) {
    dragItem.classList.remove('dragging');
    dragItem = null;
    updateNamesAndList();
  }
};

const onDragOver = e => {
  e.preventDefault();

  const afterElement = getDragAfterElement(dragContainer, e.clientY);
  const currentDragging = dragContainer.querySelector('.dragging');

  if (currentDragging && afterElement) {
    dragContainer.insertBefore(currentDragging, afterElement);
  }
};

dragContainer.addEventListener('dragstart', onDragStart);
dragContainer.addEventListener('dragend', onDragEnd);
dragContainer.addEventListener('dragover', onDragOver);

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll('.input-wrapper:not(.dragging)'),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

function updateNamesAndList() {
  const inputs = dragContainer.querySelectorAll('.js-tech-skill-input');
  inputs.forEach((input, index) => {
    const skillNumber = index + 1;
    input.name = `tech-skill-${skillNumber}`;
  });

  const listItems = [...skillList.querySelectorAll('.js-tech-skill-item')];
  skillList.innerHTML = '';
  inputs.forEach(input => {
    const itemText = input.value;
    const listItem = listItems.find(item =>
      item.textContent.includes(itemText)
    );

    if (listItem) {
      skillList.appendChild(listItem);
    }
  });
}
