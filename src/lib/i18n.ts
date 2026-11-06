export type Lang = "en" | "es" | "pt";

const en = {
  nav: { services: "What we do", plans: "Plans", about: "About us", contact: "WhatsApp us" },
  tagline: "Build trust. Grow your business.",
  heroTitle: "Get more clients like your best ones.",
  heroSub: "We speak your language, we set it up, and we keep it running, so you can focus on the quality of your work.",
  heroCta: "Chat on WhatsApp",
  heroCta2: "See plans",
  gallery: ["Cleaners", "Doulas", "Contractors"],
  galleryNote: "Built for independent owners who are great at what they do.",
  hardTitle: "Growing alone is hard. It doesn't have to be.",
  hard: [
    ["The tools are in English", "We set everything up in your language — and give your clients theirs."],
    ["No time after work", "We handle your website, posts and messages while you're on the job."],
    ["Referrals don't screen clients", "A professional presence attracts the clients you actually want."],
    ["Asking for money is awkward", "Simple booking, automatic invoices and friendly reminders do it for you."],
  ],
  builtTitle: "What we build for you",
  built: [
    ["A professional website", "Clean, clear, and easy for clients to trust."],
    ["Simple booking", "Clients pick a time that works — no back-and-forth."],
    ["Invoices & reminders", "Get paid on time, automatically."],
    ["Set up and maintained", "Need a change? Just send us a message."],
  ],
  plansTitle: "Pick where you are",
  plans: [
    { name: "Start", sub: "Get found and hired", price: "$799", per: "one time", items: ["Name and logo", "Website with visuals", "T-shirt with logo", "Business cards", "Instagram (4 posts)", "Multi-language support"] },
    { name: "Grow", sub: "Grow confidently", price: "$189", per: "/month", items: ["Website maintenance", "Targeted ads", "Scheduling", "Messaging", "Payments", "Social media (4 posts/month)", "50 extra business cards", "Multi-language support"] },
    { name: "Maintain", sub: "Manage easily", price: "$159", per: "/month", items: ["Website maintenance", "Scheduling", "Messaging", "Payments", "Multi-language support"] },
  ],
  popular: "Most popular",
  aboutTitle: "Who we are",
  about: [
    "Nice to meet you, we are Marcel and Ana Clara, siblings who decided to build something together. We wanted to create a business that was simple, practical, and genuinely useful to other small businesses.",
    "Marcel brings more than twenty years of experience in digital marketing, production and web development, including roles at major agencies such as Ogilvy, FCB, and Dentsu.",
    "Ana Clara buys and remodels homes, working closely with contractors, electricians, landscapers, and other skilled tradespeople. She sees firsthand the care and expertise they bring to their work - and how often their online presence falls short. Her background in Human Resources, with experience at companies such as General Electric, Mercer, and Heineken, gives her a deep understanding of people, trust, and how they connect.",
  ],
  contactTitle: "Let's talk — in your language.",
  contactSub: "Send us a message on WhatsApp. We reply within one business day, in English, Spanish or Portuguese.",
  waMsg: "Hi pro.found! I'd like to learn more about growing my business.",
  rights: "All rights reserved",
};

type Dict = typeof en;

const es: Dict = {
  nav: { services: "Qué hacemos", plans: "Planes", about: "Nosotros", contact: "WhatsApp" },
  tagline: "Genera confianza. Haz crecer tu negocio.",
  heroTitle: "Consigue más clientes como los mejores que ya tienes.",
  heroSub: "Hablamos tu idioma, lo configuramos todo y lo mantenemos funcionando, para que te enfoques en la calidad de tu trabajo.",
  heroCta: "Escríbenos por WhatsApp",
  heroCta2: "Ver planes",
  gallery: ["Limpieza", "Doulas", "Contratistas"],
  galleryNote: "Hecho para dueños independientes que son excelentes en lo que hacen.",
  hardTitle: "Crecer solo es difícil. No tiene por qué serlo.",
  hard: [
    ["Las herramientas están en inglés", "Lo configuramos en tu idioma — y tus clientes reciben el suyo."],
    ["No hay tiempo después del trabajo", "Nos encargamos de tu web, publicaciones y mensajes mientras trabajas."],
    ["Las recomendaciones no filtran clientes", "Una presencia profesional atrae a los clientes que de verdad quieres."],
    ["Cobrar es incómodo", "Reservas simples, facturas automáticas y recordatorios amables lo hacen por ti."],
  ],
  builtTitle: "Lo que construimos para ti",
  built: [
    ["Un sitio web profesional", "Limpio, claro y que inspira confianza."],
    ["Reservas simples", "Tus clientes eligen un horario — sin ida y vuelta."],
    ["Facturas y recordatorios", "Cobra a tiempo, automáticamente."],
    ["Configurado y mantenido", "¿Necesitas un cambio? Solo envíanos un mensaje."],
  ],
  plansTitle: "Elige dónde estás",
  plans: [
    { name: "Empezar", sub: "Que te encuentren y contraten", price: "$799", per: "pago único", items: ["Nombre y logo", "Sitio web con imágenes", "Camiseta con logo", "Tarjetas de presentación", "Instagram (4 publicaciones)", "Soporte multilingüe"] },
    { name: "Crecer", sub: "Crece con confianza", price: "$189", per: "/mes", items: ["Mantenimiento web", "Anuncios dirigidos", "Agenda", "Mensajería", "Pagos", "Redes sociales (4 publicaciones/mes)", "50 tarjetas extra", "Soporte multilingüe"] },
    { name: "Mantener", sub: "Gestiona fácilmente", price: "$159", per: "/mes", items: ["Mantenimiento web", "Agenda", "Mensajería", "Pagos", "Soporte multilingüe"] },
  ],
  popular: "Más popular",
  aboutTitle: "Quiénes somos",
  about: [
    "Mucho gusto, somos Marcel y Ana Clara, hermanos que decidieron construir algo juntos. Queríamos crear un negocio simple, práctico y realmente útil para otros pequeños negocios.",
    "Marcel aporta más de veinte años de experiencia en marketing digital, producción y desarrollo web, incluyendo puestos en grandes agencias como Ogilvy, FCB y Dentsu.",
    "Ana Clara compra y remodela casas, trabajando de cerca con contratistas, electricistas, paisajistas y otros profesionales. Ve de primera mano el cuidado y la experiencia que ponen en su trabajo — y lo seguido que su presencia en línea se queda corta. Su experiencia en Recursos Humanos, en empresas como General Electric, Mercer y Heineken, le da una profunda comprensión de las personas, la confianza y cómo se conectan.",
  ],
  contactTitle: "Hablemos — en tu idioma.",
  contactSub: "Envíanos un mensaje por WhatsApp. Respondemos en un día hábil, en inglés, español o portugués.",
  waMsg: "¡Hola pro.found! Me gustaría saber más sobre cómo hacer crecer mi negocio.",
  rights: "Todos los derechos reservados",
};

