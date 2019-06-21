import { VuexModule } from '../modules/VuexModule'

export type DecoratorFunction<T> = (module: VuexModule) => void

export function createDecorator<T>(factory: DecoratorFunction<T>): (target: Object | typeof Object) => void {
	return function (target: Object | typeof Object) {
		const Ctor: any = typeof target === 'function'
			? target
			: target.constructor
		if (!Ctor.__decorators__) {
			Ctor.__decorators__ = []
		}
		Ctor.__decorators__.push(options => factory(options))
	}
}
