import React from 'react'
import styled from 'styled-components'
import { coding } from '../../data/constants'
import "./style.css";

const Container = styled.div`
padding-top: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
text-align: center;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
        max-width: 400px;
    }
`;

const CodingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Codingcard = styled.div`
  width: 100%;
  max-width: 350px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 420px;
    padding: 10px 36px;
  }


`

// const CodingTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `

const CodingList = styled.div`
 font-size: 22px;
  display: flex;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${'' /* margin-bottom: 20px; */}
`

// const CodingItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   padding: 12px 16px;
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//     background-color: white;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `

const CodingImage = styled.img`
  width: 50px;
  height: 50px;
`




const Coding = () => {
  return (
    <Container id="coding">
      <Wrapper>
        <Title>Coding</Title>
        <Desc>Some of the Coding Platform that i have been working Passionately
        </Desc>
        <CodingContainer>
          {coding.map((codinng) => (
            <a className='acode' href={codinng.link}>
            <Codingcard>
            <CodingList>
            {codinng.name}
            <CodingImage src = {codinng.img}/>
            </CodingList>
            </Codingcard>
            </a>
          ))}
        </CodingContainer>

      </Wrapper>
    </Container>
  )
}

export default Coding

