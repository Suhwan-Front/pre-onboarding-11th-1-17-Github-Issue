import React, { useEffect, useRef } from 'react';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';
import useInfiniteScroll from '../hooks/useInfinityScroll';
import ScrollObserver from '../components/ScrollObserver/ScrollObserver';
import ErrorPage from './ErrorPage';
import { useIssueList } from '../hooks/useIssue';

const IssueListPage = () => {
  const { issueList, fetchIssueList, fetchError } = useIssueList();
  const target = useRef(null);
  const intersecting = useInfiniteScroll(target);

  useEffect(() => {
    if (intersecting) {
      fetchIssueList();
    }
  }, [intersecting, fetchIssueList]);

  if (fetchError) {
    return <ErrorPage errorContent={fetchError} />;
  }

  return (
    <IssueWrap>
      {issueList.map((issue: any, index: number) => (
        <React.Fragment key={index}>
          <IssueListItem issue={issue} />
          {(index + 1) % 4 === 0 && (
            <a href="https://www.wanted.co.kr/">
              <Advertisement />
            </a>
          )}
        </React.Fragment>
      ))}
      <ScrollObserver ref={target} />
    </IssueWrap>
  );
};

export default IssueListPage;
