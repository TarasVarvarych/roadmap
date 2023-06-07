import descBgPath from '../../imgs/backdroundDesc.jpg';
import tabBgPath from '../../imgs/backgroundTab.jpg';
import mobBgPath from '../../imgs/backgroundMob.jpg';
import styled from '@emotion/styled';
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 374.5px) {
    padding: 90px 15px;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
    min-height: 600px;
    background: url(${mobBgPath});
    background-size: contain;

    padding: 95px 20px;
  }
  @media screen and (min-width: 744px) {
    width: 744px;
    min-height: 700px;
    background: url(${tabBgPath});
    background-size: cover;

    padding: 95px 70px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    min-height: 800px;
    background: url(${descBgPath});
    background-size: contain;

    padding: 120px 70px;
  }
`;
