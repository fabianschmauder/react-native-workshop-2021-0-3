import React from 'react';
import styled from 'styled-components/native'

const AlbumCard = styled.View`
  background-color: #005199;
  margin: 5px;
  padding: 10px;
`

const AlbumTitle = styled.Text`
  color: azure;
`;

export default function Album({title}) {
    return <AlbumCard>
        <AlbumTitle>{title}</AlbumTitle>
    </AlbumCard>
}

