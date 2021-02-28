import { Injectable } from '@nestjs/common';
// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  data = {
    "name": "Himanshu Singh",
    "place": "India",
  }

  async publishData() {
    const dataBuffer = Buffer.from(JSON.stringify(this.data));
    const messageId =  await pubSubClient.topic("projects/service-exploration-lab-305311/topics/pubsub-demo").publish(dataBuffer); 
    console.log(`Message ${messageId} published.`);
  }
}
