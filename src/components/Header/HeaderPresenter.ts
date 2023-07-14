import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTitle = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const HeaderTitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export { HeaderTitle, HeaderTitleLink };
