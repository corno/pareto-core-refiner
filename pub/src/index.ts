import * as _pinternals from 'pareto-core-internals'
import * as _pi from 'pareto-core-interface'

/**
 * these functions coming from core-internals should be exposed for deserializer development
 */
export {
    block,
    list_build,
    dictionary_build,
    iterate,
    dictionary_literal,
    list_literal,
    optional_not_set,
    optional_set,
    cc as deprecated_cc,
    panic as fixme_abort,

    dictionary_from_list,

    cc,
    au,
    ss,
} from "pareto-core-internals"


type Dictionary_Builder<T> = {
    'add entry': (key: string, value: T) => void
}

export const deprecated_build_dictionary = <T>(
    $: ($c: Dictionary_Builder<T>) => void
): _pi.Dictionary<T> => {
    const temp: { [key: string]: T } = {}
    $({
        'add entry': (key, $) => {
            if (key in temp) {
                _pinternals.panic(`duplicate key in dictionary literal: ${key}`)
            }
            temp[key] = $
        }
    })
    return _pinternals.dictionary_literal(temp)
}

