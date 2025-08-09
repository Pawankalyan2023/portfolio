import React from 'react'
import styled from 'styled-components';
import { achievementsData } from '../../data/constants';

export const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 80px 20px; /* reduced padding for smaller screens */
`;

export const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SubDesc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;

    @media (max-width: 1024px) { /* tablet and smaller */
      content: none; /* remove the element entirely */
      width: 0;
      height: 0;
      background: none;
    }
  }
`;


export const TimelineItem = styled.div`
  padding: 20px 40px;
  position: relative;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px; /* space for timeline line */
    padding-right: 20px;
    margin-bottom: 30px;
  }
`;

export const TimelineContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }
`;

export const TimelineLeft = styled(TimelineItem)`
  left: 0;
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    right: -8px;
    border: 8px solid transparent;
    border-left-color: ${({ theme }) => theme.card};

    @media (max-width: 768px) {
      left: 12px;
      right: auto;
      border: 8px solid transparent;
      border-right-color: ${({ theme }) => theme.card};
    }
  }
`;

export const TimelineRight = styled(TimelineItem)`
  left: 50%;
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: -8px;
    border: 8px solid transparent;
    border-right-color: ${({ theme }) => theme.card};

    @media (max-width: 768px) {
      left: 12px;
      border: 8px solid transparent;
      border-right-color: ${({ theme }) => theme.card};
    }
  }

  @media (max-width: 768px) {
    left: 0;
  }
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Title>My Achievements</Title>
      <SubDesc>I have earned multiple recognitions and milestones during my studies</SubDesc>
      <Timeline>
        {achievementsData.map((achievement, index) => (
          index % 2 === 0 ? (
            <TimelineLeft key={achievement.id}>
              <TimelineContent>{achievement.desc}</TimelineContent>
            </TimelineLeft>
          ) : (
            <TimelineRight key={achievement.id}>
              <TimelineContent>{achievement.desc}</TimelineContent>
            </TimelineRight>
          )
        ))}
      </Timeline>
    </Container>
  )
}

export default Achievements;
