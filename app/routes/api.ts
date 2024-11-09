import type { LoaderFunctionArgs } from '@remix-run/node';

function wait(ms: number, signal: AbortSignal) {
  return new Promise((resolve) => {
    const timeout = setTimeout(resolve, ms);
    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
    });
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  await wait(1_000, request.signal);
  return { message: 'hello' };
}
