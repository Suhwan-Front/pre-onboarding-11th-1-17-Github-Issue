import React, { useState, createContext, ReactNode } from 'react';
import { getIssue, getIssueList } from '../../utils/apiUtils';

//TODO type any를 고쳐야한다
interface GitHubContextProps {
  issueList: any[];
  issue: any | null;
  fetchIssueList: () => void;
  fetchIssue: (issueNumber: number) => void;
}

interface GitHubProviderProps {
  children: ReactNode;
}

const initialContext: GitHubContextProps = {
  issueList: [],
  issue: null,
  fetchIssueList: () => {},
  fetchIssue: () => {},
};

export const GitHubContext = createContext<GitHubContextProps>(initialContext);

export const GithubProvider = ({ children }: GitHubProviderProps) => {
  const [issueList, setIssueList] = useState<any[]>([]);
  const [issue, setIssue] = useState<any | null>(null);

  const fetchIssueList = async () => {
    try {
      const data = await getIssueList();
      setIssueList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIssue = async (issueNumber: number) => {
    try {
      const data = await getIssue(issueNumber);
      setIssue(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GitHubContext.Provider
      value={{
        issueList,
        issue,
        fetchIssueList,
        fetchIssue,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
