import {Component} from '@angular/core';
import {TopicService} from "../services/topic.service";
import {Topic} from "../models/topic";
import {ModalController} from "@ionic/angular";
import {AddTopicComponent} from "../components/modals/add-topic/add-topic.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
  topics: Observable<Topic[]>;

  constructor(private topicService: TopicService, private modalCtrl: ModalController) {
    this.topics = this.topicService.getTopics();
    this.topicService.findAll();
  }



  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddTopicComponent,
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.topicService.add(data);
    }
  }

}
