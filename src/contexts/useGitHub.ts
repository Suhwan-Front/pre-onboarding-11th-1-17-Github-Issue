import { useContext } from 'react';
import { ListContext } from './provider/ListProvider';
import { DetailContext } from './provider/DetailProvider';

const useGitHub = () => {
  const { issueList, fetchIssueList } = useContext(ListContext);
  const { issue, fetchIssue } = useContext(DetailContext);

  return { issueList, issue, fetchIssueList, fetchIssue };
};

export default useGitHub;
