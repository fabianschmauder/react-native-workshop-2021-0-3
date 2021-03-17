import {loadAlbums} from "../services/albumService";
import {ScrollView, Text, View} from "react-native";
import React, {useEffect, useState} from 'react';

export default function AlbumScreen() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        loadAlbums().then(setAlbums)
    }, [])

    return (
        <ScrollView>
            {albums.map(album => <View key={album.id}>
                <Text>{album.title}</Text>
            </View>)}
        </ScrollView>
    );
}
