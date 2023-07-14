import { OWNER, REPO } from '../constants/const';
import HeaderTitle from './HeaderPresenter';

const Header = () => (
  <HeaderTitle>
    <h1>
      {OWNER}/{REPO}
    </h1>
  </HeaderTitle>
);

export default Header;
