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
import calculateDate from '../../utils/calculateDate';

const IssueListItem = ({ issue }: { issue: any }) => (
  <IssueListItemBox>
    <IssueTitleWrapper>
      <Link to={`/issue/${issue.number}`}>
        <IssueNumber># {issue.number}</IssueNumber>
        <IssueTitle>{issue.title}</IssueTitle>
      </Link>
    </IssueTitleWrapper>
    <IssueUser>작성자 : {issue.user.login}</IssueUser>
    <IssueDate>작성일 : {calculateDate(issue.created_at)}</IssueDate>
    <IssueComments>코멘트 : {issue.comments}</IssueComments>
  </IssueListItemBox>
);
export default React.memo(IssueListItem);
