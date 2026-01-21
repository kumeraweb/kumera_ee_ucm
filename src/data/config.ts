export const CONTACT_INFO = {
  name: 'Ejecutiva autorizada',
  phone: '56942874934',
  // El mensaje que el CLIENTE verá escrito en su WhatsApp listo para enviar
  whatsappMessage:
    'Hola Erika, necesito cotizar un plan de rescate médico para mi familia. ¿Me puedes ayudar?',
  // El mensaje que se muestra en el botón flotante (llamado a la acción)
  ctaText: 'Hola, soy Erika. Cotiza aquí',
  email: 'contacto@rescatesmedicos.cl' // Opcional
}

// Generador de link de WhatsApp limpio
export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}

export const COVERAGE_AREAS = [
  'Región Metropolitana (Santiago)',
  'Región de Valparaíso (Viña del Mar, Valparaíso, Concón)'
]
