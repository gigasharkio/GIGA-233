import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

const WrapperStyled1 = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    @media (max-width: 1290px) {
        width: 100vw;
        height: 100vh;
        position: absolute;
        transform: translate(-26%, -50%);
    
    }
`;

const ModalStyled = styled.div`
    background-color: black;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-height: 100vh;
    max-width: 660px;
    width: 100%;
    transform: translate(-%, -10%);

    @media (max-width: 1290px) {
        transform: translate(1%, 20%);
        
    }

`;

const TitleStyled = styled.span`
    ${fonts.semiBold};
    color: white;
    font-size: 22px;
`;

const HeaderStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 12px;
`;

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    overflow-y: auto;
    width: 100%;

    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 14px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${color.greyIcons};
        border-radius: 30px;
        border: 3px solid transparent;
    }
    &::-webkit-scrollbar-button {
        height: 5px;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`;

const WalletCardStyled = styled.div`
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;

    @media (max-width: 1290px) {
        padding: 8px;
    }

    &:hover {
        background-color: #03fcd3;
    }

    &:active {
        background-color: ${color.blueLight2};
    }
`;

const GridItemStyled = styled.div`
    border: 1px solid rgba(195, 195, 195, 0.13);
    padding: 4px;
`;

const WalletLogo = styled.div`
    align-self: center;
    height: 40px;
    width: fit-content;
    margin-bottom: 8px;
    pointer-events: none;
`;

const WalletNameStyled = styled.span`
    ${fonts.semiBold};
    color: white;
    font-size: 18px;
`;

export default {
    GridItemStyled,
    GridStyled,
    HeaderStyled,
    ModalStyled,
    TitleStyled,
    WalletCardStyled,
    WalletLogo,
    WalletNameStyled,
    WrapperStyled1,
};
