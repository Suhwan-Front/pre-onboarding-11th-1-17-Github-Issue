import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContext } from '../contexts/provider/DetailProvider';
import {
  DetailAvatar,
  DetailContent,
  DetailHeader,
  DetailWrapper,
} from '../components/IssueDetail/IssueDetailPresenter';
import Loading from '../components/IssueList/Loading';
import IssueListItem from '../components/IssueList/IssueListItem';
import { IssueWrap } from '../components/IssueList/IssueListPresenter';

const IssueDetail = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const { issue, fetchIssue } = useContext(DetailContext);

  useEffect(() => {
    fetchIssue(parseInt(issueNumber || '', 10));
  }, []);

  if (!issue) {
    return <Loading />;
  }

  if (issue.number !== parseInt(issueNumber || '', 10)) {
    return <Loading />;
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
