import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

export default function WelcomeScreen() {
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
    <SafeAreaView style={{ backgroundColor: themeColors.bg }}>
      <View>
        <ImageBackground
          source={require("../assets/images/building3.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View className="flex-1 flex justify-around my-4">
            <Text
              style={styles.mainHeading}
              className="text-black  text-6xl text-center"
            >
              Let's Get Started!
            </Text>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                className="py-3 mx-7 mt-[250px] rounded-xl"
                style={{ backgroundColor: themeColors.cardbg }}
              >
                <Text
                  style={styles.buttonText}
                  className="text-xl font-bold text-center text-[#007AFF]"
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
              <View className="flex-row justify-center">
                <Text style={styles.text} className="text-white font-semibold">
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={styles.smallText}
                    className=" underline  text-[#007AFF]"
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "SF-Pro-Text-Medium",
  },
  text: {
    textAlign: "center",
    fontFamily: "SF-Pro-Text-Bold",
  },
  smallText: {
    fontFamily: "SF-Pro-Text-Regular",
  },
  mainHeading: {
    fontFamily: "Whisper-Regular",
    textAlign: "center",
  },
});
