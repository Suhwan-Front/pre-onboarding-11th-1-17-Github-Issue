import React from 'react';
import { Link } from 'react-router-dom';
import {
  IssueListItemBox,
  IssueTitleWrapper,
  IssueNumber,
  IssueTitle,
  IssueUser,
  IssueDate,
  IssueComments,
} from './IssueListPresenter';

const IssueListItem = ({
  issue,
  children,
}: {
  issue: any;
  children?: React.ReactNode;
}) => (
  <IssueListItemBox key={issue.number}>
    <IssueTitleWrapper>
      <Link to={`/issue/${issue.number}`}>
        <IssueNumber># {issue.number}</IssueNumber>
        <IssueTitle>{issue.title}</IssueTitle>
      </Link>
    </IssueTitleWrapper>
    <IssueUser>작성자 : {issue.user.login}</IssueUser>
    <IssueDate>작성일 : {issue.created_at}</IssueDate>
    <IssueComments>코멘트 : {issue.comments}</IssueComments>
    {children}
  </IssueListItemBox>
);

export default IssueListItem;
