// return the token from the local storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const getUser = () => {
	return localStorage.getItem("user") || null;
}

// remove the token and from the local storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
	localStorage.removeItem("user");
};

// set the token in the local storage
export const setUserSession = (data) => {
  localStorage.setItem("token", data.token);
	localStorage.setItem("user", data.user);
};
