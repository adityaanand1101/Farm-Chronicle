import { vol4 } from './vol4';
import { vol3 } from './vol3';
import { vol2 } from './vol2';
import { vol1 } from './vol1';

export interface Article {
  title: string;
  authors: string;
  link: string;
}

export interface Issue {
  id: string;
  month: string;
  articles: Article[];
}

export interface Volume {
  vol: string;
  year: string;
  issues: Issue[];
}

export const archiveData: Volume[] = [
  vol4,
  vol3,
  vol2,
  vol1
];
