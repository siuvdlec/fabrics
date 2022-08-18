import { style, styleVariants } from '@vanilla-extract/css'
import * as RE from 'fp-ts/Record'
import { pipe } from 'fp-ts/function'
import { vars } from '../../themes/vars.css'

export const root = style({ margin: '0 auto' })

export const width = styleVariants(
    pipe(
        vars.contentWidth,
        RE.map(config => ({
            minWidth: config.min,
            maxWidth: config.max,
        }))
    )
)
