
import React, { useEffect } from 'react';
import { config } from './config';
import { View, ViewProps, Appearance } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
//import { useColorScheme } from 'nativewind';
import { useColorScheme } from '@/hooks/useColorScheme';

export type ModeType = 'light' | 'dark' | 'system' ;

export function GluestackUIProvider({
  mode,
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const colorScheme  = useColorScheme();
  //const { colorScheme, setColorScheme } = useColorScheme();
  console.log('mode colorScheme', mode, colorScheme);
  
  useEffect(() => {
    console.log('useEffect colorScheme', colorScheme);
    //setColorScheme(colorScheme as 'light' | 'dark');
  }, [colorScheme])

  return (
    <View
      style={[
        config[colorScheme!],
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}


