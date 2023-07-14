import { useContext } from 'react';
import { DetailContext } from '../contexts/provider/DetailProvider';
import { ListContext } from '../contexts/provider/ListProvider';

export const useIssueList = () => useContext(ListContext);

export const useDetailIssue = () => useContext(DetailContext);
