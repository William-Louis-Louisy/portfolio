import { IFeature } from './feature.model';
import { IStack } from './stack.model';
import { ITask } from './task.model';

export interface Project {
  _id: string;
  name: string;
  date: string;
  image: string;
  stack: IStack[];
  description?: string;
  description_fr?: string;
  short_description: string;
  short_description_fr: string;
  tasks?: ITask[];
  features?: IFeature[];
  link?: string;
  github?: string[];
}
