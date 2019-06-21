import { Properties } from '../types/utils'
import { _root_options } from '../constants'

type PublicConstructor<T> = new (...args: any[]) => T

export class VuexModule {
	readonly namespace: string | undefined
	private constructor() {
	}

	static Submodule<T extends VuexModule>(namespace: Properties<T>) {
		return class extends VuexModule {
			readonly namespace = namespace as string
			constructor() {
				super()
			}
		}
		/*
		const moduleProperties = Object.getOwnPropertyDescriptors(cls.prototype)
			.reduce((acc, key) => ({...acc, [key]: key}), {}) as Properties<InstanceType<T>>
		moduleProperties //?
		const namespace = name(moduleProperties)

		 */
	}

	/**
	 * asSubmodule will return the constructor and not a instance but the type will says it's an instance.
	 * This is because the proxy will create the instance
	 */
	// @ts-ignore
	static get asSubmodule(): InstanceType<this> {
		return this
	}

	static VuexStore = class extends VuexModule {
		constructor() {
			super()
		}

		static get ExtractVuexOptions() {
			return {
				...this.prototype[_root_options]
			}
		}
	}
}

export const VuexStore = VuexModule.VuexStore
