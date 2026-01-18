
// KasselHub Color System - Inspired by Kassel logo (Blue → Purple gradient)
export const kasselColors = {
  // Primary brand colors from logo
  primary: '#4A90E2', // Blue
  primaryDark: '#357ABD',
  secondary: '#8B5CF6', // Purple
  secondaryDark: '#7C3AED',
  
  // Gradient colors
  gradientStart: '#4A90E2',
  gradientEnd: '#8B5CF6',
  
  // Neutral colors
  background: '#FFFFFF',
  backgroundDark: '#0F172A',
  card: '#F8FAFC',
  cardDark: '#1E293B',
  
  // Text colors
  text: '#1E293B',
  textDark: '#F1F5F9',
  textSecondary: '#64748B',
  textSecondaryDark: '#94A3B8',
  
  // Accent colors
  accent: '#10B981', // Green for success/CTA
  accentDark: '#059669',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // UI elements
  border: '#E2E8F0',
  borderDark: '#334155',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(255, 255, 255, 0.9)',
};

// Legacy color exports for compatibility
export const appleBlue = kasselColors.primary;
export const appleRed = kasselColors.error;

export const zincColors = {
  zinc50: kasselColors.card,
  zinc100: '#F1F5F9',
  zinc200: kasselColors.border,
  zinc300: '#CBD5E1',
  zinc400: kasselColors.textSecondary,
  zinc500: '#64748B',
  zinc600: '#475569',
  zinc700: '#334155',
  zinc800: kasselColors.text,
  zinc900: '#0F172A',
};

export function borderColor(isDark: boolean) {
  return isDark ? kasselColors.borderDark : kasselColors.border;
}
