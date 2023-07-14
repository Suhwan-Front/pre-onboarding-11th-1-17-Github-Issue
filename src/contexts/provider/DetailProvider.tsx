/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useState } from 'react';
import { getIssue } from '../../utils/apiUtils';

interface GitHubIssueDetail {
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

interface DetailContextProps {
  issue: GitHubIssueDetail | null;
  fetchIssue: (issueNumber: number) => Promise<void>;
  fetchError: string | null;
}

interface DetailProviderProps {
  children: ReactNode;
}

interface SystemError {
  code: string;
  message: string;
}

const initialDetailContext: DetailContextProps = {
  issue: null,
  fetchIssue: async () => {},
  fetchError: null,
};

export const DetailContext = createContext<DetailContextProps>(
  initialDetailContext
);

export const DetailProvider = ({ children }: DetailProviderProps) => {
  const [issue, setIssue] = useState<GitHubIssueDetail | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchIssue = async (issueNumber: number) => {
    try {
      const data = await getIssue(issueNumber);
      setIssue(data);
    } catch (error) {
      const err = error as SystemError;
      setFetchError(err.message);
    }
  };

  return (
    <DetailContext.Provider value={{ issue, fetchIssue, fetchError }}>
      {children}
    </DetailContext.Provider>
  );
};
