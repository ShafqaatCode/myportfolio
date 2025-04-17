
import styled from 'styled-components'
import LogoImg from '../assets/Group.png'

import twittericon from '../assets/Frame9.png'
import LinkedinIcon from '../assets/Frame10.png'
import GitHubIcon from '../assets/Frame12.png'


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 400px;
    background-color: #26313f;

`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin: 20px 0;

    color: #a9a9a9;
   
    cursor: pointer;
    /* border: 2px solid red; */
    text-align: center;
    width: 100%;

`

const MenuItem = styled.li`
    font-size: 24px;
    font-weight: 800px;
    

`

const SocialIcons = styled.img`
cursor: pointer;
width: 80px;
height: auto;
text-align: center;
    
`

const Para = styled.p`
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    color: #a9a9a9;
    font-size: 20px;
    font-weight: 400;
    padding: 20px;
    border-top: 2px solid #4a5058;
`

const Footer = () => {
  return (
   <FooterContainer>
        <img src={LogoImg} alt="Logo" />
        <Menu>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu>

        <div>
            <SocialIcons src={twittericon} />
            <SocialIcons src={GitHubIcon} />
            <SocialIcons src={twittericon} />
            <SocialIcons src={LinkedinIcon} />
        </div>

        <div>
            <Para>© 2023 Niirod. All Rights Reserved.</Para>
        </div>
   </FooterContainer>
  )
}

export default Footer
