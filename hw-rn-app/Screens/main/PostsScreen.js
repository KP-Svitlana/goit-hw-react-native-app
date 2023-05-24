import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../nestedScreens/DefaultScreenPost";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator initialRouteName="DefaultPosts">
      <NestedScreen.Screen
        name="DefaultPosts"
        component={DefaultPostsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerTitleStyle: {
            headerMode: "float",
            fontFamily: "Roboto-Medium",
            fontWeight: "500",
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: "center",
          headerMode: "screen",
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Карта",
          tabBarStyle: { display: "none" },
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontWeight: "500",
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitleAlign: "center",
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
