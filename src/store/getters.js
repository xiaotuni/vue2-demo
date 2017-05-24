import clientMiddleware from '@/helpers/clientMiddleware';
import ApiClient from '@/helpers/ApiClient';
export const client = state => {
  return clientMiddleware(new ApiClient(null));
};
