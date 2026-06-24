import type { MenuItem } from '../../types/menu'

interface MenuItemCardProps {
  item: MenuItem
}

function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="menu-item-card">
      <div className="menu-item-body">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <span className="menu-item-price">{item.price}</span>
      </div>
      {item.tags?.length ? (
        <div className="menu-item-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="menu-item-tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default MenuItemCard
