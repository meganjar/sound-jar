// import * as spotifyApi from "./api/spotifyApi";
// import {clientID, clientSecret} from "./utils/constants";
import { authUrl } from './api/spotifyAuth.js';

const authLinkEl = document.getElementById('auth-url');
authLinkEl.href = authUrl;


// const customInstance = axios.create({
//     baseURL: 'https://api.spotify.com/v1',
//     headers: {
//         'Authorization': 'Bearer ${clientSecret}',
//     },
// });