import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactive } from '../types/can-deactive';

@Injectable({
  providedIn: 'root'
})
export class TodoDeactiveGuard implements CanDeactivate<CanDeactive> {
  canDeactivate(
    component: CanDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const { canDeactive, isSkipCheck } = component;

    if (canDeactive) {
      return true;
    } else {
      if (confirm('คุณต้องการจะออกจริง ๆ หรือ')) {
        return true;
      } else {
        return false;
      }
    }
  }
}
