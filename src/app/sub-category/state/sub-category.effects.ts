import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadSubCategory, loadSubCategorySuccess } from "./sub-category.actions";
import { SubCategoryService } from "src/app/services/sub-category.service";
import { exhaustMap, finalize, map } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setLoadingSpinner } from "src/app/shared/state/shared.actions";

@Injectable()
export class SubCategoryEffect {
    constructor(
        private action$: Actions,
        private _subCategoryService: SubCategoryService,
        private store: Store<AppState>
    ) {}

    spinnerStart$ = createEffect(() => {
        return this.action$.pipe(
            ofType(...[loadSubCategory]),
            map(action => setLoadingSpinner({status: true}))
        )
    })

    loadSubCategory$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadSubCategory),
            exhaustMap(action => {
                return this._subCategoryService
                    .list()
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map(data => loadSubCategorySuccess({subCategory: data.payload}))
                        
                    )
            })
        )
    })
}