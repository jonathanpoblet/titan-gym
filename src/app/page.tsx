'use client';

import { motion } from 'framer-motion';
import { LucideDumbbell, LucideClock, LucideUsers } from 'lucide-react';

export default function Home() {
  const benefits = [
    {
      title: 'Equipamiento de última generación',
      description: 'Contamos con las mejores máquinas y pesas para maximizar tu rendimiento.',
      icon: LucideDumbbell,
    },
    {
      title: 'Entrenadores expertos',
      description: 'Nuestro equipo de profesionales te guiará en cada paso de tu entrenamiento.',
      icon: LucideUsers,
    },
    {
      title: 'Horarios flexibles',
      description: 'Abierto 24/7 para que entrenes cuando quieras.',
      icon: LucideClock,
    },
  ];

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-start bg-[url('/banner.png')] bg-cover bg-right sm:bg-center">
        <div className='absolute inset-0 bg-black/30' />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='z-10 p-10 lg:p-20 max-w-lg'
        >
          <h1 className='text-7xl font-extrabold text-white drop-shadow-lg'>
            ¡UNITE A <span className='text-red-500'>TITAN GYM</span>!
          </h1>
          <p className='mt-6 text-2xl text-gray-200'>
            Entrena con el mejor equipo y alcanza tu máximo potencial.
          </p>
          <a
            href='https://wa.me/1130592731'
            className='mt-6 inline-block bg-red-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition-all'
          >
            UNIRSE
          </a>
        </motion.div>
      </div>

      {/* Beneficios */}
      <div className='py-16 px-8 text-center'>
        <h2 className='text-4xl font-bold text-red-500'>¿Por qué elegirnos?</h2>
        <div className='grid md:grid-cols-3 gap-10 mt-8'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-gray-900 p-6 rounded-xl shadow-lg'
            >
              <benefit.icon className='text-red-500 w-12 h-12 mx-auto mb-4' />
              <h3 className='text-2xl font-semibold'>{benefit.title}</h3>
              <p className='mt-2 text-gray-400'>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ubicación y Horarios */}

      {/* Instalaciones */}
      <div className='py-16 px-8 text-center bg-gray-900'>
        <h2 className='text-4xl font-bold text-red-500'>Nuestras Instalaciones</h2>
        <p className='mt-4 text-lg text-gray-300'>
          Equipamiento de última generación y espacios diseñados para tu comodidad.
        </p>
        <div className='grid md:grid-cols-3 gap-8 mt-8'>
          <img src='/interior.png' alt='Interior del gimnasio' className='rounded-lg shadow-lg' />
          <img src='/interior2.png' alt='Zona de pesas' className='rounded-lg shadow-lg' />
          <img src='/interior3.png' alt='Zona de cardio' className='rounded-lg shadow-lg' />
        </div>
      </div>

      {/* Planes y Precios */}
      <div className='py-16 px-8 text-center'>
        <h2 className='text-4xl font-bold text-red-500'>Planes y Servicios</h2>
        <p className='mt-4 text-lg text-gray-300'>
          Ofrecemos opciones flexibles para adaptarse a tus necesidades.
        </p>
        <div className='grid md:grid-cols-3 gap-8 mt-8'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-white'>Plan Básico</h3>
            <ul className='mt-4 text-gray-400'>
              <li>Acceso a todas las máquinas y pesas</li>
              <li>Zona de cardio</li>
              <li>Clases funcional</li>
              <li>Zona de pesas libre</li>
              <li>Acceso limitado a horarios</li>
            </ul>
            <a
              href='https://wa.me/1130592731'
              className='mt-6 inline-block bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all'
            >
              CONSULTAR
            </a>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-white'>Plan Premium</h3>
            <ul className='mt-4 text-gray-400'>
              <li>Todo lo del Plan Básico</li>
              <li>Clases grupales</li>
              <li>Asesoramiento personalizado</li>
              <li>Acceso preferencial a horarios</li>
              <li>Descuentos en productos</li>
            </ul>
            <a
              href='https://wa.me/1130592731'
              className='mt-6 inline-block bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all'
            >
              CONSULTAR
            </a>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-white'>Plan VIP</h3>
            <ul className='mt-4 text-gray-400'>
              <li>Todo lo del Plan Premium</li>
              <li>Acceso 24/7</li>
              <li>Entrenadores personales</li>
              <li>Acceso a áreas exclusivas</li>
              <li>Prioridad en clases y horarios</li>
            </ul>
            <a
              href='https://wa.me/1130592731'
              className='mt-6 inline-block bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all'
            >
              CONSULTAR
            </a>
          </div>
        </div>
      </div>

      {/* Ubicación y Horarios */}
      <div className='py-16 px-8 text-center bg-gray-900'>
        <h2 className='text-4xl font-bold text-red-500'>Ubicación y Horarios</h2>
        <p className='mt-4 text-lg text-gray-300'>
          ¡Visítanos y comienza tu camino hacia una vida más saludable!
        </p>
        <div className='mt-8'>
          <div className='flex justify-center gap-8'>
            {/* Ubicación */}
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-80'>
              <h3 className='text-2xl font-semibold text-white'>Dirección</h3>
              <p className='mt-2 text-gray-400'>
                Calle de la Esperanza 245, Parque Avellaneda, Buenos Aires, Argentina.
              </p>
            </div>
            {/* Horarios */}
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-80'>
              <h3 className='text-2xl font-semibold text-white'>Horarios</h3>
              <p className='mt-2 text-gray-400'>Lunes a Viernes: 6:00 AM - 10:00 PM</p>
              <p className='mt-2 text-gray-400'>Sábados: 8:00 AM - 6:00 PM</p>
              <p className='mt-2 text-gray-400'>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-16 bg-red-500 text-center'>
        <h2 className='text-4xl font-bold text-white'>Empieza hoy mismo</h2>
        <p className='mt-2 text-lg text-gray-100'>Transforma tu cuerpo y tu mente con nosotros.</p>

        <a
          href='https://wa.me/1130592731'
          className='mt-6 inline-block bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all'
        >
          ¡Inscribirme ahora!
        </a>
      </div>

      <div className='bg-gray-900 text-gray-200 py-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-lg'>&copy; {new Date().getFullYear()} Titan Gym.</p>
          <p className='mt-2 text-sm'>
            Powered by{' '}
            <a
              href='https://virtualdesigns.tech'
              target='_blank'
              rel='noopener noreferrer'
              className='text-red-500'
            >
              Virtual Designs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
