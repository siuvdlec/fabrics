export const ctorFromKeyArray = <K extends keyof any, R>(
    ks: Readonly<Array<K>>,
    map: (k: K) => R
): {
    [k in K]: R
} => ks.reduce((c, k) => ({ ...c, [k]: map(k) }), {} as { [k in K]: R })

export const objectEntries = <O extends { [k: string]: unknown }>(o: O): Array<[keyof O, O[keyof O]]> =>
    Object.entries(o) as Array<[keyof O, O[keyof O]]>

export const objectMap = <O extends { [k: string]: unknown }, R>(
    o: O,
    map: (v: O[typeof k], k: keyof O) => R
): { [k in keyof O]: R } => Object.assign({}, ...objectEntries(o).map(([k, v]) => ({ [k]: map(v, k) })))

export const objectPick = <O extends Record<keyof any, any>, KS extends keyof O>(o: O, ks: ReadonlyArray<KS>) =>
    objectKeyFilter(o, ks, true)

export const objectOmit = <O extends Record<keyof any, any>, KS extends keyof O>(o: O, ks: ReadonlyArray<KS>) =>
    objectKeyFilter(o, ks, false)

const objectKeyFilter = <O extends Record<keyof any, unknown>, KS extends keyof O, P extends boolean>(
    o: O,
    ks: ReadonlyArray<KS>,
    pick: P
): P extends true ? Pick<O, KS> : Omit<O, KS> =>
    Object.assign(
        {},
        ...objectEntries(o)
            .filter(([k]) => (pick ? ks.includes(k as KS) : !ks.includes(k as KS)))
            .map(tupleToKeyValue)
    )

const tupleToKeyValue = <K extends keyof any, V>([k, v]: [K, V]): Record<K, V> => ({ [k]: v } as Record<K, V>)
