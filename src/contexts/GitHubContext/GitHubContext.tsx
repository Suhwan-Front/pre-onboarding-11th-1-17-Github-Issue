import React, { useState, createContext, ReactNode } from 'react';
import { getIssue, getIssueList } from '../../utils/apiUtils';

interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
}

interface GitHubContextProps {
  issueList: GitHubIssue[];
  issue: GitHubIssue | null;
  fetchIssueList: () => Promise<void>;
  fetchIssue: (issueNumber: number) => Promise<void>;
}

interface GitHubProviderProps {
  children: ReactNode;
}

const initialContext: GitHubContextProps = {
  issueList: [],
  issue: null,
  fetchIssueList: async () => {},
  fetchIssue: async (issueNumber: number) => {},
};

export const GitHubContext = createContext<GitHubContextProps>(initialContext);

export const GithubProvider = ({ children }: GitHubProviderProps) => {
  const [issueList, setIssueList] = useState<GitHubIssue[]>([]);
  const [issue, setIssue] = useState<GitHubIssue | null>(null);

  const fetchIssueList = async () => {
    try {
      const currentPage = Math.ceil(issueList.length / 30) + 1;
      const newIssueList = await getIssueList(currentPage, 10);
      setIssueList((prevList) => [...prevList, ...newIssueList]);
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
