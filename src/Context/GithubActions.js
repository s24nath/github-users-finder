import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_AUTHKEY = process.env.REACT_APP_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_AUTHKEY}`,
  },
});

// Local function definition starts
export const searchUsers = async (userName) => {
  const params = new URLSearchParams({
    q: userName,
  });
  const response = await githubApi.get(`/search/users?${params}`);
  const data = response.data;
  return data.items;
};
export const getUserAndRepos = async (userName) => {
  const [user, repos] = await Promise.all([
    githubApi.get(`/users/${userName}`),
    githubApi.get(`/users/${userName}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
// Local function definition ends
