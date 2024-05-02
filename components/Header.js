import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.topCont}>

            <Image
                source={{ uri: 'https://i.pinimg.com/564x/c4/de/16/c4de16db396a503be16ab7f07e29bd9f.jpg' }} style={styles.image}></Image>
            <Text style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                backgroundColor: "rgba(51, 51, 51,0.7)",
                borderRadius: 40,
                textAlign: "center",
                backgroundColor: "#1DB954"
            }}>Tudo</Text>
            <Text style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                backgroundColor: "rgba(51, 51, 51,0.7)",
                borderRadius: 40,
                textAlign: "center",
                color: "white"
            }}>Música</Text>
            <Text style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                backgroundColor: "rgba(51, 51, 51,0.7)",
                borderRadius: 40,
                textAlign: "center",
                color: "white"
            }}>Podcasts</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topCont: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: 'flex-start',
        gap: 10
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },
    iconCont: {
        flexDirection: "row"
    },
    icon: {
        marginLeft: 15
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 50
    }
})