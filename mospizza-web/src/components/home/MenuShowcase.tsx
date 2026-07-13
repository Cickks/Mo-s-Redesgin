import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../common/Reveal.tsx'
import Icon from '../common/Icon.tsx'
import { TOAST_ORDER_URL } from '../../data/menu.ts'
import pizzaWhole from '../../assets/pizza-whole.webp'
import pepperoniPizzaNew from '../../assets/pepperoni-pizza-new.jpg'
import cheesePizzaFacebook from '../../assets/cheese-pizza-facebook.webp'
import loadedPizzaFacebook from '../../assets/loaded-pizza-facebook.webp'
import muffaletta from '../../assets/muffaletta.webp'
import lasagna from '../../assets/lasagna.webp'
import salad from '../../assets/salad.webp'
import wings from '../../assets/wings-mos.jpg'
import turnovers from '../../assets/turnovers.webp'
import sausageRollFacebook from '../../assets/sausage-roll-facebook.webp'
import meatPizzaFacebook from '../../assets/meat-pizza-facebook.webp'
import deliCase from '../../assets/deli-case-2.webp'
import familyTable from '../../assets/family-table.webp'
import storefront from '../../assets/storefront-2.webp'
import interiorEntrance from '../../assets/interior-entrance.webp'
import memorabilia from '../../assets/memorabilia.webp'
import mosCup from '../../assets/mos-cup.webp'
import menuBoard from '../../assets/menu-board.webp'

const EASE = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

type ShowcaseItem = {
  name: string
  image: string
  description: string
  price?: string
  priceNote?: string
  badge?: string
}

const pizzas: ShowcaseItem[] = [
  {
    name: 'Pepperoni Pizza',
    image: pepperoniPizzaNew,
    price: '$20.25',
    priceNote: '14" pie · slice $5.56',
    description: 'Crispy hand-tossed crust loaded with pepperoni and Grande mozzarella.',
    badge: 'Best Seller',
  },
  {
    name: 'Cheese Pizza',
    image: cheesePizzaFacebook,
    price: '$18.65',
    priceNote: '14" pie · slice $5.03',
    description: 'The classic — fresh dough, homemade sauce and a blanket of Grande mozzarella.',
  },
  {
    name: 'Build Your Own Pizza',
    image: loadedPizzaFacebook,
    description: 'Start with fresh dough, homemade sauce and Grande mozzarella, then load it with your favorite toppings.',
  },
]

const specialties: ShowcaseItem[] = [
  {
    name: 'Muffaletta',
    image: muffaletta,
    description: 'Ham, Genoa salami, mortadella and provolone stacked with our homemade olive salad on a sesame loaf — a New Orleans classic.',
    badge: 'Our Specialty',
  },
  {
    name: "Mo's Famous Lasagna",
    image: lasagna,
    description: 'Layers of pasta, rich meat sauce and melted cheese. Family pans feed 10–12 with garlic bread included.',
  },
  {
    name: 'Italian Salad',
    image: salad,
    description: 'Crisp greens, mozzarella, salami, olives and artichoke tossed in our house Italian dressing.',
  },
]

const appetizers: ShowcaseItem[] = [
  {
    name: 'Pizza Turnover',
    image: turnovers,
    price: '$10.79',
    priceNote: 'Supreme $11.89',
    description: 'Pepperoni, ham, sausage, cheese and meat sauce folded in golden-baked dough.',
  },
  {
    name: 'Sausage Roll',
    image: sausageRollFacebook,
    price: '$7.84',
    description: 'Homemade Italian sausage, bell peppers, onions and cheese baked in fresh dough.',
  },
  {
    name: 'Sausage Wrap',
    image: turnovers,
    price: '$5.80',
    description: 'Homemade Italian sausage wrapped in our dough and baked until golden brown.',
  },
]

const galleryImages = [
  {
    src: pizzaWhole,
    alt: 'Hand-tossed pepperoni pizza at Mo\u2019s Pizza',
    label: 'From the oven',
    caption: 'Hand-tossed and made for sharing',
  },
  {
    src: meatPizzaFacebook,
    alt: 'Fresh meat-topped pizza baked at Mo\u2019s Pizza',
    label: 'A local favorite',
    caption: 'Loaded high and baked fresh',
  },
  {
    src: deliCase,
    alt: 'Fresh slices, sausage rolls and breadsticks in the deli case',
    label: 'At the counter',
    caption: 'A Westwego lunch rush tradition',
  },
  {
    src: mosCup,
    alt: 'Mo\u2019s Pizza Westwego cup on a checkered table',
    label: 'Only at Mo\u2019s',
    caption: 'Proudly serving Westwego since 1987',
  },
  {
    src: storefront,
    alt: 'Mo\u2019s Pizza storefront on Avenue H, Westwego',
    label: 'Avenue H',
    caption: 'Your neighborhood pizza place',
  },
  {
    src: interiorEntrance,
    alt: 'Inside Mo\u2019s Pizza — welcome mat and wall of history',
    label: 'Come on in',
    caption: 'Generations of stories on the walls',
  },
  {
    src: memorabilia,
    alt: 'Saints and sports memorabilia on display at Mo\u2019s Pizza',
    label: 'Westwego roots',
    caption: 'Local pride in every corner',
  },
]

