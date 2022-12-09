PGDMP         7        	        z         	   pizzarino    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            !           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            "           1262    16460 	   pizzarino    DATABASE     k   CREATE DATABASE pizzarino WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE pizzarino;
                postgres    false            �            1259    16468    ingridients    TABLE     �   CREATE TABLE public.ingridients (
    id_ingridient integer NOT NULL,
    name_ingridient text NOT NULL,
    price_ingridient integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.ingridients;
       public         heap    postgres    false            �            1259    16493    orders    TABLE     �   CREATE TABLE public.orders (
    id_order integer NOT NULL,
    price_order integer,
    order_extras integer[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "pizzaIdPizza" integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16492    orders_id_order_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_order_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_id_order_seq;
       public          postgres    false    219            #           0    0    orders_id_order_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_id_order_seq OWNED BY public.orders.id_order;
          public          postgres    false    218            �            1259    16476    pizza_packs    TABLE       CREATE TABLE public.pizza_packs (
    id integer NOT NULL,
    is_basic boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "pizzaIdPizza" integer,
    "ingridientIdIngridient" integer
);
    DROP TABLE public.pizza_packs;
       public         heap    postgres    false            �            1259    16475    pizza_packs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pizza_packs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.pizza_packs_id_seq;
       public          postgres    false    217            $           0    0    pizza_packs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.pizza_packs_id_seq OWNED BY public.pizza_packs.id;
          public          postgres    false    216            �            1259    16461    pizzas    TABLE       CREATE TABLE public.pizzas (
    id_pizza integer NOT NULL,
    name_pizza text NOT NULL,
    price_pizza integer NOT NULL,
    image_name_pizza text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.pizzas;
       public         heap    postgres    false            }           2604    16496    orders id_order    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN id_order SET DEFAULT nextval('public.orders_id_order_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN id_order DROP DEFAULT;
       public          postgres    false    219    218    219            |           2604    16479    pizza_packs id    DEFAULT     p   ALTER TABLE ONLY public.pizza_packs ALTER COLUMN id SET DEFAULT nextval('public.pizza_packs_id_seq'::regclass);
 =   ALTER TABLE public.pizza_packs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                      0    16468    ingridients 
   TABLE DATA           q   COPY public.ingridients (id_ingridient, name_ingridient, price_ingridient, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �                  0    16493    orders 
   TABLE DATA           o   COPY public.orders (id_order, price_order, order_extras, "createdAt", "updatedAt", "pizzaIdPizza") FROM stdin;
    public          postgres    false    219   �!                 0    16476    pizza_packs 
   TABLE DATA           w   COPY public.pizza_packs (id, is_basic, "createdAt", "updatedAt", "pizzaIdPizza", "ingridientIdIngridient") FROM stdin;
    public          postgres    false    217   �!                 0    16461    pizzas 
   TABLE DATA           o   COPY public.pizzas (id_pizza, name_pizza, price_pizza, image_name_pizza, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   "       %           0    0    orders_id_order_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_id_order_seq', 1, false);
          public          postgres    false    218            &           0    0    pizza_packs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.pizza_packs_id_seq', 13, true);
          public          postgres    false    216            �           2606    16474    ingridients ingridients_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.ingridients
    ADD CONSTRAINT ingridients_pkey PRIMARY KEY (id_ingridient);
 F   ALTER TABLE ONLY public.ingridients DROP CONSTRAINT ingridients_pkey;
       public            postgres    false    215            �           2606    16500    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id_order);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    219            �           2606    16481    pizza_packs pizza_packs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pizza_packs
    ADD CONSTRAINT pizza_packs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.pizza_packs DROP CONSTRAINT pizza_packs_pkey;
       public            postgres    false    217                       2606    16467    pizzas pizzas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT pizzas_pkey PRIMARY KEY (id_pizza);
 <   ALTER TABLE ONLY public.pizzas DROP CONSTRAINT pizzas_pkey;
       public            postgres    false    214            �           2606    16501    orders orders_pizzaIdPizza_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_pizzaIdPizza_fkey" FOREIGN KEY ("pizzaIdPizza") REFERENCES public.pizzas(id_pizza) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_pizzaIdPizza_fkey";
       public          postgres    false    214    3455    219            �           2606    16487 3   pizza_packs pizza_packs_ingridientIdIngridient_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pizza_packs
    ADD CONSTRAINT "pizza_packs_ingridientIdIngridient_fkey" FOREIGN KEY ("ingridientIdIngridient") REFERENCES public.ingridients(id_ingridient) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public.pizza_packs DROP CONSTRAINT "pizza_packs_ingridientIdIngridient_fkey";
       public          postgres    false    217    215    3457            �           2606    16482 )   pizza_packs pizza_packs_pizzaIdPizza_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pizza_packs
    ADD CONSTRAINT "pizza_packs_pizzaIdPizza_fkey" FOREIGN KEY ("pizzaIdPizza") REFERENCES public.pizzas(id_pizza) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.pizza_packs DROP CONSTRAINT "pizza_packs_pizzaIdPizza_fkey";
       public          postgres    false    217    214    3455               �   x�}�M
�0F�3�p/�I�{7�x�V)���F�B5���x<�A��L2����Ts�����.Y�LT�������2�p�Lc��)g÷e����f�s�Z���Iig��ar)�z�Z���4(M��AhA��_�zY��5�i�Z��v�
__�e0            x������ � �         �   x�}���0��s<E��_y8CtΝ���)������'#0�WYXj7��r����N�/���D>W�̡?'Mϯ�Z�9V�YO�������P=��dC�H3!�����A	���}���FZ��Pi�;�Pg�Rc�����#���r��dI�i��ی	6�҇s�+z���R���m3YQ��ܦ4"����Y\�=�ؾ" ����n           x�}�=N1���>Ez4��x�?{�q�F��J��!"!D��K���(��+�y������ͻ��?��xD��Ji�GL��<��d�)����ݍ!$G�i��H2�1��&K�?��"�������'���tKY9 ��PjP�P0Un�9Q.ܿ��������w��|?���~�GCM�.I	��@U'��!���p�yAV�ɲ��">-�{C���9�V�\�)V Mꁪ�Vy�4�5/����M�z��� ���     