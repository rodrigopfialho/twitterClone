import React from 'react';

import Button from '../Button';

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ExitIcon,
    ProfileData
} from './styles'

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritos</span>
                </MenuButton>
                
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                     <span>Tweetar</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>Rodrigo Pereira</strong>
                    <strong>@rodrigop</strong>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    );
};

export default MenuBar;