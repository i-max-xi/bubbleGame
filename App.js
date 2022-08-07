import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";

export default function App() {
  const [bubbles, setBubbles] = useState([
    { name: "Don", key: 1 },
    { name: "serial killer", key: 2 },
    { name: "big sis", key: 3 },
    { name: "kobby", key: 4 },
    { name: "su", key: 5 },
  ]);

  const pressHandler = (id) => {
    setBubbles((prevBubble) => prevBubble.filter((bubble) => bubble.key != id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bubbles}
        // keyExtractor={}
        numcolumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={ item.key % 2 === 0 ? styles.evenBubble : styles.oddBubble}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'linear-gradient(180deg,#04fafd 5%, #119dff 50%, #030423)',
  },
  evenBubble: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 100,
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: "blue",
    borderRadius: 50,
    borderColor: 'slategray',
    borderTopColor: 'skyblue',
    borderWidth: 0.1,
  },
  oddBubble: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 100,
    width: 100,
    backgroundColor: 'palevioletred',
    color: "white",
    borderRadius: 50,
    borderColor: 'slategray',
    borderTopColor: 'skyblue',
    borderWidth: 0.1,
  }
});
