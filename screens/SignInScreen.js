import { LinearGradient } from "expo-linear-gradient"
import { Alert, SafeAreaView } from "react-native"

import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (email === '1' && password === '1') {
            navigation.navigate('Main');
        } else {
            Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
        }
    };

    const CustomButtonLogin = ({}) => {
        return (
          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "white", paddingVertical: 15, paddingHorizontal: 30, marginTop: 50, borderRadius: 50 }}>
            <Text style={{ color: "#3C3C3C", fontWeight: "800"}}>Entrar</Text>
          </TouchableOpacity>
        );
      };

      const [isFocusedEmail, setIsFocusedEmail] = useState(false);
      const [isFocusedSenha, setIsFocusedSenha] = useState(false);
      
    return (
                <View style={styles.container}>
                    <Text style={[styles.text, {marginTop: 20}]}>E-mail ou nome de usuário</Text>
                    <TextInput
                        style={[styles.input, isFocusedEmail && styles.inputFocused]}
                        onFocus={() => setIsFocusedEmail(true)}
                        onBlur={() => setIsFocusedEmail(false)}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={[styles.text, {marginTop: 30}]}>Senha</Text>
                    <TextInput
                        style={[styles.input, isFocusedSenha && styles.inputFocused]}
                        onFocus={() => setIsFocusedSenha(true)}
                        onBlur={() => setIsFocusedSenha(false)}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <CustomButtonLogin />
                </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        flex: 1,
        alignItems: "center"
        
    },
    input: {

        backgroundColor: "#363636",
        padding: 10,
        marginHorizontal: "auto",
        width: "90%",
        borderRadius: 5,
        marginVertical: 5

    },
    inputFocused: {

        backgroundColor: "#808080",
        padding: 10,
        marginHorizontal: "auto",
        width: "90%",
        borderRadius: 5,
        marginVertical: 5

    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 20,
        alignSelf: "flex-start"

    }
});

export default SignInScreen