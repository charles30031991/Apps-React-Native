import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component<Props>{

  constructor(props) {
    super(props)
    this.state = { altura: 0, massa: 0, resultado: 0, resultado_Texto: "" }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc
    this.setState(s)

    if (s.resultado < 16) {
      s.resultado_Texto = "Magreza Leve"
    } else if (s.resultado < 17) {
      s.resultado_Texto = "Magreza Moderada"
    } else if (s.resultado < 18.5) {
      s.resultado_Texto = "Magreza Leve"
    } else if (s.resultado < 25) {
      s.resultado_Texto = "Saudável"
    } else if (s.resultado < 30) {
      s.resultado_Texto = "Sobrepeso"
    } else if (s.resultado < 35) {
      s.resultado_Texto = "Obsidade Grau I"
    } else if (s.resultado < 40) {
      s.resultado_Texto = "Obsidade Grau II"
    } else {
      s.resultado_Texto = "Obsidade Grau III"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType='numeric' style={styles.input} onChangeText={(massa) => (this.setState({ massa }))} />
          <TextInput placeholder="Altura" keyboardType='numeric' style={styles.input} onChangeText={(altura) => (this.setState({ altura }))} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.resultado_Texto}>{this.state.resultado_Texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: "#6dc4a4",
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    padding: 15,
    fontSize: 65,
  },
  resultado_Texto: {
    alignSelf: 'center',
    color: 'lightgray',
    padding: 15,
    fontSize: 45,
  }
});

