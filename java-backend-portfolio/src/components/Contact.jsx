import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const onSubmit = async (data) => {s
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      
      toast.success(t('contact.form.success'), {
        position: 'bottom-center',
        style: {
          background: '#4CAF50',
          color: '#fff',
        }
      });
      reset();
    } catch (error) {
      toast.error(t('contact.error'), {
        position: 'bottom-center',
        style: {
          background: '#F44336',
          color: '#fff',
        }
      });
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-gradient-to-br from-[#181818] via-[#1a102a] to-[#1a1a1a] dark:bg-gradient-to-br dark:from-black dark:via-[#2a183a] dark:to-[#181818] transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <Toaster />
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-700 dark:text-red-500">{t('contact.sectionTitle')}</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-300 text-lg">
            {t('contact.sectionSubtitle')}
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#18141f]/80 dark:bg-[#1a102a]/80 border-2 border-red-700 dark:border-purple-700 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-red-700 dark:text-purple-400">
                {t('contact.contactInfo.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-purple-900/40 rounded-full text-red-700 dark:text-purple-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 dark:text-gray-100">{t('contact.contactInfo.email')}</h4>
                    <a 
                      href="mailto:tuemail@ejemplo.com" 
                      className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-purple-300 transition-colors"
                    >
                      carloszuluagag7codinino@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-purple-900/40 rounded-full text-red-700 dark:text-purple-300">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 dark:text-gray-100">{t('contact.contactInfo.phone')}</h4>
                    <a 
                      href="tel:+57 3127878037" 
                      className="text-gray-300 dark:text-gray-300 hover:text-red-400 dark:hover:text-purple-300 transition-colors"
                    >
                      +57 3127878037
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 dark:bg-purple-900/40 rounded-full text-red-700 dark:text-purple-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 dark:text-gray-100">{t('contact.contactInfo.location')}</h4>
                    <p className="text-gray-300 dark:text-gray-300">Rionegro, Colombia</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-medium text-gray-200 dark:text-gray-100 mb-3">{t('contact.contactInfo.social')}</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/tu-usuario" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#23182e] dark:bg-[#2a183a] rounded-full text-gray-300 hover:bg-red-700/80 dark:hover:bg-purple-700/80 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/tu-perfil" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#23182e] dark:bg-[#2a183a] rounded-full text-gray-300 hover:bg-red-700/80 dark:hover:bg-purple-700/80 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#18141f]/80 dark:bg-[#1a102a]/80 border-2 border-red-700 dark:border-purple-700 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-red-700 dark:text-purple-400">
                {t('contact.form.title')}
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
                    {t('contact.form.name')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: t('contact.form.validation.nameRequired'),
                      minLength: {
                        value: 3,
                        message: t('contact.form.validation.nameMin')
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('contact.form.placeholders.name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                    {t('contact.form.email')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: t('contact.form.validation.emailRequired'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('contact.form.validation.emailInvalid')
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('contact.form.placeholders.email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">
                    {t('contact.form.subject')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { 
                      required: t('contact.form.validation.subjectRequired'),
                      minLength: {
                        value: 5,
                        message: t('contact.form.validation.subjectMin')
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                    {t('contact.form.message')} <span className="text-red-500">{t('contact.form.required')}</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { 
                      required: t('contact.form.validation.messageRequired'),
                      minLength: {
                        value: 10,
                        message: t('contact.form.validation.messageMin')
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder={t('contact.form.placeholders.message')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;