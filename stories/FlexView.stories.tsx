import type { Story, Meta } from '@storybook/react/types-6-0'
import { Box, FlexView } from '../src/components'

const meta: Meta = {
    title: 'FlexView',
    component: FlexView.Container,
    parameters: {
        options: { showPanel: true },
    },
}

export default meta

const TemplateBase: Story<FlexView.ContainerProps> = args => (
    <FlexView.Container {...args} flexWrap={{ mobile: 'wrap', tablet: 'nowrap' }}>
        <FlexView.Item width={{ mobile: 'full', tablet: '1/2' }}>
            <Box textAlign="center" padding="m" style={{ backgroundColor: 'lightgray' }}>
                One
            </Box>
        </FlexView.Item>
        <FlexView.Item width={{ mobile: 'full', tablet: '1/2' }}>
            <Box textAlign="center" padding="m" style={{ backgroundColor: 'lightgray' }}>
                Two
            </Box>
        </FlexView.Item>
    </FlexView.Container>
)

export const Base = TemplateBase.bind({})
Base.args = {
    gap: 's',
}

const TemplateAuto: Story<FlexView.ContainerProps> = args => (
    <FlexView.Container {...args}>
        <FlexView.Item flex={1}>
            <Box textAlign="center" padding="m" style={{ backgroundColor: 'lightgray' }}>
                One
            </Box>
        </FlexView.Item>
        <FlexView.Item flex={1}>
            <Box textAlign="center" padding="m" style={{ backgroundColor: 'lightgray' }}>
                Two
            </Box>
        </FlexView.Item>
    </FlexView.Container>
)

export const Auto = TemplateAuto.bind({})
Auto.args = {
    gap: 's',
}
