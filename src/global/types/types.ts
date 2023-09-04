export type TTodo = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
};

export type TRequestOptions = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};
