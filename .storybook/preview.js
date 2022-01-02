import { FabricProvider } from '../src/providers/FabricProvider'
import { stdTheme } from '../src/themes/std'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
    (Story) => {
        return (
            <FabricProvider theme={stdTheme}>
              <Story />
            </FabricProvider>
        )
    },
]
