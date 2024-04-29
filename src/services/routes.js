// url
const URL_SERVER = "http://localhost:5000";

// routes
export const routes = [
  {
    typeRequest: "POST",
    path: "/analyse_doc",
  },
  {
    typeRequest: "POST",
    path: "/traitement_doc",
  },
  {
    typeRequest: "POST",
    path: "/detection",
  },
  {
    typeRequest: "POST",
    path: "/getPlagiaDetail",
  },
  {
    typeRequest: "POST",
    path: "/api/user/register",
  },
  {
    typeRequest: "POST",
    path: "/api/user/login",
  },
];

export default URL_SERVER;
