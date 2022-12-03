// return the token from the local storage
export const getToken = () => {
	return localStorage.getItem("token") || null;
};

// remove the token and from the local storage
export const removeUserSession = () => {
	localStorage.removeItem("token");
};

// set the token in the local storage
export const setUserSession = (token) => {
	localStorage.setItem("token", token);
};
