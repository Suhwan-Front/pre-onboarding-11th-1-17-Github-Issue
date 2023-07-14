/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useState } from 'react';
import { useLoading } from '../../hooks/useLoading';
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
  resetIssue: () => void;
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
  resetIssue: () => null,
};

export const DetailContext = createContext<DetailContextProps>(
  initialDetailContext
);

export const DetailProvider = ({ children }: DetailProviderProps) => {
  const [issue, setIssue] = useState<GitHubIssueDetail | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { handleLoading } = useLoading();

  const fetchIssue = async (issueNumber: number) => {
    try {
      handleLoading(true);
      const data = await getIssue(issueNumber);
      handleLoading(false);
      setIssue(data);
    } catch (error) {
      const err = error as SystemError;
      setFetchError(err.message);
    }
  };

  const resetIssue = () => {
    setIssue(null);
  };

  return (
    <DetailContext.Provider
      value={{ issue, fetchIssue, fetchError, resetIssue }}
    >
      {children}
    </DetailContext.Provider>
  );
};
