import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { fonts } from '@/constants/fonts';

type TabButtonProps = Omit<ComponentProps<typeof Pressable>, 'children'> & {
  children: string;
  isFocused?: boolean;
};

export function TabButton({ children, isFocused, ...props }: TabButtonProps) {
  return (
    <Pressable {...props} style={[styles.button, isFocused && styles.buttonFocused]}>
      <Text style={[styles.label, isFocused && styles.labelFocused]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 2,
    borderTopColor: 'transparent',
  },
  buttonFocused: {
    borderTopColor: '#000',
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#6b7280',
  },
  labelFocused: {
    fontFamily: fonts.bold,
    color: '#000',
  },
});
