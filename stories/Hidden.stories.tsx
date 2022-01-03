import type { Story, Meta } from '@storybook/react/types-6-0'
import { Hidden, HiddenProps } from '../src/components'

const meta: Meta = {
    title: 'Hidden',
    component: Hidden,
    parameters: {
        options: { showPanel: true },
    },
}

export default meta

const Template: Story<HiddenProps> = args => (
    <Hidden {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex gravida fermentum efficitur.
    </Hidden>
)

export const Base = Template.bind({})
Base.args = {
    below: 'tablet',
}
