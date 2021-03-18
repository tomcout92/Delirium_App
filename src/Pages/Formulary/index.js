import React, { useState } from 'react';
import { Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import pacientModel from '../Pacientinfo';



const PacientForm = () => {
  const navigation = useNavigation();
  const [pname, setPname] = useState("");
  const [pacientAge, setPage] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const [pacient, setPacient] = useState(pacientModel);

  /*********************************End form executed function **************************************** */
  const onPress = () => {
    setPacient(prev => ({ ...prev, name: pname, age: pacientAge, id: (prev.id + 1) })),
      navigation.navigate("Home")
  };
  /*********************************End form executed function **************************************** */
  console.log(isSelected)

  return (
    <View style={styles.backgroud}>
      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g Antônio Carlos Belchior Fontenelle Fernandes'
        onChangeText={(val) => setPname(val)} />

      <Text style={{ color: '#a9a9a9', fontSize: 18 }}>Enter pacient age:</Text>
      <TextInput style={styles.input}
        placeholder='e.g 25'
        onChangeText={(val) => setPage(val)} />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Fumante</Text>
      </View>

      <TouchableOpacity style={styles.button} title="Fim" onPress={onPress}>
        <Text style={styles.navgiationContainer}>OK</Text>
      </TouchableOpacity>

    </View >
  );
}

export default PacientForm;

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: '#252850',
    height: '100%',
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: "center",
    backgroundColor: '#fff',
},

  label: {
    margin: 8,
    color: '#fff',
    fontSize: 18,
  },

  input: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#a9a9a9',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  navgiationContainer: {
    fontSize: 18,
    color: '#fff',
    //marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    backgroundColor: '#a9a9a9',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

}
);


