import {
  useState,
  ReactNode,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react';
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
}

interface ListProviderProps {
  children: ReactNode;
}

const initialListContext: ListContextProps = {
  issueList: [],
  fetchIssueList: async () => {},
  setIssueList: () => {},
};

export const ListContext = createContext<ListContextProps>(initialListContext);

export const ListProvider = ({ children }: ListProviderProps) => {
  const [issueList, setIssueList] = useState<GiHubIssueList[]>([]);

  const fetchIssueList = async () => {
    try {
      const currentPage = Math.ceil(issueList.length / 10) + 1;
      const newIssueList = await getIssueList(currentPage, 10);
      setIssueList((prevList) => [...prevList, ...newIssueList]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListContext.Provider value={{ issueList, fetchIssueList, setIssueList }}>
      {children}
    </ListContext.Provider>
  );
};
