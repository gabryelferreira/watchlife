import React from 'react';
import * as S from './styles';
import useComponentVisible from '../../utils/hooks/useComponentVisible';

interface IProps {
    children?: any;
    navbarWidthInPx: string;
    heightInPx: string;
}

const Topbar: React.FC<IProps> = ({ navbarWidthInPx, heightInPx }) => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <S.TopbarContainer navbarWidthInPx={navbarWidthInPx} heightInPx={heightInPx}>
            <S.TopbarUserContainer ref={ref}
            onClick={() => setIsComponentVisible(!isComponentVisible)}
            selected={isComponentVisible}>
                <img src="https://avatars0.githubusercontent.com/u/29335903?s=460&u=9f9b0717ccb57c6cbe7d06e1859d6b68869d08e3&v=4" alt="User" />
                <p>Gabryel Ferreira</p>
                <i className="material-icons">play_arrow</i>

                {isComponentVisible && (
                    <S.TopbarUserList>
                        <li>Sua conta</li>
                        <li>Perfil</li>
                        <li>Sair</li>
                    </S.TopbarUserList>
                )}

            </S.TopbarUserContainer>
        </S.TopbarContainer>
    );

}

export default Topbar;