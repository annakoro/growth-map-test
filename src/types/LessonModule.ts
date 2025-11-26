export const ModuleStatus = {
  DONE: "done",
  ACTIVE: "active",
  LOCKED: "locked",
} as const;

export type ModuleStatus = (typeof ModuleStatus)[keyof typeof ModuleStatus];

export const LessonModule = {
  id: 0,
  title: "",
  status: ModuleStatus.LOCKED,
} as const;

export type LessonModule = {
  id: number;
  title: string;
  status: ModuleStatus;
};

export const ModuleItemProps = {
  module: {} as LessonModule,
  onPress: (() => {}) as (module: LessonModule) => void,
} as const;

export type ModuleItemProps = {
  module: LessonModule;
  onPress: (module: LessonModule) => void;
};

export const GrowthMapProps = {
  modules: [] as LessonModule[],
} as const;

export type GrowthMapProps = {
  modules?: LessonModule[];
};

export const StatusIconProps = {
  status: ModuleStatus.LOCKED,
  size: 24,
} as const;

export type StatusIconProps = {
  status: ModuleStatus;
  size?: number;
};

export const ModuleStyleConfig = {
  backgroundColor: "",
  borderColor: "",
  iconColor: "",
  textColor: "",
} as const;

export type ModuleStyleConfig = {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
};

export const ModuleStyles = {
  done: {
    backgroundColor: "#E8F5E8",
    borderColor: "#4CAF50",
    iconColor: "#4CAF50",
    textColor: "#2E7D32",
  },
  active: {
    backgroundColor: "#E3F2FD",
    borderColor: "#2196F3",
    iconColor: "#2196F3",
    textColor: "#1565C0",
  },
  locked: {
    backgroundColor: "#F5F5F5",
    borderColor: "#E0E0E0",
    iconColor: "#9E9E9E",
    textColor: "#757575",
  },
} as const;

export type ModuleStyles = typeof ModuleStyles;
