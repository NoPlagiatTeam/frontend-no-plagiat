export const checkPassword = (password) => {
  if (password.length >= 6) {
    return true;
  }

  return false;
};
