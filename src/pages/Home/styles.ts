import styled from "styled-components/native";
import { colors } from "../../themes/colors";


export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
    padding-top: 15%;
`;

export const Form = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    width: 70%;
    height: 55px;
    border-radius: 12px;
    background-color: ${colors.secondary};
    padding-left: 12px;
    color: #fff;
`;

export const Button = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    margin-left: 8px;
    border-radius: 12px;
    background-color: ${colors.yellow};

    align-items: center;
    justify-content: center;
`;

export const LocalRow = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: 15%;
`;

export const TextCity = styled.Text`
    font-size: 26px;
    color: #fff;
    font-weight: bold;
`;

export const Temperature = styled.Text`
    font-size: 75px;
    color: #fff;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: ${colors.secondary};
    font-size: 24px;
    margin-left: 15px;
    text-transform: uppercase;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const RowDesc = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    margin-top: 25px;
`;

export const TempText = styled.Text`
    color: ${colors.secondary};
    font-size: 15px;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
`;

export const Enfase = styled.Text`
    font-weight: bold;
`;
