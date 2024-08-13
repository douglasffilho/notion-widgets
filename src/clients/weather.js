/* eslint-disable no-console */
import axios from 'axios';

const api = axios.create();

export const fromLocation = async (location) => {
  return api
    .get(`/api/weather?location=${location}`)
    .then((data) => data.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
};
