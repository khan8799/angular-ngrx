import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { addCategory, addCategorySuccess, deleteCategory, deleteCategorySuccess, loadCategory, loadCategorySuccess, updateCategory, updateCategorySuccess } from "./category.actions";
import { exhaustMap, finalize, map, of, tap } from "rxjs";
import { CategoryService } from "src/app/services/category.service";
import { setErrorMessage, setLoadingSpinner } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";

@Injectable()
export class CategoryEffects {
    constructor(
        private action$: Actions,
        private store: Store<AppState>,
        private _categoryService: CategoryService,
        private router: Router,
    ) {}

    spinnerStart$ = createEffect(() => {
        return this.action$.pipe(
            ofType(...[loadCategory, updateCategory, deleteCategory]),
            map(action => setLoadingSpinner({status: true}))
        )
    })

    loadCategories$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadCategory),
            exhaustMap(action => {
                return this._categoryService
                    .list()
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map(data => loadCategorySuccess({category: data.payload}))
                    )

            })
        )
    })

    addCategory$ = createEffect(() => {
        return this.action$.pipe(
            ofType(addCategory),
            exhaustMap(action => {
                const data = {...action}
                delete data.type;
                return this._categoryService
                    .add(data)
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map(data => addCategorySuccess({category: data.payload}))
                    )
            })
        )
    })

    updateCategory$ = createEffect(() => {
        return this.action$.pipe(
            ofType(updateCategory),
            exhaustMap(action => {
                const data = {...action}
                delete data._id;
                delete data.type;
                return this._categoryService
                    .update(action._id, data)
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map(data => updateCategorySuccess({category: data.payload}))
                    )
            })
        )
    })

    deleteCategory$ = createEffect(() => {
        return this.action$.pipe(
            ofType(deleteCategory),
            exhaustMap(action => {
                return this._categoryService
                    .delete(action._id)
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map(data => deleteCategorySuccess(data))
                    )
            })
        )
    })

    updateCategorySuccess$ = createEffect(() => {
        return this.action$.pipe(
            ofType(updateCategorySuccess),
            map((action) => setErrorMessage({message: action.message}))
        )
    });

    categoryRedirect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(...[addCategorySuccess, updateCategorySuccess]),
            tap((action) => {
                this.router.navigate(['/category']);
            })
        )
    }, {dispatch: false});
}