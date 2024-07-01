import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Montserrat-ExtraLight': require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    'Montserrat-Bold': require("../assets/fonts/Montserrat-Bold.ttf"),
    'Montserrat-Regular': require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const [codigoDeEstudiante, setCodigoDeEstudiante] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.103:8080/login', {
        codigo_de_estudiante: codigoDeEstudiante,
        contraseña,
      });

      if (response.status === 200) {
        Alert.alert('Inicio de sesión exitoso');
        router.push('/home');
      } else {
        Alert.alert('Error al iniciar sesión');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Credenciales incorrectas');
      } else {
        Alert.alert('No se pudo conectar con el servidor');
      }
    }
  };

  if (!fontsLoaded) {
    return <Text>Cargando fuentes...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/maritima.png')} style={{ width: 150, height: 150, marginBottom: 10, marginTop: 50 }} />
      <View style={{ marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titulo}>UMC</Text>
        <Text style={styles.subtitulo}>TRACK</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Código de Estudiante"
          style={styles.input}
          value={codigoDeEstudiante}
          onChangeText={setCodigoDeEstudiante}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
          value={contraseña}
          onChangeText={setContraseña}
        />
        <TouchableOpacity onPress={() => handleOptionSelect('Option')}>
          <Text style={{ color: '#085FF5', marginLeft: 18, fontFamily: 'Montserrat-Regular', fontSize: 12 }}>
            {selectedOption === 'Option' ? '◉' : '○'} Recuérdame
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.nolsa}>¿No tienes cuenta?</Text>
          <Link href="/registro" style={styles.siza}>Crea una cuenta</Link>
        </View>
      </View>
      <View style={styles.bottomBackground}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#085FF5',
  },
  subtitulo: {
    fontFamily: 'Montserrat-ExtraLight',
    fontSize: 21,
    color: '#085FF5',
  },
  form: {
    borderRadius: 25,
    marginTop: 60,
    backgroundColor: 'white',
    elevation: 8,
    padding: 25,
    maxWidth: 350,
    maxHeight: 290,
    flex: 1,
  },
  input: {
    backgroundColor: '#E4E4E4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 250,
  },
  button: {
    backgroundColor: '#085FF5',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
  nolsa: {
    fontFamily: 'Montserrat-ExtraLight',
    fontSize: 12,
    color: '#000000',
  },
  siza: {
    fontFamily: 'Montserrat-ExtraLight',
    fontSize: 12,
    color: '#085FF5',
    marginLeft: 55,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 240,
    backgroundColor: '#085FF5',
    zIndex: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});