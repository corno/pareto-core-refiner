import * as _pinternals from 'pareto-core-internals'
import * as _pi from 'pareto-core-interface'

/**
 * these functions coming from core-internals should be exposed for deserializer development
 */
export {
    block,
    build_list,
    build_dictionary,
    create_iterator,
    dictionary_literal,
    list_literal,
    not_set,
    set,
    cc as deprecated_cc,
    panic as fixme_abort,

    list_to_dictionary,

    cc,
    au,
    ss,
} from "pareto-core-internals"