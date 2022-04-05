import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../features/Home/Home";
import NotificationList from "../features/Notification/screens/NotificationList";
import Explore from "../features/Explore/screens/Explore";
import Profile from "../features/Profile/screens/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);
const ExploreStackScreens = () => (
  <ExploreStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <ExploreStack.Screen name="Explore" component={Explore} />
  </ExploreStack.Navigator>
);

const NotificationStackScreens = () => (
  <NotificationStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <NotificationStack.Screen
      name="Notification"
      component={NotificationList}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreens = () => (
  <ProfileStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "green",
        tabBarStyle: [styles.container, styles.shadow, null],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home-outline";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "magnify" : "magnify";
          } else if (route.name === "Activity") {
            iconName = focused ? "bell" : "bell-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account-outline";
          }

          return <Icon name={iconName} size={20} color="red" />;
        },
      })}>
      <Tab.Screen name="Explore" component={ExploreStackScreens} />
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen
        name="Post"
        component={() => <View />}
        // screenOptions={{
        //   tabBarIcon: () => <Icon name="plus" size={30} color="blue" />,
        // }}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <Icon name="plus" size={30} color="violet" />
        //   ),
        //   tabBarButton: props => <CustomButton {...props} />,
        // }}
      />
      <Tab.Screen name="Notification" component={NotificationStackScreens} />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        // listeners={({ navigation, route }) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     e.preventDefault();
        //     // Do something with the `navigation` object
        //     navigation.navigate("Profile");
        //   },
        // })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  plus: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
});
