import { type ComponentProps } from 'react';
import { Button } from 'react-native';

type Props = ComponentProps<typeof Button> ;

export function ButtonComponent({ onPress, title, ...rest }: Props) {
  return (
    <Button 
        title={title}
        onPress={onPress}
        {...rest}
        accessibilityLabel={title}
    />
  );
}
//TODO: Few app details
// Navigation tabs - Home, Profile, History, Analytics


// Analytics - Charts, graphs, and analysis tools
// ability to view all journal entries and performance metrics