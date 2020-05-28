import React, { useState } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import AddPersonModal from '../modals/add-person-modal';

interface IProps {
    children?: any;
    widthInPx: string;
}

interface IMainListItem {
    icon: string;
    label: string;
    selected: boolean;
    route: string;
}

const Navbar: React.FC<IProps> = ({ widthInPx }) => {

    const history = useHistory();

    const [isModalAddPersonOpen, setIsModalAddPersonOpen] = useState(false);
    function openAddPersonModal() {
        setIsModalAddPersonOpen(true);
    }

    function closeAddPersonModal() {
        setIsModalAddPersonOpen(false);
    }

    const [mainListItems, setMainListItems] = useState<IMainListItem[]>([
        { icon: "home", label: "Início", selected: true, route: '/' },
        // { icon: "search", label: "Search", selected: false, route: '/search' },
        // { icon: "library_books", label: "Your Library", selected: false, route: '/' },
    ]);

    function selectMainListItem(selectedItem: IMainListItem) {
        history.push(selectedItem.route);
        setMainListItems(mainListItems => {
            return mainListItems.map(listItem => {
                listItem.selected = selectedItem.icon === listItem.icon;
                return listItem;
            })
        })
    }

    return (
        <>
            <S.NavbarContainer widthInPx={widthInPx}>
                <S.LogoContainer>
                    <img src="https://www.nutring.com.br/assets/logo-branco.png" alt="Logo" />
                </S.LogoContainer>

                <S.NavbarMainList>
                    {mainListItems.map(listItem => (
                        <S.NavbarMainListItem
                            key={listItem.icon}
                            selected={listItem.selected}
                            onClick={() => selectMainListItem(listItem)}
                            >
                            <i className="material-icons">{listItem.icon}</i> {listItem.label}
                        </S.NavbarMainListItem>
                    ))}
                </S.NavbarMainList>

                <S.NavbarSecondListContainer>
                    <h2>OPTIONS</h2>
                    <S.NavbarSecondList>
                        <S.NavbarSecondListItem onClick={openAddPersonModal}>
                            <i className="material-icons">add</i>
                            Criar Pessoa
                        </S.NavbarSecondListItem>
                    </S.NavbarSecondList>
                </S.NavbarSecondListContainer>

            </S.NavbarContainer>

            <AddPersonModal isOpen={isModalAddPersonOpen}
                onRequestClose={closeAddPersonModal} />
        </>
    );

}

export default Navbar;