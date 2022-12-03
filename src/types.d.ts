export interface QuoteType {
  category: string;
  author: string;
  text: string;
  id: string;
}

export type QuoteTypeNoId = Omit<QuoteType, 'id'>;