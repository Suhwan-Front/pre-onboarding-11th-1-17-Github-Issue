import React, { useContext, useEffect, useRef } from 'react';
import { ListContext } from '../contexts/provider/ListProvider';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';
import useInfiniteScroll from '../hooks/useInfinityScroll';

const IssueListPage = () => {
  const { issueList, fetchIssueList } = useContext(ListContext);
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);

  useEffect(() => {
    fetchIssueList();
  }, []);

  useEffect(() => {
    if (Intersecting) fetchIssueList();
  }, [Intersecting]);

  return (
    <IssueWrap>
      {issueList.map((issue: any, index: number) => (
        <IssueListItem key={index} issue={issue} />
      ))}
      <div style={{ height: '1px' }} />
      {issueList.length % 4 === 3 && <Advertisement />}
      <div ref={target} style={{ height: '1px' }} />
    </IssueWrap>
  );
};

export default IssueListPage;
