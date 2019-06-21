import { _submodules } from '../constants'
import { VuexModule } from '../modules/VuexModule'

export function SubModule<T extends VuexModule>(target: any, key: string) {
	if (!target[_submodules]) {
		target[_submodules] = {}
	}
	target[_submodules]

}
