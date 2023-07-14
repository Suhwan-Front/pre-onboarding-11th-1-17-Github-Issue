import { OWNER, REPO } from '../constants/const';
import { HeaderTitle, HeaderTitleLink } from './HeaderPresenter';

const Header = () => (
  <HeaderTitle>
    <HeaderTitleLink to={'/'}>
      <h1>
        {OWNER}/{REPO}
      </h1>
    </HeaderTitleLink>
  </HeaderTitle>
);

export default Header;
