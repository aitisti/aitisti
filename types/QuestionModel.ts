import { Document } from '@contentful/rich-text-types';

export type QuestionModel = {
  id: string;
  q: string;
  a: Document;
};
