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

const data = [
  { id: 1, title: "Site", route: "SiteScreen" },
  { id: 2, title: "Create Material", route: "CreateMaterialScreen" },
  { id: 3, title: "Treader", route: "TreaderScreen" },
  { id: 4, title: "Contractor", route: "ContractorScreen" },
  { id: 5, title: "Accountant", route: "AccountantScreen" },
  { id: 6, title: "Supervisor", route: "SupervisorScreen" },
];

export default function HomeScreen() {
  const navigation = useNavigation(); // Hook to get navigation object

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)} // Navigate to the specified route
      style={{
        flex: 1,
        backgroundColor: themeColors.cardbg,
        borderRadius: 25,
        width: 150,
        height: 150,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.53,
        elevation: 1.5,
      }}
    >
      <Text className="text-lg font-bold text-black">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="p-6">
        <View className="flex-row justify-between">
          <Text className="text-2xl font-bold text-gray-700">Hi, John</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../assets/images/login.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-700 mt-2">Welcome to your dashboard</Text>
      </View>
      <View
        className="flex-1 bg-white shadow-md border-black px-8 pt-8 mt-10"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
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
