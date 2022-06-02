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

-- Suppliers / Brands
INSERT INTO public.supplier (id, name, description)
VALUES (1, 'Rayfield', 'German multinational corporate manufacturer of luxury vehicles');

INSERT INTO public.supplier (id, name, description)
VALUES (2, 'ARCH', 'ARCH a manufacturer of premium motorcycles. The company designs, assembles and markets motorcycles and motorcycle parts and accessories. It also offers motor cycle related general merchandise on wholesale basis.');

INSERT INTO public.supplier (id, name, description)
VALUES (3, 'Quadra', 'Quadra Cars was a car manufacturer and the Jaguar marque is now owned by Jaguar Quadra.');

INSERT INTO public.supplier (id, name, description)
VALUES (4, 'Thorton', 'Thorton Inc (Thorton) is an automotive and energy company. It designs, develops, manufactures, sells, and leases electric vehicles and energy generation and storage systems.');

INSERT INTO public.supplier (id, name, description)
VALUES (5, 'Herrera', 'This luxury limousine company is one of the most exclusive and sought after on the market. It seamlessly combines the latest tech with a classic, sophisticated design');

INSERT INTO public.supplier (id, name, description)
VALUES (6, 'Brennan', 'Brennan is mostly known for its bright green sportbikes that dominate the racetracks, but the Japanese company has a rich history. If you asked any motorcycling enthusiast to name the best motorcycle manufacturers in Japan, Brennan would likely be among their top choices.');

INSERT INTO public.supplier (id, name, description)
VALUES (7, 'Yaiba', 'Yaiba manufactures automobiles, motorcycles, all-terrain vehicles (ATVs), outboard marine engines, wheelchairs and a variety of other small internal combustion engines.');

INSERT INTO public.supplier (id, name, description)
VALUES (8, 'Makigai', 'The company develops vehicles and engines, and produces and sells passenger cars, trucks, buses and motorcycles, light commercial vehicles, genuine parts, turbomachinery, large-bore diesel engines, propulsion components, special gear units and testing systems.');

-- Category / Types of Cars
INSERT INTO public.category (id, name, department, description)
VALUES (1, 'HyperCar', 'HyperCarVehicle', 'A hypercar is a high-Performance sports car, that allows superb driving Performance. The term is used in marketing by automakers to promote unusual supersports cars. Some key examples. Limited-production Special version from a small volume luxury automaker. Standard-looking cars modified for power and performance.');

INSERT INTO public.category (id, name, department, description)
VALUES (2, 'Motorcycle', 'MotorcycleVehicle', 'Motorcycles are a high-Performance sport vehicle also, that allows superb driving Performance.');

INSERT INTO public.category (id, name, department, description)
VALUES (3, 'Sports', 'SportsVehicle', 'A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, or thrill of driving.');

INSERT INTO public.category (id, name, department, description)
VALUES (4, 'Economy', 'EconomyVehicle', 'Economy car is a term mostly used in the United States for cars designed for low-cost purchase and operation. Typical economy cars are small (compact or subcompact), lightweight, and inexpensive to both produce and purchase.');

