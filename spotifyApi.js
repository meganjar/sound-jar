
import { init, axiosInstance } from "./spotifyAuth";
console.log("hi")

async function getTopSongs() {
    try {
        axiosInstance.get('/me/top/tracks')
        console.log(response);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
init();
getTopSongs();
getAboutMe();

async function getAboutMe() {
    try {
        const axiosInstance = getAxiosInstance();
        const response = await axiosInstance.get('/me');
        return response.data; 

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}





async function createPlaylist() {
    try {
        const playlist = await axiosInstance.post('/users/{user_id}/playlists', {
            name: 'From the sound jar',
            description: 'new tracks you didn’t ask for but will definitely want.',
            public: true
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}