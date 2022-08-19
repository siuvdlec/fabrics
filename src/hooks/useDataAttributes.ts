import { useMemo } from 'react'
import { useFabricContext } from '../providers/FabricProvider'
export type DataAttributes = Record<string, string | number | undefined>

export const buildDataAttributes = (data: DataAttributes | undefined, init: DataAttributes): DataAttributes =>
    data ? Object.keys(data).reduce((c, k) => ({ ...c, [`data-${k}`]: data[k] }), init) : init

export const useDataAttributes = (dataAttributes?: DataAttributes, dataTest?: string) => {
    const { env } = useFabricContext()
    return useMemo(
        () => buildDataAttributes(dataAttributes, env !== 'production' && dataTest ? { 'data-test': dataTest } : {}),
        [dataAttributes, env, dataTest]
    )
}
