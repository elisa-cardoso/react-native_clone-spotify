import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowCard = ({img,title,artists}) => {
  return (
    <View style={styles.container}>
      <Image style={{height:160,width:160}} source={{uri:img}} />
      <Text style={styles.text} numberOfLines={1} >{title}</Text>
      <Text style={styles.subText} numberOfLines={2} >Playlist · {artists}</Text>
    </View>
  )
}

export default ShowCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: 'hidden',
        minHeight:220,
        maxHeight:250,
        maxWidth:160,
        marginRight:20
    },
    text:{
        color: "white",
        marginTop:10,
        fontWeight:"800"
    },
    subText:{
        color: "gray",
        marginTop:4,
        fontWeight:"400"
    }
})