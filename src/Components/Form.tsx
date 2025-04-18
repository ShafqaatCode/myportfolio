import styled from "styled-components"
import bgImg from "../assets/Rectangle_12.png"


const SuperContainer = styled.div`
    margin: 40px 0;
`
const ContactContainer = styled.div`
display: flex;
align-items: center;


    width: 90%;
    margin: auto;

    @media (max-width:700px) {
        flex-direction: column;
        width: 100%;
    }


`
const LeftSide = styled.div`
    /* background-image: url("../assets/Rectangle_12.png"); */
    background: url(${bgImg});
    background-repeat:no-repeat;
    background-size:cover;
    /* text-overflow: wrap; */

    height: 500px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    width: 50%;

    @media (max-width: 700px) {
        width:90%;
    }
`

const ContactHeading = styled.h1`
    color: white;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin: 50px;

    @media (max-width: 786px)
    {
        font-size: 30px;
    }
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   background-color: white;
    width: 50%;
    height: 500px;

    @media (max-width: 700px) {
        width:90%;
    }

`

const FormBox = styled.form`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
`

const InputBox = styled.input`
    padding: 7px;

    margin: 20px 0;
    width: 90%;
    background-color: transparent;
    border-bottom: 2px solid rgb(161,143,143);
    outline: none;
    border: none;
    border-bottom:1px solid #333;

    &::placeholder{
        font-size: 18px;
        color: #a9a9a9;
        /* outline:red solid 2px; */
    }
`
const ContactBtns = styled.button`
    padding: 10px 30px;
    background-color: #55e5a4;
    font-weight: 500;
    margin: 0 5px;
    border: none;
    /* border-radius: 4px; */
    /* width: 100%; */

    transition: all 0.3s;
    &:hover{
        background-color: transparent;
        color: #55e5a4;
        border:2px solid #55e5a4;
    }
`


const Form: React.FC = () => {
    return (
        <SuperContainer id="contact">
            <ContactHeading>Get In Touch</ContactHeading>
            <ContactContainer>


                <LeftSide>
                    <ContactHeading>
                        Lets discuss
                        on something <span>cool</span> together
                    </ContactHeading>
                </LeftSide>
                <RightSide>
                    <FormBox>
                        <p>Im insterested in....</p>

                        <div className="btns">
                            <ContactBtns>Frontend</ContactBtns>
                            <ContactBtns>Backend</ContactBtns>
                        </div>

                        <div>
                            <InputBox type="text" placeholder="Your name" />
                            <InputBox type="texr" placeholder="Your email" />
                            <InputBox type="text" placeholder="Your messages" />
                        </div>

                        <ContactBtns className="sendbtn">Send Message</ContactBtns>
                    </FormBox>
                </RightSide>
            </ContactContainer>
        </SuperContainer>
    )
}

export default Form
