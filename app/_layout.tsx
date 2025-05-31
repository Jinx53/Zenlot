import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Text } from 'react-native';
import Header from '@/components/Header';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import Loading  from '@/components/atoms/Spinner';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  }); 
  if (!loaded) {
    // Async font loading only occurs in development.
    <Text>Loading...</Text>;
    <Loading />
    return null;
  }

  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode={colorScheme as 'light' | 'dark' ?? 'light'} >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false,
            title: 'Zenlot',
          }} />
          <Stack.Screen name="forex" options={{ 
            title: 'Forex',
            animation: "slide_from_bottom",
            //header: () => <Header title="Zenlot" />,
          }}/>
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style='auto' />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
