import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import Loading from '../IssueList/Loading';
import { ShadeScreen } from '../ShadeScreen/ShadeScreen';

const LoadingScreen = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <ShadeScreen>
          <Loading />
        </ShadeScreen>
      )}
    </>
  );
};

export default LoadingScreen;
