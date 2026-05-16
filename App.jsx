
import { motion } from 'framer-motion'

const products = [
  {
    title: 'Football Legends Collection',
    price: '£29.99',
    category: 'Legends',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.etsy.com/shop/ScoreDrawArt'
  },
  {
    title: 'Football Diaries',
    price: '£14.99',
    category: 'Diaries',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.etsy.com/shop/ScoreDrawArt'
  },
  {
    title: 'World Cup Icons',
    price: '£34.99',
    category: 'World Cup',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.etsy.com/shop/ScoreDrawArt'
  }
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-[#9FE870] text-2xl font-black tracking-widest">
            SCOREDRAWART
          </h1>

          <a
            href="https://www.etsy.com/shop/ScoreDrawArt"
            className="bg-[#9FE870] text-black px-5 py-2 rounded-full font-bold"
          >
            Shop
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.4em] text-[#9FE870] mb-4"
          >
            Premium Football Culture Artwork
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-none mb-8"
          >
            Football Art
            <br />
            For True Fans.
          </motion.h1>

          <p className="text-xl text-white/70 max-w-2xl mb-10">
            Premium football-inspired wall art, iconic player collections and football diaries.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#products"
              className="bg-[#9FE870] text-black px-8 py-4 rounded-full font-bold"
            >
              Browse Collection
            </a>

            <a
              href="https://www.etsy.com/shop/ScoreDrawArt"
              className="border border-white/20 px-8 py-4 rounded-full"
            >
              Visit Etsy
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 md:px-16">
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-[#9FE870] text-sm mb-3">
            Best Sellers
          </p>

          <h2 className="text-5xl font-black">Featured Products</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={product.image}
                className="w-full h-[340px] object-cover"
              />

              <div className="p-6">
                <span className="text-[#9FE870] uppercase text-xs tracking-widest">
                  {product.category}
                </span>

                <h3 className="text-2xl font-black mt-3 mb-4">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">{product.price}</p>

                  <a
                    href={product.link}
                    className="bg-[#9FE870] text-black px-5 py-2 rounded-full font-bold"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-black/20">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-[#111827] p-12 text-center">
          <p className="uppercase tracking-[0.3em] text-[#9FE870] text-sm mb-4">
            Join The Club
          </p>

          <h2 className="text-5xl font-black mb-6">
            Get 10% Off Your First Order
          </h2>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/10 rounded-full px-6 py-5 text-white"
            />

            <button className="bg-[#9FE870] text-black px-10 py-5 rounded-full font-black">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 md:px-16 text-white/50">
        <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row gap-10">
          <div>
            <h4 className="text-[#9FE870] text-2xl font-black mb-4">
              SCOREDRAWART
            </h4>

            <p className="max-w-md">
              Premium football culture artwork inspired by iconic players and legendary moments.
            </p>
          </div>

          <div>
            © 2026 ScoreDrawArt
          </div>
        </div>
      </footer>
    </div>
  )
}
