import { useFetcher } from '@remix-run/react';
import { useCallback } from 'react';

export default function Index() {
  const {
    state: firstFetcherState,
    load: loadFirstFetcher,
    data: firstFetcherData,
  } = useFetcher({ key: 'api' });
  const {
    state: secondFetcherState,
    load: loadSecondFetcher,
    data: secondFetcherData,
  } = useFetcher({ key: 'api' });

  const submitBoth = useCallback(() => {
    loadFirstFetcher('/api');
    loadSecondFetcher('/api');
  }, [loadFirstFetcher, loadSecondFetcher]);

  return (
    <div>
      <button onClick={submitBoth}>Load Fetchers</button>
      <pre>
        Object.is(firstFetcher.data, secondFetcher.data) ==={' '}
        {Object.is(firstFetcherData, secondFetcherData).toString()}
      </pre>
      <pre>
        {JSON.stringify(
          {
            'firstFetcher.status': firstFetcherState,
            'secondFetcher.status': secondFetcherState,
            'firstFetcher.data': firstFetcherData ?? '<undefined>',
            'secondFetcher.data': secondFetcherData ?? '<undefined>',
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
