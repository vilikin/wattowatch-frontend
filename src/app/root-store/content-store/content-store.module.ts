import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contentReducer } from './reducer';
import { ContentStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('content', contentReducer),
    EffectsModule.forFeature([ContentStoreEffects])
  ]
})
export class ContentStoreModule {}
