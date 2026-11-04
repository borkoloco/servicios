import casoJuridico from './assets/caso-juridico.png';
import casoWeb from './assets/caso-web.png';

// Datos de contacto: los mismos que figuran en el CV.
export const CONTACT = {
  whatsapp: '5491154100845', // sin + ni espacios, para wa.me
  email: 'santiagobosca@gmail.com',
  linkedin: 'https://www.linkedin.com/in/santiago-boscan',
  portfolio: 'https://santiagobosca.vercel.app',
};

const INMO_IMAGE =
  'https://res.cloudinary.com/ddx1ikpma/image/upload/v1758547887/Captura_de_pantalla_2025-09-22_a_la_s_10.08.40_i1aghc.png';

// Todos los textos de la web, en castellano y en inglés.
// La estructura de los dos idiomas tiene que ser igual.
export const CONTENT = {
  es: {
    meta: {
      title: 'Santiago Bosca · Sistemas de gestión a medida',
      description:
        'Desarrollo sistemas de gestión a medida para pymes, estudios e inmobiliarias: tus planillas, vencimientos, documentos y cobros en un solo lugar.',
    },
    ui: {
      nav: { cases: 'Casos', ai: 'Inteligencia artificial', how: 'Cómo trabajo', faq: 'Preguntas', contact: 'Contacto' },
      letsTalk: 'Hablemos',
      whatsappCta: 'Escribime por WhatsApp',
      whatsappText: 'Hola Santiago, vi tu web y quería consultarte por un sistema para mi negocio.',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      mainNav: 'Principal',
      themeToDark: 'Cambiar a modo oscuro',
      themeToLight: 'Cambiar a modo claro',
      language: 'Idioma',
      before: 'Antes: ',
      portfolio: 'Portfolio técnico',
    },
    hero: {
      eyebrow: 'Sistemas de gestión a medida',
      title: 'Un sistema hecho para cómo trabaja tu negocio',
      text: 'Dejá atrás las planillas sueltas y los vencimientos anotados en papel. Diseño y programo sistemas para pymes, estudios e inmobiliarias: tus clientes, documentos, plazos y cobros en un solo lugar, desde la compu o el celular, y con inteligencia artificial donde de verdad te ahorra tiempo.',
      seeCases: 'Ver casos reales',
      caption: ['Santiago Bosca · Desarrollador full stack', 'Buenos Aires, Argentina'],
    },
    problems: {
      eyebrow: '¿Te pasa esto?',
      title: 'Lo que un buen sistema te saca de encima',
      items: [
        { icon: 'FileSpreadsheet', title: 'Planillas que nadie entiende', text: 'Datos repartidos en Excel, carpetas y cuadernos. Cada uno tiene su versión y nadie sabe cuál es la buena.' },
        { icon: 'AlarmClock', title: 'Vencimientos que se pasan', text: 'Plazos, cuotas o turnos que dependen de que alguien se acuerde. Cuando se pasa uno, cuesta caro.' },
        { icon: 'FileText', title: 'Documentos armados a mano', text: 'Contratos, escritos o formularios que se copian y pegan uno por uno, con el riesgo de errores.' },
        { icon: 'Wallet', title: 'Cobros difíciles de seguir', text: 'No está claro quién pagó, quién debe ni cuánto. Conciliar a fin de mes lleva horas.' },
      ],
    },
    cases: {
      eyebrow: 'Casos reales',
      title: 'Sistemas que hoy se usan todos los días',
      text: 'Los nombres de los clientes se reservan por confidencialidad. Si querés, te muestro cada sistema en una videollamada.',
      items: [
        {
          tag: 'Estudio jurídico',
          title: 'Gestión de expedientes para un estudio laboral y previsional',
          role: 'Desarrollador único · en uso todos los días',
          image: casoJuridico,
          imageAlt: 'Pantalla de inicio del sistema de gestión de expedientes',
          before: 'Los juicios se seguían en un Excel de 21 solapas y cada escrito se armaba a mano a partir de modelos de Word.',
          after: [
            'Los escritos, convenios, telegramas y formularios oficiales se generan en PDF con un clic, con los datos ya cargados.',
            'Los vencimientos avisan por la app, por correo y en Google Calendar.',
            'Cada abogado entra con su usuario y ve los cambios de los demás al instante.',
          ],
          stats: [
            { value: '844', label: 'juicios migrados del Excel' },
            { value: '71', label: 'modelos de documentos' },
            { value: '7', label: 'usuarios en el estudio' },
          ],
        },
        {
          tag: 'Inmobiliaria',
          title: 'Plataforma de gestión para una inmobiliaria',
          role: 'Desarrollador principal · en uso desde 2025',
          image: INMO_IMAGE,
          imageAlt: 'Panel de la plataforma de gestión inmobiliaria',
          before: 'Propiedades, contratos y cobros de alquileres en planillas, y las consultas de clientes perdidas entre WhatsApp y el correo.',
          after: [
            'Propiedades, propietarios e inquilinos en un solo lugar, con mapa de zonas.',
            'Contratos de alquiler con sus cuotas, pagos y aumentos calculados.',
            'Avisos por correo y WhatsApp, y publicaciones conectadas con Mercado Libre.',
          ],
          stats: [
            { value: '+1.000', label: 'cambios entregados' },
            { value: '3', label: 'roles con permisos distintos' },
          ],
        },
        {
          tag: 'Software para pymes',
          title: 'Sitio institucional para una empresa de software de gestión',
          role: 'Desarrollo del sitio y manual para el equipo',
          image: casoWeb,
          imageAlt: 'Página de inicio del sitio institucional',
          before: null,
          after: [
            'Un sitio en WordPress que el equipo edita solo, con plantillas para las notas del blog.',
            'Formularios de consulta numerados y una sección de búsquedas laborales.',
            'Un manual paso a paso para que el equipo lo mantenga sin ayuda.',
          ],
          stats: [
            { value: '293', label: 'notas con el mismo diseño' },
            { value: '1', label: 'manual de uso para el equipo' },
          ],
        },
      ],
      team: {
        title: 'También trabajo en equipo',
        text: 'Además de los proyectos que llevo solo, participé como desarrollador en plataformas más grandes: un CRM con tienda online y asistente por WhatsApp para una fábrica de muebles de México, y un marketplace para la industria del petróleo y el gas.',
      },
    },
    ai: {
      eyebrow: 'Inteligencia artificial',
      title: 'Inteligencia artificial que trabaja con tus datos',
      text: 'Sumo IA donde de verdad ahorra tiempo: conectada a la información de tu sistema, con límites claros y con una persona aprobando lo importante.',
      uses: [
        { icon: 'MessagesSquare', title: 'Preguntale a tu sistema', text: '"¿Qué vencimientos hay esta semana?" "¿Qué alquileres están atrasados?" Un asistente responde con tus datos y te lleva a cada ficha.' },
        { icon: 'MessageCircle', title: 'Atención por WhatsApp', text: 'Responde las consultas frecuentes a cualquier hora, toma los datos del cliente y te pasa la conversación cuando hace falta.' },
        { icon: 'ScanText', title: 'Lectura de documentos', text: 'Saca los datos de PDFs, fotos de DNI, recibos o facturas y los carga en el sistema para que solo tengas que revisarlos.' },
        { icon: 'PenLine', title: 'Borradores en segundos', text: 'Escritos, respuestas a clientes o descripciones de propiedades armados con los datos cargados, para revisar y enviar.' },
      ],
      experience: 'Ya integré IA en sistemas en producción: un asistente que consulta datos y ejecuta acciones dentro de una plataforma, pidiendo la aprobación de una persona para las acciones delicadas.',
      safeguards: [
        'Solo ve los datos que vos decidas.',
        'Las acciones importantes las confirma una persona.',
        'Usa servicios para empresas, que no entrenan sus modelos con tus datos.',
      ],
    },
    how: {
      eyebrow: 'Cómo trabajo',
      title: 'De la primera charla al sistema funcionando',
      steps: [
        { title: 'Charlamos', text: 'Me contás cómo trabajás hoy y qué te hace perder tiempo. La primera charla no tiene costo.' },
        { title: 'Propuesta cerrada', text: 'Te paso por escrito qué incluye, cuánto cuesta y en cuánto tiempo. Sin sorpresas después.' },
        { title: 'Desarrollo por etapas', text: 'Cada semana ves avances reales y los probás. Lo que no te sirve, se ajusta en el camino.' },
        { title: 'Puesta en marcha', text: 'Paso tus planillas al sistema, capacito a tu equipo y lo dejo andando con tus propias cuentas.' },
        { title: 'Soporte y mejoras', text: 'Si después necesitás cambios o funciones nuevas, seguimos trabajando juntos.' },
      ],
      benefits: [
        { icon: 'Handshake', title: 'Trabajás directo conmigo', text: 'Sin intermediarios ni agencias: hablás con quien diseña y programa tu sistema.' },
        { icon: 'KeyRound', title: 'Tus datos son tuyos', text: 'Los datos y las cuentas donde funciona el sistema quedan a nombre de tu negocio.' },
        { icon: 'DatabaseZap', title: 'Tus datos, migrados', text: 'Paso lo que hoy tenés en Excel o en otro sistema, para que no tengas que cargar nada de nuevo.' },
        { icon: 'Smartphone', title: 'Desde la compu o el celular', text: 'Funciona en el navegador. No hay que instalar nada.' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que suelen preguntarme',
      items: [
        { q: '¿Cuánto cuesta un sistema?', a: 'Depende de lo que necesites. Después de la primera charla te paso una propuesta con precio cerrado. Podés comprar el sistema con un pago único, o pagar una parte inicial y un abono mensual que incluye soporte y mejoras.' },
        { q: '¿Cuánto tarda?', a: 'Una primera versión que ya se puede usar suele estar en pocas semanas. Después se suman funciones por etapas, según lo que más te sirva.' },
        { q: '¿Qué pasa con mis planillas y datos actuales?', a: 'Los paso al sistema nuevo. En el estudio jurídico, por ejemplo, migré 844 juicios desde un Excel de 21 solapas, sin perder información.' },
        { q: '¿Mis datos están seguros?', a: 'Cada persona entra con su usuario y ve solo lo que le corresponde. Las contraseñas se guardan cifradas, y el sistema y los datos quedan en cuentas a nombre de tu negocio.' },
        { q: '¿La inteligencia artificial puede equivocarse?', a: 'Sí, por eso la diseño para consultar y proponer. Lo que se le envía a un cliente o lo que modifica datos importantes lo confirma siempre una persona.' },
        { q: '¿Y si después necesito cambios?', a: 'Podés contratar un abono de mantenimiento con horas incluidas, o pedir cada cambio cuando lo necesites.' },
      ],
    },
    contact: {
      title: 'Contame qué te hace perder tiempo',
      text: 'Dejame tu consulta y te respondo en menos de 24 horas hábiles. Si preferís, escribime por WhatsApp. La primera charla no tiene costo.',
      form: {
        name: 'Nombre',
        email: 'Correo',
        phone: 'Teléfono o WhatsApp',
        business: 'Negocio o rubro',
        businessPlaceholder: 'Ej.: estudio jurídico, inmobiliaria',
        service: '¿Qué necesitás?',
        services: [
          'Sistema de gestión a medida',
          'Inteligencia artificial para mi negocio',
          'Mejoras a un sistema que ya tengo',
          'Sitio web',
          'Otra consulta',
        ],
        message: 'Contame tu consulta',
        messagePlaceholder: 'Cómo trabajás hoy y qué te gustaría resolver.',
        submit: 'Enviar consulta',
        sending: 'Enviando…',
        errorRequired: 'Completá tu nombre y tu consulta.',
        errorEmail: 'Revisá el correo: no parece válido.',
        errorSend: 'No se pudo enviar. Probá de nuevo o escribime por WhatsApp.',
        sentTitle: '¡Gracias! Recibí tu consulta',
        sentText: 'Te respondo en menos de 24 horas hábiles.',
        sendAnother: 'Enviar otra consulta',
      },
    },
  },

  en: {
    meta: {
      title: 'Santiago Bosca · Custom business software',
      description:
        'I build custom management systems for small businesses, law firms and real estate agencies: your spreadsheets, deadlines, documents and payments in one place.',
    },
    ui: {
      nav: { cases: 'Case studies', ai: 'Artificial intelligence', how: 'How I work', faq: 'FAQ', contact: 'Contact' },
      letsTalk: "Let's talk",
      whatsappCta: 'Message me on WhatsApp',
      whatsappText: 'Hi Santiago, I saw your website and would like to ask about a system for my business.',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNav: 'Main',
      themeToDark: 'Switch to dark mode',
      themeToLight: 'Switch to light mode',
      language: 'Language',
      before: 'Before: ',
      portfolio: 'Technical portfolio',
    },
    hero: {
      eyebrow: 'Custom business software',
      title: 'Software built around the way your business works',
      text: 'Leave scattered spreadsheets and paper reminders behind. I design and build systems for small businesses, law firms and real estate agencies: your clients, documents, deadlines and payments in one place, on your computer or your phone, with artificial intelligence where it really saves you time.',
      seeCases: 'See real case studies',
      caption: ['Santiago Bosca · Full-stack developer', 'Buenos Aires, Argentina'],
    },
    problems: {
      eyebrow: 'Sound familiar?',
      title: 'What good software takes off your plate',
      items: [
        { icon: 'FileSpreadsheet', title: 'Spreadsheets nobody understands', text: 'Data spread across Excel files, folders and notebooks. Everyone has their own version and nobody knows which one is right.' },
        { icon: 'AlarmClock', title: 'Missed deadlines', text: 'Due dates, instalments or appointments that depend on someone remembering them. Missing one is expensive.' },
        { icon: 'FileText', title: 'Documents built by hand', text: 'Contracts, filings or forms copied and pasted one by one, with plenty of room for mistakes.' },
        { icon: 'Wallet', title: 'Payments that are hard to track', text: "It's not clear who paid, who owes or how much. Reconciling at the end of the month takes hours." },
      ],
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Systems in daily use today',
      text: 'Client names are kept confidential. If you like, I can walk you through each system on a video call.',
      items: [
        {
          tag: 'Law firm',
          title: 'Case management for an employment and social security law firm',
          role: 'Sole developer · used every day',
          image: casoJuridico,
          imageAlt: 'Home screen of the case management system',
          before: 'Lawsuits were tracked in a 21-tab Excel workbook, and every filing was put together by hand from Word templates.',
          after: [
            'Filings, fee agreements, telegrams and official forms are generated as PDFs in one click, with the data already filled in.',
            'Deadline reminders arrive in the app, by email and in Google Calendar.',
            'Each lawyer signs in with their own account and sees everyone’s changes instantly.',
          ],
          stats: [
            { value: '844', label: 'lawsuits migrated from Excel' },
            { value: '71', label: 'document templates' },
            { value: '7', label: 'users at the firm' },
          ],
        },
        {
          tag: 'Real estate',
          title: 'Management platform for a real estate agency',
          role: 'Lead developer · in use since 2025',
          image: INMO_IMAGE,
          imageAlt: 'Dashboard of the real estate management platform',
          before: 'Properties, contracts and rent collection lived in spreadsheets, and client inquiries got lost between WhatsApp and email.',
          after: [
            'Properties, owners and tenants in one place, with a map of areas.',
            'Rental contracts with their instalments, payments and calculated rent increases.',
            'Email and WhatsApp notifications, and listings connected to Mercado Libre.',
          ],
          stats: [
            { value: '1,000+', label: 'changes delivered' },
            { value: '3', label: 'roles with different permissions' },
          ],
        },
        {
          tag: 'SMB software',
          title: 'Corporate website for a business software company',
          role: 'Website development and a guide for the team',
          image: casoWeb,
          imageAlt: 'Home page of the corporate website',
          before: null,
          after: [
            'A WordPress site the team edits on their own, with templates for blog posts.',
            'Numbered contact forms and a careers section.',
            'A step-by-step guide so the team can maintain it without help.',
          ],
          stats: [
            { value: '293', label: 'posts sharing one design' },
            { value: '1', label: 'user guide for the team' },
          ],
        },
      ],
      team: {
        title: 'I also work in teams',
        text: 'Besides the projects I lead on my own, I have worked as a developer on larger platforms: a CRM with an online store and a WhatsApp assistant for a furniture manufacturer in Mexico, and a marketplace for the oil and gas industry.',
      },
    },
    ai: {
      eyebrow: 'Artificial intelligence',
      title: 'Artificial intelligence that works with your data',
      text: 'I add AI where it really saves time: connected to the information in your system, with clear limits and a person approving what matters.',
      uses: [
        { icon: 'MessagesSquare', title: 'Ask your system', text: '"Which deadlines are due this week?" "Which rents are overdue?" An assistant answers with your data and takes you to each record.' },
        { icon: 'MessageCircle', title: 'WhatsApp support', text: 'Answers frequent questions at any hour, collects the customer’s details and hands the conversation over to you when needed.' },
        { icon: 'ScanText', title: 'Document reading', text: 'Extracts data from PDFs, ID photos, receipts or invoices and enters it into the system, so you only need to review it.' },
        { icon: 'PenLine', title: 'Drafts in seconds', text: 'Filings, replies to customers or property descriptions written from the data on file, ready to review and send.' },
      ],
      experience: 'I have already integrated AI into production systems: an assistant that queries data and takes actions inside a platform, asking a person to approve sensitive actions.',
      safeguards: [
        'It only sees the data you decide.',
        'A person confirms the important actions.',
        'It uses business-grade services that don’t train their models on your data.',
      ],
    },
    how: {
      eyebrow: 'How I work',
      title: 'From the first conversation to a working system',
      steps: [
        { title: 'We talk', text: 'You tell me how you work today and what wastes your time. The first conversation is free.' },
        { title: 'Fixed proposal', text: 'I send you in writing what is included, what it costs and how long it takes. No surprises later.' },
        { title: 'Built in stages', text: 'Every week you see real progress and try it out. Anything that doesn’t work for you gets adjusted along the way.' },
        { title: 'Launch', text: 'I move your spreadsheets into the system, train your team and leave it running on your own accounts.' },
        { title: 'Support and improvements', text: 'If you later need changes or new features, we keep working together.' },
      ],
      benefits: [
        { icon: 'Handshake', title: 'You work directly with me', text: 'No middlemen or agencies: you talk to the person who designs and builds your system.' },
        { icon: 'KeyRound', title: 'Your data is yours', text: 'The data and the accounts the system runs on are in your business’s name.' },
        { icon: 'DatabaseZap', title: 'Your data, migrated', text: 'I move what you have today in Excel or another system, so you don’t have to enter anything again.' },
        { icon: 'Smartphone', title: 'On your computer or phone', text: 'It runs in the browser. Nothing to install.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions I often get',
      items: [
        { q: 'How much does a system cost?', a: 'It depends on what you need. After our first conversation I send you a fixed-price proposal. You can buy the system with a one-time payment, or pay an initial amount plus a monthly fee that includes support and improvements.' },
        { q: 'How long does it take?', a: 'A first usable version is usually ready within a few weeks. Then features are added in stages, based on what helps you most.' },
        { q: 'What happens to my current spreadsheets and data?', a: 'I move them into the new system. For the law firm, for example, I migrated 844 lawsuits from a 21-tab Excel workbook without losing any information.' },
        { q: 'Is my data secure?', a: 'Each person signs in with their own account and only sees what they should. Passwords are stored encrypted, and the system and data live in accounts in your business’s name.' },
        { q: 'Can artificial intelligence make mistakes?', a: 'Yes, which is why I design it to look things up and make suggestions. Anything sent to a customer, or any change to important data, is always confirmed by a person.' },
        { q: 'What if I need changes later?', a: 'You can sign up for a maintenance plan with hours included, or request each change when you need it.' },
      ],
    },
    contact: {
      title: 'Tell me what’s wasting your time',
      text: 'Send me your question and I’ll reply within one business day. If you prefer, message me on WhatsApp. The first conversation is free.',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone or WhatsApp',
        business: 'Business or industry',
        businessPlaceholder: 'E.g. law firm, real estate agency',
        service: 'What do you need?',
        services: [
          'Custom management system',
          'Artificial intelligence for my business',
          'Improvements to a system I already have',
          'Website',
          'Something else',
        ],
        message: 'Tell me about it',
        messagePlaceholder: 'How you work today and what you would like to solve.',
        submit: 'Send message',
        sending: 'Sending…',
        errorRequired: 'Please enter your name and your message.',
        errorEmail: 'Please check your email address.',
        errorSend: 'The message could not be sent. Please try again or message me on WhatsApp.',
        sentTitle: 'Thank you! I got your message',
        sentText: 'I’ll reply within one business day.',
        sendAnother: 'Send another message',
      },
    },
  },
};

export const whatsappUrl = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
