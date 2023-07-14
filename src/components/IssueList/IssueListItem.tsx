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
  IssueListLink,
} from './IssueListPresenter';
import calculateDate from '../../utils/calculateDate';

const IssueListItem = ({ issue }: { issue: any }) => (
  <IssueListItemBox>
    <IssueListLink to={`/issue/${issue.number}`}>
      <IssueTitleWrapper>
        <IssueNumber># {issue.number}</IssueNumber>
        <IssueTitle>{issue.title}</IssueTitle>
      </IssueTitleWrapper>
      <IssueUser>작성자 : {issue.user.login}</IssueUser>
      <IssueDate>작성일 : {calculateDate(issue.created_at)}</IssueDate>
      <IssueComments>코멘트 : {issue.comments}</IssueComments>
    </IssueListLink>
  </IssueListItemBox>
);
export default React.memo(IssueListItem);
