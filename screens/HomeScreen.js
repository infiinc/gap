import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Font from "expo-font";

const data = [
  { id: 1, title: "Site", route: "SiteScreen" },
  { id: 2, title: "Create Material", route: "CreateMaterialScreen" },
  { id: 3, title: "Treader", route: "TreaderScreen" },
  { id: 4, title: "Contractor", route: "ContractorScreen" },
  { id: 5, title: "Accountant", route: "AccountantScreen" },
  { id: 6, title: "Supervisor", route: "SupervisorScreen" },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(
    data.find((item) => item.title === "Site")
  );
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "SF-Pro-Text-Medium": require("../assets/fonts/SF-Pro-Text-Medium.otf"),
        "SF-Pro-Text-Bold": require("../assets/fonts/SF-Pro-Text-Bold.otf"),
        "SF-Pro-Text-Regular": require("../assets/fonts/SF-Pro-Text-Regular.otf"),
        "Whisper-Regular": require("../assets/fonts/Whisper-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem(item);
        navigation.navigate(item.route);
      }}
      className=" border-gray-300 "
      style={{
        borderWidth: 3,
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        shadowColor: "#c4c4c4",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 25,
        width: 150,
        height: 150,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className={`text-base p-3 text-[#007AFF] ${
          selectedItem && selectedItem.id === item.id ? "selected-item" : ""
        }`}
        style={styles.text}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 ">
      <View className="p-6 ">
        <View className="flex-row justify-between">
          <Text className=" text-gray-700" style={styles.nameText}>
            Hi, John
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../assets/images/login.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-[#007AFF] mt-2 " style={styles.smallText}>
          Welcome to your dashboard
        </Text>
      </View>
      {/* <ScrollView
        className="bg-white "
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="flex-1 mt-10">
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{
              paddingVertical: 20,
              paddingHorizontal: 5,
            }}
            showsVerticalScrollIndicator={false}
          />
          {selectedItem && (
            <View>
              <Text>{`Content for ${selectedItem.title}`}</Text>
            </View>
          )}
        </View>
      </ScrollView> */}
      <View
        className="flex-1 bg-white shadow-md border-black px-5 pt-8 mt-10"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          // backgroundColor: themeColors.bg,
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontFamily: "SF-Pro-Text-Medium",
  },
  text: {
    textAlign: "center",
    fontFamily: "SF-Pro-Text-Bold",
  },
  smallText: {
    fontFamily: "SF-Pro-Text-Regular",
    fontSize: 18,
  },
  mainHeading: {
    fontFamily: "Whisper-Regular",
    textAlign: "center",
  },
  nameText: {
    fontFamily: "SF-Pro-Text-Bold",
    fontSize: 35,
  },
});
