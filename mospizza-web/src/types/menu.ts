export interface MenuItem {
  id: string
  name: string
  description?: string
  options?: string[]
  category: string
  tags?: string[]
  /** Confirmed item-specific Toast ordering URL, if one exists. Falls back to TOAST_ORDER_URL. */
  toastUrl?: string
}

export interface MenuCategory {
  id: string
  title: string
  description?: string
  note?: string
  items: MenuItem[]
}
