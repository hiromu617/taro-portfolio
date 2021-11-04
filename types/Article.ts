export type Article = {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly createdAt: string;
  readonly publishedAt: string;
  readonly reviseAt: string;
  readonly thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};
