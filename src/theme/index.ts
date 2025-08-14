import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

const tokens = defineTokens({
  colors: {
    // Light theme colors
    light: {
      bg: {
        primary: { value: '#ffffff' },
        secondary: { value: '#f7fafc' },
        tertiary: { value: '#edf2f7' }
      },
      text: {
        primary: { value: '#1a202c' },
        secondary: { value: '#4a5568' },
        muted: { value: '#718096' }
      },
      border: {
        primary: { value: '#e2e8f0' },
        secondary: { value: '#cbd5e0' }
      }
    },
    // Dark theme colors
    dark: {
      bg: {
        primary: { value: '#1a202c' },
        secondary: { value: '#2d3748' },
        tertiary: { value: '#4a5568' }
      },
      text: {
        primary: { value: '#f7fafc' },
        secondary: { value: '#e2e8f0' },
        muted: { value: '#a0aec0' }
      },
      border: {
        primary: { value: '#4a5568' },
        secondary: { value: '#2d3748' }
      }
    },
    // Status colors (same for both themes)
    status: {
      critical: { value: '#e53e3e' },
      high: { value: '#dd6b20' },
      medium: { value: '#d69e2e' },
      low: { value: '#38a169' },
      info: { value: '#3182ce' }
    },
    // Focus colors for accessibility
    focus: {
      ring: { value: '#3182ce' },
      ringOffset: { value: '#ffffff' }
    }
  },
  spacing: {
    sidebar: {
      width: { value: '280px' },
      widthCollapsed: { value: '80px' },
      padding: { value: '1rem' },
      itemPadding: { value: '0.75rem 1rem' }
    },
    header: {
      height: { value: '72px' },
      padding: { value: '0 1.5rem' }
    },
    content: {
      padding: { value: '1.5rem' },
      gap: { value: '1.5rem' }
    }
  },
  sizes: {
    breakpoint: {
      mobile: { value: '768px' }
    }
  },
  radii: {
    base: { value: '0.375rem' },
    lg: { value: '0.5rem' }
  },
  shadows: {
    card: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' },
    cardDark: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.3)' }
  },
  fonts: {
    heading: { value: 'var(--font-public-sans), sans-serif' },
    body: { value: 'var(--font-public-sans), sans-serif' },
  },
})

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens,
  },
})