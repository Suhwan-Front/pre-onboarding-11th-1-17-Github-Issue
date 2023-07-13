import React, { useState, useContext, useEffect, useRef } from 'react';
import { ListContext } from '../contexts/provider/ListProvider';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';
import useInfiniteScroll from '../hooks/useInfinityScroll';
import Loading from '../components/IssueList/Loading';

const IssueListPage = () => {
  const { issueList, fetchIssueList } = useContext(ListContext);
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIssueList();
  }, []);

  useEffect(() => {
    if (Intersecting) fetchIssueList();
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [Intersecting]);

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
      <div style={{ height: '1px' }} />
      <div ref={target} style={{ height: '1px' }} />
      {loading && <Loading />}
    </IssueWrap>
  );
};

export default IssueListPage;
