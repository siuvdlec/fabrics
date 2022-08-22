import '../src/css/common'
import { FabricsProvider } from '../src/providers/FabricsProvider'
import { defaultTheme } from '../src/themes/default'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    Story => {
        return (
            <FabricsProvider theme={defaultTheme} env="development">
                <Story />
            </FabricsProvider>
        )
    },
]
