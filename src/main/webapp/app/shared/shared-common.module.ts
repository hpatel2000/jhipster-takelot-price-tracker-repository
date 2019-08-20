import { NgModule } from '@angular/core';

import { JhipsterTakelotPriceTrackerApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterTakelotPriceTrackerApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterTakelotPriceTrackerApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterTakelotPriceTrackerApplicationSharedCommonModule {}
