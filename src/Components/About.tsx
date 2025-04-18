import styled from "styled-components";
import Vector from "../assets/Vector.png"
import HtmlIcon from "../assets/langs/Frame71.png"
import JSIcon from "../assets/langs/Frame72.png"
import ReactIcon from "../assets/langs/Frame73.png"
const AboutContainer = styled.div`
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    color: #a9a9a9;
    margin: 60px auto;

    @media (max-width: 700px) {
        flex-direction: column;
        text-align: center;

        /* border-top: 2px solid #a9a9a9; */
        margin-top: 100px;
    }


`

const LeftSide = styled.div`
    img {
        border-radius: 30%;
        width: 350px;
    }

    @media (max-width:786px)
    {
        order: 2;
        img{
            width: 300px;
        }
    }

`

const RightSide = styled.div`

@media (max-width: 700px)
{
    p{
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
        line-height: 1;
    }
}
    
    p{
        font-size: 22px;
        line-height: 1.3;
        font-weight: 500;
    }

    h1{
        color:white;
        font-weight: 700;
        font-size: 42px;
    }

    h2{
        font-weight: 700;
    font-size: 12px;
    color: #55e5a4;
    text-align: center;
    margin-bottom: 20px;
    }

    button{
        font-size: 22px;
    background-color: transparent;
    border: 2px solid #55e5a4;
    color: #55e5a4;
    border-radius: 0;
    padding: 10px;
    }
`

const LanguageIcons = styled.div`
    margin: 40px 0;

    img{
        margin:0 15px;
    }

`



function About() {
    return (
        <AboutContainer>
            <LeftSide>
                <img src={Vector} alt="Main Img" />
            </LeftSide>

            <RightSide>
                <h1>About Me</h1>
                <h2>---Who Am I?</h2>
                <p>I am Shafqaat Hassana BS Computer Science graduate (2024) from the University of Okara, Pakistan. As
                    a beginner web developer, I have experience in frontend technologies, WordPress development. My
                    final year project focused on real estate price prediction, where I built a React frontend with a
                    FastAPI backend. I also have experience in website managementI am eager to learn new technologies
                    and grow my skills in web development and data analysis.</p>

                <LanguageIcons>
                    <img src={HtmlIcon} alt="Html" />
                    <img src={JSIcon} alt="Html" />
                    <img src={ReactIcon} alt="Html" />
                    <img src={HtmlIcon} alt="Html" />
                    <img src={ReactIcon} alt="Html" />
                </LanguageIcons>

                <button className="resume">Download Resume</button>
            </RightSide>


        </AboutContainer>
    )
}

export default About
