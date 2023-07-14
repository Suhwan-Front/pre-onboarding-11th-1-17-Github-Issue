import { createContext, ReactNode, useState } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  handleLoading: (isloading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  handleLoading: () => null,
});

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
