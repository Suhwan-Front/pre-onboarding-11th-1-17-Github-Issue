import styled from 'styled-components';

const IssueWrap = styled.ul`
  list-style: none;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

const IssueListItemBox = styled.li`
  padding: 10px 0 20px 10px;
  border-bottom: 1px solid #ccc;
  position: relative;
  &:hover {
    background: #efefef;
    transition: all 0.6s;
  }
`;

const IssueTitleWrapper = styled.div`
  padding: 15px 0;
`;

const IssueNumber = styled.span`
  padding-right: 10px;
`;

const IssueTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
`;

const IssueUser = styled.span`
  padding-right: 20px;
  color: #333;
`;

const IssueDate = styled.span`
  color: #666;
`;

const IssueComments = styled.span`
  position: absolute;
  right: 10px;
  color: #666;
`;

export {
  IssueWrap,
  IssueListItemBox,
  IssueTitleWrapper,
  IssueNumber,
  IssueTitle,
  IssueUser,
  IssueDate,
  IssueComments,
};
