import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoreModule } from './user-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ContentStoreModule } from './content-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserStoreModule,
    ContentStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ]
})
export class RootStoreModule {}
