import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { navigationType } from '../config/app.config';
import { navigationItems } from './navigation.data';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        if (navigationType === 'Static') {
          const navigation = {
            compact: navigationItems,
            default: navigationItems,
            futuristic: navigationItems,
            horizontal: navigationItems
          };
          this._navigation.next(navigation);
          return of(navigation);
        } else {
          return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
              this._navigation.next(navigation);
            })
          );
        }
      }
}
