import { useFetchers } from 'react-router-dom';

import { Loader } from 'components/Loader';

export const FetcherInProgress = () => {
  const fetchers = useFetchers();
  const isLoading = fetchers.some((f) => {
    type FetcherState = typeof f.state;

    return (['loading', 'submitting'] as FetcherState[]).includes(f.state);
  });

  return isLoading ? <Loader /> : null;
};
