import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";
import ShowCard from "../components/ShowCard";
import { LinearGradient } from 'expo-linear-gradient';
import TrendingCard from "../components/TrendingCard";
import { trendingData,showsData, mixData, cardData } from "../data/Data";
import MixCard from "../components/MixCard";


const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <ScrollView>
      <View style={styles.subContainer}>
      <Header />
      <View style={styles.cardContainer}>
        {cardData.map(dat=>
        <PlaylistCard key={dat.title} title={dat.title} img={dat.img} />
        )}
      </View>
      <View style={styles.showContainer}>
        <Text style={styles.text}>Suas músicas estão com saudade</Text>
        <ScrollView horizontal={true}>
          {showsData.map(dat => 
          <ShowCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
            )}
        </ScrollView>
      </View>
      <View style={styles.bestContainer}>
        <Text style={styles.text}>Seus artistas favoritos</Text>
        <ScrollView horizontal={true}>
          {mixData.map(dat =>
            <MixCard key={dat.title} title={dat.title} img={dat.img}/>
          )}
        </ScrollView>
      </View>
      <View style={styles.podcastContainer}>
        <Text style={styles.text}>Seus programas</Text>
        <ScrollView horizontal={true}>
          {
            trendingData.map(dat=>
              <TrendingCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} theme={dat.theme} subText={dat.subtext}/>
              )
          }
        </ScrollView>
      </View>
      </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
  },
  subContainer:{
    paddingRight: 15,
    paddingLeft:15
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 210,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showContainer: {
    marginTop: 90,
    flex: 1,
    minHeight:60
  },
  bestContainer:{
    flex: 1,
    marginTop:30,
    maxHeight: 250
  },
  podcastContainer:{
    flex: 1,
    marginTop:20,
    maxHeight: 350,
    marginBottom: 30
  }
});