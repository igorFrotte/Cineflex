import styled from "styled-components";

export default function Rodape({children}) {
    return (
        <Base>
            <div>
                {children}
            </div>
        </Base>
    );
}

const Base = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 120px;
    width: 100%;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 375px;
        display: flex;
    }
    & > div > div:first-child {
        width: 65px;
        height: 90px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div >div:last-child {
        font-size: 26px;
        line-height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #293845;
        margin-left: 15px;
    }
    img {
        width: 50px;
        height: 70px;
    }
    p {

    }
`;