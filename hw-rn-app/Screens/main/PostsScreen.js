import React from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../nestedScreens/DefaultScreenPost";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

import { authSingOutUser } from "../../redux/auth/authOperations";

const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authSingOutUser());
  };

  return (
    <NestedScreen.Navigator
      initialRouteName="DefaultPosts"
      screenOptions={{
        headerTitleStyle: {
          headerMode: "float",
          fontFamily: "Roboto-Medium",
          fontWeight: "500",
          fontSize: 17,
          lineHeight: 22,
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("DefaultPosts")}>
            <Image
              source={require("../../assets/images/arrowLeft_icon.png")}
              resizeMode="contain"
              style={{
                ...style.icon,
                marginLeft: 16,
                tintColor: "#565656",
              }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <NestedScreen.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          title: "Публікації",

          headerLeft: () => {
            {
              display: "none";
            }
          },

          headerRight: () => (
            <TouchableOpacity onPress={logOut}>
              <Image
                source={require("../../assets/images/logOut_icon.png")}
                resizeMode="contain"
                style={{
                  ...style.icon,
                  marginRight: 10,
                  tintColor: "#BDBDBD",
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
        }}
      />
    </NestedScreen.Navigator>
  );
};

const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: "#565656",
  },
});

export default PostsScreen;
