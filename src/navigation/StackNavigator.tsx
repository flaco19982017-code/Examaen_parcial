import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../styles/appStyles";

import { ListScreen } from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
import { FormScreen } from "../screens/FormScreen";

import { RootStackParamList } from "./typesNavigation";

const Stack = createStackNavigator<RootStackParamList>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ title: "Gadget Inventory" }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Gadget Details" }}
      />

      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={({ route }) => ({
          title: route.params?.id
            ? "Edit Gadget"
            : "New Gadget",
        })}
      />
    </Stack.Navigator>
  );
};