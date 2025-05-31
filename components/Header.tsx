import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from "expo-image";
const dark_logo = require('@/assets/images/zenlot_darkMono.png');
const light_logo = require('@/assets/images/zenlot_lightMono.png');

export default function Header({title}: {title: string}) {
    const colorScheme = useColorScheme();
    const { colors } = useTheme();
    const logo: ImageSourcePropType | string | undefined = colorScheme === "dark" ? dark_logo : light_logo;
    const textColor = colorScheme === "dark" ? colors.text : colors.primary;
    const backgroundColor = colorScheme === "dark" ? colors.background : colors.card;
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    //backgroundColor: "pink",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    },
    logo: {
        width: 35,
        height: 35,
        borderRadius: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    }

});