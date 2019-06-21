import { Store } from '../../src/decorators/Store'
import { Module } from '../../src/decorators/Module'
import { VuexStore } from '../../src/modules/VuexModule'
import { SubModule } from '../../src/decorators/Submodule'

describe('VuexModule', () => {
	it('should be able to create submodule', () => {
		// Must create base module using VuexStore
		@Store
		class BaseStore extends VuexStore {
			user = UserModule.asSubmodule
		}

		@Module
		class UserModule extends BaseStore.Submodule<BaseStore>('user') {
			name = 'Ola'
		}

		const userModule = new UserModule()
		expect(userModule.namespace).toEqual('user')
	})
})
