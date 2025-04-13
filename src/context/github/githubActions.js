import axios from "axios";
const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  // headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
  method:"GET",
});
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};
export const getUserAndRepos = async (login) => {
  const [ user, repos ] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
