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
}

interface DetailProviderProps {
  children: ReactNode;
}

const initialDetailContext: DetailContextProps = {
  issue: null,
  fetchIssue: async () => {},
};

export const DetailContext = createContext<DetailContextProps>(
  initialDetailContext
);

export const DetailProvider = ({ children }: DetailProviderProps) => {
  const [issue, setIssue] = useState<GitHubIssueDetail | null>(null);

  const fetchIssue = async (issueNumber: number) => {
    try {
      const data = await getIssue(issueNumber);
      setIssue(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DetailContext.Provider value={{ issue, fetchIssue }}>
      {children}
    </DetailContext.Provider>
  );
};
