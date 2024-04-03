import { IApiRequest, IApiResponse } from './types';

export const fetchTags = async (
  params: IApiRequest
): Promise<IApiResponse | string> => {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/tags?site=stackoverflow&page=${params.page}&pagesize=${params.page_size}&sort=${params.sort}&order=${params.order}`,
      { signal: AbortSignal.timeout(20000) }
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.name);
    return error.name;
  }
};

export const triggerEvent = (name: string): void => {
  const event = new CustomEvent(name);
  document.dispatchEvent(event);
};
