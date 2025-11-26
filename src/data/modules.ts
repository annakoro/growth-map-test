import { LessonModule, ModuleStatus } from "../types/LessonModule";

/**
 * Hardcoded lesson modules data for initial implementation
 * This data structure matches the requirements and can be easily replaced with API calls later
 */
export const LESSON_MODULES: LessonModule[] = [
  {
    id: 1,
    title: "Welcome Journey",
    status: ModuleStatus.DONE,
  },
  {
    id: 2,
    title: "Переключение на себя",
    status: ModuleStatus.ACTIVE,
  },
  {
    id: 3,
    title: "Источник вдохновения",
    status: ModuleStatus.LOCKED,
  },
  {
    id: 4,
    title: "Пространство идей",
    status: ModuleStatus.LOCKED,
  },
  {
    id: 5,
    title: "Финальный тест",
    status: ModuleStatus.LOCKED,
  },
];
