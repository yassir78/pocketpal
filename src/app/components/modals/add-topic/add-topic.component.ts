import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss'],
})
export class AddTopicComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
  });


  constructor(private modalCtrl: ModalController) {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  get name() {
    return this.form.get('name');
  }

  confirm() {
    this.form.valid ? this.modalCtrl.dismiss(this.form.value, 'confirm') : this.form.markAllAsTouched();
  }

  ngOnInit() {
  }

}
