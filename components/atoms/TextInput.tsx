import React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function TextInputComponent(props: TextInputProps) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
      borderWidth: 3,
      paddingHorizontal: 10,
      color: Colors[colorScheme ?? "light"].text,
      backgroundColor: Colors[colorScheme ?? "light"].background,
    },
  });

  return <TextInput style={styles.input} placeholderTextColor={Colors[colorScheme ?? "light"].text}  {  ...props} />;
}