const pt: Dict = {
  nav: { services: "O que fazemos", plans: "Planos", about: "Quem somos", contact: "WhatsApp" },
  tagline: "Gere confiança. Faça seu negócio crescer.",
  heroTitle: "Conquiste mais clientes como os seus melhores.",
  heroSub: "Falamos a sua língua, configuramos tudo e mantemos funcionando, para você focar na qualidade do seu trabalho.",
  heroCta: "Fale no WhatsApp",
  heroCta2: "Ver planos",
  gallery: ["Limpeza", "Doulas", "Empreiteiros"],
  galleryNote: "Feito para profissionais autônomos que são ótimos no que fazem.",
  hardTitle: "Crescer sozinho é difícil. Não precisa ser.",
  hard: [
    ["As ferramentas estão em inglês", "Configuramos tudo no seu idioma — e seus clientes recebem o deles."],
    ["Sem tempo depois do trabalho", "Cuidamos do seu site, posts e mensagens enquanto você trabalha."],
    ["Indicações não filtram clientes", "Uma presença profissional atrai os clientes que você realmente quer."],
    ["Cobrar é constrangedor", "Agendamento simples, faturas automáticas e lembretes gentis fazem isso por você."],
  ],
  builtTitle: "O que construímos para você",
  built: [
    ["Um site profissional", "Limpo, claro e fácil de confiar."],
    ["Agendamento simples", "Clientes escolhem o horário — sem vai e vem."],
    ["Faturas e lembretes", "Receba em dia, automaticamente."],
    ["Configurado e mantido", "Precisa mudar algo? É só mandar uma mensagem."],
  ],
  plansTitle: "Escolha onde você está",
  plans: [
    { name: "Começar", sub: "Seja encontrado e contratado", price: "$799", per: "pagamento único", items: ["Nome e logo", "Site com imagens", "Camiseta com logo", "Cartões de visita", "Instagram (4 posts)", "Suporte multilíngue"] },
    { name: "Crescer", sub: "Cresça com confiança", price: "$189", per: "/mês", items: ["Manutenção do site", "Anúncios direcionados", "Agendamento", "Mensagens", "Pagamentos", "Redes sociais (4 posts/mês)", "50 cartões extras", "Suporte multilíngue"] },
    { name: "Manter", sub: "Gerencie com facilidade", price: "$159", per: "/mês", items: ["Manutenção do site", "Agendamento", "Mensagens", "Pagamentos", "Suporte multilíngue"] },
  ],
  popular: "Mais popular",
  aboutTitle: "Quem somos",
  about: [
    "Muito prazer, somos Marcel e Ana Clara, irmãos que decidiram construir algo juntos. Queríamos criar um negócio simples, prático e realmente útil para outros pequenos negócios.",
    "Marcel traz mais de vinte anos de experiência em marketing digital, produção e desenvolvimento web, incluindo passagens por grandes agências como Ogilvy, FCB e Dentsu.",
    "Ana Clara compra e reforma casas, trabalhando de perto com empreiteiros, eletricistas, paisagistas e outros profissionais. Ela vê de perto o cuidado e a experiência que eles colocam no trabalho — e como a presença online deles muitas vezes deixa a desejar. Sua formação em Recursos Humanos, com experiência em empresas como General Electric, Mercer e Heineken, lhe dá uma compreensão profunda das pessoas, da confiança e de como elas se conectam.",
  ],
  contactTitle: "Vamos conversar — na sua língua.",
  contactSub: "Mande uma mensagem no WhatsApp. Respondemos em até um dia útil, em inglês, espanhol ou português.",
  waMsg: "Olá pro.found! Gostaria de saber mais sobre como fazer meu negócio crescer.",
  rights: "Todos os direitos reservados",
};

export const dict: Record<Lang, Dict> = { en, es, pt };
export const WHATSAPP_NUMBER = "14157069534";
