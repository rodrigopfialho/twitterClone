import React from 'react';

import Feed from '../Feed';

import {
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon,
    EditButton, 
    Followage} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner> 

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Rodrigo Pereira</h1>
                <h2>@rodrigop16</h2>

                <p>
                    Developer at <a href="http://rocketseat.com.br">Rocketseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Fortaleza, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 18 de setembro de 1998
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>   
                    <span>
                        <strong>672 </strong> seguidores    
                    </span> 
                </Followage>
            </ProfileData>   

            <Feed />
        </Container>
    )
}

export default ProfilePage;