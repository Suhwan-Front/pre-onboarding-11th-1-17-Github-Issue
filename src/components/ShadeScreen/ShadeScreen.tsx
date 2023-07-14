import { ReactNode } from 'react';
import { Wrapper } from './ShadeScreenPresenter';

interface ShadeScreenProps {
  children: ReactNode;
}

export const ShadeScreen = ({ children }: ShadeScreenProps) => (
  <Wrapper>{children}</Wrapper>
);
