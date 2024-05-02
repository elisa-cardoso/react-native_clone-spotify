import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const TrendingCard = ({title,theme,img,subText}) => {
  return (
    <View style={styles.container}>
      <Image style={{height:160,width:160}} source={{uri:img}} />
      <Text style={styles.themeTextStyle} numberOfLines={1} >{theme}</Text>
      <Text style={styles.text} numberOfLines={1} >{title}</Text>
      <Text style={styles.subTextStyle} numberOfLines={1} >Show · {subText}</Text>
    </View>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: 'hidden',
        minHeight:220,
        maxHeight:350,
        maxWidth:160,
        marginRight:20,
        gap: 3
    },
    themeTextStyle:{
        color: "#1DB954",
        fontSize: 11,
        marginTop:10,
        fontWeight:"800"
    },
    text:{
        color: "white",
        fontWeight:"800"
    },
    subTextStyle:{
        color: "gray",
        fontWeight:"400"
    }
})