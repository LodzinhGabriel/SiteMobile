import { Tabs } from 'expo-router';
import { Ionicons } from  "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#ffd33d",
    }}
    >
      <Tabs.Screen 
      name="index" 
      options={{ title: 'Home',
         tabBarIcon: ({focused , color}) => <Ionicons 
        name={focused ? "home-sharp" : "home-outline"} 
        size={30} />,

      }} />
      <Tabs.Screen 
      name="carrinho" 
      options={{ title: 'carrinho',
        tabBarIcon: ({focused , color}) => <Ionicons 
        name={focused ? "cart-sharp" : "cart-outline"} 
        size={30} />
       }} />,
    </Tabs>
  );
}
