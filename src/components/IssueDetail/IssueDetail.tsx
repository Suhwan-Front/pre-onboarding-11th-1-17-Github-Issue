import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GitHubContext } from '../../contexts/GitHubContext/GitHubContext';

const IssueDetail = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const { issue, fetchIssue } = useContext(GitHubContext);

  useEffect(() => {
    fetchIssue(parseInt(issueNumber || '', 10));
  }, []);

  if (!issue) {
    return <>로딩중입니다...</>;
  }

  if (issue.number !== parseInt(issueNumber || '', 10)) {
    return <>로딩중입니다...</>;
  }

  return (
    <div>
      <h3>Issue #{issue.number}</h3>
      <h4>{issue.title}</h4>
      <div>작성자: {issue.user.login}</div>
      <div>작성일: {issue.created_at}</div>
      <div>코멘트 수: {issue.comments}</div>
      <div>
        <img src={issue.user.avatar_url} alt="작성자 프로필 이미지" />
      </div>
      <div>{issue.body}</div>
    </div>
  );
};

export default IssueDetail;
