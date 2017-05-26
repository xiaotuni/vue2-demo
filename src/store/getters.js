import clientMiddleware from '@/helpers/clientMiddleware';
import ApiClient from '@/helpers/ApiClient';
export const client1 = state => {
  return new ApiClient(null);
};
export const client = state => {
  return clientMiddleware(new ApiClient(null));
};