import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import React, { Component } from "react";

import WelcomeScreen from './app/screens/WelcomeScreen';
import Cadastro      from './app/screens/Cadastro';


class App extends Component {

  state = {
    x : 0,
    clientes : [{nome: "Maria",idade:"27"},{nome: "João",idade:"19"},{nome: "José",idade:"23"}],
  };

  handlePressText = () => {
    console.log("press");
    this.setState({
      x : this.state.x+1
    });
  }

  handlePressButton = () =>{
    console.log("zerou!");
    this.setState({
      x : 0
    });
  }

  listClientes = (cliente,i) => {
    return(
      <Cadastro key={i} cadastro={"Cadastro "+(i+1)} ClienteNome={cliente.nome} ClienteIdade={cliente.idade} />
    );
  }

  render() {


    return (
      <SafeAreaView style={styles.container}>
        <Text>La potaria starts here!{"\n\n\n"}</Text>
        <Text numberOfLines={1} onPress={this.handlePressText}>Clique aqui para contar! {this.state.x}{"\n"}</Text>
        <StatusBar style="auto" />
        <WelcomeScreen />
        <Button title={"Zerar"} color={"#c0c"} onPress={this.handlePressButton} />

        {/* Lista de cadastro de Clientes */}
        {this.state.clientes.map(this.listClientes)}
        <div></div>
      </SafeAreaView>
      
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;