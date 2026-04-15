import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-prueba.png';

const navLinks = [
  { href: '#menu-section', label: 'Menú' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8">
      <div className="flex justify-between items-center w-full max-w-7xl px-4">

        {/* LOGO */}
        <motion.a
          href="/"
          className="z-50 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
        </motion.a>

        {/* BOTÓN HAMBURGUESA */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden z-50 text-brand-black p-2 focus:outline-none relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='relative block'
              >
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* MENU DESKTOP */}
        <motion.div
          className="hidden lg:flex items-center gap-12 relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <ul className="flex gap-10 items-center font-quicksand font-bold tracking-[0.2em] text-sm uppercase text-brand-black">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              >
                <a
                  href={link.href}
                  className="hover:text-brand-red transition-colors duration-300 block py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* MENU MÓVIL (Overlay) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-brand-white/95 backdrop-blur-md flex flex-col items-center justify-center lg:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className="flex flex-col gap-10 items-center font-quicksand font-bold tracking-[0.3em] text-xl uppercase text-brand-black">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    className='rel'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                  >
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="hover:text-brand-red transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}