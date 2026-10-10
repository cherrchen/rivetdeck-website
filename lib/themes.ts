/**
 * Theme Studio builtin palettes (8) plus the official Default, for the
 * interactive preview. Colors are copied from `src/client/presets.ts` in
 * cherrchen/dsh-theme-studio v0.1.3 (MIT): `bgBase`, `bgLayer1`, `sidebar`,
 * `labelPrimary`, `labelSecondary` and `brand` of each palette.
 * Default uses the `DEFAULT_PREVIEW` mosaic (background, surface, foreground,
 * accent) from the same file; its sidebar and muted text are neutral stand-ins
 * because the official theme is not an overlay.
 */

export interface ThemeColors {
  base: string
  surface: string
  sidebar: string
  text: string
  muted: string
  accent: string
}

export interface ThemePalette {
  id: string
  name: string
  light: ThemeColors
  dark: ThemeColors
}

export const THEMES: readonly ThemePalette[] = [
  {
    id: 'default',
    name: 'Default',
    light: { base: '#ffffff', surface: '#f5f6f7', sidebar: '#f5f6f7', text: '#1f1f1f', muted: '#5c6570', accent: '#111111' },
    dark: { base: '#151517', surface: '#232324', sidebar: '#151517', text: '#f1f3f5', muted: '#9aa1a9', accent: '#f1f3f5' },
  },
  {
    id: 'claude',
    name: 'Claude',
    light: { base: '#FAF9F5', surface: '#FFFFFF', sidebar: '#F0EEE6', text: '#141413', muted: '#73726C', accent: '#D97757' },
    dark: { base: '#1F1E1D', surface: '#262624', sidebar: '#141413', text: '#FAF9F5', muted: '#9C9A92', accent: '#D97757' },
  },
  {
    id: 'codex',
    name: 'Codex',
    light: { base: '#FFFFFF', surface: '#F5F6F7', sidebar: '#F5F6F7', text: '#0D0D0D', muted: '#5C6570', accent: '#0285FF' },
    dark: { base: '#181818', surface: '#222222', sidebar: '#141414', text: '#FFFFFF', muted: '#9AA1A9', accent: '#339CFF' },
  },
  {
    id: 'claude-cream',
    name: 'Claude Cream',
    light: { base: '#F5F3E9', surface: '#FFFFFF', sidebar: '#F0EEE6', text: '#29271D', muted: '#6D675B', accent: '#B7791F' },
    dark: { base: '#2D2E2D', surface: '#303030', sidebar: '#242524', text: '#E9E6DC', muted: '#BBB6A8', accent: '#E6BF7A' },
  },
  {
    id: 'graphite',
    name: 'Graphite',
    light: { base: '#e8eaed', surface: '#f4f5f6', sidebar: '#dfe2e6', text: '#2c3036', muted: '#5c6570', accent: '#5b6570' },
    dark: { base: '#1c1e22', surface: '#25282c', sidebar: '#16181b', text: '#d5d8dc', muted: '#9aa1a9', accent: '#8b949e' },
  },
  {
    id: 'oled',
    name: 'OLED',
    light: { base: '#f7f7f7', surface: '#ffffff', sidebar: '#efefef', text: '#111111', muted: '#4d4d4d', accent: '#155eef' },
    dark: { base: '#000000', surface: '#0a0a0a', sidebar: '#000000', text: '#f2f2f2', muted: '#b3b3b3', accent: '#84adff' },
  },
  {
    id: 'nordic',
    name: 'Nordic',
    light: { base: '#eceff4', surface: '#e5e9f0', sidebar: '#e5e9f0', text: '#2e3440', muted: '#4c566a', accent: '#5e81ac' },
    dark: { base: '#2e3440', surface: '#3b4252', sidebar: '#2e3440', text: '#eceff4', muted: '#d8dee9', accent: '#88c0d0' },
  },
  {
    id: 'paper',
    name: 'Paper',
    light: { base: '#f6f1e7', surface: '#efe8d8', sidebar: '#efe8d8', text: '#3f3a32', muted: '#6b6256', accent: '#8c5a3c' },
    dark: { base: '#1c1915', surface: '#26221c', sidebar: '#17140f', text: '#ede6d8', muted: '#c4b8a4', accent: '#d4a574' },
  },
  {
    id: 'warm',
    name: 'Warm',
    light: { base: '#f7f0e8', surface: '#efe6da', sidebar: '#efe6da', text: '#3a3229', muted: '#6b5d4e', accent: '#c4784a' },
    dark: { base: '#1f1a16', surface: '#2a241f', sidebar: '#191511', text: '#f0e6da', muted: '#c9b7a4', accent: '#e0a070' },
  },
]
