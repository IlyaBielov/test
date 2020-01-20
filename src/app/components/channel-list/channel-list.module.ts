import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChannelListComponent} from '@app/components/channel-list/channel-list.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatTreeModule} from '@angular/material';

@NgModule({
  declarations: [ChannelListComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTreeModule,
  ],
  exports: [ChannelListComponent]
})
export class ChannelListModule {
}
