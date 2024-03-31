import axios from 'axios';

const BASE_URL = 'https://657099a609586eff6641af70.mockapi.io/';

export const getSummary = async position => {
  try {
    const res = await axios.get(`${BASE_URL}summary?name=${position}`);
    console.log();
    return res.data[0].text;
  } catch (error) {
    alert(error.message);
  }
};
