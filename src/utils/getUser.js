import URL_SERVER from "../services/routes";

export const getUser = async (userId, token) => {
  try {
    const response = await fetch(URL_SERVER + "/api/user/getById/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const user = await response.json();
    return user;
  } catch (err) {
    console.log(err);
  }
};
