import styled from "styled-components"

export const Navigation = () => {
     
    const NavContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
    `

    return(
        <NavContainer>
            <h2>Where in the world?</h2>
            <button>Dark mode</button>
        </NavContainer>
    )
}