import type { MenuCategory } from '../types/menu'

export const menuCategories: MenuCategory[] = [
  {
    id: 'pizza',
    title: 'Classic Pizzas',
    description: 'All pizzas are hand-tossed with house sauce and 100% real mozzarella.',
    items: [
      { id: 'house-special', name: 'Mo''s House Special', description: 'Pepperoni, Italian sausage, green peppers, onions, mushrooms, and black olives.', price: '\.99', category: 'pizza', tags: ['most popular'] },
      { id: 'margherita', name: 'Margherita', description: 'Fresh mozzarella, basil, tomatoes, garlic, and extra virgin olive oil.', price: '\.49', category: 'pizza', tags: ['vegetarian'] },
      { id: 'meat-lovers', name: 'Meat Lovers', description: 'Pepperoni, sausage, ham, bacon, and ground beef over mozzarella.', price: '\.99', category: 'pizza' },
      { id: 'veggie-delight', name: 'Veggie Delight', description: 'Spinach, tomatoes, mushrooms, onions, green peppers, and black olives.', price: '\.49', category: 'pizza', tags: ['vegetarian'] },
      { id: 'bbq-chicken', name: 'BBQ Chicken', description: 'Grilled chicken, red onions, cilantro, and smoky BBQ sauce.', price: '\.99', category: 'pizza' },
    ],
  },
  {
    id: 'muffulettas',
    title: 'Muffulettas',
    description: 'Traditional New Orleans favorites with Italian meats and olive salad.',
    items: [
      { id: 'classic-muff', name: 'Classic Muffuletta', description: 'Salami, mortadella, provolone, and olive salad on round sesame bread.', price: '\.99', category: 'muffulettas', tags: ['New Orleans classic'] },
      { id: 'half-muff', name: 'Half Muffuletta', description: 'Classic flavors on a half loaf. Perfect for one.', price: '\.99', category: 'muffulettas' },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta & Entrées',
    description: 'Comforting classics baked or sauced for a hearty meal.',
    items: [
      { id: 'baked-ziti', name: 'Baked Ziti', description: 'Ziti tossed in house marinara, ricotta, mozzarella, and parmesan.', price: '\.99', category: 'pasta' },
      { id: 'chicken-parmesan', name: 'Chicken Parmesan', description: 'Breaded chicken breast with marinara, mozzarella, served over spaghetti.', price: '\.99', category: 'pasta' },
      { id: 'shrimp-alfredo', name: 'Shrimp Alfredo', description: 'Shrimp with creamy alfredo sauce, garlic, and parsley over fettuccine.', price: '\.49', category: 'pasta' },
      { id: 'lasagna', name: 'Classic Lasagna', description: 'Layered beef and ricotta with marinara and melted mozzarella.', price: '\.99', category: 'pasta' },
    ],
  },
  {
    id: 'wings-sides',
    title: 'Wings & Sides',
    description: 'Shareable favorites and crispy sides made fresh to order.',
    items: [
      { id: 'garlic-knots', name: 'Garlic Knots', description: 'Warm dough knots brushed with garlic butter and parmesan.', price: '\.49', category: 'wings-sides' },
      { id: 'mozzarella-sticks', name: 'Mozzarella Sticks', description: 'Fried golden and served with marinara dipping sauce.', price: '\.99', category: 'wings-sides' },
      { id: 'buffalo-wings', name: 'Buffalo Wings', description: 'Crispy wings tossed in buffalo sauce with ranch or bleu cheese.', price: '\.99', category: 'wings-sides' },
      { id: 'sausage-peppers', name: 'Sausage with Peppers', description: 'Italian sausage sautéed with onions and green peppers.', price: '\.99', category: 'wings-sides' },
      { id: 'spinach-turnover', name: 'Spinach Turnover', description: 'Crispy fried pastry filled with spinach, ricotta, and cheese.', price: '\.99', category: 'wings-sides' },
      { id: 'meat-turnover', name: 'Meat Turnover', description: 'Golden fried pastry with seasoned ground beef and cheese.', price: '\.49', category: 'wings-sides' },
    ],
  },
  {
    id: 'salads-drinks',
    title: 'Salads & Drinks',
    description: 'Fresh salads and beverages to round out your meal.',
    items: [
      { id: 'caesar-salad', name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, and Caesar dressing.', price: '\.99', category: 'salads-drinks' },
      { id: 'house-salad', name: 'House Salad', description: 'Mixed greens, tomatoes, cucumbers, red onions, and Italian vinaigrette.', price: '\.99', category: 'salads-drinks' },
      { id: 'coke', name: 'Coke', description: '24 oz fountain drink.', price: '\.49', category: 'salads-drinks' },
      { id: 'lemonade', name: 'Lemonade', description: 'Fresh-squeezed style lemonade.', price: '\.99', category: 'salads-drinks' },
    ],
  },
]
