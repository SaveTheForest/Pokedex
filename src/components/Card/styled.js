import React from "react";
import styled, { css } from "styled-components/native";
import theme from "../../theme/theme";

export const Container = styled.TouchableOpacity`
  ${({ type }) => css`
    border-color: ${theme.colors.colorTypes[type]};
  `}
  width:45%;
  align-self: center;
  margin-left:3%;
  margin-top:2%;

  height: 170px;
  border-width: 1.5px;
  justify-content: flex-end;

  border-radius: 18px;
`;
export const Header = styled.View`
  width: 100%;
  height: 10%;
  padding: 15px;
  flex-direction: row;
`;
export const LogoName = styled.Text`
  padding-left: 15px;
  color: #000;
  font-size: 32px;
  font-weight: bold;
`;
export const PokeImage = styled.Image`
  width: 104px;
  height: 100px;
  align-self: center;
`;
export const PokeID = styled.Text`
  ${({ type }) => css`
    color: ${theme.colors.colorTypes[type]};
  `}
  font-size: 14px;
  align-self: flex-end;
  padding-right: 10px;
  padding-top: 5px;
`;
export const NameArea = styled.View`
  ${({ type }) => css`
    background-color: ${theme.colors.colorTypes[type]};
  `}
  align-items:center;
  justify-content: center;
  width: 100%;
  height: 24%;

  border-bottom-left-radius: 16px;

  border-bottom-right-radius: 16px;
`;
export const PokeName = styled.Text`
  color: #fff;
  font-size: 14px;
  align-self: center;
  font-weight: 400;
`;
