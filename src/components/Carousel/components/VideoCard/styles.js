import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: auto;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 5px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
