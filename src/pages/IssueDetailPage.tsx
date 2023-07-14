import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContext } from '../contexts/provider/DetailProvider';
import {
  DetailAvatar,
  DetailContent,
  DetailHeader,
  DetailWrapper,
} from '../components/IssueDetail/IssueDetailPresenter';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';
import Loading from '../components/IssueList/Loading';
import IssueListItem from '../components/IssueList/IssueListItem';
import ErrorPage from './ErrorPage';

const IssueDetail = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const { issue, fetchIssue, fetchError } = useContext(DetailContext);

  useEffect(() => {
    fetchIssue(parseInt(issueNumber || '', 10));
  }, []);

  if (!issue) {
    return <Loading />;
  }

  if (issue.number !== parseInt(issueNumber || '', 10)) {
    return <Loading />;
  }

  if (fetchError) {
    return <ErrorPage errorContent={fetchError} />;
  }

  return (
    <DetailWrapper>
      <DetailHeader>
        <DetailAvatar src={issue.user.avatar_url} />
        <IssueWrap>
          <IssueListItem key={null} issue={issue} />
        </IssueWrap>
      </DetailHeader>

      <DetailContent>{issue.body}</DetailContent>
    </DetailWrapper>
  );
};

export default IssueDetail;
