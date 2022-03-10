import { Text, View } from 'react-native';
import React, { Component } from "react";

export class Cadastro extends Component {
  render() {
    return (
      <View>
        <Text>{"\n"}{this.props.cadastro}:</Text>
        <Text>Informações do cliente:</Text>
        <Text>Nome: {this.props.ClienteNome}</Text>
        <Text>Idade: {this.props.ClienteIdade}</Text>
      </View>
    );
  }
}
