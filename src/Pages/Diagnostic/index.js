import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UpdateDB from '../../DataBase/updatedb';
import { useNavigation } from '@react-navigation/native';


export default function Diagnostic({ route }) {

  const navigation = useNavigation();

  function pressButton() {
    UpdateDB(route.params, updateComplete())
  }

  function updateComplete() {
    navigation.navigate("Página inicial");
  }


  return (
    <>
      {route.params.result === "Positivo" ?
        <View style={styles.deliriumContainer}>
          <TouchableOpacity onPress={() => pressButton()}>
            <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
              <Feather size={40} name="alert-triangle" color="#fff" />
              <Text style={styles.textContainer}>Delirium presente!</Text>
            </View>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.goodresultContainer}>
          <TouchableOpacity onPress={() => pressButton()}>
            <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
              <Feather size={40} name="check-circle" color="#fff" />
              <Text style={styles.textContainer}>Não há Delirium</Text>
            </View>
          </TouchableOpacity>
        </View>}
    </>
  );

}

const styles = StyleSheet.create({

  deliriumContainer: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ff0000',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  goodresultContainer: {
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#006a4e',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#fff',
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  textContainer: {
    fontSize: 18,
    color: '#fff',
    marginTop: 32,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
}
);
