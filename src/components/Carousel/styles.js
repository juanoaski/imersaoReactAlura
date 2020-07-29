import styled from 'styled-components';

export const Title = styled.h3`
  font-style: bold;
  font-weight: bold;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 5px;
  display: inline-block;
  padding: 5px;
  /* background: red; */
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 5px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 5px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: visible !important;
  flex-direction: row;
  
  li {
    margin-right: 5px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
  overflow-x:visible;
`;
