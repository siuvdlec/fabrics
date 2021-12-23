import { FabricProvider } from '../src/providers/FabricProvider'

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
            <FabricProvider>
              <Story />
            </FabricProvider>
        )
    },
]
