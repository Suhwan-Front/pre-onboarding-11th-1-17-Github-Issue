import React from 'react';
import IssueListItem from '../IssueList/IssueListItem';
import { IssueWrap } from '../IssueList/IssueListPresenter';
import {
  DetailWrapper,
  DetailHeader,
  DetailAvatar,
  DetailContent,
} from './IssueDetailPresenter';

interface IssueDetailProps {
  avatar_url: string;
  issue: any;
  body: string;
}

const IssueDetail = ({ avatar_url, issue, body }: IssueDetailProps) => (
  <DetailWrapper>
    <DetailHeader>
      <DetailAvatar src={avatar_url} />
      <IssueWrap>
        <IssueListItem key={null} issue={issue} />
      </IssueWrap>
    </DetailHeader>

    <DetailContent>{body}</DetailContent>
  </DetailWrapper>
);

export default IssueDetail;
