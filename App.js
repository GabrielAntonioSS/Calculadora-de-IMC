import React,{ useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default  function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    

    if(imc < 18.6){
      alert('Você está abaixo do peso!  IMC: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.0){
      alert('Peso ideal!  IMC: ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc <34.9){
      alert('Levemente acima do peso!  IMC: ' + imc.toFixed(2));
    }
  }


  return(
    <View style={styles.container}>
      <Text style={styles.title}> Calcule seu IMC </Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder="Peso (kg)"
      placeholderTextColor='#FFF'
      keyboardType="numeric"
      />
      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      placeholderTextColor='#FFF'
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin:15,
    padding: 10,
    fontSize: 23,
    color: '#FFF',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 50,
    backgroundColor: '#41Aef4',
    padding: 10,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 20,
  }

});