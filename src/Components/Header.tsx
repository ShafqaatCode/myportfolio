
import styled from 'styled-components'
import LogoImg from "../assets/Group.png"
import ThemeLogo from "../assets/Vector(1).png"
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const HeaderContainer = styled.header`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
color: white;
padding: 2rem;
margin: auto;
max-width: 90%;

`

const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
   

`

const Logo = styled.img`
    width:40px;
    height:auto;
@media (max-width: 786px)
{

    &.ThemeLogo {
        display: none ;
    }
}
`


interface MenuListProps {
    $open: boolean;
}

const MenuList = styled.ul<MenuListProps>`
list-style:none;
display:flex;
gap:20px;
align-items:center;

@media (max-width:786px){
    position: absolute;
    top:80px ;
    left: ${(props) => (props.$open ? '0' : '-100%')};
    /* flex-direction: column; */
    width: 100%;
    background-color: #111;
    padding: 20px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* transition: left 0.3s ease-in-out; */
}
    

`

const MenuItem = styled.li`

`

const MenuLink = styled.a`

 padding: 10px 20px;
 background-color:var(--prime-color);
 border:none;
 text-decoration: none;
 color:var(--bg-color);
 transition: background 0.4s , color 0.4s;
 border-radius: 2px;

 &:hover{
    background-color: transparent;
    color:white;
    border: 1px solid var(--prime-color)
 }
    &.contact-btn{
    background-color: transparent ;
    color: white;
    border: 1px solid white;
    }


 `


const Hamburger = styled.div`
    display: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;


    
    @media (max-width: 786px){
        display: block;
    }
`









const Header: React.FC = ()=> {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <HeaderContainer>
            <Nav>
                <Logo src={LogoImg} alt='Logo' />

                <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <FaTimes /> : <FaBars />
                    }
                </Hamburger>
                <MenuList $open={menuOpen}>
                    <MenuItem><MenuLink href='#about'>About</MenuLink></MenuItem>
                    <MenuItem><MenuLink href='#Projects'>Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='contact-btn' href='#contact'>Contact</MenuLink></MenuItem>
                </MenuList>

                <Logo className="ThemeLogo" src={ThemeLogo} />


            </Nav>
        </HeaderContainer>
    )
}

export default Header
