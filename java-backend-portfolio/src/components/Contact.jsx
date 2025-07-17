import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
// Las importaciones de react-icons/fa y react-hot-toast se manejan con SVGs en línea y asumiendo instalación npm
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast' // Asumiendo que react-hot-toast está instalado vía npm

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      // Reemplaza 'service_id', 'template_id', 'user_id' con tus credenciales reales de EmailJS
      await emailjs.send(
        'service_id', // Reemplaza con tu Service ID
        'template_id', // Reemplaza con tu Template ID
        data,
        'user_id' // Reemplaza con tu User ID
      )
      toast.success('Mensaje enviado correctamente!')
      reset()
    } catch (error) {
      toast.error('Error al enviar el mensaje')
      console.error(error)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            ¿Tienes un proyecto en mente? Contáctame y hablemos sobre cómo puedo ayudarte.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="lg:w-1/2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Información de contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300">
                  {/* FaEnvelope SVG */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7L256 357.1c4.7 3.6 11.3 3.6 16 0L502.3 190.8zM256 160L0 192 256 357.1 512 192 256 160z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Email</h4>
                  <a href="mailto:contacto@ejemplo.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    contacto@ejemplo.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300">
                  {/* FaPhone SVG */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.2-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 139.6-175.6 175.6L176 348.1c-6.7-8.3-18.2-11.1-28-6.9l-112 48C3.2 411.1-2.6 422.7 2.1 434.1l24 104C28.9 504.6 38.8 512 48 512c256.1 0 464-207.9 464-464 0-9.2-7.4-19.1-17.6-23.4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Teléfono</h4>
                  <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300">
                  {/* FaMapMarkerAlt SVG */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C272.953 379.37 384 278.43 384 192C384 86 298.056 0 192 0S0 86 0 192c0 86.43 111.047 187.37 211.732 309.67L192 512l-19.732-10.33zM192 256c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Ubicación</h4>
                  <p className="text-gray-600 dark:text-gray-300">Ciudad, País</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">Nombre</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Este campo es requerido' })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Expresión regular corregida
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Este campo es requerido' })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                />
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Este campo es requerido' })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
