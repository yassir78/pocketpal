import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {TopicService} from "../../services/topic.service";
import {Topic} from "../../models/topic";
import {ModalController} from "@ionic/angular";
import {AddPostComponent} from "../../components/modals/add-post/add-post.component";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.page.html',
  styleUrls: ['./topic-details.page.scss'],
})
export class TopicDetailsPage implements OnInit {

  private id: number | undefined;
  topic: Observable<Topic> | undefined;


  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.topic = this.topicService.getSelectedTopic();
    this.topicService.findOne(this.id)!;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddPostComponent,
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.topicService.addPost(this.id!, data);
    }
  }

  deletePost(id: number) {
    this.topicService.deletePost(this.id!, id);
  }

}
