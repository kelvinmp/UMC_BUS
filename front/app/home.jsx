import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Esto cambia el color del contenido de la barra de estado
        backgroundColor='#085FF5' // Esto cambia el color de fondo de la barra de estado
      />
      <View style={styles.topBackground}>
        <View style={styles.header}>
          <Image source={require('../assets/maritima.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo_B}>RUTAS</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.form}>
          <Text style={styles.titulo}>Pza Venezuela 6:00Am</Text>

          <View style={styles.rowContainer}>
            <View style={styles.package}>
              <View style={styles.fondo}>
                <View style={[styles.light, { backgroundColor: 'hsl(0, 100%, 50%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(60, 100%, 50%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(120, 100%, 40%)' }]} />
              </View>
              <View style={styles.fondo}>
                <Text style={styles.p}>PEDIR PARADA!</Text>
              </View>
            </View>
            <MapView style={styles.map} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.titulo}>Caribe 6:30Am</Text>

          <View style={styles.rowContainer}>
            <View style={styles.package}>
              <View style={styles.fondo}>
                <View style={[styles.light, { backgroundColor: 'hsl(0, 100%, 50%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(60, 100%, 10%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(120, 100%, 10%)' }]} />
              </View>
              <View style={styles.fondo}>
                <Text style={styles.p}>PEDIR PARADA!</Text>
              </View>
            </View>
            <MapView style={styles.map} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.titulo}>Carayaca 6:00Am</Text>

          <View style={styles.rowContainer}>
            <View style={styles.package}>
              <View style={styles.fondo}>
                <View style={[styles.light, { backgroundColor: 'hsl(0, 100%, 10%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(60, 100%, 50%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(120, 100%, 10%)' }]} />
              </View>
              <View style={styles.fondo}>
                <Text style={styles.p}>PEDIR PARADA!</Text>
              </View>
            </View>
            <MapView style={styles.map} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.titulo}>Las Tunitas 8:00Am</Text>

          <View style={styles.rowContainer}>
            <View style={styles.package}>
              <View style={styles.fondo}>
                <View style={[styles.light, { backgroundColor: 'hsl(0, 100%, 10%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(60, 100%, 10%)' }]} />
                <View style={[styles.light, { backgroundColor: 'hsl(120, 100%, 40%)' }]} />
              </View>
              <View style={styles.fondo}>
                <Text style={styles.p}>PEDIR PARADA!</Text>
              </View>
            </View>
            <MapView style={styles.map} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  topBackground: {
    position:'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: '#085FF5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    top: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  titulo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    color: '#085FF5',
    padding: 10,
  },
  subtitulo: {
    fontFamily: 'Montserrat-ExtraLight',
    fontSize: 21,
    color: '#085FF5',
  },
  titulo_B: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  p: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 140,
  },
  form: {
    borderRadius: 25,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    padding: 25,
    width: '90%',
    maxWidth: 550,
    margin: 20,
  },
  input: {
    backgroundColor: '#E4E4E4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 250,
  },
  button: {
    backgroundColor: '#085FF5',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    margin: 15,
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
  rowContainer: {
    flexDirection: 'row',
  },
  package: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '49%',
    margin: 5,
  },
  fondo: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: 'black',
    elevation: 8,
    padding: 10,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    width: 31,
    height: 31,
    borderRadius: 25,
    margin: 5,
  },
  map: {
    width: '49%',
    height: 200,
    borderRadius: 10,
  },
});

