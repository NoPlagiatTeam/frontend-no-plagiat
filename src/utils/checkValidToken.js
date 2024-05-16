import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // convertir en secondes
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true; // en cas d'erreur de décodage ou si le token est invalide
  }
};
