import type { Story, Meta } from '@storybook/react/types-6-0'
import { Box, ContentBlock, ContentBlockProps } from '../src/components'

const meta: Meta = {
    title: 'ContentBlock',
    component: ContentBlock,
    parameters: {
        layout: 'fullscreen',
        options: { showPanel: true },
    },
}

export default meta

const Template: Story<ContentBlockProps> = args => (
    <ContentBlock {...args}>
        <Box style={{ backgroundColor: 'lightgray' }} padding="m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ex gravida fermentum efficitur.
        </Box>
    </ContentBlock>
)

export const Base = Template.bind({})
Base.args = {
    width: 'page',
}
