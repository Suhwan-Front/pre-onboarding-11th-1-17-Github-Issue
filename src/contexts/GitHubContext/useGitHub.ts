import { useContext } from 'react';
import { GitHubContext } from './GitHubContext';

const useGitHub = () => {
  const { issueList, issue, fetchIssueList, fetchIssue } = useContext(
    GitHubContext
  );

  return { issueList, issue, fetchIssueList, fetchIssue };
};

export default useGitHub;
