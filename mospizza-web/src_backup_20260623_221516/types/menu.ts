export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  tags?: string[]
}

export interface MenuCategory {
  id: string
  title: string
  description: string
  items: MenuItem[]
}
