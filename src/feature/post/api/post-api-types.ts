export type GetContentsParams = {
  page: number;
  per_page: number;
  strategy: "relevant" | "new" | "old";
};

export type ContentResponse = {
  id: string;
  owner_id: string;
  parent_id: string | null;
  slug: string;
  title: string;
  status: string;
  source_url: string | null;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string | null;
  tabcoins: number;
  tabcoins_credit: number;
  tabcoins_debit: number;
  owner_username: string;
  children_deep_count: number;
  type: string;
};

export type GetContentParams = {
  username: string;
  slug: string;
};

export type ContentDetailResponse = ContentResponse & {
  body: string;
};
