import styled from "styled-components"
import {BsMoon, BsSun} from "react-icons/bs"

export const Navigation = () => {
     
    const NavContainer = styled.div`
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 2rem;
        box-shadow: 0px 3px 14px 0px rgba(134,134,134,0.27);
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;

    `

    const ThemeButton = styled.button`
        background-color: #fff;
        border: none;
        font-size: 0.8rem;
        font-weight: bolder;
        display: flex;
        align-self: center;
        transition: 0.4s all;
        &:hover {
            cursor: pointer;
            background-color: #e4e4e4;

        }

    `

    return(
        <NavContainer>
            <h2>Where in the world?</h2>
            <ThemeButton>
                <BsMoon size={18.5}/>
                <p>Dark mode</p>
            </ThemeButton>
        </NavContainer>
    )
}