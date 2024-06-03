import {Stack} from "expo-router";

const PublicLayout = () => {
  return (
   <Stack
       screenOptions={{
         headerShown: false,
       }}>
    <Stack.Screen name="login" options={{
        headerTitle: 'Clerk Auth App',
    }}></Stack.Screen>
   </Stack>);
};

export default PublicLayout;