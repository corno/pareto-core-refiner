import * as _pinternals from 'pareto-core-internals'
import * as _pi from 'pareto-core-interface'

/**
 * these functions coming from core-internals should be exposed for deserializer development
 */
export {
    block,

    iterate_partially,
    iterate_fully,

    panic as fixme_abort,

    cc,
    au,
    ss,
} from "pareto-core-internals"


export namespace optional {

    export const set = _pinternals.optional_set
    export const not_set = _pinternals.optional_not_set
}

export namespace list {

    export const literal = _pinternals.list_literal
    export const build = _pinternals.list_build

}

export namespace dictionary {   

    export const literal = _pinternals.dictionary_literal
    export const build = _pinternals.dictionary_build
    export const from_list = _pinternals.dictionary_from_list

}


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

