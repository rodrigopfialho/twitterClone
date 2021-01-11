import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List'

import FollwSuggestion from '../FollwSuggestion';
import News from '../News';
// 
import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles'

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

        <StickyBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                       <FollwSuggestion
                        name="Cleitin Barreto"
                        nickname="@cleintinbarreto"
                       />,
                       <FollwSuggestion
                         name="joaquim silva"
                         nickname="@joaquimsilva"   
                       />,
                       <FollwSuggestion
                         name="maria almeida"
                         nickname="@mariaalmeida"   
                       />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
            </Body>
        </StickyBox>    
        </Container>
    );
};

export default SideBar;