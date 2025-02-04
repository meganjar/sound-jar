// redirect user to /authorization endpoint to log in and grant Permissions
const clientId = "e5c13bb90ece4c53be7b2a78ed68f5e6";
const clientSecret = "34bb26f2509c45dc8da4570e783ae899";
const redirectUri = "https://meganjar.github.io/sound-jar/callback.html";
// permissions being requested
const scopes = "user-top-read playlist-modify-public";
// build auth url
export const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
  redirectUri
)}&scope=${encodeURIComponent(scopes)}&show_dialog=true`;

// extract access token from redirected URL
async function getToken() {
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = urlParams.get("access_token");

  return accessToken;
}

let axiosInstance = null;
export async function init() {
  const token = await getToken();
  // if (!token) {
  //     console.error('No access token found.');
  // return;
  // }
  return (axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }));
}
init();

export function getAxiosInstance() {
  if (!axiosInstance) {
    console.error("Error creating axios instance.");
  }
  return axiosInstance;
}