-- Product / Cars
-- HyperCars
INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (1, 1, 1, 'RAYFIELD AERONDIGHT S9 "GUINEVERE"', 225000, 'USD', 'For many, the name Rayfield is synonymous with wealth - and for good reason. The price of the Rayfield Aerondight exceeds the GDP of many island nations. And its worth noting this British-made ultra-luxury, ultra-performance masterpiece is worth every penny of it. The pedigree engine under its hood puts this car on equal footing with professional racing vehicles, and the interior feels like a 5-star penthouse suite. But if thats not enough to get you excited, the Aerodight doesnt have a single window. With the help of a CrystalDome, the vehicles surroundings are displayed in real-time inside the cabin, ensuring complete driver privacy and stunning appearance.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (2, 1, 1, 'RAYFIELD CALIBURN', 157000, 'USD', 'The rich can be capricious. The dignified design of Rayfield s flagship vehicle, the Aerondight, doesnt appeal to everyone. Some prefer an equal level of luxury but with feistier flair. Rayfield developed the Caliburn with these clients in mind. Imbued with a sportier soul and crafted with a fire-breathing engine and aerodynamic body, driving the Caliburn feels like flying a jet at ground level. And whenever the driver wants to come down from their adrenaline high, they need only let go of the steering wheel to let the onboard navigational computer take control..');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (3, 1, 5, 'HERRERA OUTLAW GTS', 62000, 'USD', 'The Outlaw is a car with soul perhaps because it s one of the few models out there still handcrafted with the expertise of world-class engineers. Of course, that kind of exclusivity and quality doesnt come cheap. Herrera s Outlaw is one of the most expensive street-legal cars on the market.');

-- MotorCycle
INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (4, 2, 2, 'ARCH NAZARE', 138000, 'USD', 'The roar of one of these beauties gives all those corpos stuck in their sluggish, armor-heavy limos something to mull over in traffic. What if, instead of those endless quarterly report meetings or - barf - corporate responsibility retreats, they just hopped on one of these bad boys, got that motor runnin, and drove off into the sunset? Sigh… Because the ARCH Nazare isnt just a bike, its a way of life.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (5, 2, 6, 'BRENNAN APOLLO', 94000, 'USD', 'The Brennan Apollo doesnt have the most elegant design, nor does it have the sleekest metal finish or the schmanciest dashboard gauges. But who cares? Only stuck-up city folk care about that sort of frippery, and the Apollo wasnt made for them – it was made for the desert. Its oversized fuel tank allows it to complete long distances without refueling, while its solid build and suspension can easily withstand bumpy and rocky terrain – not to mention a powerful engine that will outrun any Raffen Shiv convoy.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (6, 2, 7, 'YAIBA KUSANAGI CT-3X', 22000, 'USD', 'The Yaiba Kusanagi CT-3X is the fastest, and unsurprisingly, the most expensive motorcycle, originally built in collaboration with the Arasaka Corporation. Its sleek, aerodynamic frame conceals a wickedly powerful engine. Ideally, anyone riding should be chipped with reflex boosters to avoid flying into a traffic light at 100 MPH when making a sharp turn. The Kusanagi is a favorite among gangers, especially the Tyger Claws.');

-- Sports
INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (7, 3, 3, 'QUADRA TURBO-R 740', 129000, 'USD', 'The Quadra Turbo-R was introduced as Americas response to the Mizutani Japanase manufacturer of Sports Cars. It has a powerful turbo-charged V8 engine, but it was criticized for its suspension. Its the predecessor of the Quadra Turbo-R V-Tech.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (8, 3, 3, 'QUADRA TYPE-66 "JEN ROWLEY"', 58000, 'USD', 'The Quadra Type-66 is faster than a bat out of hell. Breaking news? Hardly. Originally released in 2055, the Quadra was quickly adopted by edgerunners and illegal street racers. For the NCPD, a Quadra tearing up the streets means a long list of traffic violations, but rarely has a patrol car ever managed – or even tried – to pull one over.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (9, 3, 3, 'QUADRA TYPE-66 AVENGER', 55000, 'USD', 'The standard Quadra Type-66 is a powerful car in its own right, but the Avenger? Now, thats another animal. The roar of its engine causes windows and the knees of carjocks everywhere to shake. Compared to its base model, the Avenger has better handling and top-end speed. Hell, it even looks better.');

-- Economy
INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (10, 4, 4, 'THORTON MACKINAW MTL1', 128000, 'USD', 'The Thorton Mackinaw MTL1 is a staple, all-purpose vehicle. Solid, but not clunky – cheap, but not shitty. Its perfectly suited to city roads, where its used by small and large traders alike, as well as on the desert terrain surrounding the city. Its modest engine wont propel you to any crazy speeds, but lets be real – you dont buy a pickup for racing.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (11, 4, 4, 'THORTON COLBY "LITTLE MULE"', 49000, 'USD', 'Nomads, as the name suggests, dont linger too long in any one place, Theyre constantly on the move and that means bringing their belongings with them. It comes as no wonder the truck-bed variant of the Colby has become so popular with them. Little Mule – thats what they call this Thorton Colby model. But beyond the name, they also swap out the standard engines for stronger ones, add light armor to the body and install an environment projection system based on CrystalDome tech in the cabin.');

INSERT INTO public.product (id, category_id, supplier_id, name, price, currency, description)
VALUES (12, 4, 8, 'MAKIGAI MAIMAI P126', 14000, 'USD', 'The perfect car for anyone on a tight budget. The Makigai MaiMai is the cheapest mass-produced car available in Night City. All design decisions were made with one thing in mind: cut costs! Size? As small as possible while still fitting two (slender) people and (at most) one shopping bag. Engine? Probably stolen from a lawnmower. Materials? Plastic as durable as a disposable fork. Safety test ratings? Scraping by to keep street-legal status. All tied together into an easily affordable package. And they say corporations dont look out for consumers best interests anymore…');
