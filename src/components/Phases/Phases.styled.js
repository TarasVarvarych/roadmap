import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import phaseBgDt from '../../imgs/bambooDesc.png';
import phaseBgTb from '../../imgs/bambooTablet.png';
import phaseBgMb from '../../imgs/bambooMobile.png';

export const PhasesContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 16px;
`;

export const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 40px));
  }
`;

export const PhasesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin-top: 28px;
  padding-bottom: 16px;
  animation: ${scrollAnimation} 20s linear infinite;
  overflow-x: scroll;
  width: max-content;
`;

export const PhaseTitle = styled.h2`
  color: #53865d;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  font-family: 'Nerko One';

  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 744px) {
    font-size: 32px;
    line-height: 38.75px;
    margin-bottom: 6px;
  }

  @media screen and (min-width: 375px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const StepsList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  gap: 6px;
  @media screen and (min-width: 1440px) {
    gap: 8px;
  }
`;

export const StepItem = styled.li`
  position: relative;
  font-family: 'Inter';
  font-weight: 500;

  @media screen and (min-width: 375px) {
    font-size: 16px;
    line-height: 19.36px;
  }
  @media screen and (min-width: 744px) {
    font-size: 18px;
    line-height: 21.78px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 29.05px;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: -15px;
    content: ' ';
    display: block;
    background: black;
    border-radius: 50%;
    width: 5px;
    height: 5px;
  }
`;

export const PhaseItem = styled.li`
  position: relative;
  z-index: 100;

  @media screen and (min-width: 375px) {
    min-width: 430px;
    height: 259px;
    padding: 20px 44px 27px 34px;
  }
  @media screen and (min-width: 744px) {
    min-width: 490px;
    height: 295px;
    padding: 23px 42px 27px 41px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 605px;
    height: 364px;
    padding: 38px 55px 46px 50px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 200;

    @media screen and (min-width: 375px) {
      background: url(${phaseBgMb});
      background-repeat: no-repeat;
    }

    @media screen and (min-width: 744px) {
      background: url(${phaseBgTb});
      background-repeat: no-repeat;
    }
    @media screen and (min-width: 1440px) {
      background: url(${phaseBgDt});
      background-repeat: no-repeat;
    }
  }
`;

export const PhaseWrapper = styled.div`
  position: relative;
  background: #fff1bb;

  z-index: 0;

  @media screen and (min-width: 375px) {
    width: 352px;
    height: 213px;
    padding-top: 38px;
    padding-left: 59px;
  }
  @media screen and (min-width: 744px) {
    width: 407px;
    height: 245px;
    padding-top: 38px;
    padding-left: 63px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 280px;
    padding-top: 38px;
    padding-left: 70px;
  }
`;
