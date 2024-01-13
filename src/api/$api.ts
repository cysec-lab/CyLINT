import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_xg1d23 } from './lint';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:5001/cyseclint/asia-northeast1/lint' : baseURL).replace(/\/$/, '');
  const PATH0 = '/lint';
  const POST = 'POST';

  return {
    lint: {
      /**
       * @returns Lint Result
       */
      post: (option: { body: Methods_xg1d23['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xg1d23['post']['resBody'], BasicHeaders, Methods_xg1d23['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @returns Lint Result
       */
      $post: (option: { body: Methods_xg1d23['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_xg1d23['post']['resBody'], BasicHeaders, Methods_xg1d23['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
