import styled from "styled-components"
import REDashboard from "../assets/RectangleRE.png"
import HtmlIcon from "../assets/langs/Frame71.png"
import JSIcon from "../assets/langs/Frame72.png"
import ReactIcon from "../assets/langs/Frame73.png"
import FoodUi from "../assets/FoodUi.png";
import WeatherImg from "../assets/weather.png";
import ExpenseImg from "../assets/expense.png"
import React from "react"

const CardContainer = styled.div`
    border-radius: 20px;
  
    
`

const Card = styled.div`
     height: 700px;
     
     margin:50px  auto;
     text-align: center;
    width: 540px;
    /* background-color: #55e5a4; */
    border-radius: 10px;
    background-color: #26313F;

    @media (max-width: 700px) {
        max-width: 330px;
        align-items: center;

        h1{
            font-size: 30px !important;
            /* color:red !important; */
        }
    }


    img{
        width: 100%;
        border-radius: 10px;
    }

    .content{
        margin: auto;
        text-align: center;
    }

    h1{
        font-size: 40px;
        font-weight:600;
        color: white;
    }

    p{
        text-align: left;
    color: #a9a9a9;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.4;
    margin: 25px 20px;
    }

    .langs{
        text-align: center;
    color: white;
    margin: 10px 0;
    }
    .icons img{
        display: block;
    }
    .icons2{
        display: flex;
        /* border: 2px solid red; */
        align-items: center;
        justify-content: center;
        gap:40px;
        
        width: 100%;
        /* margin: 20px; */
        object-fit: cover ;
        margin: 20px 0;
    }

    .icons2 img{
        width: 40px;
        height: auto;
    }
    

    button{
        padding: 10px 30px;
        margin: 10px;
        border: none;
    }

    .btn2{
        background-color: transparent;
        border: 2px solid #55efa4;
        color: #55efa4;
        border-radius: 5px;
    }

    .btn2:hover{
        background-color: #55efa4;
        color: black;
    }

    .btn1{
        background-color: #55efa4;
        color: black;
        /* border: 2px solid white; */
    }

    .btn1:hover{
        border: 2px solid white;
        color:white;
        background-color: transparent;
    }
`

const SuperCard = styled.div`
border-radius: 10px;
    width: 90%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
    flex-wrap: wrap;
    margin: auto;

    @media (max-width:1200px) {
        justify-content: center;
        text-align: center;
        /* border: 2px solid red; */
    }

`

const Intro = styled.div`
    color: white;
    font-size: 25px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
`

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    
    button{
        font-size: 1rem;
        width: 100%;
        margin: 0 4px;
        white-space: nowrap;
    }


    @media (max-width:700px)
    {
        flex-direction: column;
        gap: 1rem;
    }
`

const Button = styled.button`
    font-size: 20px;
    background-color: transparent;
    border: 2px solid #55e5a4;
    color: #55e5a4;
    border-radius: 0;
    padding: 10px 30px;
    margin: 0 1rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover{
        background-color: #55e5a4;
        color: black;
    }
`



const Cards: React.FC = () =>  {
    return (
        <>

        <Intro id="Projects">
            <h1>Projects</h1>
            <BtnContainer className="btns">
                <Button>All Projects</Button>
                <Button>FrontEnd</Button>
                <Button>BackEnd</Button>
            </BtnContainer>
        </Intro>
       
        <SuperCard>
            <CardContainer>
                <Card>
                    <div className="img">
                        <img src={REDashboard} alt="" />
                    </div>
                    <div className="content">
                        <h1>Real Estate analysis</h1>
                        <p>My project involved developing a real estate price prediction system. I trained a machine
                            learning model on data and built a frontend using React with a FastAPI backend to provide
                            accurate price estimates.

                        </p>
                    </div>
                    <div className="langs">
                        <h2>Technologies Used</h2>
                        <div className="icons2">

                            <img src={HtmlIcon} alt="" />
                            <img src={ReactIcon} alt="" />
                            <img src={JSIcon} alt="" />

                        </div>
                    </div>
                    <div className="btns">
                        <a href="https://comfy-faloodeh-6dd940.netlify.app/"><button className="btn1"> View Live Demo</button></a>
                        <a href="https://github.com/ShafqaatCode/PortFolioUi"><button className="btn2"> Visit Site</button></a>
                    </div>
                </Card>
            </CardContainer>
            <CardContainer>
                <Card>
                    <div className="img">
                        <img src={FoodUi} alt="" />
                    </div>
                    <div className="content">
                        <h1>Food Website</h1>
                        <p>I Worked on Landing Page. Which have different sections representing the structure of Website. l on data and built a frontend using React with a FastAPI backend to provide
                            accurate price estimates.

                        </p>
                    </div>
                    <div className="langs">
                        <h2>Technologies Used</h2>
                        <div className="icons2">

                            <img src={HtmlIcon} alt="" />
                            <img src={ReactIcon} alt="" />
                            <img src={JSIcon} alt="" />

                        </div>
                    </div>
                    <div className="btns">
                        <a href="https://comfy-faloodeh-6dd940.netlify.app/"><button className="btn1"> View Live Demo</button></a>
                        <a href="https://github.com/ShafqaatCode/PortFolioUi"><button className="btn2"> Visit Site</button></a>
                    </div>
                </Card>
            </CardContainer>
            <CardContainer>
                <Card>
                    <div className="img">
                        <img src={ExpenseImg} alt="" />
                    </div>
                    <div className="content">
                        <h1>Expense Tracker App</h1>
                        <p>This expense tracker application, developed using HTML, CSS, and JavaScript, enables users to record expenses with descriptions and categories frontend using React with a FastAPI backend to provide
                            accurate price estimates.

                        </p>
                    </div>
                    <div className="langs">
                        <h2>Technologies Used</h2>
                        <div className="icons2">

                            <img src={HtmlIcon} alt="" />
                            <img src={ReactIcon} alt="" />
                            <img src={JSIcon} alt="" />

                        </div>
                    </div>
                    <div className="btns">
                        <a href="https://comfy-faloodeh-6dd940.netlify.app/"><button className="btn1"> View Live Demo</button></a>
                        <a href="https://github.com/ShafqaatCode/PortFolioUi"><button className="btn2"> Visit Site</button></a>
                    </div>
                </Card>
            </CardContainer>
            <CardContainer>
                <Card>
                    <div className="img">
                        <img src={WeatherImg} alt="" />
                    </div>
                    <div className="content">
                        <h1>Weather app</h1>
                        <p>This weather app, built with HTML, CSS, and JavaScript, leverages both a weather API and a global location API to provide accurate, real-time weather information for any location worldwide 

                        </p>
                    </div>
                    <div className="langs">
                        <h2>Technologies Used</h2>
                        <div className="icons2">

                            <img src={HtmlIcon} alt="" />
                            <img src={ReactIcon} alt="" />
                            <img src={JSIcon} alt="" />

                        </div>
                    </div>
                    <div className="btns">
                        <a href="https://comfy-faloodeh-6dd940.netlify.app/"><button className="btn1"> View Live Demo</button></a>
                        <a href="https://github.com/ShafqaatCode/PortFolioUi"><button className="btn2"> Visit Site</button></a>
                    </div>
                </Card>
            </CardContainer>

        </SuperCard>

        </>
    )
}

export default Cards
