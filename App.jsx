import React, { useState } from "react";
import { CreditCard, Megaphone, Wrench, Calendar, Menu, X } from "lucide-react"; 
import { motion } from "framer-motion";
import "./styles.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Header / Navbar */}
      <header className="bg-green-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Plataforma Comunitaria - Los Robles</h1>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-4 text-sm md:text-base">
            <a href="#" className="hover:underline transition duration-200">Inicio</a>
            <a href="#" className="hover:underline transition duration-200">Gestión Financiera</a>
            <a href="#" className="hover:underline transition duration-200">Comunicación</a>
            <a href="#" className="hover:underline transition duration-200">Administración</a>
            <a href="#" className="hover:underline transition duration-200">Mantenimiento</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-center text-sm">
            <a href="#" className="block hover:underline">Inicio</a>
            <a href="#" className="block hover:underline">Gestión Financiera</a>
            <a href="#" className="block hover:underline">Comunicación</a>
            <a href="#" className="block hover:underline">Administración</a>
            <a href="#" className="block hover:underline">Mantenimiento</a>
          </div>
        )}
      </header>

      {/* User Info Section */}
      <section className="container mx-auto p-6">
        <motion.div 
          className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Bienvenido, Juan Pérez</h2>
          <p className="text-gray-600 mb-4">Dirección: Calle Robles #123, Casa 12</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div 
              className="card-option bg-green-100 hover:bg-green-200" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <CreditCard className="w-6 h-6 mb-2 text-green-800" />
              <h3 className="font-semibold text-lg mb-1">Pagar Cuota</h3>
              <p className="text-sm text-gray-700">Realiza el pago de tu cuota mensual</p>
            </motion.div>
            <motion.div className="card-option bg-yellow-100 hover:bg-yellow-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Megaphone className="w-6 h-6 mb-2 text-yellow-700" />
              <h3 className="font-semibold text-lg mb-1">Nuevo Aviso</h3>
              <p className="text-sm text-gray-700">Publica un anuncio a la comunidad</p>
            </motion.div>
            <motion.div className="card-option bg-red-100 hover:bg-red-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Wrench className="w-6 h-6 mb-2 text-red-700" />
              <h3 className="font-semibold text-lg mb-1">Reportar Mantenimiento</h3>
              <p className="text-sm text-gray-700">Solicita servicios de mantenimiento</p>
            </motion.div>
            <motion.div className="card-option bg-blue-100 hover:bg-blue-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Calendar className="w-6 h-6 mb-2 text-blue-700" />
              <h3 className="font-semibold text-lg mb-1">Próximos Eventos</h3>
              <p className="text-sm text-gray-700">Revisa el calendario comunitario</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Actividad Reciente */}
        <motion.div 
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Actividad Reciente</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Estatus de pago de cuota: <strong>Registrado</strong></li>
            <li>• Último anuncio publicado: <strong>Reunión vecinal el 15 de marzo</strong></li>
          </ul>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center p-4 mt-auto text-sm">
        © 2023 Plataforma Comunitaria residencial los robles - Todos los derechos reservados
      </footer>
    </div>
  );
}
