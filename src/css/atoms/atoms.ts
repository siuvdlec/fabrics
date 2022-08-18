import type { vars } from '../../themes/vars.css'
import * as commonStyles from '../common/common.css'
import { sprinkles, RequiredResponsiveValue } from './sprinkles.css'

type Sprinkles = Parameters<typeof sprinkles>[0]

export type Space = keyof typeof vars.space | 'none'
export type ResponsiveSpace = RequiredResponsiveValue<Space>

export interface Atoms extends Sprinkles {
    reset?: keyof JSX.IntrinsicElements
}

export const atoms = ({ reset, ...rest }: Atoms) => {
    if (!reset) {
        return sprinkles(rest)
    }

    const elementReset = commonStyles.resetElement[reset as keyof typeof commonStyles.resetElement]

    const sprinklesClasses = sprinkles(rest)

    return `${elementReset ? ` ${elementReset}` : ''}${sprinklesClasses ? ` ${sprinklesClasses}` : ''}`
}
