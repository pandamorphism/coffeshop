// https://github.com/palantir/tslint/issues/3248  what is your opinion? )
// here we use types to have compile-time checks, not to implement them, so my point - they are just types.
/* tslint:disable: interface-over-type-literal */
export type Menu = { products: Product[] };
export type HasNameAndId = { id: number; name: string; };
export type Product = HasNameAndId & {
  description: string;
  price: number;
};

export type ProductDetails = HasNameAndId & {
  price: number;
  before_sale_price?: number;
  description: string;
  full_description: string;
  order: number;
  category: Category;
  images: ImageSet;
  extras: Extra[];
  tags?: string[]; // my gut feeling they are simple strings
  availability: 'available' | 'not_available'; // i believe its enumeration of statuses
};

export type Category = HasNameAndId;

export type ImageSet = {
  full_size: string;
  thumbnail: string;
};

export type Extra = HasNameAndId & {
  min: number;
  max: number;
  items: ExtraItem[];
};

export type ExtraItem = HasNameAndId & {
  extra_id: number;
  price: number;
};
