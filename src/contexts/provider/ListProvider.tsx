import {
  useState,
  ReactNode,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react';
import { useLoading } from '../../hooks/useLoading';
import { getIssueList } from '../../utils/apiUtils';

interface GiHubIssueList {
  number: number;
  title: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
}

interface ListContextProps {
  issueList: GiHubIssueList[];
  fetchIssueList: () => Promise<void>;
  setIssueList: Dispatch<SetStateAction<GiHubIssueList[]>>;
  fetchError: string | null;
}

interface ListProviderProps {
  children: ReactNode;
}

interface SystemError {
  code: string;
  message: string;
}

const initialListContext: ListContextProps = {
  issueList: [],
  fetchIssueList: async () => {},
  setIssueList: () => {},
  fetchError: null,
};

export const ListContext = createContext<ListContextProps>(initialListContext);

export const ListProvider = ({ children }: ListProviderProps) => {
  const [issueList, setIssueList] = useState<GiHubIssueList[]>([]);
  const [issueListPage, setIssueListPage] = useState<number>(1);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { handleLoading } = useLoading();

  const fetchIssueList = async () => {
    try {
      const currentPage = issueListPage;
      handleLoading(true);
      const newIssueList = await getIssueList(currentPage, 10);
      handleLoading(false);

      setIssueListPage((prev) => prev + 1);
      setIssueList((prevList) => [...prevList, ...newIssueList]);
    } catch (error) {
      const err = error as SystemError;
      setFetchError(err.message);
    }
  };
  return (
    <ListContext.Provider
      value={{ issueList, fetchIssueList, setIssueList, fetchError }}
    >
      {children}
    </ListContext.Provider>
  );
};
