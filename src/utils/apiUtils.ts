import React from 'react';
import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_GIT_ISSUE_ACCESS_TOKEN;
const repoOwner = 'facebook';
const repo = 'react';

export const getIssueList = async (page: number, perPage: number) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repo}/issues`,
      {
        params: {
          sort: 'comments',
          page,
          per_page: perPage,
        },
        headers: {
          Authorization: `${ACCESS_TOKEN}`,
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
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repo}/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `${123}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
