export const TOKEN_KEY = "@watchlife-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
// export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhYnJ5ZWwiLCJpZCI6MSwiaWF0IjoxNTg5ODQwMzEyfQ.qpS_pSx0rjZ8iwkb76QQ8lGyXuZvMn_Fk8FdkATwRhQ";
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
