import axios from 'axios';

const BASE_URL = 'https://657099a609586eff6641af70.mockapi.io/';

export const getSummary = async position => {
  try {
    const res = await axios.get(`${BASE_URL}portfolio/1`);
    const { text } = res.data.summaries.find(el => el.name === position);
    return text;
  } catch (error) {
    alert(error.message);
  }
};

export const getAllProjects = async () => {
  try {
    const res = await axios.get(`${BASE_URL}portfolio/1`);
    return res.data.projects;
  } catch (error) {
    alert(error.message);
  }
};

export const getProject = async projectName => {
  try {
    const res = await axios.get(`${BASE_URL}portfolio/1`);
    const project = res.data.projects.find(el => el.name === projectName);
    return project;
  } catch (error) {
    alert(error.message);
  }
};
