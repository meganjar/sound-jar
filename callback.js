import { init, getAxiosInstance } from "./spotifyAuth.js";
const axiosInstance = getAxiosInstance();
window.getAboutMe = getAboutMe;
window.getTopSongs = getTopSongs;


const aboutMeEl = document.getElementById("about-me-data")
const aboutMeDiv = document.getElementById("about-me")

init();
async function getAboutMe() {
    try {

        const response = await axiosInstance.get('/me');
        console.log(response.data);


        aboutMeEl.textContent = `Name: ${response.data.display_name}, Followers: ${response.data.followers.total}`;
        aboutMeDiv.style.display = "block";
        document.getElementById('topSongsTable').style.display = "none";

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function getTopSongs() {
    try {
        const response = await axiosInstance.get('/me/top/tracks');
        console.log(response.data);
        document.getElementById('topSongsTable').style.display = "block";
        aboutMeDiv.style.display = "none";
        for (let i = 0; i < 21; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${i + 1}</td>
                <td><img src="${response.data.items[i].album.images[0].url}" alt="Cover" style="width: 20px;"></td>
                <td>${response.data.items[i].name}</td>
                <td>${response.data.items[i].artists[0].name}</td>

                <td>${response.data.items[i].duration_ms}</td>
            `;
            document.getElementById('topSongsBody').appendChild(row);

            
        }
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