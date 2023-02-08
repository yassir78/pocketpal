import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private topics: Topic[] = [{id: '123', name: 'test', posts: []}];

  constructor() { }

  /**
   * Method that returns all the topics
   *
   * @return An array of {Topic}
   */
  findAll(): Topic[] {
    return this.topics;
  }

  /**
   * Method that returns the topic which match the given id
   *
   * @param id {string} the given id
   * @return A {Topic}
   */
  findOne(id: string): Topic | null {
    const topic = this.topics.find(t => t.id === id);
    return topic ?? null;
  }

  /**
   * Add a new {Topic} to the list
   *
   * @param topic {Topic}, the {Topic} to add to the list
   */
  create(topic: Topic): void {
    this.topics = this.topics.concat(topic);
  }

  /**
   * Remove a {Topic} from the list
   *
   * @param topic {Topic}, the {Topic} to remove from the list
   */
  delete(topic: Topic): void {
    this.topics = this.topics.filter(t => t.id !== topic.id);
  }

  /**
   * Add a new {Post} to the list of {Post} of the {Topic} that match the given topicId
   *
   * @param topicId {string}, the id of the {Topic} we want to add the new {Post}
   * @param post {Post}, the new {Post} to add
   */
  createPost(topicId: string, post: Post) {
    const topicIndex = this.topics.findIndex(t => t.id === topicId);
    if(topicIndex > -1) {
      this.topics[topicIndex].posts = this.topics[topicIndex]?.posts.concat(post);
    }
  }

  /**
   * Remove a {Post} from the list of {Post} of the {Topic} that match the given topicId
   *
   * @param topicId {string}, the id of the {Topic} we want to remove the {Post}
   * @param post {Post}, the {Post} to remove
   */
  deletePost(topicId: string, post: Post): void {
    const topicIndex = this.topics.findIndex(t => t.id === topicId);
    if(topicIndex > -1) {
      this.topics[topicIndex].posts = this.topics[topicIndex]?.posts.filter(p => p.id !== post.id);
    }
  }
}
