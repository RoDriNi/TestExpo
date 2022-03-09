import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("here parei!");
  let x=1;
  //x.toString();


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePressText}>La1 potaria starts here!{x}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const handlePressText = () => {
  console.log("press");
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
