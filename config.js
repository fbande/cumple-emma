// Configuración editable de la invitación. Cambiar acá números, textos y audio.
window.INVITACION = {
  nombre: "Emma",
  // Fecha del evento (hora Argentina, UTC-3)
  inicio: "2026-12-23T21:00:00-03:00",
  fechaTexto: "Miércoles 23 de Diciembre de 2026",
  horarioTexto: "21:00 a 05:00 hs.",
  lugar: {
    nombre: "Vivanco Eventos",
    direccion: "Gral. Bartolomé Mitre 74 - Tigre",
    mapa: "https://www.google.com/maps/search/?api=1&query=Vivanco+Eventos+General+Bartolome+Mitre+74+Tigre+Buenos+Aires"
  },
  dressCode: "Elegante",
  dressCodeEvitar: "Blanco, Beige y Bordó",
  alias: "emma.haller",
  // Música de fondo desde YouTube (se carga recién cuando se toca el play).
  // Vacío = el botón play no se muestra.
  musica: { youtube: "iOT_zuDHvVk", inicio: 4 },
  // Contactos de WhatsApp (formato internacional sin + ni espacios).
  // Con un solo contacto abre el chat directo; con varios muestra un selector.
  contactos: [
    { nombre: "Contacto", telefono: "5491138634147" }
  ],
  mensajes: {
    confirmar: "¡Hola! Confirmo mi asistencia a los 15 de Emma. Mi nombre es: ",
    cancion: "¡Hola! Quiero sugerir esta canción para la fiesta de Emma: "
  }
};
