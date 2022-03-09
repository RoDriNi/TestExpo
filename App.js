import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import React, { Component, useState } from "react";

//import WelcomeScreen from './app/screens/WelcomeScreen';


class App extends Component {

  state = {x : 0};
  
  handlePressText = () => {
    console.log("press");
    this.setState({
      x : this.state.x+1
    });
  }

  handlePressButton = () =>{
    this.setState({
      x : 0
    });
  }

  render() {


    return (
      <SafeAreaView style={styles.container}>
        <Text>La potaria starts here!</Text><br/>
        <Text numberOfLines={1} onPress={this.handlePressText}>Clique aqui para contar! {this.state.x}</Text><br/>
        <StatusBar style="auto" />
        {/* <WelcomeScreen />  */}
        <Button title={"Zerar"} color={"#cac"} onPress={this.handlePressButton} />
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