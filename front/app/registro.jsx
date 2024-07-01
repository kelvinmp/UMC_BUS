import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Registro = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const data = [
    { carrera: 'Ingeniería Marítima', codigo: 'INGM' },
    { carrera: 'Ingeniería Ambiental', codigo: 'INGAMB' },
    { carrera: 'Ingeniería Informática', codigo: 'INGINF' },
    { carrera: 'Licenciatura en Administración  ', codigo: 'ADM' },
    { carrera: 'Licenciatura en Turismo', codigo: 'TUR' },
    { carrera: 'TSU en Transporte', codigo: 'TSUACU' },
    { carrera: 'Velero de Preparación', codigo: 'VELPRE' },
    { carrera: 'INGM-12345678 (CodCarrera-Cédula)'}
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.carrera}>{item.carrera}</Text>
      <Text style={styles.codigo}>{item.codigo}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground}>
        <View style={styles.header}>
          <Image source={require('../assets/maritima.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo_B}>CREA UNA</Text>
            <Text style={styles.titulo_B}>CUENTA</Text>
          </View>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Nombre" style={styles.input} />
        <TextInput placeholder="Código de Estudiante" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry={true} />
        <TextInput placeholder="Repetir Contraseña" style={styles.input} secureTextEntry={true} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleOpenModal}>
        <Text style={styles.link}>Ver: Código de Estudiante</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
          <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigo}
      />
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    flex: 1,
    position: 'absolute',
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
  titulo_B: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  form: {
    borderRadius: 25,
    marginTop: 60,
    backgroundColor: 'white',
    elevation: 8,
    padding: 25,
    maxWidth: 550,
    maxHeight: 450,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#E4E4E4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    margin: 15,
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
    fontSize: 14,
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
  link: {
    color: '#085FF5',
    fontFamily: 'Montserrat-Bold',
    margin: 15,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#085FF5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
  carrera: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  codigo: {
    fontSize: 16,
    color: '#666',
  },
  ejemplo: {
    fontSize: 16,
    color: '#085FF5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
