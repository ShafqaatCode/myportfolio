import styled from "styled-components"
import REDashboard from "../assets/RectangleRE.png"
import HtmlIcon from "../assets/langs/Frame71.png"
import JSIcon from "../assets/langs/Frame72.png"
import ReactIcon from "../assets/langs/Frame73.png"
import FoodUi from "../assets/FoodUi.png";
import WeatherImg from "../assets/weather.png";
import ExpenseImg from "../assets/expense.png"

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
    width: 88%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
    flex-wrap: wrap;
    margin: auto;

`



function Cards() {
    return (
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
                        <img src={ExpenseImg} alt="" />
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
                        <img src={WeatherImg} alt="" />
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

        </SuperCard>
    )
}

export default Cards
