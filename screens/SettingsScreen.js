import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const data = [
  { id: 1, title: "Settings" },
  { id: 2, title: "Account" },
  { id: 3, title: "About" },
  { id: 4, title: "Logout" },
];

export default function SettingsScreen() {
  const navigation = useNavigation(); // Hook to get navigation object

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="
        flex-1
        bg-white
        px-8    
        pt-8
        rounded-lg
        items-start
        justify-center
        border-1
        border-gray-200
        w-full
        mt-2
        mb-2
        "
    >
      <Text
        className="text-lg font-bold text-black
        p-2
      "
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="p-6">
        <View className="flex-row ">
          <View className=" justify-start">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl "
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <Text className="text-3xl justify-center ml-4 font-bold text-gray-700">
            Settings
          </Text>
        </View>
      </View>
      <View
        className="flex-1 bg-white  px-8 pt-8 mt-10"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
