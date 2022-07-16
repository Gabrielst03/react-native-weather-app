import { Button, Container, Form, Input, LocalRow, TextCity, Temperature, Enfase, Description, Row, TempText, RowDesc } from "./styles";

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { useState } from "react";
import { api } from "../../services/api";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import { colors } from "../../themes/colors";



export default function Home() {

    const [city, setCity] = useState('')
    const [temp, setTemp] = useState(0);
    const [country, setCountry] = useState('');
    const [result, setResult] = useState('Aguardando Busca...');
    const [description, setDescription] = useState('');
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [umidade, setUmidade] = useState(0);


    const apikey = '048c2e043a05237b7bacdb9451b5f1c2'

    const handleButton = () => {
        if (city === '') {
            Toast.show({
                type: 'error',
                text1: '⚠️ Erro',
                text2: 'Você precisa digitar uma cidade',
                position: 'bottom',
            })
        } else {
            api.get('/weather', {
                params: {
                    q: `${city}`,
                    appid: `${apikey}`,
                    lang: 'pt_br',
                    units: 'metric'
                }
            }).then((response) => {
                console.log(response.data)

                setResult(response.data.name)
                setCountry(response.data.sys.country)
                setTemp(response.data.main.temp)
                setDescription(response.data.weather[0].description)
                setMax(response.data.main.temp_max)
                setMin(response.data.main.temp_min)
                setUmidade(response.data.main.humidity)


            }).catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: '😢 Erro',
                    text2: 'A cidade que você digitou não foi encontrada!',
                    position: 'bottom',
                })
            })
        }
    }

    return (
        <Container>
            <Toast />
            <Form>
                <Input placeholder='Busque uma cidade...' placeholderTextColor='#f9f9f9' value={city} onChangeText={(text) => setCity(text)} />
                <Button activeOpacity={0.9} onPress={handleButton}>
                    <AntDesign name="search1" size={24} color="white" />
                </Button>
            </Form>

            <LocalRow>
                <EvilIcons name="location" size={28} color="white" />
                <TextCity>{result}, {country}</TextCity>
            </LocalRow>
            <Temperature>{temp.toFixed(0)}°C</Temperature>
            <RowDesc>
                <FontAwesome5 name="cloud" size={24} color={colors.secondary} />

                <Description>{description}</Description>
            </RowDesc>
            <Row>
                <FontAwesome5 name="temperature-high" size={24} color={colors.secondary} />
                <TempText>Máxima: <Enfase>{max.toFixed(0)}°C</Enfase></TempText>
            </Row>
            <Row>
                <FontAwesome5 name="temperature-low" size={24} color={colors.secondary} />
                <TempText>Mínima: <Enfase>{min.toFixed(0)}°C</Enfase></TempText>
            </Row>

            <Row>
                <Entypo name="drop" size={24} color={colors.secondary} />
                <TempText>Umidade: <Enfase>{umidade}%</Enfase></TempText>
            </Row>
        </Container>
    )
}