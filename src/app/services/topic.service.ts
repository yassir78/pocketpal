import {Injectable} from '@angular/core';
import {Topic} from "../models/topic";
import {locate} from "ionicons/icons";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topics: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>([]);
  selectedTopic: BehaviorSubject<Topic> = new BehaviorSubject<Topic>({posts: []});

  constructor() {
  }

  findAll(): void {
    this.topics.value;
  }

  findOne(id: number): void {
    const topic = this.topics.value.find(topic => topic.id === id);
    this.selectedTopic.next(topic!);
  }

  add(topic: Topic): Topic {
    topic.id = this.idGenerator();
    const value = this.topics.value;
    value.push({...topic,posts: []});
    this.topics.next(value);
    return topic;
  }

  addPost(topicId: number, post: any): Topic {
    const topic = this.selectedTopic.value;
    if (topic) {
      console.log(topic)
      topic.posts!.push(post);
      const value = this.topics.value;
      this.topics.next(value);
      return topic;
    }
    return topic!;

  }

  getTopics(): Observable<Topic[]> {
    return this.topics.asObservable();
  }

  getSelectedTopic(): Observable<Topic> {
    return this.selectedTopic.asObservable();
  }

  private idGenerator(): number {
    return Math.floor(Math.random() * 1000);
  }

  deletePost(number: number, id: number) {
    const topics = this.topics.value;
    const topic = topics.find(topic => topic.id === number);
    if (topic) {
      const posts = topic.posts;
      const post = posts?.find(post => post.id === id);
      if (post) {
        const index = posts?.indexOf(post);
        posts?.splice(index!, 1);
        this.topics.next(topics);
        this.selectedTopic.next(topic);
      }
    }
  }
}
