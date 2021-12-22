import type { Story, Meta } from '@storybook/react/types-6-0'
import { Box, BoxProps } from '../src/components'

const meta: Meta = {
    title: 'Box',
    component: Box,
    parameters: {
        options: { showPanel: true },
    },
}

export default meta

const Template: Story<BoxProps> = args => (
    <Box {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex gravida fermentum efficitur.
    </Box>
)

export const Base = Template.bind({})
Base.args = {}
