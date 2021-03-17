import axios from "axios";

const albumUrl = "https://jsonplaceholder.typicode.com/albums";

export const loadAlbums = () => {
   return axios.get(albumUrl).then(response => response.data)
}
