'use strict';
/* ============================================================
   INFERNO — script.js  v2  (complete)
   ============================================================ */

/* ══════════════════════════════════════════
   PRODUCT DATA  (52 items, multi-restaurant)
══════════════════════════════════════════ */
const PRODUCTS = [
  /* ── INFERNO MAIN – Burgers ── */
  {id:1,  name:'Classic Inferno Smash',     cat:'burgers',   rest:'inferno-main',       price:14.99, salePrice:10.99, rating:4.9, desc:'Double smash patty, American cheese, caramelized onions, house pickles, secret Inferno sauce.',        img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',  badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:2,  name:'Blaze BBQ Double',          cat:'burgers',   rest:'inferno-main',       price:17.99, salePrice:13.99, rating:4.8, desc:'Two beef patties, smoky BBQ sauce, crispy bacon, cheddar, jalapeños, fried onion rings.',              img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80',  badge:'sale',    isVeg:false,isSpicy:true, isPopular:true},
  {id:3,  name:'Truffle Mushroom Burger',   cat:'burgers',   rest:'inferno-main',       price:19.99, salePrice:null,  rating:4.7, desc:'Premium beef patty, sautéed wild mushrooms, truffle aioli, gruyère cheese, arugula.',                  img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80', badge:'new',     isVeg:false,isSpicy:false,isPopular:false},
  {id:4,  name:'Nashville Hot Chicken',     cat:'burgers',   rest:'inferno-main',       price:15.99, salePrice:null,  rating:4.8, desc:'Nashville hot fried chicken, coleslaw, dill pickles, honey drizzle on a brioche bun.',                 img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80', badge:'spicy',   isVeg:false,isSpicy:true, isPopular:true},
  {id:5,  name:'The Veggie Volcano',        cat:'burgers',   rest:'inferno-main',       price:13.99, salePrice:10.99, rating:4.5, desc:'Spiced black bean & quinoa patty, avocado smash, roasted peppers, vegan chipotle mayo.',               img:'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:6,  name:'The Godfather',             cat:'burgers',   rest:'inferno-main',       price:22.99, salePrice:null,  rating:5.0, desc:'Triple smash patty tower, aged cheddar, foie gras butter, black truffle shavings.',                    img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', badge:'popular', isVeg:false,isSpicy:false,isPopular:true},
  {id:7,  name:'Breakfast Burger',          cat:'burgers',   rest:'inferno-main',       price:13.99, salePrice:null,  rating:4.6, desc:'Beef patty, fried egg, crispy bacon, cheddar, hollandaise sauce, English muffin.',                     img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=80',  badge:null,      isVeg:false,isSpicy:false,isPopular:false},
  {id:8,  name:'Halloumi Burger',           cat:'burgers',   rest:'inferno-main',       price:13.49, salePrice:10.99, rating:4.4, desc:'Grilled halloumi, roasted red pepper, rocket, sun-dried tomato pesto, ciabatta.',                      img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80',  badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  /* ── INFERNO RUSTAVELI – Shawarmas ── */
  {id:9,  name:'Classic Chicken Shawarma', cat:'shawarmas', rest:'inferno-rustaveli',  price:12.99, salePrice:9.99,  rating:4.9, desc:'Marinated grilled chicken, garlic sauce, tomatoes, pickles, fries in a warm flatbread.',               img:'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:10, name:'Beef & Lamb Shawarma',     cat:'shawarmas', rest:'inferno-rustaveli',  price:14.99, salePrice:null,  rating:4.8, desc:'Slow-roasted beef & lamb mix, tahini, sumac onions, fresh herbs, chili sauce.',                         img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80', badge:null,      isVeg:false,isSpicy:false,isPopular:true},
  {id:11, name:'Spicy Harissa Wrap',       cat:'shawarmas', rest:'inferno-rustaveli',  price:13.49, salePrice:null,  rating:4.6, desc:'Harissa-marinated chicken, roasted peppers, feta crumbles, rocket, yogurt sauce.',                     img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80',badge:'spicy',   isVeg:false,isSpicy:true, isPopular:false},
  {id:12, name:'Falafel Shawarma',         cat:'shawarmas', rest:'inferno-rustaveli',  price:11.99, salePrice:9.49,  rating:4.4, desc:'Crispy homemade falafel, hummus, tabbouleh, fresh vegetables, tahini drizzle.',                        img:'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500&q=80',  badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:13, name:'Mixed Grill Wrap',         cat:'shawarmas', rest:'inferno-rustaveli',  price:16.99, salePrice:null,  rating:4.7, desc:'Grilled chicken, beef kofta, lamb chops, mixed garlic & chili sauce in one epic wrap.',                img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',  badge:'new',     isVeg:false,isSpicy:true, isPopular:false},
  {id:14, name:'Turkish Doner',            cat:'shawarmas', rest:'inferno-rustaveli',  price:13.99, salePrice:null,  rating:4.8, desc:'Authentic doner-style beef, crisp lettuce, tomato, red onion, chili mayo, kebab sauce.',               img:'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=500&q=80',badge:'popular', isVeg:false,isSpicy:false,isPopular:true},
  {id:15, name:'Peri Peri Chicken Wrap',   cat:'shawarmas', rest:'inferno-rustaveli',  price:12.49, salePrice:9.99,  rating:4.7, desc:'Peri peri marinated chicken, corn, cheddar, shredded lettuce, cool lime crema.',                       img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80',badge:'sale',    isVeg:false,isSpicy:true, isPopular:false},
  /* ── INFERNO VAKE – Salads & Pasta ── */
  {id:16, name:'Caesar Supreme',           cat:'salads',    rest:'inferno-vake',       price:10.99, salePrice:8.49,  rating:4.7, desc:'Grilled chicken, romaine, house Caesar dressing, parmesan shavings, sourdough croutons.',              img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80',  badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:17, name:'Inferno Power Bowl',       cat:'salads',    rest:'inferno-vake',       price:13.49, salePrice:null,  rating:4.6, desc:'Quinoa, edamame, avocado, cucumber, mango salsa, sesame-ginger vinaigrette.',                          img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  {id:18, name:'Greek Fire Salad',         cat:'salads',    rest:'inferno-vake',       price:11.49, salePrice:null,  rating:4.5, desc:'Feta, olives, cherry tomatoes, cucumber, red onion, pepperoncini, oregano vinaigrette.',              img:'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  {id:19, name:'Steak & Rocket Salad',     cat:'salads',    rest:'inferno-vake',       price:16.99, salePrice:12.99, rating:4.8, desc:'Sliced medium-rare sirloin, rocket, cherry tomatoes, shaved parmesan, balsamic glaze.',               img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80',  badge:'sale',    isVeg:false,isSpicy:false,isPopular:false},
  {id:20, name:'Spicy Tuna Poke',          cat:'salads',    rest:'inferno-vake',       price:15.99, salePrice:null,  rating:4.9, desc:'Sushi-grade tuna, rice, pickled cucumber, avocado, tobiko, sriracha mayo.',                            img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',  badge:'spicy',   isVeg:false,isSpicy:true, isPopular:true},
  {id:21, name:'Asian Crunch Bowl',        cat:'salads',    rest:'inferno-vake',       price:12.99, salePrice:null,  rating:4.7, desc:'Crispy wonton strips, napa cabbage, carrots, mandarin, cashews, sesame dressing.',                    img:'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&q=80',badge:'new',     isVeg:true, isSpicy:false,isPopular:false},
  {id:22, name:'Carbonara Classico',       cat:'pasta',     rest:'inferno-vake',       price:13.99, salePrice:10.99, rating:4.8, desc:'Guanciale, egg yolks, pecorino romano, black pepper. The real deal — no cream.',                      img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:23, name:'Truffle Cacio e Pepe',     cat:'pasta',     rest:'inferno-vake',       price:15.99, salePrice:null,  rating:4.9, desc:'Fresh spaghetti, black truffle, pecorino, generous black pepper.',                                     img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80',  badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  {id:24, name:'Arrabbiata Fire',          cat:'pasta',     rest:'inferno-vake',       price:11.99, salePrice:null,  rating:4.5, desc:'Penne, San Marzano tomatoes, garlic, fresh chili, basil. Aggressively good.',                         img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80', badge:'spicy',   isVeg:true, isSpicy:true, isPopular:false},
  {id:25, name:'Pesto Fusilli',            cat:'pasta',     rest:'inferno-vake',       price:12.99, salePrice:null,  rating:4.5, desc:'Fusilli, house-made basil pesto, cherry tomatoes, pine nuts, parmesan, lemon zest.',                  img:'https://images.unsplash.com/photo-1551183053-bf91798d773e?w=500&q=80',  badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  {id:26, name:'Seafood Linguine',         cat:'pasta',     rest:'inferno-vake',       price:18.99, salePrice:14.99, rating:4.9, desc:'Linguine, prawns, mussels, squid, white wine, garlic, chili, cherry tomatoes.',                      img:'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:true, isPopular:true},
  /* ── INFERNO SABURTALO – Pizza ── */
  {id:27, name:'Margherita Suprema',       cat:'pizza',     rest:'inferno-saburtalo',  price:14.99, salePrice:11.99, rating:4.8, desc:'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil. Stone-baked.',                 img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:true},
  {id:28, name:'Inferno Diavola',          cat:'pizza',     rest:'inferno-saburtalo',  price:17.99, salePrice:null,  rating:4.7, desc:'Spicy salami, nduja, roasted red peppers, mozzarella, honey drizzle, chili flakes.',                 img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80', badge:'spicy',   isVeg:false,isSpicy:true, isPopular:true},
  {id:29, name:'BBQ Chicken Pizza',        cat:'pizza',     rest:'inferno-saburtalo',  price:16.99, salePrice:13.49, rating:4.6, desc:'Smoky BBQ sauce, rotisserie chicken, red onions, cheddar, fresh cilantro.',                          img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:false},
  {id:30, name:'Prosciutto & Arugula',     cat:'pizza',     rest:'inferno-saburtalo',  price:18.99, salePrice:null,  rating:4.9, desc:'San Marzano base, fresh prosciutto crudo, arugula, shaved parmesan, lemon zest.',                    img:'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&q=80', badge:'popular', isVeg:false,isSpicy:false,isPopular:true},
  {id:31, name:'Quattro Formaggi',         cat:'pizza',     rest:'inferno-saburtalo',  price:16.49, salePrice:null,  rating:4.7, desc:'Mozzarella, gorgonzola, provolone, parmesan. Four-cheese paradise, honey on the side.',              img:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  /* ── SIDES (all) ── */
  {id:32, name:'Loaded Fries',             cat:'sides',     rest:'inferno-main',       price:8.99,  salePrice:6.99,  rating:4.8, desc:'Thick-cut fries, melted cheese sauce, crispy bacon bits, jalapeños, sour cream.',                    img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:33, name:'Truffle Parmesan Fries',   cat:'sides',     rest:'inferno-main',       price:9.99,  salePrice:null,  rating:4.9, desc:'Shoestring fries tossed in truffle oil, grated parmesan, rosemary salt, aioli dip.',                 img:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:true},
  {id:34, name:'Onion Rings Tower',        cat:'sides',     rest:'inferno-rustaveli',  price:7.49,  salePrice:5.99,  rating:4.6, desc:'Beer-battered onion rings stacked tall, served with chipotle ranch dipping sauce.',                  img:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:35, name:'Chicken Wings 8pcs',       cat:'sides',     rest:'inferno-main',       price:11.99, salePrice:null,  rating:4.8, desc:'Crispy fried wings tossed in buffalo sauce or honey-garlic. Blue cheese dip included.',              img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80', badge:'popular', isVeg:false,isSpicy:true, isPopular:true},
  {id:36, name:'Mac & Cheese Bites',       cat:'sides',     rest:'inferno-saburtalo',  price:7.99,  salePrice:5.99,  rating:4.7, desc:'Crispy fried mac & cheese bites, creamy center, smoked paprika ranch dip.',                         img:'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&q=80',  badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:37, name:'Garlic Bread',             cat:'sides',     rest:'inferno-vake',       price:5.49,  salePrice:null,  rating:4.4, desc:'Toasted sourdough, roasted garlic butter, fresh herbs, mozzarella melt.',                           img:'https://images.unsplash.com/photo-1619985360403-e580c2993b49?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  /* ── DRINKS ── */
  {id:38, name:'Craft Vanilla Shake',      cat:'drinks',    rest:'inferno-main',       price:6.99,  salePrice:5.49,  rating:4.7, desc:'Real vanilla bean, premium ice cream, whole milk, hand-mixed to perfection.',                        img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:39, name:'Mango Chili Shake',        cat:'drinks',    rest:'inferno-main',       price:7.99,  salePrice:null,  rating:4.8, desc:'Fresh mango, tajín chili powder rim, coconut cream, lime juice. A tropical fire-starter.',          img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80',  badge:'spicy',   isVeg:true, isSpicy:true, isPopular:false},
  {id:40, name:'Smoked Lemonade',          cat:'drinks',    rest:'inferno-vake',       price:5.99,  salePrice:null,  rating:4.5, desc:'House-pressed lemon, smoked rosemary syrup, sparkling water, thyme garnish.',                       img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80', badge:'new',     isVeg:true, isSpicy:false,isPopular:false},
  {id:41, name:'Oreo Blizzard Shake',      cat:'drinks',    rest:'inferno-saburtalo',  price:7.49,  salePrice:5.99,  rating:4.9, desc:'Crushed Oreos, vanilla ice cream, whipped cream, dark chocolate drizzle.',                          img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',  badge:'sale',    isVeg:true, isSpicy:false,isPopular:true},
  {id:42, name:'Matcha Latte',             cat:'drinks',    rest:'inferno-vake',       price:5.49,  salePrice:null,  rating:4.6, desc:'Ceremonial grade matcha, oat milk, honey, served hot or iced.',                                     img:'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  /* ── DESSERTS ── */
  {id:43, name:'Molten Lava Cake',         cat:'desserts',  rest:'inferno-saburtalo',  price:8.99,  salePrice:6.99,  rating:4.9, desc:'Warm chocolate lava cake, vanilla ice cream, berry coulis, mint garnish.',                           img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',  badge:'sale',    isVeg:true, isSpicy:false,isPopular:true},
  {id:44, name:'Cheesecake New York',      cat:'desserts',  rest:'inferno-vake',       price:7.99,  salePrice:null,  rating:4.8, desc:'Classic New York style, graham cracker crust, strawberry compote on the side.',                     img:'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=500&q=80', badge:'popular', isVeg:true, isSpicy:false,isPopular:true},
  {id:45, name:'Tiramisu',                 cat:'desserts',  rest:'inferno-vake',       price:7.49,  salePrice:5.99,  rating:4.7, desc:'Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting. House-made daily.',                   img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:46, name:'Baklava Selection',        cat:'desserts',  rest:'inferno-rustaveli',  price:6.99,  salePrice:null,  rating:4.8, desc:'Assorted Middle Eastern baklava: pistachio, walnut, cashew. Honey-soaked filo.',                    img:'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&q=80', badge:null,      isVeg:true, isSpicy:false,isPopular:false},
  {id:47, name:'Churros & Dips',           cat:'desserts',  rest:'inferno-saburtalo',  price:6.49,  salePrice:4.99,  rating:4.6, desc:'Hot crispy churros, cinnamon sugar, chocolate ganache & caramel dipping sauces.',                  img:'https://images.unsplash.com/photo-1624371414361-e670edf97db4?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  {id:48, name:'Chocolate Brownie',        cat:'desserts',  rest:'inferno-main',       price:5.99,  salePrice:4.49,  rating:4.8, desc:'Fudgy dark chocolate brownie, walnuts, served warm with vanilla ice cream scoop.',                  img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80', badge:'sale',    isVeg:true, isSpicy:false,isPopular:false},
  /* ── Extra burgers / cross-restaurant ── */
  {id:49, name:'Smoked Brisket Burger',    cat:'burgers',   rest:'inferno-saburtalo',  price:21.99, salePrice:17.99, rating:4.9, desc:'12-hour smoked beef brisket, house pickled onions, smoky aioli, aged cheddar.',                     img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:50, name:'Korean BBQ Burger',        cat:'burgers',   rest:'inferno-saburtalo',  price:16.99, salePrice:null,  rating:4.7, desc:'Beef patty, gochujang mayo, kimchi slaw, crispy shallots, sesame bun.',                            img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80',  badge:'new',     isVeg:false,isSpicy:true, isPopular:false},
  {id:51, name:'Double Smash Stack',       cat:'burgers',   rest:'inferno-rustaveli',  price:18.99, salePrice:14.99, rating:4.8, desc:'Double smash, American cheese waterfall, special sauce, shredded lettuce, brioche.',               img:'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=500&q=80', badge:'sale',    isVeg:false,isSpicy:false,isPopular:true},
  {id:52, name:'Fish Burger',              cat:'burgers',   rest:'inferno-vake',       price:14.49, salePrice:null,  rating:4.5, desc:'Beer-battered cod fillet, tartar sauce, iceberg lettuce, pickles, lemon slice.',                   img:'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=500&q=80', badge:null,      isVeg:false,isSpicy:false,isPopular:false},
];

/* ══════════════════════════════════════════
   CART STATE
══════════════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem('infernoCart') || '[]');

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];

/* ══════════════════════════════════════════
   LOADER
══════════════════════════════════════════ */
(function initLoader(){
  const l = $('#loader');
  if (!l) return;
  const hide = () => l.classList.add('hidden');
  window.addEventListener('load', () => setTimeout(hide, 1200));
  setTimeout(hide, 2600);
})();

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
(function initNavbar(){
  const nav   = $('#navbar');
  const ham   = $('#hamburger');
  const links = $('#navLinks');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', scrollY > 40);
    updateScrollTop();
  }, {passive: true});

  ham?.addEventListener('click', () => {
    ham.classList.toggle('active');
    links?.classList.toggle('open');
  });

  $$('.nav-link').forEach(a => a.addEventListener('click', () => {
    ham?.classList.remove('active');
    links?.classList.remove('open');
  }));

  // Restore saved address badge
  const savedAddr = localStorage.getItem('infernoAddress');
  if (savedAddr) showNavAddress(savedAddr);

  // ── THEME TOGGLE ──
  const themeBtn = $('#themeToggleBtn');
  const applyTheme = (light) => {
    document.body.classList.toggle('light-mode', light);
    if (themeBtn) themeBtn.textContent = light ? '☀️' : '🌙';
  };
  const savedTheme = localStorage.getItem('infernoTheme');
  applyTheme(savedTheme === 'light');
  themeBtn?.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    applyTheme(!isLight);
    localStorage.setItem('infernoTheme', !isLight ? 'light' : 'dark');
  });
})();

function showNavAddress(addr) {
  $$('#navAddressDisplay').forEach(el => {
    el.style.display = 'flex';
    const t = el.querySelector('#navAddressText');
    if (t) t.textContent = addr;
  });
}

/* ══════════════════════════════════════════
   SCROLL-TO-TOP
══════════════════════════════════════════ */
const scrollTopBtn = $('#scrollTop');
function updateScrollTop() { scrollTopBtn?.classList.toggle('show', scrollY > 400); }
scrollTopBtn?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ══════════════════════════════════════════
   REVEAL ANIMATIONS
══════════════════════════════════════════ */
(function initReveal(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), parseInt(e.target.dataset.delay || 0));
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  $$('.reveal,.fade-up,.fade-right').forEach((el, i) => {
    el.dataset.delay = el.dataset.delay || i * 60;
    io.observe(el);
  });
})();

/* ══════════════════════════════════════════
   HERO PARTICLES
══════════════════════════════════════════ */
(function initParticles(){
  const c = $('#heroParticles') || $('#authParticles');
  if (!c) return;
  const n = innerWidth < 768 ? 8 : 18;
  for (let i = 0; i < n; i++) {
    const d = document.createElement('div');
    const s = Math.random() * 4 + 2;
    d.style.cssText = `position:absolute;width:${s}px;height:${s}px;border-radius:50%;
      background:rgba(255,${Math.floor(Math.random()*80)+80},0,${(Math.random()*.25+.08).toFixed(2)});
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      animation:particleDrift ${Math.random()*8+6}s ease-in-out infinite;
      animation-delay:-${Math.random()*8}s;pointer-events:none;`;
    c.appendChild(d);
  }
  if (!$('#particleKF')) {
    const s = document.createElement('style');
    s.id = 'particleKF';
    s.textContent = '@keyframes particleDrift{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-28px) scale(1.2)}}';
    document.head.appendChild(s);
  }
})();

/* ══════════════════════════════════════════
   DELIVERY ADDRESS INPUT (index.html hero)
══════════════════════════════════════════ */
(function initAddressInput(){
  const input  = $('#deliveryAddressInput');
  const btn    = $('#addressSubmitBtn');
  const sugBox = $('#addressSuggestions');
  if (!input) return;

  const savedAddr = localStorage.getItem('infernoAddress');
  if (savedAddr) input.value = savedAddr;

  const suggestions = [
    'Rustaveli Ave 22, Tbilisi',
    'Kostava St 5, Tbilisi',
    'Abashidze St 14, Vake',
    'Nutsubidze St 3, Saburtalo',
    'Chavchavadze Ave 40, Vake',
    'Agmashenebeli Ave 112, Tbilisi',
    'Marjanishvili St 8, Tbilisi',
    'Tamarashvili St 15, Saburtalo',
    'Vazha-Pshavela Ave 36, Saburtalo',
    'David Aghmashenebeli 78, Tbilisi',
  ];

  input.addEventListener('input', () => {
    const v = input.value.trim().toLowerCase();
    if (v.length < 2) { sugBox.classList.remove('show'); return; }
    const matched = suggestions.filter(s => s.toLowerCase().includes(v)).slice(0, 5);
    if (!matched.length) { sugBox.classList.remove('show'); return; }
    sugBox.innerHTML = matched.map(s => `<div class="address-suggestion-item">${s}</div>`).join('');
    sugBox.classList.add('show');
    $$('.address-suggestion-item', sugBox).forEach(el => {
      el.addEventListener('click', () => { input.value = el.textContent; sugBox.classList.remove('show'); });
    });
  });

  function saveAddress() {
    const v = input.value.trim();
    if (!v) return;
    localStorage.setItem('infernoAddress', v);
    showNavAddress(v);
    sugBox.classList.remove('show');
    if (btn) { btn.textContent = '✓ Saved!'; btn.style.background = '#10b981'; }
    setTimeout(() => { if (btn) { btn.textContent = 'Set Address'; btn.style.background = ''; } }, 2000);
  }

  btn?.addEventListener('click', saveAddress);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') saveAddress(); });
  document.addEventListener('click', e => {
    if (!e.target.closest('.delivery-address-wrap')) sugBox.classList.remove('show');
  });
})();

/* ══════════════════════════════════════════
   CART LOGIC
══════════════════════════════════════════ */
function saveCart()    { localStorage.setItem('infernoCart', JSON.stringify(cart)); }
function cartTotal()   { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount()   { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartUI() {
  const n  = cartCount();
  const el = $('#cartCount');
  if (el) {
    const prev = parseInt(el.textContent) || 0;
    el.textContent = n;
    if (n !== prev) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  }
  renderCartItems();
}

function renderCartItems() {
  const wrap   = $('#cartItems');
  const empty  = $('#cartEmpty');
  const footer = $('#cartFooter');
  if (!wrap) return;

  $$('.cart-item', wrap).forEach(e => e.remove());

  if (!cart.length) {
    if (empty)  empty.style.display  = 'flex';
    if (footer) footer.style.display = 'none';
    return;
  }
  if (empty)  empty.style.display  = 'none';
  if (footer) footer.style.display = 'flex';

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">✕</button>`;
    wrap.appendChild(el);
  });

  const sub = cartTotal();
  const del = sub >= 30 ? 0 : 3.99;
  const tot = sub + del;
  const s = $('#cartSubtotal'), d = $('#cartDelivery'), t = $('#cartTotal');
  if (s) s.textContent = `$${sub.toFixed(2)}`;
  if (d) d.textContent = del === 0 ? 'FREE 🎉' : `$${del.toFixed(2)}`;
  if (t) t.textContent = `$${tot.toFixed(2)}`;
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const price = p.salePrice !== null ? p.salePrice : p.price;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({id: p.id, name: p.name, price, img: p.img, qty: 1});
  saveCart();
  updateCartUI();
  openCart();
}

function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartUI(); }
function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) removeFromCart(id); else { saveCart(); updateCartUI(); }
}
function clearCart() { cart = []; saveCart(); updateCartUI(); }

/* Cart panel open / close */
const cartPanel   = $('#cartPanel');
const cartOverlay = $('#cartOverlay');
function openCart()  { cartPanel?.classList.add('active'); cartOverlay?.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeCart() { cartPanel?.classList.remove('active'); cartOverlay?.classList.remove('active'); document.body.style.overflow = ''; }

$('#cartBtn')?.addEventListener('click', openCart);
$('#cartClose')?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

$('#cartItems')?.addEventListener('click', e => {
  const b = e.target.closest('[data-action],.cart-item-remove');
  if (!b) return;
  const id = parseInt(b.dataset.id);
  if (b.classList.contains('cart-item-remove')) removeFromCart(id);
  else changeQty(id, b.dataset.action === 'inc' ? 1 : -1);
});

$('#clearCartBtn')?.addEventListener('click', clearCart);

/* Checkout → navigate to order page */
$('#checkoutBtn')?.addEventListener('click', () => {
  if (!cart.length) return;
  closeCart();
  window.location.href = 'order.html';
});

updateCartUI();

/* ══════════════════════════════════════════
   CARD BUILDER
══════════════════════════════════════════ */
function buildCard(p, delay = 0) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.dataset.id = p.id;
  card.style.animationDelay = delay + 'ms';

  const displayPrice = p.salePrice !== null ? p.salePrice : p.price;
  const priceHTML = p.salePrice !== null
    ? `<div class="menu-card-price-wrap"><span class="menu-card-price" style="color:var(--accent)">$${p.salePrice.toFixed(2)}</span><span class="menu-card-price-original">$${p.price.toFixed(2)}</span></div>`
    : `<div class="menu-card-price-wrap"><span class="menu-card-price">$${p.price.toFixed(2)}</span></div>`;

  const BADGE_CLASS = {sale:'sale', popular:'popular', new:'new', spicy:'spicy'};
  const BADGE_LABEL = {sale:'🔖 SALE', popular:'Popular', new:'New', spicy:'🌶️ Spicy'};
  const badgeHTML = p.badge
    ? `<span class="menu-card-badge ${BADGE_CLASS[p.badge] || p.badge}">${BADGE_LABEL[p.badge] || p.badge}</span>` : '';

  card.innerHTML = `
    <div class="menu-card-img-wrap">
      <img class="menu-card-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
      ${badgeHTML}
      <button class="menu-card-fav" data-id="${p.id}" aria-label="Favourite">♡</button>
    </div>
    <div class="menu-card-body">
      <div class="menu-card-cat">${p.cat}</div>
      <h3 class="menu-card-name">${p.name}</h3>
      <p class="menu-card-desc">${p.desc}</p>
      <div class="menu-card-footer">
        <div style="display:flex;flex-direction:column;gap:4px">
          <div class="menu-card-rating">★ ${p.rating}</div>
          ${priceHTML}
        </div>
        <button class="add-to-cart-btn" data-id="${p.id}">+ Add</button>
      </div>
    </div>`;

  card.querySelector('.add-to-cart-btn').addEventListener('click', e => {
    const b = e.currentTarget;
    addToCart(p.id);
    b.textContent = '✓ Added!'; b.classList.add('added');
    setTimeout(() => { b.textContent = '+ Add'; b.classList.remove('added'); }, 1500);
  });
  card.querySelector('.menu-card-fav').addEventListener('click', e => {
    const b = e.currentTarget;
    b.classList.toggle('active');
    b.textContent = b.classList.contains('active') ? '♥' : '♡';
  });
  return card;
}

/* ══════════════════════════════════════════
   HOME PAGE – SALE ITEMS ONLY
══════════════════════════════════════════ */
(function initHomeMenu(){
  const grid = $('#menuGrid');
  if (!grid) return;
  const saleItems = PRODUCTS.filter(p => p.salePrice !== null).slice(0, 8);
  saleItems.forEach((p, i) => grid.appendChild(buildCard(p, i * 60)));
})();

/* ══════════════════════════════════════════
   FILTER / MENU PAGE  (menu.html & filter.html)
══════════════════════════════════════════ */
(function initFilterPage(){
  const grid       = $('#filterProductsGrid');
  if (!grid) return;

  const noResults  = $('#noResults');
  const resCount   = $('#resultsCount');
  const rangeMin   = $('#rangeMin');
  const rangeMax   = $('#rangeMax');
  const pMinEl     = $('#priceMin');
  const pMaxEl     = $('#priceMax');
  const rangeFill  = $('#rangeFill');
  const vegChk     = $('#vegCheck');
  const spicyChk   = $('#spicyCheck');
  const popularChk = $('#popularCheck');
  const saleChk    = $('#saleCheck');
  const searchInp  = $('#searchInput');
  const resetBtn   = $('#resetFilters');
  const noResReset = $('#noResultsReset');
  const gridViewB  = $('#gridView');
  const listViewB  = $('#listView');
  const mobFltBtn  = $('#mobileFilterBtn');
  const sidebar    = $('#filterSidebar');
  const restAddrs  = $$('.rest-addr-card');

  let currentCat  = 'all';
  let currentRest = 'all';
  let currentSort = 'default';
  let listView    = false;

  /* URL params pre-select */
  const urlP = new URLSearchParams(location.search);
  if (urlP.get('cat'))  { currentCat  = urlP.get('cat');  setActiveAttr('data-cat',  currentCat); }
  if (urlP.get('rest')) { currentRest = urlP.get('rest'); setActiveAttr('data-rest', currentRest); }

  function setActiveAttr(attr, val) {
    $$(`[${attr}]`).forEach(b => b.classList.toggle('active', b.getAttribute(attr) === val));
  }

  /* Range fill */
  function fillRange() {
    if (!rangeMin) return;
    const mn = +rangeMin.value, mx = +rangeMax.value;
    const tot = +rangeMin.max - +rangeMin.min;
    const l = ((mn - +rangeMin.min) / tot) * 100;
    const r = 100 - ((mx - +rangeMin.min) / tot) * 100;
    if (rangeFill) { rangeFill.style.left = l + '%'; rangeFill.style.right = r + '%'; }
    if (pMinEl) pMinEl.textContent = '$' + mn;
    if (pMaxEl) pMaxEl.textContent = '$' + mx;
  }
  function clampRange() {
    if (!rangeMin) return;
    let mn = +rangeMin.value, mx = +rangeMax.value;
    if (mn > mx - 2) {
      if (document.activeElement === rangeMin) rangeMin.value = mx - 2;
      else rangeMax.value = mn + 2;
    }
  }
  rangeMin?.addEventListener('input', () => { clampRange(); fillRange(); apply(); });
  rangeMax?.addEventListener('input', () => { clampRange(); fillRange(); apply(); });
  fillRange();

  /* Category buttons */
  $$('.filter-cat-btn[data-cat]').forEach(b => b.addEventListener('click', () => {
    $$('.filter-cat-btn[data-cat]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); currentCat = b.dataset.cat; apply();
  }));

  /* Restaurant buttons */
  $$('.filter-cat-btn[data-rest]').forEach(b => b.addEventListener('click', () => {
    $$('.filter-cat-btn[data-rest]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); currentRest = b.dataset.rest;
    restAddrs.forEach(c => {
      c.style.display = (c.dataset.rest === currentRest || (currentRest === 'all' && c.dataset.rest === 'all')) ? 'flex' : 'none';
    });
    apply();
  }));

  /* Sort */
  $$('input[name="sort"]').forEach(r => r.addEventListener('change', () => { currentSort = r.value; apply(); }));

  /* Dietary */
  [vegChk, spicyChk, popularChk, saleChk].forEach(c => c?.addEventListener('change', apply));

  /* Search */
  searchInp?.addEventListener('input', apply);

  /* View toggle */
  gridViewB?.addEventListener('click', () => {
    listView = false;
    gridViewB.classList.add('active'); listViewB?.classList.remove('active');
    grid.classList.remove('list-view');
  });
  listViewB?.addEventListener('click', () => {
    listView = true;
    listViewB.classList.add('active'); gridViewB?.classList.remove('active');
    grid.classList.add('list-view');
  });

  /* Reset */
  function doReset() {
    currentCat = 'all'; currentRest = 'all'; currentSort = 'default'; listView = false;
    if (rangeMin) { rangeMin.value = 5; rangeMax.value = 50; fillRange(); }
    if (vegChk)     vegChk.checked     = false;
    if (spicyChk)   spicyChk.checked   = false;
    if (popularChk) popularChk.checked = false;
    if (saleChk)    saleChk.checked    = false;
    if (searchInp)  searchInp.value    = '';
    $$('.filter-cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === 'all' || b.dataset.rest === 'all');
    });
    const def = $('input[name="sort"][value="default"]');
    if (def) def.checked = true;
    grid.classList.remove('list-view');
    gridViewB?.classList.add('active'); listViewB?.classList.remove('active');
    restAddrs.forEach(c => c.style.display = c.dataset.rest === 'all' ? 'flex' : 'none');
    apply();
  }
  resetBtn?.addEventListener('click', doReset);
  noResReset?.addEventListener('click', doReset);

  /* Mobile sidebar */
  mobFltBtn?.addEventListener('click', () => sidebar?.classList.toggle('mobile-open'));
  document.addEventListener('click', e => {
    if (sidebar?.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== mobFltBtn)
      sidebar.classList.remove('mobile-open');
  });

  /* Apply all filters */
  function apply() {
    const mn  = +(rangeMin?.value || 5);
    const mx  = +(rangeMax?.value || 50);
    const q   = (searchInp?.value || '').toLowerCase();

    let items = PRODUCTS.filter(p => {
      if (currentCat  !== 'all' && p.cat  !== currentCat)  return false;
      if (currentRest !== 'all' && p.rest !== currentRest) return false;
      const price = p.salePrice !== null ? p.salePrice : p.price;
      if (price < mn || price > mx)    return false;
      if (vegChk?.checked     && !p.isVeg)     return false;
      if (spicyChk?.checked   && !p.isSpicy)   return false;
      if (popularChk?.checked && !p.isPopular) return false;
      if (saleChk?.checked    && p.salePrice === null) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.desc.toLowerCase().includes(q)) return false;
      return true;
    });

    if      (currentSort === 'price-asc')  items.sort((a,b) => (a.salePrice??a.price) - (b.salePrice??b.price));
    else if (currentSort === 'price-desc') items.sort((a,b) => (b.salePrice??b.price) - (a.salePrice??a.price));
    else if (currentSort === 'rating')     items.sort((a,b) => b.rating - a.rating);
    else if (currentSort === 'sale')       items.sort((a,b) => (b.salePrice!==null?1:0) - (a.salePrice!==null?1:0));

    grid.innerHTML = '';
    if (resCount) resCount.textContent = items.length;

    if (!items.length) { if (noResults) noResults.style.display = 'block'; return; }
    if (noResults) noResults.style.display = 'none';

    items.forEach((p, i) => grid.appendChild(buildCard(p, i * 40)));
    if (listView) grid.classList.add('list-view');
  }

  apply();
})();

/* ══════════════════════════════════════════
   ORDER PAGE — countdown + map animation
══════════════════════════════════════════ */
(function initOrderPage(){
  if (!document.body.classList.contains('order-page')) return;

  /* Order meta */
  const orderNum = Math.floor(Math.random() * 90000) + 10000;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const numEl = $('#orderNumber'); if (numEl) numEl.textContent = orderNum;
  const otEl  = $('#orderTime');   if (otEl)  otEl.textContent  = 'at ' + timeStr;

  const eta1 = new Date(now.getTime() + 20 * 60000);
  const eta2 = new Date(now.getTime() + 30 * 60000);
  const fmt  = d => d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const rangeEl = $('#deliveryTimeRange'); if (rangeEl) rangeEl.textContent = fmt(eta1) + ' – ' + fmt(eta2);

  /* Countdown — 20 minutes */
  let secsLeft  = 20 * 60;
  const TOTAL   = 20 * 60;
  const circle  = $('#countdownCircle');
  const minEl   = $('#countdownMinutes');
  const CIRC    = 2 * Math.PI * 54;   // r = 54

  if (circle) { circle.style.strokeDasharray = CIRC; circle.style.strokeDashoffset = 0; }

  function tick() {
    secsLeft--;
    if (secsLeft <= 0) { clearInterval(timer); secsLeft = 0; deliveryArrived(); }
    if (minEl) minEl.textContent = Math.ceil(secsLeft / 60);
    if (circle) circle.style.strokeDashoffset = CIRC * (1 - secsLeft / TOTAL);
  }
  const timer = setInterval(tick, 1000);

  /* Courier animation along SVG waypoints */
  const courierEl = $('#courierMarker');
  const waypoints = [{x:120,y:80},{x:180,y:110},{x:240,y:135},{x:300,y:160},{x:360,y:195},{x:400,y:220},{x:430,y:250}];
  let wpIdx = 0;
  if (courierEl) {
    courierEl.setAttribute('transform', `translate(${waypoints[0].x},${waypoints[0].y})`);
    const interval = Math.floor((TOTAL * 1000) / waypoints.length);
    const mover = setInterval(() => {
      wpIdx++;
      if (wpIdx >= waypoints.length) { clearInterval(mover); return; }
      courierEl.setAttribute('transform', `translate(${waypoints[wpIdx].x},${waypoints[wpIdx].y})`);
    }, interval);
  }

  function deliveryArrived() {
    ['#step3','#step4'].forEach(s => { const el=$(s); if(el){ el.classList.remove('active'); el.classList.add('done'); } });
    ['#line2','#line3'].forEach(l => { const el=$(l); if(el) el.classList.add('done'); });
    const rs = $('#rateOrderSection'); if (rs) rs.style.display = 'block';
    if (minEl) minEl.textContent = '0';
    if (rangeEl) rangeEl.textContent = 'Your order has been delivered! 🎉';
  }

  /* Render saved cart items */
  const savedCart = JSON.parse(localStorage.getItem('infernoCart') || '[]');
  const itemsList = $('#orderItemsList');
  const totalsEl  = $('#orderSummaryTotals');
  const addrEl    = $('#orderDeliveryAddress');
  if (addrEl) addrEl.textContent = localStorage.getItem('infernoAddress') || 'Address not set';

  if (itemsList) {
    if (savedCart.length) {
      savedCart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'order-item-row';
        row.innerHTML = `<span>${item.name} × ${item.qty}</span><span>$${(item.price * item.qty).toFixed(2)}</span>`;
        itemsList.appendChild(row);
      });
    } else {
      itemsList.innerHTML = '<p style="color:var(--text-muted);font-size:.88rem">No items found for this order.</p>';
    }
  }

  if (totalsEl && savedCart.length) {
    const sub = savedCart.reduce((s, i) => s + i.price * i.qty, 0);
    const del = sub >= 30 ? 0 : 3.99;
    totalsEl.innerHTML = `
      <div class="order-summary-line"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
      <div class="order-summary-line"><span>Delivery</span><span>${del === 0 ? 'FREE 🎉' : '$' + del.toFixed(2)}</span></div>
      <div class="order-summary-total"><span>Total Paid</span><span>$${(sub + del).toFixed(2)}</span></div>`;
  }

  /* Clear cart after loading order page */
  setTimeout(() => { localStorage.setItem('infernoCart', '[]'); updateCartUI(); }, 800);

  /* Star rating */
  const stars     = $$('.rate-star');
  const rLabel    = $('#rateLabel');
  const submitBtn = $('#submitRating');
  const LABELS    = ['Terrible 😞','Bad 😕','Okay 😐','Good 😊','Excellent! 🔥'];
  let chosenRating = 0;

  stars.forEach((s, i) => {
    s.addEventListener('mouseenter', () => stars.forEach((x, j) => x.classList.toggle('active', j <= i)));
    s.addEventListener('mouseleave', () => stars.forEach((x, j) => x.classList.toggle('active', j < chosenRating)));
    s.addEventListener('click', () => {
      chosenRating = i + 1;
      if (rLabel)    rLabel.textContent = LABELS[i];
      if (submitBtn) submitBtn.style.display = 'inline-flex';
    });
  });

  submitBtn?.addEventListener('click', () => {
    const rs = $('#rateOrderSection');
    if (rs) rs.innerHTML = '<p style="color:#10b981;font-family:var(--font-heading);font-size:1.1rem;text-align:center">✓ Thank you for your rating!</p>';
  });
})();

/* ══════════════════════════════════════════
   AUTH PAGE — login / signup
══════════════════════════════════════════ */
(function initAuthPage(){
  if (!document.body.classList.contains('auth-page')) return;

  const loginTab   = $('#loginTab');
  const signupTab  = $('#signupTab');
  const loginForm  = $('#loginForm');
  const signupForm = $('#signupForm');

  function showLogin()  { loginForm.style.display=''; signupForm.style.display='none'; loginTab.classList.add('active'); signupTab.classList.remove('active'); }
  function showSignup() { signupForm.style.display=''; loginForm.style.display='none'; signupTab.classList.add('active'); loginTab.classList.remove('active'); }

  loginTab?.addEventListener('click', showLogin);
  signupTab?.addEventListener('click', showSignup);
  $('#toSignup')?.addEventListener('click', showSignup);
  $('#toLogin')?.addEventListener('click', showLogin);

  /* Toggle password visibility */
  $$('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = $(`#${btn.dataset.target}`);
      if (!inp) return;
      inp.type = inp.type === 'password' ? 'text' : 'password';
      btn.textContent = inp.type === 'password' ? '👁' : '🙈';
    });
  });

  /* Password strength meter */
  const pwInp  = $('#signupPassword');
  const fill   = $('#pwStrengthFill');
  const label  = $('#pwStrengthLabel');
  pwInp?.addEventListener('input', () => {
    const v = pwInp.value;
    let score = 0;
    if (v.length >= 8)           score++;
    if (/[A-Z]/.test(v))         score++;
    if (/[0-9]/.test(v))         score++;
    if (/[^A-Za-z0-9]/.test(v))  score++;
    const pct    = [0, 25, 50, 75, 100][score];
    const colors = ['', '#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
    const labs   = ['', 'Weak', 'Fair', 'Good', 'Strong 🔥'];
    if (fill)  { fill.style.width = pct + '%'; fill.style.background = colors[score]; }
    if (label) { label.textContent = labs[score]; label.style.color = colors[score]; }
  });

  /* Validation helpers */
  const isGmail = e => /^[^\s@]+@gmail\.com$/i.test(e.trim());
  function setErr(id, msg) { const el=$(id); if(el) el.textContent=msg; }
  function clrErr(id)      { setErr(id,''); }
  function markErr(inp)    { inp?.classList.add('error'); }
  function clrMark(inp)    { inp?.classList.remove('error'); }

  /* LOGIN */
  loginForm?.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#loginEmail'), pw = $('#loginPassword');
    let ok = true;
    clrErr('#loginEmailError'); clrErr('#loginPasswordError');
    clrMark(email); clrMark(pw);

    if (!email.value.trim())   { setErr('#loginEmailError','Email is required.'); markErr(email); ok=false; }
    else if (!isGmail(email.value)) { setErr('#loginEmailError','Must be a valid @gmail.com address.'); markErr(email); ok=false; }
    if (!pw.value.trim())      { setErr('#loginPasswordError','Password is required.'); markErr(pw); ok=false; }
    if (!ok) return;

    const succ = $('#loginSuccess');
    if (succ) { succ.textContent = '✓ Welcome back! Redirecting...'; succ.classList.add('show'); }
    localStorage.setItem('infernoUser', JSON.stringify({email: email.value.trim()}));
    setTimeout(() => window.location.href = 'index.html', 1500);
  });

  /* SIGNUP */
  signupForm?.addEventListener('submit', e => {
    e.preventDefault();
    const fn  = $('#signupFirstName'), ln = $('#signupLastName');
    const em  = $('#signupEmail'),     ph = $('#signupPhone');
    const pw  = $('#signupPassword'),  cp = $('#signupConfirmPassword');
    const tc  = $('#termsCheck');
    let ok = true;

    [['#firstNameError',fn,'First name is required.'],
     ['#lastNameError', ln,'Last name is required.'],
     ['#signupPhoneError',ph,'Phone number is required.'],
     ['#signupPasswordError',pw,'Password is required.'],
    ].forEach(([eid, inp, msg]) => {
      clrErr(eid); clrMark(inp);
      if (!inp.value.trim()) { setErr(eid,msg); markErr(inp); ok=false; }
    });

    clrErr('#signupEmailError'); clrMark(em);
    if (!em.value.trim())     { setErr('#signupEmailError','Email is required.'); markErr(em); ok=false; }
    else if (!isGmail(em.value)) { setErr('#signupEmailError','Must be a valid @gmail.com address (e.g. yourname@gmail.com).'); markErr(em); ok=false; }

    clrErr('#confirmPasswordError'); clrMark(cp);
    if (pw.value && cp.value !== pw.value) { setErr('#confirmPasswordError','Passwords do not match.'); markErr(cp); ok=false; }

    clrErr('#termsError');
    if (!tc.checked) { setErr('#termsError','You must accept the Terms & Conditions.'); ok=false; }

    if (!ok) return;
    const succ = $('#signupSuccess');
    if (succ) { succ.textContent = '✓ Account created! Welcome to INFERNO 🔥'; succ.classList.add('show'); }
    localStorage.setItem('infernoUser', JSON.stringify({name: fn.value+' '+ln.value, email: em.value.trim()}));
    setTimeout(() => window.location.href = 'index.html', 1800);
  });

  /* Live clear on input */
  $$('.auth-form input').forEach(inp => inp.addEventListener('input', () => inp.classList.remove('error')));
})();

/* ══════════════════════════════════════════
   LIVE CHAT WIDGET
══════════════════════════════════════════ */
(function initLiveChat(){
  const fab      = $('#chatFab');
  const widget   = $('#liveChatWidget');
  const closeBtn = $('#closeLiveChatBtn');
  const openBtn  = $('#openLiveChatBtn');
  const sendBtn  = $('#chatSendBtn');
  const input    = $('#chatInput');
  const msgs     = $('#chatMessages');
  if (!fab) return;

  const BOT_REPLIES = [
    "I'm checking on that for you right now! Give me just a moment 😊",
    "Thanks for reaching out! Could you share your order number so I can help faster?",
    "Absolutely, let me look into that right away!",
    "I understand your concern. Let me connect you with our delivery team.",
    "Great news — I can see your order is on its way! ETA should be around 15 minutes.",
    "Of course! We can arrange a full refund or a replacement within 10 minutes.",
    "Thanks for your patience! Is there anything else I can help you with today?",
    "Your satisfaction is our top priority at INFERNO 🔥",
  ];
  let replyIdx = 0;

  function openWidget()  { if (widget) widget.style.display = 'block'; }
  function closeWidget() { if (widget) widget.style.display = 'none'; }

  fab.addEventListener('click', openWidget);
  closeBtn?.addEventListener('click', closeWidget);
  openBtn?.addEventListener('click', openWidget);

  function addMsg(text, isUser) {
    if (!msgs) return;
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (isUser ? 'user-msg' : 'agent-msg');
    div.innerHTML = `<span>${text}</span>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function sendMessage() {
    const v = input?.value.trim();
    if (!v) return;
    addMsg(v, true);
    input.value = '';

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-typing agent-msg';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs?.appendChild(typing);
    msgs && (msgs.scrollTop = msgs.scrollHeight);

    setTimeout(() => {
      typing.remove();
      addMsg(BOT_REPLIES[replyIdx % BOT_REPLIES.length], false);
      replyIdx++;
    }, 1000 + Math.random() * 800);
  }

  sendBtn?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
})();

/* ══════════════════════════════════════════
   COURIER / PARTNER FORMS
══════════════════════════════════════════ */
(function initCourierForms(){
  /* ── RIDER APPLY ── */
  const riderForm = $('#riderApplyForm');
  if (riderForm) {
    const isGmail = e => /^[^\s@]+@gmail\.com$/i.test(e.trim());
    riderForm.addEventListener('submit', e => {
      e.preventDefault();
      const fields = [
        ['#riderFirstName','#riderFirstNameErr','First name required.'],
        ['#riderLastName', '#riderLastNameErr', 'Last name required.'],
        ['#riderPhone',    '#riderPhoneErr',    'Phone required.'],
        ['#riderVehicle',  '#riderVehicleErr',  'Please select a vehicle.'],
        ['#riderZone',     '#riderZoneErr',     'Please select your zone.'],
      ];
      let ok = true;
      fields.forEach(([inp, err, msg]) => {
        const el = $(inp), ee = $(err);
        if (ee) ee.textContent = '';
        if (el) el.classList.remove('error');
        if (!el?.value.trim()) { if(ee) ee.textContent=msg; if(el) el.classList.add('error'); ok=false; }
      });
      const em = $('#riderEmail'), emErr = $('#riderEmailErr');
      if (emErr) emErr.textContent=''; if(em) em.classList.remove('error');
      if (!em?.value.trim() || !isGmail(em.value)) {
        if(emErr) emErr.textContent='Must be a valid @gmail.com address.';
        if(em) em.classList.add('error'); ok=false;
      }
      const tc = $('#riderTerms'), tcErr = $('#riderTermsErr');
      if (tcErr) tcErr.textContent='';
      if (!tc?.checked) { if(tcErr) tcErr.textContent='You must accept the terms.'; ok=false; }
      if (!ok) return;
      const succ = $('#riderSuccess');
      if (succ) { succ.textContent='✓ Application submitted! We will contact you within 24 hours.'; succ.classList.add('show'); }
      riderForm.reset();
    });
  }

  /* ── PARTNER APPLY ── */
  const partnerForm = $('#partnerApplyForm');
  if (partnerForm) {
    const isGmail = e => /^[^\s@]+@gmail\.com$/i.test(e.trim());
    partnerForm.addEventListener('submit', e => {
      e.preventDefault();
      const fields = [
        ['#partnerName',    '#partnerNameErr',    'Restaurant name required.'],
        ['#partnerContact', '#partnerContactErr', 'Contact name required.'],
        ['#partnerPhone',   '#partnerPhoneErr',   'Phone required.'],
        ['#partnerAddress', '#partnerAddressErr', 'Address required.'],
        ['#partnerCuisine', '#partnerCuisineErr', 'Please select cuisine type.'],
      ];
      let ok = true;
      fields.forEach(([inp, err, msg]) => {
        const el=$(inp), ee=$(err);
        if(ee) ee.textContent=''; if(el) el.classList.remove('error');
        if(!el?.value.trim()) { if(ee) ee.textContent=msg; if(el) el.classList.add('error'); ok=false; }
      });
      const em=$(('#partnerEmail')), emErr=$('#partnerEmailErr');
      if(emErr) emErr.textContent=''; if(em) em.classList.remove('error');
      if(!em?.value.trim() || !isGmail(em.value)) {
        if(emErr) emErr.textContent='Must be a valid @gmail.com address.';
        if(em) em.classList.add('error'); ok=false;
      }
      if (!ok) return;
      const succ=$('#partnerSuccess');
      if(succ){ succ.textContent='✓ Application received! Our partner team will call you within 24 hours.'; succ.classList.add('show'); }
      partnerForm.reset();
    });
  }

  /* ── CAREER MODAL ── */
  const careerBtns  = $$('.career-apply-btn');
  const overlay     = $('#careerModalOverlay');
  const closeModal  = $('#careerModalClose');
  const modalTitle  = $('#careerModalTitle');
  const careerForm  = $('#careerApplyForm');

  careerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.career-card');
      const role = card?.querySelector('h3')?.textContent || 'Position';
      if (modalTitle) modalTitle.textContent = 'Apply for: ' + role;
      if (overlay) overlay.style.display = 'flex';
    });
  });

  closeModal?.addEventListener('click', () => { if(overlay) overlay.style.display='none'; });
  overlay?.addEventListener('click', e => { if(e.target === overlay) overlay.style.display='none'; });

  if (careerForm) {
    const isGmail = e => /^[^\s@]+@gmail\.com$/i.test(e.trim());
    careerForm.addEventListener('submit', e => {
      e.preventDefault();
      const nm=$('#careerName'), nmErr=$('#careerNameErr');
      const em=$('#careerEmail'), emErr=$('#careerEmailErr');
      const why=$('#careerWhy'), whyErr=$('#careerWhyErr');
      let ok=true;
      [nmErr,emErr,whyErr].forEach(x=>{ if(x) x.textContent=''; });
      if(!nm?.value.trim()) { if(nmErr) nmErr.textContent='Name required.'; ok=false; }
      if(!em?.value.trim() || !isGmail(em.value)) { if(emErr) emErr.textContent='Valid @gmail.com required.'; ok=false; }
      if(!why?.value.trim()) { if(whyErr) whyErr.textContent='Please tell us why you want to join.'; ok=false; }
      if(!ok) return;
      const succ=$('#careerSuccess');
      if(succ){ succ.textContent='✓ Application sent! We will be in touch soon.'; succ.classList.add('show'); }
      careerForm.reset();
      setTimeout(()=>{ if(overlay) overlay.style.display='none'; if(succ) succ.classList.remove('show'); }, 2500);
    });
  }
})();

/* ══════════════════════════════════════════
   SMOOTH SCROLL for in-page anchors
══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
