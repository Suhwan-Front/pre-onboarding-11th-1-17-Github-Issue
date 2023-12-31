/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import IssueDetail from '../components/IssueDetail/IssueDetail';
import { useDetailIssue } from '../hooks/useIssue';

const IssueDetailPage = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const { issue, fetchIssue, fetchError, resetIssue } = useDetailIssue();

  useEffect(() => {
    fetchIssue(parseInt(issueNumber || '', 10));
    return () => {
      resetIssue();
    };
  }, []);

  if (fetchError) {
    return <ErrorPage errorContent={fetchError} />;
  }

  return (
    <>
      {issue && (
        <IssueDetail
          avatar_url={issue.user.avatar_url}
          issue={issue}
          body={issue.body}
        />
      )}
    </>
  );
};

export default IssueDetailPage;
