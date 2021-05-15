import restClient from './restclient';

export const getTopUsers = (username) => {
  return restClient.get(`/users/${username}`);
}