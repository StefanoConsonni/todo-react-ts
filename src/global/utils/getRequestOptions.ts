export function getRequestOption(httpMethod: string, data: unknown) {
  return {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
