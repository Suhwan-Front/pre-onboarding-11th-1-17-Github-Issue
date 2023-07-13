import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHubContext } from '../../contexts/GitHubContext/GitHubContext';
import { getIssueList } from '../../utils/apiUtils';
import {
  IssueWrap,
  IssueListItemBox,
  IssueTitleWrapper,
  IssueNumber,
  IssueTitle,
  IssueUser,
  IssueDate,
  IssueComments,
} from './IssueListPresenter';

const IssueList = () => {
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
      {issueList.map((issue: any, index: number) => (
        <IssueListItemBox key={index}>
          <IssueTitleWrapper>
            <Link to={`/issue/${issue.number}`}>
              <IssueNumber># {issue.number}</IssueNumber>
              <IssueTitle>{issue.title}</IssueTitle>
            </Link>
          </IssueTitleWrapper>
          <IssueUser>작성자 : {issue.user.login}</IssueUser>
          <IssueDate>작성일 : {issue.created_at}</IssueDate>
          <IssueComments>코멘트 : {issue.comments}</IssueComments>
          {index % 4 === 3 && (
            <div>
              <br />
              <button
                onClick={() => (location.href = 'https://www.wanted.co.kr/')}
              >
                광고입니다.
              </button>
            </div>
          )}
        </IssueListItemBox>
      ))}
      {loading && <div>이슈를 불러오는 중입니다...</div>}
    </IssueWrap>
  );
};

export default IssueList;
