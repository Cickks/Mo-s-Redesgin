import type { MenuCategory } from '../types/menu'

// Official Mo's Pizza online ordering page (Toast). Used as the fallback for every
// menu item. Do not replace with fake or guessed item-level deep links — Toast does
// not guarantee stable per-item URLs. Set MenuItem.toastUrl only with a confirmed link.
export const TOAST_ORDER_URL = 'https://order.toasttab.com/online/mos-pizza-1112-ave-h'

// Transcribed directly from Mo's Pizza's official printed menu (mospizzanola.com).
// The printed menu does not list prices, so none are shown here — live pricing is
// available on the restaurant's online ordering page (Toast). Do not add prices
// unless sourced from the restaurant.
export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    description: 'Fresh-made starters to share.',
    items: [
      { id: 'chicken-wings', name: 'Chicken Wings', description: 'Your choice of Hot, BBQ, Plain, or Sweet & Spicy. (8)', category: 'appetizers', tags: ['Customer Favorite'] },
      { id: 'cheese-sticks', name: 'Mozzarella Cheese Sticks (6)', description: 'Served with homemade Marinara Sauce.', category: 'appetizers' },
      { id: 'french-fries', name: 'French Fries', category: 'appetizers' },
      { id: 'breadsticks', name: 'Breadsticks', description: 'Our delicious fresh dough, buttered with garlic, sprinkled with Parmesan & Romano cheeses, served with our homemade Marinara Sauce.', category: 'appetizers' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    note: 'Dressings: Thousand Island, Ranch, French, Blue Cheese, Golden Italian, Homemade Italian Vinaigrette, Caesar, Honey Mustard.',
    items: [
      { id: 'italian-salad', name: 'Italian Salad', description: 'Iceberg & Romaine lettuce, black olives, marinated artichoke hearts, Grande mozzarella & Genoa salami marinated with homemade Italian Vinaigrette.', category: 'salads', tags: ['Customer Favorite'] },
      { id: 'blue-cheese-wedge', name: 'Blue Cheese Wedge Salad', description: 'Wedge of Iceberg lettuce, bacon, cherry tomatoes & blue cheese crumbles with blue cheese dressing.', category: 'salads' },
      { id: 'caesar-salad', name: 'Caesar Salad', description: 'Chopped Romaine lettuce, shaved Romano & Parmesan cheeses, homemade croutons, served with Caesar dressing.', category: 'salads' },
      { id: 'garden-salad', name: 'Garden Salad', description: 'Iceberg & Romaine lettuce, cherry tomatoes, broccoli, carrots & cauliflower.', options: ['Add Chicken', 'Add Bacon'], category: 'salads' },
    ],
  },
  {
    id: 'specialty-pizzas',
    title: 'Specialty Made Pizzas',
    note: 'No substitutions.',
    items: [
      { id: 'muffaletta-pizza', name: 'Muffaletta', description: 'Ham, Genoa salami, mortadella, Grande cheese, homemade olive salad with olive oil sauce.', category: 'specialty-pizzas', tags: ['Customer Favorite'] },
      { id: 'alfredo-pizza', name: 'Alfredo', description: 'Grilled boneless chicken, fresh spinach & homemade Alfredo sauce.', category: 'specialty-pizzas' },
    ],
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    description: 'All pizzas are hand-tossed with homemade fresh dough & made to order.',
    note: 'Please specify pizza sauce: regular, olive oil or Alfredo. Toppings: Pepperoni, Italian Sausage, Ham, Onions, Mushrooms, Black Olives, Bell Peppers, Jalapeños, Extra Cheese, Green Olives, Anchovies, Banana Peppers, Pineapple, Sliced Meatballs, Sliced Tomatoes. Double price toppings: Chicken, Bacon, Spinach or Artichoke Hearts.',
    items: [
      { id: 'cheese-pizza', name: 'Cheese', options: ['Slice', 'Small', 'Large'], category: 'pizzas' },
      { id: 'pepperoni-pizza', name: 'Pepperoni', options: ['Slice', 'Small', 'Large'], category: 'pizzas' },
      { id: 'supreme-pizza', name: 'Supreme', options: ['Slice', 'Small', 'Large'], category: 'pizzas' },
      { id: 'extra-toppings', name: 'Extra Toppings', description: 'Add your favorite toppings to any pizza.', options: ['Slice', 'Small', 'Large'], category: 'pizzas' },
    ],
  },
  {
    id: 'turnovers',
    title: 'Pizza Turnovers',
    description: 'Mixed toppings stuffed in our homemade dough & cooked until golden brown.',
    items: [
      { id: 'regular-turnover', name: 'Regular Pizza Turnover', description: 'Pepperoni, Ham, Italian Sausage, Grande cheese & meat sauce.', category: 'turnovers' },
      { id: 'supreme-turnover', name: 'Supreme Pizza Turnover', description: 'Pepperoni, Ham, Italian Sausage, Grande cheese, meat sauce, onions, bell peppers, black olives & mushrooms.', category: 'turnovers', tags: ['Customer Favorite'] },
      { id: 'build-your-own-turnover', name: 'Special "Build Your Own" Turnover', description: 'Grande Mozzarella & choice of one of our homemade sauces included. (Please call ahead 1 hour for special turnover.)', category: 'turnovers' },
    ],
  },
  {
    id: 'po-boys',
    title: 'Po-Boys',
    items: [
      { id: 'meatballs-cheese-poboy', name: 'Meatballs & Cheese', description: 'Homemade meatballs simmered in our spaghetti sauce, toasted & topped with mozzarella.', options: ['Half', 'Whole'], category: 'po-boys' },
      { id: 'sausage-peppers-poboy', name: 'Sausage & Peppers with Cheese', description: 'Homemade Italian sausage sautéed in a light red gravy with bell peppers & onions, topped with mozzarella.', options: ['Half', 'Whole'], category: 'po-boys' },
      { id: 'mos-muffaletta-poboy', name: "Mo's Muffaletta", description: 'Italian cold cuts: Ham, Genoa Salami & Mortadella layered with provolone, toasted until golden brown & topped with our homemade olive salad. Dressed or extra olive salad/cheese available.', options: ['Half', 'Whole'], category: 'po-boys', tags: ['Customer Favorite'] },
    ],
  },
  {
    id: 'dinners',
    title: 'Dinners',
    description: 'All dinners are served with garlic bread.',
    note: 'Add-ons available: Extra Cheese or Sauce, Meatball, Extra Garlic Bread.',
    items: [
      { id: 'lasagna', name: 'Lasagna — Our Specialty', description: 'Layers of meat sauce, ricotta & mozzarella cheese topped with our homemade sauce.', options: ['Half', 'Whole'], category: 'dinners', tags: ['Customer Favorite'] },
      { id: 'spaghetti-meatballs', name: 'Spaghetti & Meatballs', description: 'Our homemade meatballs & red sauce served over angel hair pasta.', options: ['Half', 'Whole'], category: 'dinners' },
      { id: 'spaghetti-sausage-peppers', name: 'Spaghetti with Sausage & Peppers', description: 'Our sausage, peppers & onions served over angel hair pasta.', options: ['Half', 'Whole'], category: 'dinners' },
      { id: 'veal-parmesan', name: 'Veal Parmesan', description: 'Breaded veal topped with our homemade sauce & mozzarella, served over angel hair pasta.', category: 'dinners' },
    ],
  },
  {
    id: 'others',
    title: 'Others',
    items: [
      { id: 'sausage-roll', name: 'Sausage Roll', description: 'Homemade Italian sausage wrapped in dough with onions, bell peppers & cheese, cooked until golden brown.', category: 'others', tags: ['Customer Favorite'] },
      { id: 'sausage-wrap', name: 'Sausage Wrap', description: 'Homemade Italian sausage wrapped in dough and cooked until golden brown.', category: 'others' },
      { id: 'marinara-small', name: 'Small Cup of Marinara', category: 'others' },
      { id: 'marinara-large', name: 'Large Cup of Marinara', category: 'others' },
    ],
  },
  {
    id: 'weekday-specials',
    title: 'Weekday Specials',
    note: 'Only Po-Boy specials are dressed and topped with Grande mozzarella.',
    items: [
      { id: 'monday-bbq-beef', name: 'Bar-B-Que Beef Po-Boy', description: 'Sliced Roast Beef simmered in a sweet & savory BBQ sauce.', options: ['Half Po-Boy', 'Whole Po-Boy', 'Half Muffaletta Bun', 'Whole Muffaletta Bun'], category: 'weekday-specials', tags: ['Monday'] },
      { id: 'tuesday-chicken-parmesan', name: 'Chicken Parmesan', description: 'Chicken breast served over 8 oz. of spaghetti with marinara sauce, mozzarella & garlic bread.', category: 'weekday-specials', tags: ['Tuesday'] },
      { id: 'wednesday-hot-sausage', name: 'Hot Sausage Po-Boy', description: 'Homemade Hot Sausage links (not too spicy, not too mild).', options: ['Half Po-Boy', 'Whole Po-Boy', 'Half Muffaletta Bun', 'Whole Muffaletta Bun'], category: 'weekday-specials', tags: ['Wednesday'] },
      { id: 'friday-roast-beef', name: 'Roast Beef Po-Boy', description: 'Gravy-soaked roast beef on toasted bread (a New Orleans favorite).', options: ['Half Po-Boy', 'Whole Po-Boy', 'Half Muffaletta Bun', 'Whole Muffaletta Bun'], category: 'weekday-specials', tags: ['Friday'] },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { id: 'bread-pudding', name: 'Homemade Bread Pudding', description: 'Served with our Rum Sauce.', category: 'desserts', tags: ['Customer Favorite'] },
      { id: 'peanut-butter-fudge', name: 'Peanut Butter Fudge', category: 'desserts' },
      { id: 'cookies', name: 'Cookies', description: 'Chocolate Chip, White Chocolate Macadamia Nuts, or Chocolate Chip with M&M\u2019s.', category: 'desserts' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { id: 'fountain-drinks', name: 'Fountain Drinks', description: "Coke, Diet Coke, Dr. Pepper, Diet Dr. Pepper, Sprite, Hi-C Flashin' Fruit Punch, Barq's Rootbeer, Barq's Red Creme Soda, Sweetened or Unsweetened Fresh Brewed Iced Tea.", category: 'drinks' },
      { id: 'fresh-lemonade', name: 'Fresh Squeezed Lemonade', category: 'drinks' },
      { id: 'gallon-tea-lemonade', name: 'Gallon of Tea or Lemonade', category: 'drinks' },
      { id: 'coke-20oz', name: 'Coke Products (20 oz.)', category: 'drinks' },
      { id: 'coke-2liter', name: 'Coke Products (2 Liter)', category: 'drinks' },
    ],
  },
  {
    id: 'beer',
    title: 'Beer On Tap',
    items: [
      { id: 'bud-light', name: 'Bud Light', category: 'beer' },
      { id: 'cane-break', name: 'Cane Break', category: 'beer' },
    ],
  },
  {
    id: 'catering',
    title: 'Catering',
    description: 'Need food for an event? Call 504-341-9650 or visit mospizzanola.com.',
    note: 'Visit our website for more catering items.',
    items: [
      { id: 'catering-lasagna', name: "Mo's Famous Homemade Lasagna", description: 'Garlic bread included. Please specify heated or unheated. Half pan feeds 10–12, whole pan feeds 24–26.', options: ['Half Pan', 'Whole Pan'], category: 'catering', tags: ['Customer Favorite'] },
      { id: 'catering-mini-muffalettas', name: 'Mini Muffalettas', description: 'Made with our homemade olive salad, Ham, mortadella, Genoa salami & provolone cheese.', options: ['50 Count', '100 Count'], category: 'catering' },
    ],
  },
]
