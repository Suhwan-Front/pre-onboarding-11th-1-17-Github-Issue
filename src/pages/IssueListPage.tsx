import React, { useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../contexts/GitHubContext/GitHubContext';
import { getIssueList } from '../utils/apiUtils';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import IssueListItem from '../components/IssueList/IssueListItem';
import Advertisement from '../components/Advertisement/Advertisement';

const IssueListPage = () => {
  const { issueList, fetchIssueList, setIssueList } = useContext(GitHubContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIssueList();
  }, []);

  const infinityScroll = async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      setLoading(true);
      await fetchMoreIssueList();
      setLoading(false);
    }
  };

  const fetchMoreIssueList = async () => {
    try {
      const currentPage = Math.ceil(issueList.length / 10) + 1;
      const newIssueList = await getIssueList(currentPage, 10);
      setIssueList((prevList) => [...prevList, ...newIssueList]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infinityScroll);
    return () => {
      window.removeEventListener('scroll', infinityScroll);
    };
  }, []);
  return (
    <IssueWrap>
      {issueList.map((issue: any, index: number) =>
        (index + 1) % 4 === 0 ? (
          <IssueListItem key={issue.id} issue={issue}>
            <Advertisement />
          </IssueListItem>
        ) : (
          <IssueListItem key={issue.id} issue={issue} />
        )
      )}
    </IssueWrap>
  );
};

export default IssueListPage;
