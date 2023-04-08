import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

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
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontWeight: "500",
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/logOut_icon.png")}
                resizeMode="contain"
                style={{
                  ...style.icon,
                  marginRight: 10,
                  tintColor: "#565656",
                }}
              />
            </TouchableOpacity>
          ),
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
                  ...style.icon,
                  tintColor: focused ? "#ffffff" : "#565656",
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
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontWeight: "500",
            fontSize: 17,
            lineHeight: 22,
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/arrowLeft_icon.png")}
                resizeMode="contain"
                style={{
                  ...style.icon,
                  marginLeft: 16,
                  marginRight: 58,
                  tintColor: "#565656",
                }}
              />
            </TouchableOpacity>
          ),

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
                  ...style.icon,
                  tintColor: focused ? "#ffffff" : "#565656",
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
                  ...style.icon,
                  tintColor: focused ? "#ffffff" : "#565656",
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
  icon: {
    width: 24,
    height: 24,
  },
});
