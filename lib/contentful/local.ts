import {
  Asset,
  AssetCollection,
  ContentfulClientApi,
  ContentType,
  ContentTypeCollection,
  EntryCollection,
  LocaleCollection,
  Space,
  SyncCollection,
  Tag,
  Entry,
  TagCollection,
} from 'contentful';

const localContentfulClient: ContentfulClientApi = {
  getAsset(id: string, _query?: any): Promise<Asset> {
    return Promise.resolve({} as Asset);
  },
  getAssets(_query?: any): Promise<AssetCollection> {
    return Promise.resolve({} as AssetCollection);
  },
  getContentType(_id: string): Promise<ContentType> {
    return Promise.resolve({} as ContentType);
  },
  getContentTypes(_query?: any): Promise<ContentTypeCollection> {
    return Promise.resolve({} as ContentTypeCollection);
  },
  getEntries<T>(_query?: any): Promise<EntryCollection<T>> {
    return Promise.resolve({
      total: 0,
      skip: 0,
      limit: 0,
      items: [] as Array<Entry<T>>,
      toPlainObject(): object {
        return {};
      },
      stringifySafe(_replacer?: any, _space?: any): string {
        return '';
      },
    });
  },
  getEntry<T>(id: string, _query?: any): Promise<Entry<T>> {
    return Promise.resolve({} as Entry<T>);
  },
  getLocales(): Promise<LocaleCollection> {
    return Promise.resolve({} as LocaleCollection);
  },
  getSpace(): Promise<Space> {
    return Promise.resolve({} as Space);
  },
  getTag(_id: string): Promise<Tag> {
    return Promise.resolve({} as Tag);
  },
  getTags(_query?: any): Promise<TagCollection> {
    return Promise.resolve({} as TagCollection);
  },
  parseEntries<T>(_raw: any): Promise<EntryCollection<T>> {
    return Promise.resolve({} as EntryCollection<T>);
  },
  sync(_query: any): Promise<SyncCollection> {
    return Promise.resolve({} as SyncCollection);
  },
};

export default localContentfulClient;
