import { useContext } from 'react';
import { LoadingContext } from '../contexts/provider/LoadingProvider';

export const useLoading = () => useContext(LoadingContext);
