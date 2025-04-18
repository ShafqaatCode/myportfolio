import styled from "styled-components"
import bgImg from "../assets/Rectangle_12.png"

const ContactContainer = styled.div`
display: flex;
align-items: center;

    width: 90%;
    margin: auto;


`
const LeftSide = styled.div`
    /* background-image: url("../assets/Rectangle_12.png"); */
    background: url(${bgImg});
    background-repeat:no-repeat;
    background-size:cover;
    /* text-overflow: wrap; */

    height: 400px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    width: 50%
`

const ContactHeading = styled.h1`
    color: white;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin: 50px;
`

const RightSide = styled.div`
   
    width: 50%;
    height: 400px;

`

const FormBox = styled.form`
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputBox = styled.input`
    padding: 10px;

    margin: 20px 0;
    width: 90%;
    background-color: transparent;
    border-bottom: 2px solid rgb(161,143,143);
`



function Form() {
    return (
        <ContactContainer>

            <LeftSide>
              <ContactHeading>
              Let’s discuss
                    on something <span>cool</span> together
              </ContactHeading>
            </LeftSide>
            <RightSide>
                <FormBox>
                    <p>I'm insterested in....</p>

                    <div className="btns">
                        <button>Frontend</button>
                        <button>Backend</button>
                    </div>

                    <div>
                        <InputBox type="text" placeholder="Your name" />
                        <InputBox type="texr" placeholder="Your email" />
                        <InputBox type="text" placeholder="Your messages" />
                    </div>

                    <button className="sendbtn">Send Message</button>
                </FormBox>
            </RightSide>
        </ContactContainer>
    )
}

export default Form
