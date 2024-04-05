import generateDeleteBtn from './markup/generateDeleteBtn';
import generateDrugHandle from './markup/generateDrugHandle';
import generateInputWrapper from './markup/generateInputWrapper';
import generateSkillInput from './markup/generateSkillInput';
import generateSkillItem from './markup/generateSkillItem';

const createSkill = (formContainer, cvContainer, type, value) => {
  const id = `${type}-skill-${formContainer.children.length + 1}`;

  const dragHandle = generateDrugHandle();
  const inputWrp = generateInputWrapper();
  const input = generateSkillInput(type, id, value);
  const deleteBtn = generateDeleteBtn(onDelete);
  const listItem = generateSkillItem(type, id, value);

  inputWrp.appendChild(dragHandle);
  inputWrp.appendChild(input);
  inputWrp.appendChild(deleteBtn);

  const inputRefs = formContainer.insertAdjacentElement('beforeend', inputWrp);
  const listItemRefs = cvContainer.insertAdjacentElement('beforeend', listItem);

  function onDelete(e) {
    inputRefs.remove();
    listItemRefs.remove();
  }

  function onChange(e) {
    listItemRefs.textContent = e.currentTarget.value;
  }

  inputRefs.children[1].addEventListener('input', onChange);
};

export default createSkill;
