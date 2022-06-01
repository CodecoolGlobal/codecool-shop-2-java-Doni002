DROP TABLE IF EXISTS public.supplier;
CREATE TABLE public.supplier (
    id integer NOT NULL PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL
);

DROP TABLE IF EXISTS public.product;
CREATE TABLE public.product (
   id integer NOT NULL PRIMARY KEY,
   category_id integer NOT NULL,
   supplier_id integer NOT NULL,
   name text NOT NULL,
   price integer NOT NULL,
   currency text NOT NULL,
   description text NOT NULL
);

DROP TABLE IF EXISTS public.category;
CREATE TABLE public.category (
   id integer NOT NULL PRIMARY KEY,
   name text NOT NULL,
   department text NOT NULL,
   description text NOT NULL
);

