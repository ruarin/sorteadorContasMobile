import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [numAleatorio1, setNumAleatorio1] = useState<number | null>(null);
  const [numAleatorio2, setNumAleatorio2] = useState<number | null>(null);
  const [operador, setOperador] = useState<string | null>(null);
  const [resposta, setResposta] = useState("");
  const [contadorCertas, setcontadorCertas] = useState(0);
  const [contadorErradas, setcontadorErradas] = useState(0);
  const [pontos, setPontos] = useState(0);

  const geraNumeroAleatorio = () => {
    const numeroAleatorio1 = Math.floor(Math.random() * 100) + 1;
    const numeroAleatorio2 = Math.floor(Math.random() * 100) + 1;

    const operadores = ["+", "-", "*", "/"];
    const operadorAleatorio =
      operadores[Math.floor(Math.random() * operadores.length)];

    setNumAleatorio1(numeroAleatorio1);
    setNumAleatorio2(numeroAleatorio2);
    setOperador(operadorAleatorio);
    setResposta(resposta);
  };

  const verificarResposta = () => {
    if (numAleatorio1 !== null && numAleatorio2 !== null && operador !== null) {
      let resultadoEsperado = 0;

      switch (operador) {
        case "+":
          resultadoEsperado = numAleatorio1 + numAleatorio2;
          break;
        case "-":
          resultadoEsperado = numAleatorio1 - numAleatorio2;
          break;
        case "*":
          resultadoEsperado = numAleatorio1 * numAleatorio2;
          break;
        case "/":
          resultadoEsperado = numAleatorio1 / numAleatorio2;
          break;
        default:
          resultadoEsperado = 0;
      }

      if (parseInt(resposta) === resultadoEsperado) {
        Alert.alert(
          "Você Acertou",
          "Deseja uma nova conta ?",
          [
            {
              text: "Sim",
              onPress: () => {
                geraNumeroAleatorio();
                setcontadorCertas(contadorCertas + 1);
                setPontos(pontos + 10);
                setResposta("");
              },
            },
            {
              text: "Não",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert("Você errou", "Tente novamente");
        setcontadorErradas(contadorErradas + 1);
        setPontos(pontos - 5);
      }
    }
  };

  function novoJogo() {
    setNumAleatorio1(null);
    setNumAleatorio2(null);
    setOperador(null);
    setResposta("");
    setPontos(0);
    setcontadorCertas(0);
    setcontadorErradas(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contagem}> Você tem {pontos} pontos </Text>

      <View style={styles.form}>
        <Text style={styles.certas}> Certas </Text>
        <Text style={styles.textCertas}> {contadorCertas} </Text>
        <Text style={styles.erradas}> Erradas </Text>
        <Text style={styles.textErradas}> {contadorErradas} </Text>
      </View>

      <View style={styles.formButton}>
        <TouchableOpacity style={styles.buttonSortear}>
          <Text style={styles.textButton} onPress={() => geraNumeroAleatorio()}>
            Sortear Desafio
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.line}> </Text>

      <Text style={styles.textQuant}> Quanto é : </Text>

      <View style={styles.formQuadrado}>
        <Text style={styles.quadrado}>
          <Text style={styles.textQuadrado}>
            {numAleatorio1 !== null ? numAleatorio1.toString() : ""}
          </Text>
        </Text>
        <Text style={styles.quadrado}>
          <Text style={styles.textQuadrado}> {operador} </Text>
        </Text>
        <Text style={styles.quadrado}>
          <Text style={styles.textQuadrado}>
            {numAleatorio2 !== null ? numAleatorio2.toString() : ""}
          </Text>
        </Text>
      </View>

      <Text style={styles.textInfo}> Informe sua resposta </Text>

      <View style={styles.formQuadrado}>
        <TextInput
          style={styles.quadradoInfo}
          onChangeText={setResposta}
          value={resposta}
          keyboardType="numeric"
        ></TextInput>
      </View>

      <View style={styles.formQuadrado}>
        <TouchableOpacity style={styles.quadradoValidar}>
          <Text style={styles.textValidar} onPress={() => verificarResposta()}>
            Validar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formQuadrado}>
        <TouchableOpacity style={styles.quadradoNovo}>
          <Text style={styles.textNovo} onPress={() => novoJogo()}>
            Novo Jogo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
