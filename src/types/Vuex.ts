import { Plugin } from 'vuex'

export type Store<T> = {
	[P in keyof T]: T[P]
}

export interface VuexOptions {
	plugins?: Plugin<any>[],
	strict?: boolean,
	devtools?: boolean
}
