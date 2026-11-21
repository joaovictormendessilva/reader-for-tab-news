import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Markdown, { RenderRules } from "react-native-markdown-display";

import { fonts } from "../constants/fonts";
import { DarkTheme } from "../theme/dark-theme";

const { colors } = DarkTheme;

type MarkdownReaderProps = { content: string };

export function MarkdownReader({ content }: MarkdownReaderProps) {
  return (
    <Markdown style={styles} rules={rules}>
      {content}
    </Markdown>
  );
}

const rules: RenderRules = {
  image: (node) => <MarkdownImage key={node.key} uri={node.attributes.src} alt={node.attributes.alt} />,
};

function MarkdownImage({ uri, alt }: { uri: string; alt?: string }) {
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  return (
    <Image
      source={{ uri }}
      accessibilityLabel={alt}
      resizeMode="contain"
      style={{ width: "100%", aspectRatio, marginVertical: 8 }}
      onLoad={({ nativeEvent: { source } }) => setAspectRatio(source.width / source.height)}
    />
  );
}

const styles = StyleSheet.create({
  body: { color: colors.text, fontFamily: fonts.regular, fontSize: 14, lineHeight: 22 },

  heading1: { fontFamily: fonts.bold, fontSize: 22, lineHeight: 30, marginTop: 16, marginBottom: 8 },
  heading2: { fontFamily: fonts.bold, fontSize: 20, lineHeight: 28, marginTop: 16, marginBottom: 8 },
  heading3: { fontFamily: fonts.bold, fontSize: 18, lineHeight: 26, marginTop: 12, marginBottom: 6 },
  heading4: { fontFamily: fonts.bold, fontSize: 16, lineHeight: 24, marginTop: 12, marginBottom: 6 },
  heading5: { fontFamily: fonts.bold, fontSize: 14, marginTop: 8, marginBottom: 4 },
  heading6: { fontFamily: fonts.bold, fontSize: 12, color: colors.textMuted, marginTop: 8, marginBottom: 4 },

  strong: { fontFamily: fonts.bold, fontWeight: "normal" },

  link: { color: colors.textHighlight, textDecorationLine: "none" },

  hr: { backgroundColor: colors.border, marginVertical: 16 },

  blockquote: {
    backgroundColor: colors.paper,
    borderColor: colors.border,
    borderLeftWidth: 4,
    marginLeft: 0,
    paddingHorizontal: 12,
  },

  code_inline: {
    backgroundColor: colors.paper,
    borderColor: colors.border,
    color: colors.text,
    fontSize: 13,
    paddingHorizontal: 4,
    paddingVertical: 0,
  },
  code_block: { backgroundColor: colors.paper, borderColor: colors.border, color: colors.text, fontSize: 13 },
  fence: { backgroundColor: colors.paper, borderColor: colors.border, color: colors.text, fontSize: 13 },

  table: { borderColor: colors.border },
  tr: { borderColor: colors.border },
  th: { fontFamily: fonts.bold },
});
