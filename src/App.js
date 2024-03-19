import React, {useState} from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet, } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
    const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const searchedText = text.toLowerCase();
    const filteredList = music_data.filter(song => {
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1; 
    });
    setList(filteredList);
  
  
  }

  return (
    <SafeAreaView style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSperator}
        />
      
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
