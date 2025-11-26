import { View, Text, StyleSheet } from "react-native";
import { StatusIconProps, ModuleStatus } from "../types/LessonModule";
import { MODULE_STYLES, LAYOUT } from "../styles/theme";

export const StatusIcon = ({
  status,
  size = LAYOUT.iconSize.medium,
}: StatusIconProps) => {
  const getIconContent = (): string => {
    switch (status) {
      case ModuleStatus.DONE:
        return "✓";
      case ModuleStatus.ACTIVE:
        return "▶";
      case ModuleStatus.LOCKED:
        return "🔒";
      default:
        return "🔒";
    }
  };

  const iconColor =
    MODULE_STYLES[status]?.iconColor ||
    MODULE_STYLES[ModuleStatus.LOCKED].iconColor;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}
      accessibilityLabel={`Module status: ${status}`}
      accessibilityRole="image"
    >
      <Text
        style={[
          styles.icon,
          {
            color: iconColor,
            fontSize: size * 0.8,
            lineHeight: size,
          },
        ]}
      >
        {getIconContent()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
