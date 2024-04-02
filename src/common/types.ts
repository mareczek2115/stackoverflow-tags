export interface ITag {
  name: string;
  count: number;
  is_required: boolean;
  is_moderator_only: boolean;
  has_synonyms: boolean;
  collectives?: Array<any>;
}

export interface IApiRequest {
  page: number;
  page_size: number;
  sort: string;
  order: string;
}

export interface IApiResponse {
  quota_max: number;
  quota_remaining: number;
  has_more: boolean;
  items: Array<ITag>;
}

export interface IApiResponse {
  error_id: number;
  error_message: string;
  error_name: string;
}

export interface IControlProps {
  disabled: boolean;
}
