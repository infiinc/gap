import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

export default function LoginScreen() {
  const navigation = useNavigation();
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
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row p-4 justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white mt-6 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="#007AFF" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text style={styles.smallText} className="text-gray-700 ml-4">
            Email Address
          </Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            value="john@gmail.com"
          />
          <Text style={styles.smallText} className="text-gray-700 ml-4">
            Password
          </Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5" style={styles.smallText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="py-3 border-2 border-gray-300 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-[#007AFF]">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-[#007AFF]"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  smallText: {},
  smallText2: {
    fontFamily: "SF-Pro-Text-Regular",
    fontSize: 16,
  },
  mainHeading: {
    fontFamily: "Whisper-Regular",
    textAlign: "center",
  },
});
