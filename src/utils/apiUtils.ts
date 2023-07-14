import { OWNER, REPO } from '../components/constants/const';
import { axiosClient } from './axiosClient';

export const getIssueList = async (page: number, perPage: number) => {
  try {
    const response = await axiosClient(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
      {
        params: {
          sort: 'comments',
          page,
          per_page: perPage,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getIssue = async (issueNumber: number) => {
  try {
    const response = await axiosClient(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues/${issueNumber}`
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
