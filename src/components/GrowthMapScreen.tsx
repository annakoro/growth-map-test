import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModuleItem } from "./ModuleItem";
import { LessonModule, GrowthMapProps } from "../types/LessonModule";
import { LESSON_MODULES } from "../data/modules";
import { SPACING, COLORS } from "../styles/theme";
import { useModuleActions } from "../hooks/useModuleActions";

export const GrowthMapScreen = ({
  modules = LESSON_MODULES,
}: GrowthMapProps) => {
  const { handleModulePress } = useModuleActions();

  const renderModuleItem = ({ item }: { item: LessonModule }) => (
    <ModuleItem module={item} onPress={handleModulePress} />
  );

  const keyExtractor = (item: LessonModule) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={modules}
          renderItem={renderModuleItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          windowSize={10}
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