function OrderButton({ label = 'Order Now' }: { label?: string }) {
  return (
    <a
      className="button button-primary showcase-order"
      href={TOAST_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const cardModifier =
    item.name === 'Build Your Own Pizza'
      ? ' showcase-card--build-your-own'
      : item.name === 'Pepperoni Pizza'
        ? ' showcase-card--pepperoni'
        : ''
  const cardClassName = `showcase-card${cardModifier}`

  return (
    <motion.article className={cardClassName} variants={cardVariants}>
      <div className="showcase-media">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="showcase-badge">★ {item.badge}</span>}
      </div>
      <div className="showcase-body">
        <div className="showcase-card-head">
          <h3>{item.name}</h3>
          {item.price ? (
            <span className="showcase-price">{item.price}</span>
          ) : (
            <span className="showcase-price showcase-price--toast">Order on Toast</span>
          )}
        </div>
        {item.priceNote && <p className="showcase-price-note">{item.priceNote}</p>}
        <p className="showcase-desc">{item.description}</p>
        <OrderButton />
      </div>
    </motion.article>
  )
}

function MenuShowcase() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  function updateActiveGallery() {
    const gallery = galleryRef.current
    if (!gallery) return

    const firstItem = gallery.querySelector<HTMLElement>('.showcase-gallery-item')
    const itemWidth = firstItem?.getBoundingClientRect().width ?? gallery.clientWidth
    const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap) || 0
    const step = itemWidth + gap
    const visibleItems = Math.max(1, Math.round(gallery.clientWidth / step))
    const firstVisibleIndex = Math.round(gallery.scrollLeft / step)
    const centerOffset = Math.floor((visibleItems - 1) / 2)

    setActiveGalleryIndex(
      Math.min(galleryImages.length - 1, firstVisibleIndex + centerOffset),
    )
  }

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current
    if (!gallery) return

    const firstItem = gallery.querySelector<HTMLElement>('.showcase-gallery-item')
    const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap) || 0
    const step = (firstItem?.getBoundingClientRect().width ?? gallery.clientWidth) + gap
    const maxScroll = gallery.scrollWidth - gallery.clientWidth
    const atStart = gallery.scrollLeft <= 4
    const atEnd = gallery.scrollLeft >= maxScroll - 4

    const left =
      direction === -1 && atStart
        ? maxScroll
        : direction === 1 && atEnd
          ? 0
          : gallery.scrollLeft + direction * step

    gallery.scrollTo({ left, behavior: 'smooth' })
  }

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    updateActiveGallery()
    const resizeObserver = new ResizeObserver(updateActiveGallery)
    resizeObserver.observe(gallery)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    const gallery = galleryRef.current
    const carousel = carouselRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!gallery || !carousel || reducedMotion) return

    const intervalId = window.setInterval(() => {
      const isPaused = carousel.contains(document.activeElement)
      if (!isPaused && !document.hidden) scrollGallery(1)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="menu" className="menu-showcase">
      <div className="page-section showcase-intro">
        <div className="section-header">
          <span className="section-label">The Menu</span>
          <h2>Fresh, hand-made favorites</h2>
          <p>
            A taste of what locals love most. Browse the highlights, then build your full order on
            Toast — pizzas, po-boys, dinners and more.
          </p>
        </div>
      </div>

      {/* Featured Pizzas */}
      <div className="page-section showcase-block showcase-featured-pizzas">
        <div className="section-header showcase-block-head">
          <h2>Featured Pizzas</h2>
          <p>Hand-tossed and made to order on fresh dough.</p>
        </div>
        <motion.div
          className="showcase-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pizzas.map((item) => (
            <ShowcaseCard key={item.name} item={item} />
          ))}
        </motion.div>
        <p className="showcase-note">
          Board prices shown. Final pricing and availability are confirmed at Toast checkout.
        </p>
      </div>

      {/* Wings feature band */}
      <Reveal>
        <div className="showcase-feature showcase-feature--wings">
          <div className="showcase-feature-inner">
            <div className="showcase-feature-media">
              <img src={wings} alt="Mo's sauced chicken wings served in a paper-lined basket" loading="lazy" />
            </div>
            <div className="showcase-feature-text">
              <span className="section-label">Wings</span>
              <h2>Crispy jumbo wings</h2>
              <p>
                Tossed your way — Hot, BBQ, Plain or Sweet &amp; Spicy. Crispy on the outside, juicy
                inside, and made to share (if you want to).
              </p>
              <div className="showcase-flavors">
                <span>Hot</span>
                <span>BBQ</span>
                <span>Plain</span>
                <span>Sweet &amp; Spicy</span>
              </div>
              <OrderButton label="Order Wings on Toast" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Appetizers & Sides */}
      <div className="page-section showcase-block">
        <div className="section-header showcase-block-head">
          <h2>Appetizers &amp; Sides</h2>
          <p>Golden-baked turnovers, rolls and wraps — Westwego classics.</p>
        </div>
        <motion.div
          className="showcase-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {appetizers.map((item) => (
            <ShowcaseCard key={item.name} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Mo's Specialties */}
      <div className="page-section showcase-block">
        <div className="section-header showcase-block-head">
          <h2>Mo&apos;s Specialties</h2>
          <p>The dishes Westwego has loved since 1987.</p>
        </div>
        <motion.div
          className="showcase-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {specialties.map((item) => (
            <ShowcaseCard key={item.name} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Family Favorites storytelling band */}
      <Reveal>
        <div className="showcase-feature showcase-feature--reverse">
          <div className="showcase-feature-inner">
            <div className="showcase-feature-media">
              <img src={familyTable} alt="Friends and family sharing pizzas at Mo's Pizza" loading="lazy" />
            </div>
            <div className="showcase-feature-text">
              <span className="section-label">Family Favorites</span>
              <h2>Made for the whole table</h2>
              <p>
                From our famous lasagna and overstuffed muffalettas to fresh Italian salads and
                homemade bread pudding — Mo's has fed Westwego families since 1987. Order a feast and
                let us do the cooking.
              </p>
              <div className="showcase-fav-tags">
                <span>Lasagna</span>
                <span>Muffaletta</span>
                <span>Italian Salad</span>
                <span>Bread Pudding</span>
              </div>
              <OrderButton label="Order the Family Favorites" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Food gallery */}
      <div ref={carouselRef} className="page-section showcase-block showcase-gallery-section">
        <div className="showcase-gallery-heading">
          <div className="section-header showcase-block-head">
            <span className="section-label">Inside Mo&apos;s</span>
            <h2>Straight from the shop</h2>
            <p>Real food, real photos.</p>
          </div>
          <div className="showcase-carousel-meta">
            <span className="showcase-carousel-count" aria-live="polite" aria-atomic="true">
              <strong>{String(activeGalleryIndex + 1).padStart(2, '0')}</strong>
              <span aria-hidden="true"> / </span>
              <span>{String(galleryImages.length).padStart(2, '0')}</span>
            </span>
            <div className="showcase-carousel-controls" aria-label="Photo gallery controls">
              <button
                className="showcase-carousel-button"
                type="button"
                aria-label="Previous photo"
                title="Previous photo"
                onClick={() => scrollGallery(-1)}
              >
                <Icon name="chevron-left" size={22} />
              </button>
              <button
                className="showcase-carousel-button"
                type="button"
                aria-label="Next photo"
                title="Next photo"
                onClick={() => scrollGallery(1)}
              >
                <Icon name="chevron-right" size={22} />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={galleryRef}
          className="showcase-gallery"
          role="region"
          aria-label="Mo's Pizza photo gallery"
          tabIndex={0}
          onScroll={updateActiveGallery}
        >
          {galleryImages.map((img, index) => (
            <figure
              key={img.src}
              className={`showcase-gallery-item${index === activeGalleryIndex ? ' is-active' : ''}`}
            >
              <div className="showcase-gallery-image">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <figcaption>
                <span>{img.label}</span>
                <strong>{img.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="showcase-carousel-progress" aria-hidden="true">
          <span key={activeGalleryIndex} />
        </div>
      </div>

      {/* Nostalgia menu board */}
      <section className="menu-nostalgia">
        <div className="menu-nostalgia-inner">
          <a
            className="nostalgia-frame"
            href={menuBoard}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the real Mo's Pizza in-store menu board full size"
          >
            <img src={menuBoard} alt="Mo's Pizza in-store menu board" loading="lazy" />
            <span className="nostalgia-tape" aria-hidden="true" />
          </a>
          <div className="menu-nostalgia-text">
            <span className="section-label">Straight from the shop</span>
            <h2>The real menu board</h2>
            <p>
              The same hand-priced board our regulars have read for years — pizzas, turnovers,
              specialty pies and all. Tap the photo to see the full lineup, then order on Toast.
            </p>
            <div className="hero-actions">
              <a className="button button-secondary" href={menuBoard} target="_blank" rel="noopener noreferrer">
                View Full Board
              </a>
              <OrderButton label="Order Online" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default MenuShowcase
