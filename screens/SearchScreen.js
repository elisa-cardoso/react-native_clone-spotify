import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchScreen = () => {

  const handlePressLinkedin = () => {
    Linking.openURL('https://www.linkedin.com/in/elisa-cardoso-de-mello-67a101220/');
  };

  const handlePressGitHub = () => {
    Linking.openURL('https://github.com/elisa-cardoso');
  };

  return (
    <LinearGradient colors={["#AE6FC9", "#111"]} style={{ flex: 1 }}>

      <View style={styles.topCont}>
        <Image source={{ uri: 'https://i.pinimg.com/564x/c4/de/16/c4de16db396a503be16ab7f07e29bd9f.jpg' }} style={styles.image}></Image>
        <View style={{ marginTop: 30, gap: 4 }}>
          <Text style={styles.titleStyle}>elisa_cardoso</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>Desenvolvedora FullStack</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', width: "80%", gap: 20, marginHorizontal: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={handlePressLinkedin} style={{
          borderRadius: 40,
          width: "50%",
          backgroundColor: "rgba(51, 51, 51,0.7)",
          padding: 10
        }}>
          <Text style={{
            color: "white",
            textAlign: "center"
          }}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressGitHub} style={{
          borderRadius: 40,
          width: "50%",
          backgroundColor: "rgba(51, 51, 51,0.7)",
          padding: 10
        }}>
          <Text style={{
            color: "white",
            textAlign: "center"
          }}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 9, marginHorizontal: 25, marginTop: 30, gap: 20 }}>
        <Text style={{ color: "white", fontSize: 12, fontWeight: "900" }}>♡⊹˚₊  S O B R E    M I M  ₊˚⊹♡</Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Desenvolvedora FullStack com um rico background em tecnologias como HTML, CSS, JavaScript, React Native e Java.</Text>
        <Text style={{ color: "white", fontSize: 15 }}>Minha jornada de três anos no mercado de trabalho começou como freelancer, proporcionando-me habilidades valiosas em comunicação e gestão de responsabilidades. Essa experiência refinou minha capacidade de compreender as necessidades do usuário e transformá-las em produtos eficazes. Ao combinar minha formação em design com habilidades de programação, busco constantemente criar produtos digitais mais impactantes e inovadores. </Text>
        <View style={{ flexDirection: 'row', gap: 20, marginTop: 8 }}>
          <FontAwesome5 name="html5" size={40} color="#AE6FC9" />
          <FontAwesome5 name="css3-alt" size={40} color="#AE6FC9" />
          <FontAwesome5 name="js" size={40} color="#AE6FC9" />
          <FontAwesome5 name="react" size={40} color="#AE6FC9" />
          <FontAwesome5 name="java" size={40} color="#AE6FC9" />
        </View>
      </View>
    </LinearGradient>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  topCont: {
    flex: 3,
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: 'flex-start',
    gap: 25,
    marginLeft: 20
  },
  titleStyle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold"

  }
})