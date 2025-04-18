
import styled from 'styled-components'
import LogoImg from "../assets/Group.png"
import ThemeLogo from "../assets/Vector(1).png"

const HeaderContainer = styled.header`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
color: white;
padding: 2rem;
/* max-width: 90%; */

`

const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
   

`

const Logo = styled.img`
    width:40px;
    height:auto;
`


const MenuList = styled.ul`
list-style:none;
display:flex;
    gap:20px;
    align-items:center;
    

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

 

 
 




function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <Logo src={LogoImg} alt='Logo' />
                <MenuList>
                    <MenuItem><MenuLink href='#about'>About</MenuLink></MenuItem>
                    <MenuItem><MenuLink href='#about'>Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink className='contact-btn' href='#about'>Contact</MenuLink></MenuItem>
                </MenuList>

                <Logo src={ThemeLogo} />


            </Nav>
        </HeaderContainer>
    )
}

export default Header
