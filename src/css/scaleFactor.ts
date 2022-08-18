export const scaleFactor = [
    0.563, // 9
    0.75, // 12
    1, // 16
    1.125, // 18
    1.5, // 24
    2.75, // 44
    3, // 48
    3.5, // 56
] as const

export const getScaleFactorObj = () =>
    Object.fromEntries(scaleFactor.map(v => [v, v])) as Record<typeof scaleFactor[number], typeof scaleFactor[number]>

export const scaleFactorIcons = [
    1, // 16
    1.5, // 24
    2, // 32
] as const

const getPerc = (scale: number) => `${scale * 100}%`

export const scaleMap = {
    '1/2': getPerc(1 / 2),
    '1/3': getPerc(1 / 3),
    '2/3': getPerc(2 / 3),
    '1/4': getPerc(1 / 4),
    '3/4': getPerc(3 / 4),
    '1/5': getPerc(1 / 5),
    '2/5': getPerc(2 / 5),
    '3/5': getPerc(3 / 5),
    '4/5': getPerc(4 / 5),
    '1/6': getPerc(1 / 6),
    '1/7': getPerc(1 / 7),
    full: '100%',
    content: 'auto',
}
