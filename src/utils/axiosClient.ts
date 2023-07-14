import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.REACT_APP_GIT_ISSUE_ACCESS_TOKEN,
  },
});
