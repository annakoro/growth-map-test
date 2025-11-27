import { useCallback, useMemo } from "react";
import { Alert } from "react-native";
import { LessonModule, ModuleStatus } from "../types/LessonModule";

type ModuleActionHandler = (module: LessonModule) => void;

interface ModuleActionHandlers {
  [ModuleStatus.ACTIVE]: ModuleActionHandler;
  [ModuleStatus.LOCKED]: ModuleActionHandler;
  [ModuleStatus.DONE]: ModuleActionHandler;
}

export const useModuleActions = () => {
  const handleActiveModule = useCallback(() => {
    console.log("Start lesson");
  }, []);

  const handleLockedModule = useCallback(() => {
    Alert.alert(
      "Lesson Locked",
      "This lesson is not available yet. Please complete the previous lessons to unlock it.",
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  }, []);

  const handleDoneModule = useCallback(() => {
    console.log("Lesson already completed");
  }, []);

  const actionHandlers = useMemo<ModuleActionHandlers>(
    () => ({
      [ModuleStatus.ACTIVE]: handleActiveModule,
      [ModuleStatus.LOCKED]: handleLockedModule,
      [ModuleStatus.DONE]: handleDoneModule,
    }),
    [handleActiveModule, handleLockedModule, handleDoneModule]
  );

  const handleModulePress = useCallback(
    (module: LessonModule) => {
      const handler = actionHandlers[module.status];

      if (handler) {
        handler(module);
      } else {
        console.warn(`Unknown module status: ${module.status}`);
      }
    },
    [actionHandlers]
  );

  return {
    handleModulePress,
    handleActiveModule,
    handleLockedModule,
    handleDoneModule,
  };
};
