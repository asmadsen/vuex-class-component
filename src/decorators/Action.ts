import { _actions, _mutations } from '../constants'

export function Action(target: Object, key: string, descriptor: TypedPropertyDescriptor<(payload?: any) => Promise<any>|any>) {
	const method: Function = descriptor.value || (() => undefined)
	const action = function (state, payload) {
		method.call(state, payload)
	}
	if (!target[_actions]) {
		target[_actions] = {}
	}
	target[_actions][key] = action
}
