import { 
    CanActivate, 
    Router, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    UrlTree 
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                if (!!user) {
                    return true;
                }
                return this.router.createUrlTree(['/auth'])
            }
        ))
    }
}