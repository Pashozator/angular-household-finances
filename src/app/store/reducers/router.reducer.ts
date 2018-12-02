import { RouterStateUrl } from '../state/router.state';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		let route = routerState.root;

		while (route.firstChild) {
			route = route.firstChild;
		}

		const { url, root: { queryParams } } = routerState,
			{ params } = route;

		return { url, params, queryParams };
	}
}
