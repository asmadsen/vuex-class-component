import { _mutations } from '../constants'

export function Mutation(target: Object, key: string, descriptor: TypedPropertyDescriptor<(payload?: any) => void>) {
	const method: Function = descriptor.value || (() => undefined)
	const mutation = function (state, payload) {
		method.call(state, payload)
	}
	if (!target[_mutations]) {
		target[_mutations] = {}
	}
	target[_mutations][key] = mutation
}
