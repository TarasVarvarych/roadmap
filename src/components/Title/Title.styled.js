import styled from '@emotion/styled';
export const HeroTitle = styled.h1`
  text-align: center;
  position: relative;
  font-family: 'Black Han Sans';
  color: #1c303a;

  z-index: 100;
  &:before {
    position: absolute;
    content: 'Roadmap';
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    font-family: Yellowtail;
    font-weight: 400;
    letter-spacing: 0em;
    color: #859a50;
    opacity: 0.2;
    z-index: -1;

    @media screen and (min-width: 375px) {
      font-size: 80px;
      line-height: 85.36px;
    }
    @media screen and (min-width: 744px) {
      font-size: 100px;
      line-height: 106px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 140px;
      line-height: 148px;
    }
  }

  @media screen and (min-width: 375px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media screen and (min-width: 744px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 80px;
  }
`;
