import { VuexOptions } from '../types/Vuex'
import { _root_options } from '../constants'
import { Module } from './Module'
import { VuexStore } from '../modules/VuexModule'

export function Store<T extends typeof VuexStore>(options: T) : void
export function Store<T extends typeof VuexStore>(options?: VuexOptions) : (target: T) => void
export function Store<T extends typeof VuexStore>(options?: VuexOptions|T) {
	if (typeof options === 'function') {
		createStore(options)
		return
	}

	return function (Component: T) {
		createStore(Component, options)
	}
}

function createStore<T extends typeof VuexStore>(Component: T, options?: VuexOptions) {
	Module(Component)
	const prototype = Component.prototype

	prototype[_root_options] = options
}
