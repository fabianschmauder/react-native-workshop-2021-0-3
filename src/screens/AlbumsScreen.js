import {loadAlbums} from "../services/albumService";
import {ScrollView} from "react-native";
import React, {useEffect, useState} from 'react';
import Album from "../components/Album";

export default function AlbumScreen() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        loadAlbums().then(setAlbums)
    }, [])

    return (
        <ScrollView>
            {albums.map(album => <Album key={album.id} title={album.title}/>)}
        </ScrollView>
    );
}
