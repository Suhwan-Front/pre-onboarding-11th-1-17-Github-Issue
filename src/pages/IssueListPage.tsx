import React, { useState, useContext, useEffect, useRef } from 'react';
import { ListContext } from '../contexts/provider/ListProvider';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';
import useInfiniteScroll from '../hooks/useInfinityScroll';
import Loading from '../components/IssueList/Loading';
import ScrollObserver from '../components/ScrollObserver/ScrollObserver';
import ErrorPage from './ErrorPage';

const IssueListPage = () => {
  const { issueList, fetchIssueList, fetchError } = useContext(ListContext);
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Intersecting) fetchIssueList();
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [Intersecting]);

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
      {loading && <Loading />}
    </IssueWrap>
  );
};

export default IssueListPage;
