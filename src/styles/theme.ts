import { ModuleStatus } from "../types/LessonModule";

/**
 * Base spacing unit following 8px grid system
 */
const BASE_SPACING = 8;

/**
 * Spacing constants based on 8px grid system
 */
export const SPACING = {
  xs: BASE_SPACING * 0.5, // 4px
  sm: BASE_SPACING, // 8px
  md: BASE_SPACING * 1.5, // 12px
  lg: BASE_SPACING * 2, // 16px
  xl: BASE_SPACING * 3, // 24px
  xxl: BASE_SPACING * 4, // 32px
  xxxl: BASE_SPACING * 6, // 48px
} as const;

/**
 * Typography constants
 */
export const TYPOGRAPHY = {
  fontSize: {
    small: 12,
    body: 16,
    title: 18,
    heading: 24,
  },
  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
} as const;

/**
 * Layout constants
 */
export const LAYOUT = {
  cardHeight: 80,
  borderRadius: {
    small: 8,
    medium: 12,
    large: 16,
  },
  iconSize: {
    small: 16,
    medium: 24,
    large: 32,
  },
  touchTarget: {
    minimum: 44,
  },
  screenPadding: SPACING.lg,
  cardSpacing: SPACING.md,
} as const;

/**
 * Color palette
 */
export const COLORS = {
  // Primary colors
  primary: "#2196F3",
  primaryLight: "#E3F2FD",
  primaryDark: "#1565C0",

  // Success colors
  success: "#4CAF50",
  successLight: "#E8F5E8",
  successDark: "#2E7D32",

  // Neutral colors
  gray: "#9E9E9E",
  grayLight: "#F5F5F5",
  grayMedium: "#E0E0E0",
  grayDark: "#757575",

  // Background colors
  background: {
    primary: "#FAFAFA",
    card: "#FFFFFF",
  },

  // Text colors
  text: {
    primary: "#212121",
    secondary: "#757575",
  },

  // Border colors
  border: "#E0E0E0",

  // Card background
  cardBackground: "#FFFFFF",
} as const;

/**
 * Status-specific styling configurations
 * Each status has its own color scheme for consistent visual hierarchy
 */
export const MODULE_STYLES = {
  [ModuleStatus.DONE]: {
    backgroundColor: COLORS.successLight,
    borderColor: COLORS.success,
    iconColor: COLORS.success,
    textColor: COLORS.successDark,
  },
  [ModuleStatus.ACTIVE]: {
    backgroundColor: COLORS.primaryLight,
    borderColor: COLORS.primary,
    iconColor: COLORS.primary,
    textColor: COLORS.primaryDark,
  },
  [ModuleStatus.LOCKED]: {
    backgroundColor: COLORS.grayLight,
    borderColor: COLORS.grayMedium,
    iconColor: COLORS.gray,
    textColor: COLORS.grayDark,
  },
} as const;

/**
 * Common component styles
 */
export const COMPONENT_STYLES = {
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: LAYOUT.borderRadius.medium,
    borderWidth: 1,
    minHeight: LAYOUT.cardHeight,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.xs,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SPACING.lg,
  },
  touchable: {
    minHeight: LAYOUT.touchTarget.minimum,
  },
} as const;

/**
 * Animation constants
 */
export const ANIMATIONS = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  opacity: {
    pressed: 0.7,
    disabled: 0.5,
  },
} as const;

/**
 * Accessibility constants
 */
export const ACCESSIBILITY = {
  minimumTouchTarget: LAYOUT.touchTarget.minimum,
  colorContrast: {
    normal: 4.5, // WCAG AA standard
    large: 3.0, // WCAG AA for large text
  },
} as const;
