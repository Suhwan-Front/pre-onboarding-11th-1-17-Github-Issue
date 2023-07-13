import React, { useContext, useEffect, useState, useRef } from 'react';
import { GitHubContext } from '../contexts/GitHubContext/GitHubContext';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';
import useInfiniteScroll from '../hooks/useInfinityScroll';

const IssueListPage = () => {
  const { issueList, fetchIssueList } = useContext(GitHubContext);
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
      {issueList.map((issue: any, index: number) =>
        (index + 1) % 4 === 0 ? (
          <IssueListItem key={index} issue={issue}>
            <Advertisement />
          </IssueListItem>
        ) : (
          <IssueListItem key={index} issue={issue} />
        )
      )}
      <div ref={target} style={{ height: '1px' }} />
    </IssueWrap>
  );
};

export default IssueListPage;
