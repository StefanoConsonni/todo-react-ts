import { TRequestOptions } from "../types/types";

export function getRequestOptions(httpMethod: string, data: object): TRequestOptions {
  return {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
