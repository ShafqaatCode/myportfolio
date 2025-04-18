import styled from "styled-components"
import Ellipse from "../assets/Vector.png"
import Elipse2 from "../assets/Ellipse2.png"

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
    width: 85%;
    margin: 40px auto;
    /* border: 2px solid red; */

    @media (max-width:700px) {
        flex-direction: column;

       
h3{
    color: white;
    /* border: 2px solid red; */
    font-weight: 500;
    font-size: 20px;
}

h1{
    font-size: 33px !important;
}
p{  font-weight: 400;
    font-size: 20px !important;
    line-height: 1.4;
    color: #a9a9a9;
}
    }

    h1{
        color: #55e5a4;
    font-size: 42px;
    font-weight: 900;
    margin: 10px 0;
    }


h3{
    color: white;
    font-weight: 700;
    font-size: 22px;
}
p{  font-weight: 400;
    font-size: 22px;
    line-height: 1.4;
    color: #a9a9a9;
}

.btn {
    display: flex;
    gap: 20px;
    text-align: center;
    align-items: center;
    margin-top: 40px;
    white-space: nowrap;

    @media (max-width:786px)
    {
        gap:10px
    }
}

.touchbtn{
    padding: 10px 15px;
    background-color: #55e5a4;
    
    color: black;
    border-radius:5px;
    border: 1px solid white;
    cursor: pointer;

    font-size: 1.2rem;

    &:hover{
        background-color: transparent;
        color: white;
    }
}


`


const LeftSide = styled.div`
    
`

const RightSide = styled.div`
    img{
        border-radius: 30%;
        width: 350px;
    }

    @media (max-width:786px)
    {
        img{
            width: 300px;
        }
    }

`

const Hero: React.FC = () => {
    return (
        <div>
            <HeroContainer>
                <LeftSide>
                    <h3>Shafqaat Hassan</h3>
                    <h1>Frontend & WP Developer.</h1>
                    <p>I am a beginner in web Tech with skills in frontend technologies and WordPress. I can create
                        responsive websites, design user-friendly interfaces, and work with websites data to analyze
                        designs. I am eager to learn and improve my skills to build better digital solutions.</p>
                    <div className="btn">
                        <button className="touchbtn">Get In Touch</button>
                        <p><img src={Elipse2} alt="" /> Available Now</p>
                    </div>
                </LeftSide>
                <RightSide>
                    <img src={Ellipse} alt="" />
                </RightSide>
            </HeroContainer>
        </div>
    )
}

export default Hero
