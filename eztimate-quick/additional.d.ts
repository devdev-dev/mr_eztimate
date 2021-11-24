import { MongoClient } from 'mongodb';
import Pusher from 'pusher';

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}
