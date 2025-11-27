import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { ModuleItem } from "../components/ModuleItem";
import { LessonModule, GrowthMapProps } from "../types/LessonModule";
import { LESSON_MODULES } from "../data/modules";
import { SPACING, COLORS } from "../styles/theme";
import { useModuleActions } from "../hooks/useModuleActions";

export const GrowthMapScreen = ({
  modules = LESSON_MODULES,
}: GrowthMapProps) => {
  const { handleModulePress } = useModuleActions();

  const renderModuleItem: ListRenderItem<LessonModule> = useCallback(
    ({ item }) => <ModuleItem module={item} onPress={handleModulePress} />,
    [handleModulePress]
  );

  const keyExtractor = useCallback(
    (item: LessonModule) => item.id.toString(),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlashList
          data={modules}
          renderItem={renderModuleItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  listContainer: {
    paddingVertical: SPACING.md,
    gap: SPACING.sm,
  },
});
