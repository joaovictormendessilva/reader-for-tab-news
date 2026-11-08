const path = require("node:path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = withNativewind(getDefaultConfig(__dirname));

// Workaround: react-native-css 3.1.0-rc.1 redirects every "react-native" import
// to its own module, which does not re-export `AssetRegistry` (new in RN 0.87+).
// That breaks expo-asset (fonts via expo-font, @expo/vector-icons, ...).
// Already fixed upstream on react-native-css main; remove after upgrading.
const nativewindResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName === "react-native" &&
    context.originModulePath.includes(`${path.sep}expo-asset${path.sep}`)
  ) {
    return context.resolveRequest(context, moduleName, platform);
  }
  return nativewindResolveRequest(context, moduleName, platform);
};

module.exports = config;
