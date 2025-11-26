import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ModuleItemProps, ModuleStatus } from "../types/LessonModule";
import { StatusIcon } from "./StatusIcon";
import {
  MODULE_STYLES,
  COMPONENT_STYLES,
  TYPOGRAPHY,
  SPACING,
  LAYOUT,
  ANIMATIONS,
} from "../styles/theme";

export const ModuleItem = ({ module, onPress }: ModuleItemProps) => {
  const statusStyles = MODULE_STYLES[module.status];

  const handlePress = () => {
    onPress(module);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        COMPONENT_STYLES.touchable,
        {
          backgroundColor: statusStyles.backgroundColor,
          borderColor: statusStyles.borderColor,
        },
      ]}
      onPress={handlePress}
      activeOpacity={ANIMATIONS.opacity.pressed}
      accessibilityRole="button"
      accessibilityLabel={`${module.title}, status: ${module.status}`}
      accessibilityHint={
        module.status === ModuleStatus.ACTIVE
          ? "Tap to start lesson"
          : module.status === ModuleStatus.LOCKED
          ? "Lesson is locked"
          : "Lesson completed"
      }
    >
      <View style={styles.content}>
        <StatusIcon status={module.status} size={LAYOUT.iconSize.medium} />
        <Text
          style={[styles.title, { color: statusStyles.textColor }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {module.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...COMPONENT_STYLES.card,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.sm,
  },
  title: {
    flex: 1,
    marginLeft: SPACING.md,
    fontSize: TYPOGRAPHY.fontSize.body,
    fontWeight: TYPOGRAPHY.fontWeight.medium,
    lineHeight: TYPOGRAPHY.lineHeight.normal * TYPOGRAPHY.fontSize.body,
  },
});
