import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <LinearGradient colors={["#363636", "#111"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Entypo style={{ textAlign: "center" }} name="spotify" size={80} color="white" />
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 70 }}>Milhões de músicas à sua escolha.</Text>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Grátis no Spotify.</Text>
                <View style={{ height: 80 }} />

                <Pressable
                    style={{
                        backgroundColor: "#1DB954",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10
                    }}
                >
                    <Text style={{ fontWeight: "500" }}>Inscreva-se grátis</Text>

                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <MaterialIcons name="phone-android" size={24} color="white" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue com o telefone</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <AntDesign name="google" size={24} color="#EA4335" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue com o Google</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <AntDesign name="facebook-square" size={24} color="#3b5998" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue com o Facebook</Text>
                </Pressable>

                <Pressable
                    style={{
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10
                    }}
                >
                    <Button title="Entrar" onPress={handlePress} color="transparent" style={{ textTransform: 'lowercase' }} />

                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({})