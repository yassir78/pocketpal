import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private modalCtrl: ModalController) {
  }
  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  confirm() {
    this.form.valid ? this.modalCtrl.dismiss(this.form.value, 'confirm') : this.form.markAllAsTouched();
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


  ngOnInit() {
  }

}
