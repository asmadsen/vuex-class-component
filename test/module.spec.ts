import { Store } from '../src/decorators/Store'
import { Mutation } from '../src/decorators/Mutation'
import { Action } from '../src/decorators/Action'
import { VuexStore } from '../src/modules/VuexModule'

describe('VuexStore', () => {
	it('should be able to specify plugins, strict, and devtools', () => {
		@Store
		class DefaultStore extends VuexStore {
		}

		expect(DefaultStore.ExtractVuexOptions)
			.not.toEqual(expect.objectContaining({
			devtools: expect.anything(),
			strict: expect.anything(),
			plugins: expect.anything(),
		}))

		const noopPlugin = () => null
		@Store({ strict: true, devtools: false, plugins: [noopPlugin] })
		class ConfiguredStore extends VuexStore {
			test = ''
		}

		const a: ConfiguredStore = new ConfiguredStore()


		expect(ConfiguredStore.ExtractVuexOptions)
			.toEqual(expect.objectContaining({
				strict: true,
				devtools: false,
				plugins: expect.arrayContaining([noopPlugin])
			}))
	})

	it.skip('should extract state, mutations, actions, and getters like a regular module', () => {
		@Store
		class DefaultStore extends VuexStore {
			value = 1

			@Mutation
			changeValue(newValue: number) {
				this.value = newValue
			}

			@Action
			async delayedChange(newValue: number) {
				await new Promise(resolve => setTimeout(resolve, 100))
				this.changeValue(newValue)
			}

			get doubledValue() {
				return this.value * 2
			}
		}
	})
})
