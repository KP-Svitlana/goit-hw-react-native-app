import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

import { Image, StyleSheet, View } from "react-native";

const Tabs = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            height: 70,
            paddingTop: 9,
            paddingBottom: 22,
          },
          null,
        ],
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...style.icon__wrap,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <Image
                source={require("../../assets/images/posts_icon.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#ffffff" : "#565656",
                  backgroundColor: "transparent",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...style.icon__wrap,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <Image
                source={require("../../assets/images/newPost_icon.png")}
                resizeMode="contain"
                style={{
                  width: 15,
                  height: 15,
                  tintColor: focused ? "#ffffff" : "#565656",
                  backgroundColor: "transparent",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...style.icon__wrap,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <Image
                source={require("../../assets/images/profile_icon.png")}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#ffffff" : "#565656",
                  backgroundColor: "transparent",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const style = StyleSheet.create({
  icon__wrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
