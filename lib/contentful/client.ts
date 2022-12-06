import { ContentfulClientApi, createClient } from 'contentful';
import localContentfulClient from './local';

let contentfulClient: ContentfulClientApi;

if (process.env.NODE_ENV === 'production') {
  contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN ?? '',
  });
} else {
  contentfulClient = localContentfulClient;
}

export default contentfulClient;
