// url
// const URL_SERVER = 'http://87.106.235.98';
const URL_SERVER = 'http://localhost:5000';

// routes
export const routes = [
  {
    typeRequest: 'POST',
    path: '/api/analyse_doc',
  },
  {
    typeRequest: 'POST',
    path: '/api/traitement_doc',
  },
  {
    typeRequest: 'POST',
    path: '/api/detection',
  },
  {
    typeRequest: 'POST',
    path: '/api/getPlagiaDetail',
  },
  {
    typeRequest: 'POST',
    path: '/api/user/register',
  },
  {
    typeRequest: 'POST',
    path: '/api/user/login',
  },
  {
    typeRequest: 'GET',
    path: '/api/souscription/ByUser/',
  },
  {
    typeRequest: 'POST',
    path: '/api/souscription/add',
  },
];

export default URL_SERVER;
