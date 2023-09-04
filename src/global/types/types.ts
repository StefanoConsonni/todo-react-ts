export type TTodo = {
  id: string;
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

export type TFormValues = {
  title: string;
  description: string;
  status: "not completed" | "completed";
};
