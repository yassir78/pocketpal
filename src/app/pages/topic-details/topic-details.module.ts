import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicDetailsPageRoutingModule } from './topic-details-routing.module';

import { TopicDetailsPage } from './topic-details.page';
import {AddPostComponent} from "../../components/modals/add-post/add-post.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TopicDetailsPage,AddPostComponent]
})
export class TopicDetailsPageModule {}
