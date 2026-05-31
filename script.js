/* ═══════════════════════════════════════════
   English Mastery · Saber 11 — script.js v2
═══════════════════════════════════════════ */

// ══════════════════════════════════════════
//  FLASHCARDS DATA
// ══════════════════════════════════════════

const FLASHCARDS = {
  easy: [
    { word:"Happy Birthday", tag:"Expresión social", translation:"¡Feliz Cumpleaños!", example:"Happy Birthday, Anna! We love you.", exampleEs:"¡Feliz cumpleaños, Ana! Te queremos." },
    { word:"We love you", tag:"Expresión social", translation:"Te amamos / Te queremos", example:"We love you so much, grandma!", exampleEs:"¡Te amamos muchísimo, abuelita!" },
    { word:"Congratulations!", tag:"Expresión social", translation:"¡Felicitaciones!", example:"I got the job! — Congratulations!", exampleEs:"¡Conseguí el trabajo! — ¡Felicitaciones!" },
    { word:"Excuse me", tag:"Cortesía", translation:"Disculpe / Perdón", example:"Excuse me, where is the bathroom?", exampleEs:"Disculpe, ¿dónde está el baño?" },
    { word:"It's ready", tag:"Expresión cotidiana", translation:"Está listo/a", example:"The dinner is ready. Come and eat!", exampleEs:"La cena está lista. ¡Ven a comer!" },
    { word:"Not bad", tag:"Expresión cotidiana", translation:"No está mal", example:"How are things in your job? — Not bad.", exampleEs:"¿Cómo van las cosas en tu trabajo? — No está mal." },
    { word:"Too long", tag:"Expresión cotidiana", translation:"Demasiado largo", example:"That movie was too long for me.", exampleEs:"Esa película fue demasiado larga para mí." },
    { word:"Come here", tag:"Mandato", translation:"Ven aquí / Ven acá", example:"Come here now! I need your help.", exampleEs:"¡Ven aquí ahora! Necesito tu ayuda." },
    { word:"Big bedrooms", tag:"Descripción", translation:"Habitaciones grandes", example:"The hotel has big bedrooms with TVs and WiFi.", exampleEs:"El hotel tiene habitaciones grandes con TV y WiFi." },
    { word:"Breakfast", tag:"Comidas", translation:"Desayuno", example:"Breakfast is served from 8:00 to 10:30 a.m.", exampleEs:"El desayuno se sirve de 8:00 a 10:30 a.m." },
    { word:"Lunch", tag:"Comidas", translation:"Almuerzo", example:"Lunch is from 12:00 to 2:30 p.m.", exampleEs:"El almuerzo es de 12:00 a 2:30 p.m." },
    { word:"Dinner", tag:"Comidas", translation:"Cena", example:"Dinner is from 7:00 to 10:30 p.m.", exampleEs:"La cena es de 7:00 a 10:30 p.m." },
    { word:"Piano lessons", tag:"Actividades", translation:"Clases de piano", example:"Piano lessons with Ms. Wilson, Room 11, today at 2:00 p.m.", exampleEs:"Clases de piano con la Sra. Wilson, Aula 11, hoy a las 2:00 p.m." },
    { word:"At school", tag:"Lugar", translation:"En la escuela / colegio", example:"We have piano lessons at school today.", exampleEs:"Hoy tenemos clases de piano en el colegio." },
    { word:"At a playground", tag:"Lugar", translation:"En un parque / patio de juegos", example:"The children are playing at a playground.", exampleEs:"Los niños están jugando en el parque." },
    { word:"At a mall", tag:"Lugar", translation:"En un centro comercial", example:"We can find a bookstore at a mall.", exampleEs:"Podemos encontrar una librería en un centro comercial." },
    { word:"At the beach", tag:"Lugar", translation:"En la playa", example:"Lucy tells her stories at the beach.", exampleEs:"Lucy cuenta sus historias en la playa." },
    { word:"At the zoo", tag:"Lugar", translation:"En el zoológico", example:"Don't feed the monkeys at the zoo!", exampleEs:"¡No alimentes a los monos en el zoológico!" },
    { word:"On a bus", tag:"Transporte", translation:"En un autobús / bus", example:"Don't talk on the phone on a bus.", exampleEs:"No hables por teléfono en el bus." },
    { word:"On a train", tag:"Transporte", translation:"En un tren", example:"Silence, please! We are on a train.", exampleEs:"¡Silencio, por favor! Estamos en un tren." },
    { word:"On a plane", tag:"Transporte", translation:"En un avión", example:"Turn off your phone on a plane.", exampleEs:"Apaga tu teléfono en un avión." },
    { word:"Silence, please!", tag:"Aviso / señal", translation:"¡Silencio, por favor!", example:"Silence, please! This is a library.", exampleEs:"¡Silencio, por favor! Esto es una biblioteca." },
    { word:"Don't feed the monkeys", tag:"Aviso / señal", translation:"No alimentes a los monos", example:"The sign at the zoo says: Don't feed the monkeys!", exampleEs:"El letrero en el zoológico dice: ¡No alimentes a los monos!" },
    { word:"Wrong way", tag:"Aviso / señal", translation:"Camino equivocado / Dirección prohibida", example:"The sign on the road says: Wrong way.", exampleEs:"El letrero en la carretera dice: Dirección prohibida." },
    { word:"Now showing", tag:"Cine", translation:"Ahora en cartelera", example:"Now showing: MADAGASCAR at our cinema!", exampleEs:"¡Ahora en cartelera: MADAGASCAR en nuestro cine!" },
    { word:"Chefs", tag:"Profesión", translation:"Cocineros / Chefs", example:"Chefs make fantastic food in restaurants.", exampleEs:"Los chefs preparan comida fantástica en los restaurantes." },
    { word:"Nurses", tag:"Profesión", translation:"Enfermeras / Enfermeros", example:"Nurses help you when you're sick.", exampleEs:"Las enfermeras te ayudan cuando estás enfermo." },
    { word:"Drivers", tag:"Profesión", translation:"Conductores / Choferes", example:"Drivers take you from one place to another.", exampleEs:"Los conductores te llevan de un lugar a otro." },
    { word:"Dentists", tag:"Profesión", translation:"Dentistas", example:"Dentists help you when your teeth hurt.", exampleEs:"Los dentistas te ayudan cuando te duelen los dientes." },
    { word:"Teachers", tag:"Profesión", translation:"Profesores / Maestros", example:"Teachers help you learn many new things.", exampleEs:"Los profesores te ayudan a aprender muchas cosas nuevas." },
    { word:"Painters", tag:"Profesión", translation:"Pintores / Artistas plásticos", example:"Famous painters show their art in museums.", exampleEs:"Los pintores famosos muestran su arte en museos." },
    { word:"Farmers", tag:"Profesión", translation:"Agricultores / Campesinos", example:"Farmers grow food for everyone.", exampleEs:"Los agricultores cultivan alimentos para todos." },
    { word:"Basketball", tag:"Deporte", translation:"Baloncesto / Básquetbol", example:"People who play basketball are usually very tall.", exampleEs:"Las personas que juegan baloncesto suelen ser muy altas." },
    { word:"Baseball", tag:"Deporte", translation:"Béisbol", example:"To play baseball, you hit the ball and run.", exampleEs:"Para jugar béisbol, golpeas la pelota y corres." },
    { word:"Skiing", tag:"Deporte", translation:"Esquí / Esquiar", example:"People do skiing on mountains with snow.", exampleEs:"La gente practica el esquí en montañas con nieve." },
    { word:"Swimming", tag:"Deporte", translation:"Natación / Nadar", example:"You can only do swimming in the water.", exampleEs:"Solo puedes nadar en el agua." },
    { word:"Dancing", tag:"Actividad", translation:"Bailar / Baile", example:"People do dancing at parties or in a disco.", exampleEs:"La gente baila en fiestas o en discotecas." },
    { word:"Handbags", tag:"Ropa / Accesorios", translation:"Bolsos / Carteras", example:"A woman carries her things in handbags.", exampleEs:"Una mujer lleva sus cosas en bolsos." },
    { word:"Scarf", tag:"Ropa / Accesorios", translation:"Bufanda", example:"With this scarf, your neck won't be cold.", exampleEs:"Con esta bufanda, tu cuello no se enfriará." },
    { word:"Glasses", tag:"Ropa / Accesorios", translation:"Gafas / Anteojos", example:"When people can't see well, they need glasses.", exampleEs:"Cuando las personas no ven bien, necesitan gafas." },
    { word:"Socks", tag:"Ropa / Accesorios", translation:"Medias / Calcetines", example:"These socks are for your feet.", exampleEs:"Estas medias son para tus pies." },
    { word:"Skirt", tag:"Ropa / Accesorios", translation:"Falda", example:"Many girls wear a skirt instead of trousers.", exampleEs:"Muchas chicas usan falda en lugar de pantalón." },
    { word:"Cinema / Movie theater", tag:"Lugar - Centro comercial", translation:"Cine / Teatro de películas", example:"A cinema is a place to see movies.", exampleEs:"Un cine es un lugar para ver películas." },
    { word:"Elevator", tag:"Lugar - Centro comercial", translation:"Elevador / Ascensor", example:"People get on an elevator to go to different floors.", exampleEs:"La gente sube al ascensor para ir a diferentes pisos." },
    { word:"Bookstore", tag:"Lugar - Centro comercial", translation:"Librería / Tienda de libros", example:"A bookstore is a shop to find things to read.", exampleEs:"Una librería es una tienda para encontrar cosas que leer." },
    { word:"Café", tag:"Lugar - Centro comercial", translation:"Cafetería / Café", example:"People buy a cup of coffee at a café.", exampleEs:"La gente compra una taza de café en una cafetería." },
    { word:"Playground (mall)", tag:"Lugar - Centro comercial", translation:"Zona de juegos", example:"A playground is a fun park for children to jump and run.", exampleEs:"Una zona de juegos es un parque divertido para que los niños salten y corran." },
  ],
  medium: [
    { word:"Ambulance", tag:"Salud", translation:"Ambulancia", example:"They found an ambulance and took me to the hospital.", exampleEs:"Encontraron una ambulancia y me llevaron al hospital." },
    { word:"Hospital", tag:"Salud", translation:"Hospital", example:"A group of fantastic nurses looked after me at the hospital.", exampleEs:"Un grupo de enfermeras fantásticas me atendió en el hospital." },
    { word:"Drugstore", tag:"Salud", translation:"Farmacia / Droguería", example:"I only had to go to the drugstore for a few days.", exampleEs:"Solo tuve que ir a la farmacia por unos pocos días." },
    { word:"Nurse", tag:"Profesión - Salud", translation:"Enfermera / Enfermero", example:"I always dreamed of being a nurse since I was a child.", exampleEs:"Siempre soñé con ser enfermera desde que era niña." },
    { word:"Career", tag:"Trabajo", translation:"Carrera / Trayectoria profesional", example:"Soon, I hope to be ready to start my career.", exampleEs:"Pronto, espero estar lista para comenzar mi carrera." },
    { word:"Occupation", tag:"Trabajo", translation:"Ocupación / Profesión", example:"Nursing is a wonderful occupation that helps people.", exampleEs:"La enfermería es una ocupación maravillosa que ayuda a las personas." },
    { word:"Encourage", tag:"Sentimientos", translation:"Animar / Motivar / Alentar", example:"This awesome time at the hospital encouraged me to become a nurse.", exampleEs:"Esta experiencia increíble en el hospital me animó a ser enfermera." },
    { word:"Brave", tag:"Cualidad personal", translation:"Valiente / Bravo", example:"Good nurses must be kind, brave, and patient.", exampleEs:"Las buenas enfermeras deben ser amables, valientes y pacientes." },
    { word:"Kind", tag:"Cualidad personal", translation:"Amable / Bondadoso", example:"She is kind with everyone, especially patients.", exampleEs:"Ella es amable con todos, especialmente con los pacientes." },
    { word:"Habits", tag:"Rutina", translation:"Hábitos", example:"I have been implementing new morning habits lately.", exampleEs:"Últimamente he estado implementando nuevos hábitos matutinos." },
    { word:"Postpone", tag:"Rutina", translation:"Posponer / Aplazar", example:"I postpone the alarm many times every morning.", exampleEs:"Pospongo la alarma muchas veces cada mañana." },
    { word:"To-do list", tag:"Rutina", translation:"Lista de tareas / pendientes", example:"I make a to-do list for the day every morning.", exampleEs:"Hago una lista de tareas para el día cada mañana." },
    { word:"Routine", tag:"Rutina", translation:"Rutina", example:"These are some essential actions of my morning routine.", exampleEs:"Estas son algunas acciones esenciales de mi rutina matutina." },
    { word:"Waking up", tag:"Rutina", translation:"Despertar(se) / Levantarse", example:"The most complicated part is the process of waking up.", exampleEs:"La parte más complicada es el proceso de despertarse." },
    { word:"Morning person", tag:"Rutina", translation:"Persona mañanera", example:"I am making an effort to become more of a morning person.", exampleEs:"Estoy haciendo un esfuerzo por volverme más mañanera." },
    { word:"Satisfying", tag:"Sentimientos", translation:"Satisfactorio / Gratificante", example:"There are few things more satisfying than crossing a task off your to-do list.", exampleEs:"Hay pocas cosas más gratificantes que tachar una tarea de tu lista." },
    { word:"Accurate", tag:"Adjetivo", translation:"Acertado / Preciso / Correcto", example:"My parents were right — that idea is indeed accurate.", exampleEs:"Mis padres tenían razón — esa idea es efectivamente correcta." },
    { word:"Objective", tag:"Meta", translation:"Objetivo / Meta", example:"You can set the simple objective of exercising your body each morning.", exampleEs:"Puedes fijar el simple objetivo de ejercitar tu cuerpo cada mañana." },
    { word:"Inventor", tag:"Profesión", translation:"Inventor", example:"Ivan Moscovich was a fantastic inventor of toys and games.", exampleEs:"Ivan Moscovich fue un fantástico inventor de juguetes y juegos." },
    { word:"Legend", tag:"Descripción", translation:"Leyenda / Figura legendaria", example:"He was a legend in the world of puzzles.", exampleEs:"Él era una leyenda en el mundo de los rompecabezas." },
    { word:"Puzzle", tag:"Objeto", translation:"Rompecabezas / Acertijo", example:"He designed more than 100 toys, games, and puzzles.", exampleEs:"Diseñó más de 100 juguetes, juegos y rompecabezas." },
    { word:"Prize", tag:"Logro", translation:"Premio / Galardón", example:"In 2020, he won an important prize from the US toy industry.", exampleEs:"En 2020, ganó un importante premio de la industria de juguetes de EE.UU." },
    { word:"Achievement", tag:"Logro", translation:"Logro / Hazaña", example:"Designing 100 toys was his greatest achievement.", exampleEs:"Diseñar 100 juguetes fue su mayor logro." },
    { word:"Ambition", tag:"Sentimiento", translation:"Ambición / Aspiración", example:"She had no ambition to be published — writing was just for herself.", exampleEs:"No tenía ambición de publicar — escribir era solo para ella misma." },
    { word:"Depressed", tag:"Estado emocional", translation:"Deprimido/a", example:"Kincaid declared that she was slightly depressed upon her arrival in the US.", exampleEs:"Kincaid declaró que estaba un poco deprimida a su llegada a EE.UU." },
    { word:"Pattern", tag:"Escritura", translation:"Patrón / Modelo / Estructura", example:"Kincaid built her reputation with the honest pattern of her writing.", exampleEs:"Kincaid construyó su reputación con el patrón honesto de su escritura." },
    { word:"Ancient", tag:"Adjetivo de tiempo", translation:"Antiguo / Ancestral", example:"Few subjects have been studied as carefully as coffee through ancient times.", exampleEs:"Pocos temas han sido estudiados tan cuidadosamente como el café a través de tiempos antiguos." },
    { word:"Caffeine", tag:"Ciencia", translation:"Cafeína", example:"Caffeine was first studied in the 1800s by Ferdinand Runge.", exampleEs:"La cafeína fue estudiada por primera vez en los años 1800 por Ferdinand Runge." },
    { word:"Component", tag:"Ciencia", translation:"Componente / Ingrediente", example:"The most important component of coffee is caffeine.", exampleEs:"El componente más importante del café es la cafeína." },
    { word:"Benefits", tag:"Ciencia / Salud", translation:"Beneficios / Ventajas", example:"Coffee has lots of benefits for your health.", exampleEs:"El café tiene muchos beneficios para tu salud." },
    { word:"Reduce", tag:"Ciencia / Salud", translation:"Reducir / Disminuir", example:"Coffee can reduce headaches and blood problems.", exampleEs:"El café puede reducir los dolores de cabeza y los problemas de presión." },
  ],
  hard: [
    { word:"Passionate Falsehoods", tag:"Literatura", translation:"Falsedades apasionadas (título de obra)", example:"In Passionate Falsehoods, Salter tells the story of his life in film.", exampleEs:"En Falsedades Apasionadas, Salter cuenta la historia de su vida en el cine." },
    { word:"Adapted from", tag:"Literatura / Cine", translation:"Adaptado de / Basado en", example:"Passionate Falsehoods was adapted from Salter's book Burning the Days.", exampleEs:"Falsedades Apasionadas fue adaptada del libro de Salter." },
    { word:"Abandoned", tag:"Verbo - Literatura", translation:"Abandonó / Dejó", example:"He abandoned the military profession in 1957.", exampleEs:"Abandonó la profesión militar en 1957." },
    { word:"Explored", tag:"Verbo", translation:"Exploró / Recorrió", example:"He explored the city with Robert Redford and enjoyed being famous.", exampleEs:"Exploró la ciudad con Robert Redford y disfrutó ser famoso." },
    { word:"Attractive", tag:"Adjetivo", translation:"Atractivo / Llamativo", example:"His story still makes for attractive reading.", exampleEs:"Su historia todavía resulta en una lectura atractiva." },
    { word:"Entrance", tag:"Sustantivo", translation:"Entrada / Acceso", example:"There was money and entrance into rooms with fascinating stories.", exampleEs:"Había dinero y acceso a habitaciones con historias fascinantes." },
    { word:"Infer", tag:"Lectura", translation:"Inferir / Deducir", example:"We can infer from the text that Mark enjoys fast food sometimes.", exampleEs:"Podemos inferir del texto que a Mark le gusta la comida rápida algunas veces." },
    { word:"Popular medicine", tag:"Ciencia / Historia", translation:"Medicina popular / Remedio popular", example:"Coffee became a popular medicine in Europe in the 1600s.", exampleEs:"El café se convirtió en una medicina popular en Europa en los años 1600." },
    { word:"Blood problems", tag:"Salud", translation:"Problemas de presión / circulación", example:"Coffee can also reduce blood problems.", exampleEs:"El café también puede reducir los problemas de circulación." },
    { word:"Considered", tag:"Adjetivo / Literatura", translation:"Considerado / Reconocido como", example:"Jamaica Kincaid is considered one of the most talented Caribbean novelists.", exampleEs:"Jamaica Kincaid es considerada una de las novelistas caribeñas más talentosas." },
    { word:"Novelist", tag:"Profesión / Literatura", translation:"Novelista / Escritor de novelas", example:"James Salter was best known as a novelist.", exampleEs:"James Salter era conocido principalmente como novelista." },
    { word:"Brought up", tag:"Expresión idiomática", translation:"Criado / Educado (en un hogar)", example:"She was brought up in a poor background in Antigua.", exampleEs:"Fue criada en un ambiente pobre en Antigua." },
    { word:"Reputation", tag:"Concepto", translation:"Reputación / Fama / Nombre", example:"Kincaid built her reputation with the honest pattern of her writing.", exampleEs:"Kincaid construyó su reputación con el patrón honesto de su escritura." },
    { word:"Although", tag:"Conector lógico", translation:"Aunque / A pesar de que", example:"Although it wasn't her goal, she became a recognized author.", exampleEs:"Aunque no era su meta, se convirtió en una autora reconocida." },
    { word:"Unless", tag:"Conector lógico", translation:"A menos que / Excepto que", example:"Unless she practiced every day, she would not improve.", exampleEs:"A menos que practicara todos los días, no mejoraría." },
    { word:"Wasting his time", tag:"Expresión idiomática", translation:"Perdiendo el tiempo / Malgastando el tiempo", example:"Salter thought he was wasting his time making films.", exampleEs:"Salter pensaba que estaba perdiendo el tiempo haciendo películas." },
    { word:"In the same boat", tag:"Expresión idiomática", translation:"En la misma situación / Con el mismo problema", example:"I'm sure there are lots of people who are in the same boat as me.", exampleEs:"Estoy segura de que hay muchas personas en la misma situación que yo." },
    { word:"Collection of essays", tag:"Literatura", translation:"Colección de ensayos", example:"Her recent collection of essays 'My Garden' is also powerful.", exampleEs:"Su reciente colección de ensayos 'Mi Jardín' también es poderosa." },
    { word:"Declared", tag:"Verbo - Literatura", translation:"Declaró / Afirmó", example:"Kincaid declared that she was depressed upon her arrival in the US.", exampleEs:"Kincaid declaró que estaba deprimida a su llegada a EE.UU." },
    { word:"Resilient", tag:"Cualidad", translation:"Resiliente / Resistente", example:"Good nurses must be resilient and face challenges with courage.", exampleEs:"Las buenas enfermeras deben ser resilientes y enfrentar desafíos con valentía." },
    { word:"Deal with", tag:"Phrasal verb", translation:"Tratar de / Ser sobre / Manejar", example:"Her texts often deal with relationships between mothers and daughters.", exampleEs:"Sus textos a menudo tratan sobre las relaciones entre madres e hijas." },
  ]
};


// ══════════════════════════════════════════
//  READING TEXTS
// ══════════════════════════════════════════

const READING_TEXTS = [
  {
    id:"nurse", level:"medium",
    meta:"Parte 5 — Comprensión de Lectura Literal",
    title:"I'll Be a Nurse",
    body:`I'm Alexa Smith and I've done lots of things, but I always dreamed of being a nurse. Nurses should be quite kind, brave, and really nice with people. They must be careful with everything around them. I'm like this, so I will be able to be the best nurse when I finish my studies and in a short time I will earn money by doing something I like!

My wish to become a nurse comes from an experience as a teenager. When I was going to visit a friend, who I met through Facebook, I got sick at the airport. Thank God, they found an ambulance and took me to the hospital. A group of fantastic nurses looked after me and I soon got better. Then, I only had to go to the drugstore for a few days. This awesome time at the hospital encouraged me to become a nurse.

At university, we study hospital vocabulary, lots of health subjects and practice at local hospitals. My classmates and I can easily see how nurses help people feel less pain. These people are always glad and thanking them for their excellent job. Nurses work all the time and spend, even their free time, learning how to improve people's lives. Soon, I hope to be ready to start my career in this wonderful occupation.`,
    questions:[
      { q:"94. It's good if a nurse is _____.", options:["A. excited","B. attractive","C. friendly"], answer:2,
        explanation:"El texto dice que las enfermeras deben ser 'kind, brave, and really nice with people' = friendly (amable/agradable).",
        correctEs:"C. friendly = amable y agradable con las personas" },
      { q:"95. Alexa thinks that soon she will be _____.", options:["A. working at a hospital","B. going to the airport","C. feeling better"], answer:0,
        explanation:"Alexa dice: 'Soon, I hope to be ready to start my career in this wonderful occupation.' Su carrera es enfermería, en hospitales.",
        correctEs:"A. working at a hospital = trabajando en un hospital" },
      { q:"96. At the airport, Alexa _____.", options:["A. suddenly felt ill","B. had a terrible accident","C. took the wrong medicine"], answer:0,
        explanation:"El texto dice directamente: 'I got sick at the airport.' = de repente se sintió enferma.",
        correctEs:"A. suddenly felt ill = de repente se sintió enferma" },
      { q:"97. In Alexa's opinion, the nurses who helped her were _____.", options:["A. interesting","B. amazing","C. lucky"], answer:1,
        explanation:"El texto dice: 'A group of fantastic nurses looked after me.' 'Fantastic' equivale a 'amazing' (increíble/fantástica).",
        correctEs:"B. amazing = increíbles, fantásticas" },
      { q:"98. Once Alexa felt healthy again, she _____.", options:["A. posted it online","B. flew back home","C. decided her future"], answer:2,
        explanation:"La experiencia 'encouraged her to become a nurse' = la animó a ser enfermera. Decidió su futuro profesional.",
        correctEs:"C. decided her future = decidió su futuro (ser enfermera)" },
      { q:"99. While studying, Alexa and her friends have _____.", options:["A. seen how patients like nurses","B. lived at a hospital","C. shared their spare time"], answer:0,
        explanation:"El texto dice: 'My classmates and I can easily see how nurses help people feel less pain.'",
        correctEs:"A. seen how patients like nurses = visto cómo los pacientes aprecian a las enfermeras" },
      { q:"100. Alexa can't wait for the moment to _____.", options:["A. become an assistant","B. begin working","C. have some rest"], answer:1,
        explanation:"'Soon, I hope to be ready to start my career' = quiere comenzar a trabajar pronto.",
        correctEs:"B. begin working = comenzar a trabajar" },
    ]
  },
  {
    id:"habits", level:"medium",
    meta:"Parte 6 — Comprensión de Lectura Inferencial",
    title:"Habits To Take Advantage of My Mornings",
    body:`I have to be honest here: I dislike mornings. In fact, for me, the most complicated part about the morning is the process of waking up. I postpone the alarm many times, and it is a habit that I am definitely trying to give up. I am making an effort to become more of a morning person, and I'm totally sure there are lots of people who are in the same boat as me. So, these are some essential actions I've been implementing lately.

As much as I hate to admit that my parents and teachers were right, the idea of "breakfast is the most important meal of the day" might indeed be accurate. So, I eat a real breakfast. A few of my personal favorites are yoghurt with peanut butter and banana or salmon toast with an egg.

Writing and organizing responsibilities for the day has helped me to make sure that I don't miss anything. I make a to-do list for the day and, in my opinion, there are few things more satisfying than completing an activity and getting to cross it out of your to-do list.

Some people enjoy working out in the mornings, but I've identified I don't have the energy to work out early in the morning. If you feel like, instead of forcing the energy to do workouts that don't benefit you, you can set the simple objective of exercising your body in some way each morning. I consider some great options for this are a brief yoga session, or a little walk around the block.`,
    questions:[
      { q:"101. What's the writer doing in this text?", options:["A. Refusing healthy morning routines","B. Arranging the morning routine of other people","C. Describing how she deals with her morning routine","D. Arguing against her present routine"], answer:2,
        explanation:"La escritora describe su propia rutina matutina y los hábitos que está implementando, sin rechazar ni discutir contra ella.",
        correctEs:"C. Describing how she deals with her morning routine = describiendo cómo maneja su rutina matutina" },
      { q:"102. What does 'in the same boat as me' mean?", options:["A. People who experience the same issues in the morning","B. People who have the same ambition she does","C. People who want to quit a bad technique","D. People who gain experience from waking up early"], answer:0,
        explanation:"'In the same boat' es un idioma que significa estar en la misma situación. Se refiere a personas que también tienen dificultades por las mañanas.",
        correctEs:"A. People who experience the same issues = personas en la misma situación" },
      { q:"103. In paragraph 2, what does the writer say about breakfast?", options:["A. It is frequently shared with others","B. It is made of a fantastic type of food","C. It is very important to start the day with it","D. It is as necessary as other meals"], answer:2,
        explanation:"La frase clave: 'breakfast is the most important meal of the day might indeed be accurate.' El desayuno es muy importante.",
        correctEs:"C. It is very important to start the day with it = es muy importante para comenzar el día" },
      { q:"104. Paragraph 4 could be summarized with the title:", options:["A. Fitness routine warnings","B. Get your body moving","C. Go to the gym every day","D. Benefit from working outside"], answer:1,
        explanation:"El párrafo 4 habla de opciones para mover el cuerpo (yoga, caminata) sin forzarse. 'Get your body moving' resume mejor la idea.",
        correctEs:"B. Get your body moving = Mueve tu cuerpo (de alguna manera cada mañana)" },
      { q:"105. The perfect new routine for the writer would be:", options:["A. 8am: postpone alarm / 9am: exercise / 10am: breakfast","B. 8am: have breakfast / 9am: complete activities / 10am: exercise","C. 8am: exercise / 9am: have breakfast / 10am: do yoga","D. 8am: have breakfast / 9am: plan the day / 10am: exercise"], answer:3,
        explanation:"Según el texto: primero desayuno (lo más importante), luego lista de pendientes (planear el día), luego ejercicio suave.",
        correctEs:"D. breakfast → plan the day → exercise = desayuno, planear día, hacer ejercicio" },
    ]
  },
  {
    id:"salter", level:"hard",
    meta:"Parte 5 — Comprensión de Lectura Literal",
    title:"James Salter's Days in Film",
    body:`James Salter was a pilot in the United States Air Force. He abandoned the military profession in 1957 after the publication of his first novel, The Hunters. He is best known as a novelist, but during the sixties and seventies, he worked in film making. Salter made documentaries, wrote texts for films, and even was the director of a film called Three, starring Charlotte Rampling and Sam Waterston.

In Passionate Falsehoods, which was adapted from Salter's book Burning the Days, published in The New Yorker in 1997, Salter tells the story of his life in film. Salter's time in the film world is both good and bad. In Rome, he met directors and stars. In New York, he explored the city with Robert Redford and enjoyed being famous. Deborah Treisman and Michael Agger have talked about Salter. Nick Paumgarten in The Last Book, describes Salter's opinion about his film career:

"Of sixteen texts for movies, only four were popular. There was money, attractive women, and entrance into rooms where there were stories more for the dinner table than for the page." Salter thought he was wasting his time.

Perhaps he wasted his time in a larger artistic way, but it still makes for attractive reading. The Last Book is available to everyone in online stores.`,
    questions:[
      { q:"17. James Salter played an important part in the making of movies from:", options:["A. 1960 to 1979","B. 1960 to 1970","C. 1960 to 1985"], answer:0,
        explanation:"El texto dice 'during the sixties and seventies' = durante los años 60 y 70 = de 1960 a 1979.",
        correctEs:"A. 1960 to 1979 = los años 60 y 70 (sixties and seventies)" },
      { q:"18. Passionate Falsehoods is:", options:["A. a newspaper","B. a play","C. a movie"], answer:2,
        explanation:"Fue 'adapted from Salter's book' = adaptado de su libro para convertirse en película (movie).",
        correctEs:"C. a movie = una película (adaptada de su libro)" },
      { q:"19. Salter had nice and difficult times in his:", options:["A. acting years","B. big screen work","C. visit to one city"], answer:1,
        explanation:"'Salter's time in the film world is both good and bad' = su trabajo en el cine (pantalla grande) fue bueno y malo.",
        correctEs:"B. big screen work = trabajo en el cine / pantalla grande" },
      { q:"20. The Last Book was written by:", options:["A. James Salter","B. Deborah Treisman","C. Nick Paumgarten"], answer:2,
        explanation:"El texto dice: 'Nick Paumgarten in The Last Book, describes Salter's opinion' = Nick Paumgarten escribió The Last Book.",
        correctEs:"C. Nick Paumgarten = escribió The Last Book sobre la opinión de Salter" },
      { q:"21. James Salter thinks that his work in the cinema business was:", options:["A. not useful","B. not hard","C. not usual"], answer:0,
        explanation:"Salter dijo que 'he was wasting his time' = estaba perdiendo el tiempo. Sentía que el trabajo no era útil.",
        correctEs:"A. not useful = no fue útil / estaba perdiendo el tiempo" },
      { q:"22. Reading about James Salter's years in the cinema could be:", options:["A. clever enough","B. just fair","C. quite interesting"], answer:2,
        explanation:"El texto dice: 'it still makes for attractive reading' = sigue siendo una lectura atractiva/interesante.",
        correctEs:"C. quite interesting = bastante interesante (attractive reading)" },
      { q:"23. The Last Book can be found:", options:["A. in museums","B. at a café","C. on the web"], answer:2,
        explanation:"El texto termina: 'The Last Book is available to everyone in online stores' = disponible en tiendas en línea = en la web.",
        correctEs:"C. on the web = en internet (disponible en online stores)" },
    ]
  },
  {
    id:"kincaid", level:"hard",
    meta:"Parte 7 — Conocimiento Gramatical y Lexical",
    title:"Jamaica Kincaid",
    body:`Jamaica Kincaid is one of the most talented Caribbean novelists of all time. Born in Antigua in 1949, she was brought up in a poor background. When she was 17, she moved to New York. There she worked in different jobs; however, she soon went on to become a well-known writer.

Kincaid declared that she was slightly depressed upon her arrival in the US, and that, by then, she had begun writing to save herself. She added that she didn't have any ambition to be published. Although it wasn't her goal to be a recognized author, this quickly became her reality.

Kincaid built her reputation with the honest pattern of her writing. Her texts often deal with the relationships that are developed between mothers and daughters, like in her first poem, "Girl". Her recent collection of essays "My Garden" is also powerful, yet less bitter than her previous works.`,
    questions:[
      { q:"106. She was brought ___ in a poor background.", options:["A. split","B. kept","C. up","D. filled"], answer:2,
        explanation:"'Brought up' es el phrasal verb que significa 'criado/educado'. Es la expresión correcta para el hogar donde alguien creció.",
        correctEs:"C. up → 'brought up' = criada / educada en un hogar pobre" },
      { q:"107. She soon went ___ to become a well-known writer.", options:["A. for","B. on","C. together","D. with"], answer:1,
        explanation:"'Went on to become' significa 'pasó a convertirse en'. Es un phrasal verb de progresión.",
        correctEs:"B. on → 'went on to become' = pasó a convertirse en escritora famosa" },
      { q:"108. She was ___ depressed upon her arrival in the US.", options:["A. slightly","B. shortly","C. party","D. approximately"], answer:0,
        explanation:"'Slightly' significa 'ligeramente / un poco'. El contexto dice que estaba un poco deprimida al llegar.",
        correctEs:"A. slightly = ligeramente / un poco deprimida" },
      { q:"109. She had ___ writing to save herself. (Choose the correct form)", options:["A. begin","B. begun","C. beginning","D. begins"], answer:1,
        explanation:"Past Perfect = had + past participle. 'Begun' es el participio de 'begin'. 'Had begun' = había comenzado.",
        correctEs:"B. begun → 'had begun' = había comenzado (Past Perfect)" },
      { q:"110. She didn't have any ___ to be published.", options:["A. reward","B. ambition","C. have","D. achievement"], answer:1,
        explanation:"'Ambition' significa ambición/deseo de lograr algo. No quería publicar = no tenía ambición de ser publicada.",
        correctEs:"B. ambition = ambición / deseo de publicar" },
      { q:"111. ___ it wasn't her goal, she became a recognized author.", options:["A. Unless","B. Since","C. Although","D. Whenever"], answer:2,
        explanation:"'Although' (aunque) introduce una concesión/contraste. Aunque no era su meta, se volvió autora reconocida.",
        correctEs:"C. Although = aunque (introduce contraste entre dos ideas)" },
      { q:"112. Her texts often ___ with relationships between mothers and daughters.", options:["A. pattern","B. deal","C. design","D. style"], answer:1,
        explanation:"'Deal with' significa 'tratar de / ser sobre'. Sus textos TRATAN SOBRE las relaciones madre-hija.",
        correctEs:"B. deal → 'deal with' = tratar sobre (el tema de las relaciones madre-hija)" },
    ]
  },
  {
    id:"pizza", level:"hard",
    meta:"Parte 6 — Comprensión de Lectura Inferencial",
    title:"Swift Pizza and Sandwich House — Customer Review",
    body:`Today we have the pleasure of showing you the best letter written by our customer Mark. He wins £25 for writing about us this week. He is so happy with the orders at Swift Pizza and Sandwich House that he wants to declare a holiday to celebrate his experience here: "Happy burgerday and Merry Sandwichmas to everyone!" he wrote.

Wednesday May 18, 2011.

One typical day I was too tired after working all day long to cook for myself, and I was very hungry. I really wanted something to eat, so I decided to find a burger.

I ordered a half-pound burger and a lamb and chicken sandwich. I also made some special orders for extra cheese and vegetables. Food arrived very fast (less than twenty minutes) and was hot and fresh. The burger was delicious, and left me wanting more — fortunately I had the sandwich left. It felt as if it had been cut just a minute before I opened it — juicy, fresh, and great.

Every single special request I made was completely satisfied, 100%100%. And the best thing was that all of the above and some drinks cost me ONLY 10 dollars! If that doesn't say value for money, I don't know what does.

It certainly feels great to find new excellent food delivery companies for whenever you don't feel like cooking yourself. I recently had a sad experience with my usual take away restaurant, so I decided to change to something else — and on my first try I got what I wanted! Order now from Swift Pizza and Sandwich House. (Mark)`,
    questions:[
      { q:"24. According to the text, the customer:", options:["A. left a £25 tip to the waiters who work there","B. celebrated Christmas and New Year at this restaurant","C. found this great restaurant after many attempts","D. posted an excellent review about this restaurant"], answer:3,
        explanation:"Mark 'wins £25 for writing about us this week' = ganó un premio por escribir una reseña del restaurante.",
        correctEs:"D. posted an excellent review = publicó una excelente reseña del restaurante" },
      { q:"25. It can be inferred from the text that Mark:", options:["A. does not like cooking food for himself","B. almost always eats hamburgers","C. enjoys eating fast food sometimes","D. is tired of going to restaurants"], answer:2,
        explanation:"Mark menciona una 'sad experience with my usual take away restaurant' pero sigue usando delivery. Infiere que le gusta la comida rápida algunas veces.",
        correctEs:"C. enjoys eating fast food sometimes = disfruta la comida rápida algunas veces" },
    ]
  },
  {
    id:"picasso", level:"hard",
    meta:"Parte 4 — Conocimiento Gramatical (Fill in the gaps)",
    title:"A Picasso Painting",
    body:`A work of art by Picasso was sold after spending 50 years in a closet. The painting shows a dancing group that was famous during the 1910s. Picasso painted it in 1919, when he traveled to London with the ballet group. The ballet was seen for the first time on July 22nd of that same year.

The price of the picture was $150,000, plus 24% for the person that cleaned the painting. This was not the highest price paid for a Picasso.

The painting was found when a family bought a house that belonged to an old woman who collected art. They found other beautiful paintings with this one. People couldn't believe the old woman put these paintings in that closet 50 years ago.`,
    questions:[
      { q:"86. 'The painting shows a dancing group that was famous ___ the 1910s.'", options:["A. across","B. at","C. during"], answer:2,
        explanation:"'During' se usa con períodos de tiempo (durante los años 10, durante el verano). 'During the 1910s' = durante los años 1910.",
        correctEs:"C. during = durante (usado con períodos de tiempo)" },
      { q:"87. 'The ballet was ___ for the first time on July 22nd.'", options:["A. see","B. seen","C. seeing"], answer:1,
        explanation:"Voz pasiva: 'was seen' (fue presentado/visto). Past Passive = was/were + past participle.",
        correctEs:"B. seen → 'was seen' = fue visto/presentado (voz pasiva pasada)" },
      { q:"88. 'The price was $150,000, ___ 24% for the person that cleaned it.'", options:["A. by","B. per","C. plus"], answer:2,
        explanation:"'Plus' significa 'más / además de'. El precio era $150,000 MÁS el 24% para quien lo limpió.",
        correctEs:"C. plus = más / además de (suma al precio base)" },
      { q:"89. 'This was not the ___ price paid for a Picasso.'", options:["A. highest","B. higher","C. high"], answer:0,
        explanation:"Con 'the' se usa el superlativo. 'The highest' = el más alto. Se usa para comparar con TODOS los precios.",
        correctEs:"A. highest → 'the highest' = el más alto (superlativo con 'the')" },
      { q:"90. 'The painting was found ___ a family bought a house.'", options:["A. than","B. because","C. but"], answer:1,
        explanation:"'Because' (porque) introduce la causa. La pintura fue encontrada PORQUE una familia compró una casa.",
        correctEs:"B. because = porque (introduce la causa o razón)" },
      { q:"91. 'A house that belonged to an old woman ___ collected art.'", options:["A. who","B. when","C. which"], answer:0,
        explanation:"'Who' se usa en cláusulas relativas para referirse a personas. La anciana es persona → 'who'.",
        correctEs:"A. who = quien (pronombre relativo para personas)" },
      { q:"92. 'They found ___ beautiful paintings with this one.'", options:["A. every","B. other","C. any"], answer:1,
        explanation:"'Other' = otros/otras. Encontraron OTROS cuadros hermosos junto con este.",
        correctEs:"B. other = otros (otros cuadros hermosos encontrados junto con este)" },
      { q:"93. 'People couldn't believe she put these paintings in the closet 50 years ___.'", options:["A. ever","B. ago","C. yet"], answer:1,
        explanation:"'Ago' se usa con Past Simple para indicar tiempo desde el presente hacia atrás. '50 years ago' = hace 50 años.",
        correctEs:"B. ago = hace (50 años atrás)" },
    ]
  },
  {
    id:"coffee", level:"medium",
    meta:"Parte 4 — Conocimiento Gramatical en Contexto",
    title:"Coffee",
    body:`Coffee is popular around the world. Over the past centuries, few subjects have been as carefully studied as coffee. Its most important component is caffeine and it has lots of benefits. Coffee has been well-known since the beginning of the 14th century. Sufi Yemenis started using coffee to stay alert during special activities. It became a popular medicine among Europeans in the 1600s.

Caffeine was first discovered in the 1800s by Ferdinand Runge, a doctor that found out some effects that coffee has on people. Some people say coffee isn't good, but doctors say you shouldn't believe this. Thanks to caffeine you don't get hungry. Coffee can also reduce headaches and blood problems. Although many people believe coffee is bad, studies show it is good for your heart.`,
    questions:[
      { q:"9. Its most important component is caffeine and it has lots of ___.", options:["A. benefits","B. effects","C. problems"], answer:0,
        explanation:"'Benefits' (beneficios) es la palabra correcta. El café tiene muchos beneficios para la salud.",
        correctEs:"A. benefits = beneficios para la salud" },
      { q:"10. Coffee has been well-known ___ the beginning of the 14th century.", options:["A. since","B. during","C. until"], answer:0,
        explanation:"'Since' se usa con Present Perfect para indicar el punto de inicio. 'Since the beginning' = desde el comienzo.",
        correctEs:"A. since = desde (usado con Present Perfect para marcar el inicio)" },
      { q:"11. It became a popular medicine ___ Europeans in the 1600s.", options:["A. among","B. about","C. along"], answer:0,
        explanation:"'Among' = entre (un grupo). 'Among Europeans' = entre los europeos. Indica pertenencia a un grupo.",
        correctEs:"A. among = entre los europeos (dentro de un grupo)" },
      { q:"12. Caffeine was first ___ in the 1800s by Ferdinand Runge.", options:["A. describe","B. described","C. describes"], answer:1,
        explanation:"Voz pasiva: 'was described/discovered' (fue descubierta). Pasiva = was/were + past participle.",
        correctEs:"B. described → 'was first described' = fue descrita por primera vez (voz pasiva)" },
      { q:"13. Some people say coffee isn't good, but doctors say you ___ believe this.", options:["A. must","B. should","C. shouldn't"], answer:2,
        explanation:"'Shouldn't' = no deberías. Los doctores dicen que NO deberías creer que el café es malo.",
        correctEs:"C. shouldn't = no deberías (creer que el café es malo)" },
      { q:"14. ___ many people believe coffee is bad, studies show it is good for your heart.", options:["A. Although","B. Because","C. Unless"], answer:0,
        explanation:"'Although' (aunque) introduce un contraste. Aunque mucha gente cree que es malo, los estudios dicen lo contrario.",
        correctEs:"A. Although = aunque (introduce contraste entre creencia popular y evidencia científica)" },
    ]
  },
  {
    id:"mall", level:"easy",
    meta:"Parte 2 — Vocabulario Lexical (At the Mall)",
    title:"At the Mall — Descripción de lugares",
    body:`A mall is a large building with many different shops and places to visit.

85. CINEMA: A cinema is a place to see movies. You can watch new films and buy popcorn there.

86. ELEVATOR: An elevator is something people get on to go to different floors in the building. It goes up and down.

87. PLAYGROUND: A playground is a fun park for children to jump and run around safely. You can find it inside large malls.

88. BOOKSTORE: A bookstore is a shop where you can find things to read — books, magazines, comics, and more.

89. CAFÉ: A café is a place where people buy a cup of coffee, tea, snacks, or a light meal.

Other places in a mall: supermarket (to buy vegetables and meat), bathroom (on every floor), basement (parking lot).`,
    questions:[
      { q:"85. 'This is a place to see movies.' Which place is this?", options:["A. Bookstore","B. Elevator","C. Cinema"], answer:2,
        explanation:"Un cine (cinema) es el lugar donde se ven películas. 'A place to see movies' = el cine.",
        correctEs:"C. Cinema = cine (lugar para ver películas)" },
      { q:"86. 'People get on this to go to different floors.' What is it?", options:["A. Playground","B. Elevator","C. Café"], answer:1,
        explanation:"Un ascensor/elevador sirve para moverse entre los diferentes pisos de un edificio.",
        correctEs:"B. Elevator = ascensor (para ir a diferentes pisos)" },
      { q:"87. 'This is a fun park for children to jump and run.' What is it?", options:["A. Playground","B. Basement","C. Bookstore"], answer:0,
        explanation:"Un playground es una zona de juegos para niños. 'Fun park for children' = playground.",
        correctEs:"A. Playground = zona de juegos para niños" },
      { q:"88. 'This is a shop to find things to read.' What is it?", options:["A. Café","B. Bookstore","C. Cinema"], answer:1,
        explanation:"Una librería (bookstore) es donde encuentras libros y cosas para leer.",
        correctEs:"B. Bookstore = librería (para encontrar cosas que leer)" },
      { q:"89. 'People buy a cup of coffee here.' Where is it?", options:["A. Playground","B. Bookstore","C. Café"], answer:2,
        explanation:"Un café es el lugar donde la gente compra café, té y meriendas.",
        correctEs:"C. Café = cafetería (donde compran café y meriendas)" },
    ]
  },

  // ── INTERMEDIATE NEW TEXTS ──
  {
    id:"social_media", level:"medium",
    meta:"Texto Intermedio — Tecnología",
    title:"Social Media and Young People",
    body:`Social media has changed the way young people communicate. Platforms like Instagram and TikTok allow users to share photos, videos and short messages with millions of people around the world. Many teenagers spend several hours every day on their phones scrolling through feeds and posting content.

However, experts are concerned about the effects of this habit. Studies show that spending too much time on social media can cause anxiety, low self-esteem and difficulty sleeping. When young people compare their lives to the perfect images they see online, they often feel unhappy with their own reality.

On the other hand, social media also has positive effects. It helps people stay connected with friends and family, find information quickly and discover new interests and hobbies. Many young people have even built successful businesses using social media platforms.

The key is balance. Experts recommend spending no more than two hours per day on social media and taking regular breaks from screens. Parents and teachers should guide young people to use these tools in a healthy and responsible way.`,
    questions:[
      { q:"According to the text, one negative effect of social media is:", options:["A. It helps people communicate","B. It can cause anxiety and low self-esteem","C. It allows sharing photos and videos","D. It helps discover new hobbies"], answer:1,
        explanation:"El texto dice: 'spending too much time on social media can cause anxiety, low self-esteem and difficulty sleeping.'",
        correctEs:"B. It can cause anxiety and low self-esteem = puede causar ansiedad y baja autoestima" },
      { q:"What do experts recommend about social media use?", options:["A. Never use it at all","B. Use it only for business","C. Spend no more than two hours per day","D. Share only positive content"], answer:2,
        explanation:"El texto dice: 'Experts recommend spending no more than two hours per day on social media.'",
        correctEs:"C. Spend no more than two hours per day = no más de dos horas al día" },
      { q:"The word 'scrolling' in paragraph 1 most likely means:", options:["A. Writing messages","B. Moving through content on a screen","C. Uploading photos","D. Deleting posts"], answer:1,
        explanation:"'Scrolling' = desplazarse por el contenido de una pantalla hacia arriba o hacia abajo.",
        correctEs:"B. Moving through content on a screen = desplazarse por el contenido en pantalla" },
    ]
  },
  {
    id:"plastic_ocean", level:"medium",
    meta:"Texto Intermedio — Medio Ambiente",
    title:"Plastic Pollution in Our Oceans",
    body:`Every year, millions of tons of plastic end up in the world's oceans. This plastic comes from many sources, including poorly managed landfills, rivers that carry trash from cities, and people who throw garbage directly into the sea. Once in the ocean, plastic breaks down into tiny pieces called microplastics that are almost impossible to remove.

Marine animals suffer greatly from plastic pollution. Sea turtles often mistake plastic bags for jellyfish and eat them. Seabirds feed plastic pieces to their chicks, thinking it is food. Dolphins and whales can become trapped in plastic nets and packaging materials. Scientists estimate that more than one million seabirds and 100,000 marine mammals die from plastic pollution every year.

Fortunately, many people and organizations are working to solve this problem. Beach clean-up events happen regularly around the world. Some countries have banned single-use plastic bags and straws. Companies are developing new packaging made from biodegradable materials. Individuals can help by reducing their plastic use, reusing containers and recycling properly.

The ocean is essential for life on Earth. It produces half of the oxygen we breathe and regulates our climate. Protecting it from plastic pollution is not just an environmental issue — it is a matter of survival for all living beings.`,
    questions:[
      { q:"What are microplastics?", options:["A. Large pieces of plastic","B. Tiny pieces that form when plastic breaks down","C. A type of sea animal","D. Biodegradable materials"], answer:1,
        explanation:"El texto dice: 'plastic breaks down into tiny pieces called microplastics.'",
        correctEs:"B. Tiny pieces that form when plastic breaks down = trozos diminutos que se forman cuando el plástico se degrada" },
      { q:"According to the text, sea turtles eat plastic bags because:", options:["A. They are hungry","B. They mistake bags for jellyfish","C. Plastic bags taste good to them","D. They want to play with them"], answer:1,
        explanation:"El texto dice: 'Sea turtles often mistake plastic bags for jellyfish and eat them.'",
        correctEs:"B. They mistake bags for jellyfish = confunden las bolsas con medusas" },
      { q:"What can individuals do to help?", options:["A. Buy more plastic products","B. Only clean their local beach","C. Reduce use, reuse containers and recycle","D. Move away from the ocean"], answer:2,
        explanation:"El texto dice: 'individuals can help by reducing their plastic use, reusing containers and recycling properly.'",
        correctEs:"C. Reduce use, reuse and recycle = reducir uso, reutilizar y reciclar" },
    ]
  },
  {
    id:"sleep_importance", level:"medium",
    meta:"Texto Intermedio — Salud",
    title:"The Importance of Sleep",
    body:`Sleep is one of the most important activities for human health, yet many people do not get enough of it. Medical experts recommend that adults sleep between seven and nine hours every night. Teenagers need even more — between eight and ten hours. However, studies show that most people in modern societies sleep much less than they should.

When we sleep, our bodies and minds repair themselves. The brain processes the information learned during the day and stores it as long-term memory. The immune system becomes stronger, fighting infections more effectively. Muscles and tissues grow and repair. Even the heart benefits from good sleep, as blood pressure drops during rest.

Lack of sleep has serious consequences. People who regularly sleep less than six hours are at higher risk of obesity, heart disease and type 2 diabetes. Concentration and decision-making ability decrease significantly. Reaction times slow down, making driving dangerous. Emotionally, sleep deprivation can lead to irritability, anxiety and depression.

Good sleep habits, known as sleep hygiene, can make a big difference. Going to bed at the same time every night, avoiding screens before bedtime and keeping the bedroom dark and quiet are simple but effective strategies. Regular exercise and limiting caffeine after midday also help achieve better quality sleep.`,
    questions:[
      { q:"How many hours of sleep do teenagers need according to the text?", options:["A. 6 to 7 hours","B. 7 to 9 hours","C. 8 to 10 hours","D. 10 to 12 hours"], answer:2,
        explanation:"El texto dice: 'Teenagers need even more — between eight and ten hours.'",
        correctEs:"C. 8 to 10 hours = de 8 a 10 horas por noche" },
      { q:"What happens to the brain during sleep?", options:["A. It stops working completely","B. It processes information and stores long-term memory","C. It only controls breathing","D. It repairs the muscles"], answer:1,
        explanation:"El texto dice: 'The brain processes the information learned during the day and stores it as long-term memory.'",
        correctEs:"B. Processes information and stores memory = procesa información y almacena memoria a largo plazo" },
      { q:"The word 'deprivation' in paragraph 3 most likely means:", options:["A. Having too much of something","B. Enjoying something fully","C. Lacking or being without something","D. Improving a condition"], answer:2,
        explanation:"'Sleep deprivation' = privación del sueño = carecer de suficiente sueño.",
        correctEs:"C. Lacking or being without something = carecer de algo / privación" },
    ]
  },
  {
    id:"online_learning", level:"medium",
    meta:"Texto Intermedio — Educación",
    title:"Online Learning: Advantages and Challenges",
    body:`Online learning has grown dramatically in recent years, especially after the global pandemic forced schools and universities to close their physical doors. Today, millions of students around the world take classes through internet platforms, accessing lessons, videos and exercises from their homes.

One major advantage of online learning is flexibility. Students can watch lessons at any time and study at their own pace. People who work or have family responsibilities can fit education into their schedules more easily. Additionally, online courses often cost less than traditional classes, making education more accessible to people from different economic backgrounds.

However, online learning also presents significant challenges. Not all students have access to reliable internet connections or suitable devices at home. The lack of face-to-face interaction with teachers and classmates can make it harder to stay motivated. Some subjects, like laboratory science or physical education, are very difficult to teach effectively online.

Research shows that successful online learners tend to be self-disciplined and able to manage their time effectively. They set specific study goals and create structured routines. Teachers also play a crucial role by designing engaging content and maintaining regular communication with students.`,
    questions:[
      { q:"What is one major advantage of online learning mentioned?", options:["A. It is always free","B. It offers flexibility in schedule","C. It replaces all traditional schools","D. It requires no internet connection"], answer:1,
        explanation:"El texto dice: 'One major advantage of online learning is flexibility. Students can watch lessons at any time.'",
        correctEs:"B. It offers flexibility in schedule = ofrece flexibilidad de horario" },
      { q:"Which subjects are difficult to teach online according to the text?", options:["A. Mathematics and history","B. Literature and languages","C. Laboratory science and physical education","D. Geography and music"], answer:2,
        explanation:"El texto dice: 'subjects like laboratory science or physical education are very difficult to teach effectively online.'",
        correctEs:"C. Laboratory science and physical education = ciencias de laboratorio y educación física" },
      { q:"What characteristic do successful online learners typically have?", options:["A. They always study in groups","B. They are self-disciplined and manage time well","C. They never use social media","D. They study more than 10 hours daily"], answer:1,
        explanation:"El texto dice: 'successful online learners tend to be self-disciplined and able to manage their time effectively.'",
        correctEs:"B. Self-disciplined and manage time well = autodisciplinados y gestionan bien el tiempo" },
    ]
  },
  {
    id:"football_world", level:"medium",
    meta:"Texto Intermedio — Deportes",
    title:"Football: The World's Most Popular Sport",
    body:`Football, known as soccer in North America, is undoubtedly the most popular sport in the world. With over four billion fans globally, no other sport comes close. The FIFA World Cup, held every four years, is the most watched sporting event on the planet, attracting billions of television viewers from every corner of the globe.

The origins of modern football can be traced back to England in the 19th century, when the Football Association established the first official rules in 1863. However, people have been playing ball games with their feet for thousands of years. Ancient civilizations in China, Greece and Rome all had versions of ball-kicking games.

What makes football so universally loved? Experts suggest several reasons. First, it requires minimal equipment — just a ball and an open space. This makes it accessible to children and adults in even the poorest communities. Second, the rules are simple enough for anyone to understand quickly. Third, the game produces moments of incredible skill, teamwork and emotion that connect people across cultural and language barriers.

Football also has a powerful social impact. It brings communities together, inspires national pride and provides role models for young people. Many professional players come from difficult backgrounds and use their success to give back to their communities through charitable work.`,
    questions:[
      { q:"When were the first official rules of modern football established?", options:["A. In ancient China","B. In the 20th century","C. In 1863 in England","D. During the first World Cup"], answer:2,
        explanation:"El texto dice: 'the Football Association established the first official rules in 1863.'",
        correctEs:"C. In 1863 in England = en 1863 en Inglaterra" },
      { q:"Why is football accessible to everyone?", options:["A. It is played only in rich countries","B. It requires expensive equipment","C. It needs only a ball and open space","D. It has very complicated rules"], answer:2,
        explanation:"El texto dice: 'it requires minimal equipment — just a ball and an open space.'",
        correctEs:"C. It needs only a ball and open space = solo necesita un balón y espacio abierto" },
      { q:"The word 'undoubtedly' in the first sentence means:", options:["A. Possibly","B. Without any doubt","C. Sometimes","D. Surprisingly"], answer:1,
        explanation:"'Undoubtedly' = sin lugar a dudas / indudablemente.",
        correctEs:"B. Without any doubt = sin lugar a dudas" },
    ]
  },
  {
    id:"backpacking", level:"medium",
    meta:"Texto Intermedio — Viajes",
    title:"Backpacking: Travel on a Budget",
    body:`Backpacking has become one of the most popular ways for young people to explore the world. Unlike traditional tourism, backpackers travel with minimal luggage — usually just a single large backpack — and focus on experiencing local culture rather than staying in luxury hotels.

The appeal of backpacking lies in its freedom and affordability. Backpackers typically stay in hostels, which offer shared dormitory rooms at a fraction of the cost of hotels. They eat at local markets and street food stalls, use public transportation and often rely on free attractions like parks, beaches and museums on free entry days.

Beyond saving money, backpacking offers unique personal growth opportunities. Travellers learn to solve problems independently, navigate foreign cities and communicate with people from different cultures. Many backpackers report that their experiences abroad changed their perspective on life, making them more adaptable, tolerant and open-minded.

Safety is an important consideration. Experienced backpackers recommend researching destinations thoroughly, keeping copies of important documents and always informing someone of your travel plans. Travel insurance is strongly advised, as medical emergencies abroad can be extremely expensive without it.`,
    questions:[
      { q:"How do backpackers typically save money on accommodation?", options:["A. By sleeping outdoors","B. By staying in luxury hotels","C. By staying in hostels with shared rooms","D. By renting apartments"], answer:2,
        explanation:"El texto dice: 'Backpackers typically stay in hostels, which offer shared dormitory rooms at a fraction of the cost of hotels.'",
        correctEs:"C. By staying in hostels with shared rooms = hospedándose en hostales compartidos" },
      { q:"What personal quality do backpackers often develop?", options:["A. Dependence on others","B. Adaptability and open-mindedness","C. A dislike of other cultures","D. Preference for luxury"], answer:1,
        explanation:"El texto dice que los mochileros se vuelven 'more adaptable, tolerant and open-minded.'",
        correctEs:"B. Adaptability and open-mindedness = adaptabilidad y mente abierta" },
      { q:"What do experienced backpackers strongly recommend?", options:["A. Travelling without a plan","B. Avoiding all local food","C. Getting travel insurance","D. Bringing as much luggage as possible"], answer:2,
        explanation:"El texto dice: 'Travel insurance is strongly advised.'",
        correctEs:"C. Getting travel insurance = obtener seguro de viaje" },
    ]
  },
  {
    id:"vaccines", level:"medium",
    meta:"Texto Intermedio — Ciencia",
    title:"How Vaccines Work",
    body:`Vaccines are one of the greatest achievements in the history of medicine. They have saved hundreds of millions of lives by preventing diseases that once killed or disabled large portions of the population. Smallpox, which killed millions of people every year, has been completely eradicated thanks to a global vaccination campaign.

The basic principle of vaccines is simple: they teach the immune system to recognise and fight specific pathogens without causing the actual disease. Most vaccines contain a weakened or inactivated form of the virus or bacteria, or just a small piece of it. When the vaccine enters the body, the immune system responds by producing antibodies — specialised proteins that can identify and destroy the pathogen.

After vaccination, the immune system remembers the pathogen. If the vaccinated person later encounters the real disease, their body can respond quickly and effectively, preventing serious illness in most cases. This process is called immunological memory.

Vaccines not only protect individuals but also create what scientists call herd immunity. When enough people in a community are vaccinated, the disease cannot spread easily, protecting even those who cannot receive vaccines for medical reasons. Maintaining high vaccination rates is therefore a collective responsibility.`,
    questions:[
      { q:"What is the basic principle of how vaccines work?", options:["A. They cure diseases after infection","B. They teach the immune system to fight pathogens","C. They remove bacteria from the blood","D. They replace antibiotics"], answer:1,
        explanation:"El texto dice: 'they teach the immune system to recognise and fight specific pathogens without causing the actual disease.'",
        correctEs:"B. They teach the immune system to fight pathogens = enseñan al sistema inmunológico a combatir patógenos" },
      { q:"What is 'herd immunity'?", options:["A. When all animals are vaccinated","B. When a disease disappears completely","C. When enough people are vaccinated to stop disease spreading","D. When vaccines stop working"], answer:2,
        explanation:"El texto dice: 'When enough people in a community are vaccinated, the disease cannot spread easily.'",
        correctEs:"C. When enough people are vaccinated to stop disease spreading = cuando suficientes personas vacunadas detienen la propagación" },
      { q:"The word 'eradicated' in paragraph 1 most likely means:", options:["A. Discovered","B. Completely eliminated","C. Studied carefully","D. Temporarily stopped"], answer:1,
        explanation:"'Eradicated' = erradicado = eliminado por completo.",
        correctEs:"B. Completely eliminated = completamente eliminado / erradicado" },
    ]
  },
  {
    id:"mediterranean_diet", level:"medium",
    meta:"Texto Intermedio — Alimentación",
    title:"The Mediterranean Diet",
    body:`The Mediterranean diet is widely considered one of the healthiest eating patterns in the world. Named after the traditional food habits of countries bordering the Mediterranean Sea, this diet has been associated with longer life expectancy, lower rates of heart disease and reduced risk of several types of cancer.

The diet is rich in plant-based foods such as fruits, vegetables, whole grains, legumes and nuts. Olive oil is the main source of fat, replacing butter and other saturated fats. Fish and seafood are eaten regularly, while red meat is consumed only occasionally.

Scientists have studied the Mediterranean diet extensively and found impressive results. A major Spanish study showed that people following this diet had a 30% lower risk of major cardiovascular events such as heart attacks and strokes, compared to those following a low-fat diet.

Beyond its health benefits, the Mediterranean diet also promotes social eating — sharing meals with family and friends, taking time to enjoy food, and maintaining a balance between nutrition and pleasure. Nutrition experts believe this holistic approach is a key reason for its effectiveness.`,
    questions:[
      { q:"What is the main source of fat in the Mediterranean diet?", options:["A. Butter","B. Red meat","C. Olive oil","D. Dairy products"], answer:2,
        explanation:"El texto dice: 'Olive oil is the main source of fat, replacing butter and other saturated fats.'",
        correctEs:"C. Olive oil = aceite de oliva (principal fuente de grasa)" },
      { q:"According to the Spanish study, what risk was 30% lower?", options:["A. Risk of cancer","B. Risk of cardiovascular events","C. Risk of diabetes","D. Risk of obesity"], answer:1,
        explanation:"El texto dice: 'people following this diet had a 30% lower risk of major cardiovascular events.'",
        correctEs:"B. Risk of cardiovascular events = riesgo de eventos cardiovasculares (ataques al corazón)" },
      { q:"According to the text, why is the Mediterranean diet effective beyond its food choices?", options:["A. Because it includes wine","B. Because it eliminates all fats","C. Because it combines healthy food with positive social habits","D. Because it is expensive to follow"], answer:2,
        explanation:"El texto dice: 'this holistic approach, combining healthy food choices with positive social habits, is a key reason for its effectiveness.'",
        correctEs:"C. Combines healthy food with positive social habits = combina comida saludable con hábitos sociales positivos" },
    ]
  },
  {
    id:"day_of_dead", level:"medium",
    meta:"Texto Intermedio — Cultura",
    title:"The Day of the Dead: A Mexican Tradition",
    body:`The Day of the Dead, or Dia de los Muertos, is one of Mexico's most important and colourful cultural celebrations. Held on November 1st and 2nd each year, it coincides with the Catholic holidays of All Saints' Day and All Souls' Day. However, its origins go back much further, to the traditions of the Aztec people.

Unlike Halloween, which many people associate with fear and darkness, the Day of the Dead is a joyful celebration. Families gather at cemeteries to clean and decorate the graves of their loved ones with marigold flowers, candles and photographs. They build altars, called ofrendas, in their homes, displaying the favourite foods, drinks and objects of the deceased, believing that the spirits of the dead return to visit the living during this time.

Music, dancing and special foods are central to the celebration. Pan de muerto — a sweet bread decorated with sugar bones — and sugar skulls are traditional foods eaten during the holiday. Face painting, with people decorating their faces to look like colourful skulls, has become a widely recognised symbol of the celebration.

UNESCO declared the Day of the Dead an Intangible Cultural Heritage of Humanity in 2008, recognising its importance as a living cultural tradition that helps communities maintain a connection with their ancestors.`,
    questions:[
      { q:"When is the Day of the Dead celebrated?", options:["A. October 31st","B. December 25th","C. November 1st and 2nd","D. January 1st and 2nd"], answer:2,
        explanation:"El texto dice: 'Held on November 1st and 2nd each year.'",
        correctEs:"C. November 1st and 2nd = el 1 y 2 de noviembre" },
      { q:"What are 'ofrendas' according to the text?", options:["A. Special foods","B. Altars built in homes with items of the deceased","C. Traditional dances at cemeteries","D. Colourful flowers placed on graves"], answer:1,
        explanation:"El texto dice: 'They build altars, called ofrendas, in their homes, displaying the favourite foods, drinks and objects of the deceased.'",
        correctEs:"B. Altars in homes with items of the deceased = altares en casa con objetos del difunto" },
      { q:"What did UNESCO do in 2008?", options:["A. Banned the celebration","B. Created the celebration","C. Declared it an Intangible Cultural Heritage of Humanity","D. Changed its date"], answer:2,
        explanation:"El texto dice: 'UNESCO declared the Day of the Dead an Intangible Cultural Heritage of Humanity in 2008.'",
        correctEs:"C. Declared it an Intangible Cultural Heritage = lo declaró Patrimonio Cultural Inmaterial de la Humanidad" },
    ]
  },
  {
    id:"ai_everyday", level:"medium",
    meta:"Texto Intermedio — Tecnología",
    title:"Artificial Intelligence in Everyday Life",
    body:`Artificial intelligence, commonly known as AI, has moved from science fiction films into our daily lives faster than most people realise. From the moment you wake up and ask a voice assistant for the weather forecast, to the personalised recommendations Netflix shows you in the evening, AI systems are constantly working in the background of modern life.

AI refers to computer systems that can perform tasks that normally require human intelligence, such as recognising speech, making decisions, translating languages and identifying images. These systems learn from large amounts of data, improving their performance over time.

In healthcare, AI is already helping doctors diagnose diseases more accurately. Computer systems can analyse thousands of medical images in seconds and detect patterns that human eyes might miss. In transportation, self-driving cars use AI to navigate roads and avoid obstacles. In education, AI-powered platforms can personalise learning content to meet each student's individual needs.

However, AI also raises important ethical questions. If AI systems make decisions about who gets a job interview or a bank loan, biases in the training data can lead to unfair outcomes for certain groups. Additionally, automation powered by AI is likely to replace many jobs in the coming decades.`,
    questions:[
      { q:"What does AI do in healthcare according to the text?", options:["A. It replaces all doctors","B. It helps diagnose diseases by analysing medical images","C. It only manages hospital appointments","D. It manufactures medicines"], answer:1,
        explanation:"El texto dice: 'AI is already helping doctors diagnose diseases more accurately. Computer systems can analyse thousands of medical images in seconds.'",
        correctEs:"B. Helps diagnose diseases by analysing medical images = ayuda a diagnosticar enfermedades analizando imágenes médicas" },
      { q:"What ethical problem does the text mention about AI?", options:["A. AI is too expensive","B. AI cannot learn from data","C. Biases in training data can lead to unfair outcomes","D. AI makes computers slow"], answer:2,
        explanation:"El texto dice: 'biases in the training data can lead to unfair outcomes for certain groups.'",
        correctEs:"C. Biases in training data lead to unfair outcomes = sesgos en los datos causan resultados injustos" },
      { q:"The phrase 'in the background' in paragraph 1 means:", options:["A. Visible to everyone","B. Operating without being noticed","C. Creating problems","D. Being turned off"], answer:1,
        explanation:"'Working in the background' = operando sin ser notado / de manera invisible.",
        correctEs:"B. Operating without being noticed = operando sin ser notado / invisible" },
    ]
  },

  // ── ADVANCED NEW TEXTS ──
  {
    id:"marie_curie", level:"hard",
    meta:"Texto Avanzado — Biografía",
    title:"Marie Curie: Breaking Barriers in Science",
    body:`Marie Curie remains one of the most remarkable scientists in history — not only for her groundbreaking discoveries but also for the barriers she overcame in a field dominated by men. Born Maria Sklodowska in Warsaw in 1867, she grew up in a Poland under Russian occupation, where higher education for women was forbidden. Determined to pursue her scientific ambitions, she moved to Paris at the age of 24 to study at the Sorbonne.

In Paris, Curie worked tirelessly, often going without food to save money for laboratory equipment. She became the first woman to earn a physics degree from the Sorbonne and subsequently earned a doctorate — the first woman in France to do so. Together with her husband Pierre Curie, she investigated the mysterious phenomenon of radioactivity, a term she herself coined.

Her discoveries were extraordinary. She identified two new elements — polonium, named after her homeland, and radium — and demonstrated that radioactivity was an atomic property. In 1903, she and Pierre were awarded the Nobel Prize in Physics, making Marie the first woman to receive a Nobel Prize. After Pierre's tragic death in 1906, she continued her research alone and was awarded a second Nobel Prize in Chemistry in 1911, becoming the first person ever to win the prize in two different sciences.

Curie's legacy extends beyond her discoveries. She opened the path for women in science and remains an enduring symbol of intellectual courage, perseverance and dedication.`,
    questions:[
      { q:"Why did Marie Curie move to Paris?", options:["A. To escape poverty","B. To meet Pierre Curie","C. Because higher education for women was forbidden in Poland","D. Because she preferred French culture"], answer:2,
        explanation:"El texto dice que en Polonia la educación superior estaba prohibida para mujeres, así que se mudó a París a estudiar.",
        correctEs:"C. Higher education for women was forbidden in Poland = la educación superior estaba prohibida para mujeres en Polonia" },
      { q:"What does 'coined' mean as used in paragraph 2?", options:["A. Discovered by chance","B. Introduced or created a new term","C. Challenged an existing idea","D. Borrowed from another language"], answer:1,
        explanation:"'Coined a term' = acuñó un término = creó/introdujo una nueva palabra.",
        correctEs:"B. Introduced or created a new term = introdujo / creó un nuevo término" },
      { q:"What made Marie Curie's 1911 Nobel Prize historically unique?", options:["A. She was the youngest recipient","B. She was the first person to win in two different sciences","C. She shared it with three others","D. She won it after her husband's death"], answer:1,
        explanation:"El texto dice: 'becoming the first person ever to win the prize in two different sciences.'",
        correctEs:"B. First person to win in two different sciences = primera persona en ganar en dos ciencias diferentes" },
      { q:"It can be inferred that Marie Curie:", options:["A. Had an easy life due to family wealth","B. Was supported by the French government","C. Achieved success despite significant personal and professional challenges","D. Preferred working alone from the beginning"], answer:2,
        explanation:"El texto describe múltiples obstáculos (pobreza, discriminación, pérdida del esposo) que Curie superó para lograr sus descubrimientos.",
        correctEs:"C. Achieved success despite significant challenges = logró el éxito a pesar de grandes desafíos" },
    ]
  },
  {
    id:"silk_road", level:"hard",
    meta:"Texto Avanzado — Historia",
    title:"The Silk Road: Ancient Trade Routes",
    body:`The Silk Road was not a single road but a vast network of trade routes stretching nearly 7,000 kilometres across Central Asia, connecting China with the Mediterranean world for over a thousand years. Named by German geographer Ferdinand von Richthofen in the 19th century, the routes facilitated not only the exchange of goods but also the transmission of ideas, religions, technologies and artistic styles between East and West.

Silk was one of the most prized commodities along these routes. The Chinese closely guarded the secrets of silk production for centuries, and the fabric commanded extraordinarily high prices in Western markets. However, the Silk Road also carried spices, glassware, precious metals, paper and gunpowder — two Chinese inventions that would profoundly alter the course of world history.

The human exchanges facilitated by the Silk Road were perhaps even more significant than the material ones. Buddhism spread from India through Central Asia to China. Islam later travelled the same routes. The Plague of Justinian and the Black Death spread along Silk Road networks, devastating populations from China to Europe. Marco Polo's famous journeys brought detailed accounts of East Asian civilisations to European audiences, stimulating curiosity and eventually the Age of Exploration.

The Silk Road began to decline in the 15th century as maritime trade routes became increasingly viable and more efficient alternatives.`,
    questions:[
      { q:"According to the text, what was the Silk Road?", options:["A. A single road connecting China and Rome","B. A network of trade routes across Central Asia","C. A Chinese invention for transportation","D. A maritime route discovered by Marco Polo"], answer:1,
        explanation:"El texto dice: 'The Silk Road was not a single road but a vast network of trade routes stretching nearly 7,000 kilometres across Central Asia.'",
        correctEs:"B. A network of trade routes = una red de rutas comerciales a través de Asia Central" },
      { q:"Besides goods, what else was exchanged along the Silk Road?", options:["A. Only Chinese inventions","B. Only religious texts","C. Ideas, religions, technologies and artistic styles","D. Only spices and fabrics"], answer:2,
        explanation:"El texto dice: 'the routes facilitated not only the exchange of goods but also the transmission of ideas, religions, technologies and artistic styles.'",
        correctEs:"C. Ideas, religions, technologies and artistic styles = ideas, religiones, tecnologías y estilos artísticos" },
      { q:"The word 'stimulating' in paragraph 3 most likely means:", options:["A. Reducing","B. Encouraging or provoking","C. Preventing","D. Replacing"], answer:1,
        explanation:"'Stimulating curiosity' = estimulando la curiosidad. 'To stimulate' = estimular, motivar, provocar.",
        correctEs:"B. Encouraging or provoking = estimulando / provocando curiosidad" },
      { q:"Why did the Silk Road begin to decline in the 15th century?", options:["A. China banned all foreign trade","B. Wars destroyed all routes","C. Maritime trade routes became more efficient alternatives","D. There was nothing left to trade"], answer:2,
        explanation:"El texto dice: 'The Silk Road began to decline in the 15th century as maritime trade routes became increasingly viable and more efficient alternatives.'",
        correctEs:"C. Maritime routes became more efficient = las rutas marítimas se volvieron alternativas más eficientes" },
    ]
  },
  {
    id:"garcia_marquez", level:"hard",
    meta:"Texto Avanzado — Literatura",
    title:"Garcia Marquez and Magical Realism",
    body:`Gabriel Garcia Marquez, the Colombian novelist awarded the Nobel Prize in Literature in 1982, is widely regarded as the master of magical realism — a literary style that blends realistic narratives with fantastical or magical elements, presenting the extraordinary as perfectly ordinary. His most celebrated novel, One Hundred Years of Solitude, published in 1967, has sold more than 50 million copies and been translated into over 40 languages.

Magical realism as a style emerged largely from Latin American literature in the mid-20th century. Its distinguishing characteristic is the integration of magical events into a realistic setting without explanation or surprise from the characters or narrator. When a character in Garcia Marquez's fiction levitates during prayer or a yellow butterfly follows a man everywhere, these events are described with the same matter-of-fact tone as the weather or daily meals.

Garcia Marquez himself attributed his narrative style to the way his grandmother told stories — presenting the most extraordinary events in an absolutely calm, matter-of-fact way. This storytelling approach, rooted in the oral traditions and collective mythology of Caribbean Colombia, gives his fiction a dreamlike quality that simultaneously feels deeply real.

His work had a profound influence on world literature. The style he helped define inspired countless writers across Latin America, Africa and Asia. However, critics have also noted that magical realism can risk presenting non-Western worldviews as inherently irrational, reflecting broader discussions about representation in world literature.`,
    questions:[
      { q:"What is the defining characteristic of magical realism?", options:["A. Stories set entirely in fantasy worlds","B. Magical events in realistic settings without surprise","C. Stories with no logical plot","D. Fiction based entirely on historical events"], answer:1,
        explanation:"El texto dice: 'Its distinguishing characteristic is the integration of magical events into a realistic setting without explanation or surprise.'",
        correctEs:"B. Magical events in realistic settings without surprise = eventos mágicos en entornos realistas sin sorpresa" },
      { q:"Where did Garcia Marquez get his narrative style from?", options:["A. European surrealist novels","B. His university education","C. The way his grandmother told stories","D. His travels to Europe"], answer:2,
        explanation:"El texto dice: 'Garcia Marquez himself attributed his narrative style to the way his grandmother told stories.'",
        correctEs:"C. The way his grandmother told stories = la manera en que su abuela contaba historias" },
      { q:"The phrase 'matter-of-fact' in paragraph 2 means:", options:["A. Exaggerated and emotional","B. Calm and straightforward, without drama","C. Confusing and unclear","D. Formal and academic"], answer:1,
        explanation:"'Matter-of-fact' = natural, directo, sin dramatismo — como si fuera algo completamente normal.",
        correctEs:"B. Calm and straightforward, without drama = tranquilo y directo, sin dramatismo" },
      { q:"What criticism of magical realism is mentioned?", options:["A. It is too similar to European literature","B. It has no influence on other writers","C. It can risk presenting non-Western worldviews as irrational","D. It only works in Spanish"], answer:2,
        explanation:"El texto dice: 'magical realism can risk presenting non-Western worldviews as inherently irrational.'",
        correctEs:"C. Risk presenting non-Western worldviews as irrational = riesgo de presentar cosmovisiones no occidentales como irracionales" },
    ]
  },
  {
    id:"climate_change", level:"hard",
    meta:"Texto Avanzado — Medio Ambiente",
    title:"Climate Change and Its Global Consequences",
    body:`Climate change represents perhaps the most complex and consequential challenge humanity has ever faced. The global average temperature has risen by approximately 1.1 degrees Celsius since the pre-industrial era, and the pace of change is accelerating. The scientific consensus is unambiguous: human activities, primarily the burning of fossil fuels and deforestation, are the dominant cause.

The consequences are already visible across the planet. Arctic sea ice is melting at record rates, contributing to rising sea levels that threaten low-lying coastal cities and island nations. Extreme weather events — droughts, floods, hurricanes and heatwaves — are becoming more frequent and more intense. Coral reefs, which support approximately 25% of all marine species, are bleaching and dying as ocean temperatures rise.

Addressing climate change requires action on multiple fronts simultaneously. The transition to renewable energy must be accelerated dramatically. Forests must be protected and restored. Agricultural practices need to shift towards methods that sequester carbon rather than releasing it. These transitions must be managed equitably — the poorest nations, which have contributed least to climate change, are disproportionately bearing its heaviest consequences.

Scientists warn that without significantly more ambitious and immediate action, the world is likely to exceed 1.5 degrees of warming — the threshold beyond which the most severe and potentially irreversible consequences become much more probable.`,
    questions:[
      { q:"What is the primary cause of current climate change?", options:["A. Natural geological cycles","B. Volcanic eruptions","C. Burning fossil fuels and deforestation","D. Changes in solar activity"], answer:2,
        explanation:"El texto dice: 'human activities, primarily the burning of fossil fuels and deforestation, are the dominant cause.'",
        correctEs:"C. Burning fossil fuels and deforestation = quema de combustibles fósiles y deforestación" },
      { q:"What does the text say about poor nations and climate change?", options:["A. Poor nations are the main cause","B. Poor nations contributed least but suffer the most","C. Rich and poor nations suffer equally","D. Poor nations are protected from it"], answer:1,
        explanation:"El texto dice: 'the poorest nations, which have contributed least, are disproportionately bearing its heaviest consequences.'",
        correctEs:"B. Contributed least but suffer the most = contribuyeron menos pero sufren más las consecuencias" },
      { q:"The word 'unprecedented' means:", options:["A. Well understood","B. Previously recorded","C. Never having happened before at this level","D. Gradually decreasing"], answer:2,
        explanation:"'Unprecedented' = sin precedentes = que nunca había ocurrido antes a este nivel.",
        correctEs:"C. Never having happened before at this level = sin precedentes" },
      { q:"What is the key threshold temperature mentioned by scientists?", options:["A. 1.1 degrees","B. 1.5 degrees","C. 2.0 degrees","D. 2.5 degrees"], answer:1,
        explanation:"El texto dice: 'the world is likely to exceed 1.5 degrees of warming — the threshold beyond which the most severe consequences become more probable.'",
        correctEs:"B. 1.5 degrees = 1.5 grados (el umbral crítico mencionado por los científicos)" },
    ]
  },
  {
    id:"urbanisation", level:"hard",
    meta:"Texto Avanzado — Sociedad",
    title:"Urbanisation: Challenges and Opportunities",
    body:`For the first time in human history, more than half of the world's population lives in cities. This remarkable demographic shift, which accelerated dramatically during the 20th century with industrialisation, has profound implications for how societies organise themselves and how resources are allocated. The United Nations estimates that by 2050, approximately 68% of humanity will be urban dwellers.

Cities are engines of economic productivity and innovation. The concentration of people, skills and infrastructure in urban areas creates what economists call agglomeration effects — the phenomenon whereby proximity generates higher productivity than dispersed rural populations can achieve. However, this economic vitality is frequently accompanied by stark inequality, as affluent and impoverished communities often coexist in close proximity with vastly different access to services.

The environmental footprint of cities is enormous. Urban areas consume approximately 78% of the world's energy and generate more than 60% of greenhouse gas emissions. However, paradoxically, dense urban living can also be more environmentally efficient than sprawling rural lifestyles, as shared infrastructure and public transportation reduce per-capita resource consumption.

The concept of the 'smart city' — using digital technology and data analytics to optimise urban services and improve quality of life — has gained considerable traction. Yet critics point out that technological solutions alone cannot address the deeper structural inequalities that drive urban poverty and exclusion.`,
    questions:[
      { q:"What percentage of humanity will live in cities by 2050?", options:["A. 50%","B. 60%","C. 68%","D. 78%"], answer:2,
        explanation:"El texto dice: 'by 2050, approximately 68% of humanity will be urban dwellers.'",
        correctEs:"C. 68% = el 68% de la humanidad vivirá en ciudades" },
      { q:"What are 'agglomeration effects'?", options:["A. Negative effects of too many people in one place","B. Higher productivity from concentration of people and skills","C. Pollution caused by industrial cities","D. Economic inequality between cities and rural areas"], answer:1,
        explanation:"El texto dice: 'agglomeration effects — the phenomenon whereby proximity generates higher productivity.'",
        correctEs:"B. Higher productivity from concentration of people and skills = mayor productividad por concentración de personas y habilidades" },
      { q:"What paradox does the text mention about cities and environment?", options:["A. Cities produce less pollution than farms","B. Dense urban living can be more environmentally efficient than rural living","C. Smart cities create more waste","D. Rich cities have smaller carbon footprints"], answer:1,
        explanation:"El texto dice: 'paradoxically, dense urban living can also be more environmentally efficient than sprawling suburban or rural lifestyles.'",
        correctEs:"B. Dense urban living can be more environmentally efficient = vivir en ciudades densas puede ser más eficiente ambientalmente" },
      { q:"What do critics say about technological solutions for urban problems?", options:["A. They are too expensive","B. They work perfectly in all cities","C. They alone cannot address deeper structural inequalities","D. They make inequality worse"], answer:2,
        explanation:"El texto dice: 'technological solutions alone cannot address the deeper structural inequalities that drive urban poverty.'",
        correctEs:"C. They alone cannot address structural inequalities = solos no pueden resolver las desigualdades estructurales" },
    ]
  },
  {
    id:"gig_economy", level:"hard",
    meta:"Texto Avanzado — Economia",
    title:"The Gig Economy: Freedom or Precarity?",
    body:`The so-called 'gig economy' — characterised by short-term contracts, freelance work and platform-based employment facilitated by digital technology — has transformed labour markets worldwide. Companies like Uber, Deliveroo and Airbnb have built multi-billion-dollar businesses by connecting service providers directly with consumers through smartphone applications, bypassing traditional employment structures. Proponents argue this model offers workers unprecedented flexibility; critics contend it has created workers without the protections of traditional employment.

For many workers, the flexibility offered by gig work is genuinely valuable. A delivery driver can choose to work only on school days. A graphic designer can take on clients from around the world without committing to a single employer. In developing economies, gig platforms have provided income opportunities to populations previously excluded from formal labour markets.

However, the darker side of the gig economy has become increasingly apparent. Platform workers typically bear all the financial risks of self-employment — including irregular income, lack of paid sick leave, no pension contributions and no protection against arbitrary deactivation of their accounts. Studies consistently show that when costs such as vehicle maintenance, fuel and unpaid waiting time are factored in, many gig workers earn below the minimum wage.

Legal battles are reshaping the landscape. In the United Kingdom, the Supreme Court ruled in 2021 that Uber drivers must be classified as 'workers' rather than self-employed contractors, entitling them to minimum wage guarantees and holiday pay.`,
    questions:[
      { q:"What do critics say about the gig economy?", options:["A. It offers too much flexibility","B. It has created workers without traditional employment protections","C. It is only available in rich countries","D. It pays workers too much"], answer:1,
        explanation:"El texto dice: 'critics contend it has created a new underclass of workers without the protections associated with traditional employment.'",
        correctEs:"B. Workers without traditional protections = trabajadores sin las protecciones del empleo tradicional" },
      { q:"What financial risks do gig workers typically face?", options:["A. High taxes only","B. Irregular income, no sick leave, no pension and risk of deactivation","C. They must pay for customers' expenses","D. They must own digital platforms"], answer:1,
        explanation:"El texto menciona: 'irregular income, lack of paid sick leave, no pension contributions and no protection against arbitrary deactivation.'",
        correctEs:"B. Irregular income, no sick leave, no pension = ingresos irregulares, sin baja pagada, sin pensión" },
      { q:"What did the UK Supreme Court rule in 2021?", options:["A. Uber must pay higher taxes","B. Gig platforms must be banned","C. Uber drivers classified as 'workers', not self-employed","D. All delivery drivers must own cars"], answer:2,
        explanation:"El texto dice: 'the Supreme Court ruled in 2021 that Uber drivers must be classified as workers rather than self-employed contractors.'",
        correctEs:"C. Uber drivers classified as workers, not self-employed = conductores clasificados como trabajadores, no autónomos" },
      { q:"The word 'precarity' in the title most likely refers to:", options:["A. High earnings","B. An uncertain and insecure situation","C. Freedom to choose work","D. Technological innovation"], answer:1,
        explanation:"'Precarity' = precariedad = situación incierta e insegura, sin estabilidad laboral.",
        correctEs:"B. An uncertain and insecure situation = una situación incierta e insegura (precariedad laboral)" },
    ]
  },
  {
    id:"human_genome", level:"hard",
    meta:"Texto Avanzado — Ciencia",
    title:"The Human Genome Project",
    body:`The Human Genome Project stands as one of the most ambitious scientific undertakings in human history. Launched in 1990 as an international collaborative effort involving scientists from the United States, United Kingdom, France, Germany, Japan and China, the project aimed to map and sequence the complete human genome — the approximately three billion base pairs of DNA that constitute the genetic blueprint of Homo sapiens. Its successful completion in 2003 was celebrated as a watershed moment for science and medicine.

Researchers had hoped that identifying all human genes would rapidly lead to cures for most genetic diseases. While significant progress has been made — particularly in understanding single-gene disorders such as cystic fibrosis — most common conditions like heart disease, cancer and mental illness involve complex interactions between hundreds of genes and environmental factors that remain incompletely understood.

Genomic medicine has already transformed several areas of healthcare. Personalised cancer treatment, in which therapies are tailored to the specific genetic mutations driving an individual's tumour, has significantly improved outcomes for some cancers. Forensic science has been revolutionised by DNA profiling, which can identify individuals with extraordinary precision.

The project also raises profound ethical questions. Who owns genetic information? Should insurance companies be permitted to use genomic data when setting premiums? How can genetic privacy be protected in an age when commercial DNA testing kits are widely available? The pace of technological development is outstripping the development of appropriate legal and ethical frameworks.`,
    questions:[
      { q:"What was the main goal of the Human Genome Project?", options:["A. To cure all genetic diseases","B. To map and sequence the complete human genome","C. To create artificial DNA","D. To study genomes of all species"], answer:1,
        explanation:"El texto dice: 'the project aimed to map and sequence the complete human genome.'",
        correctEs:"B. To map and sequence the complete human genome = mapear y secuenciar el genoma humano completo" },
      { q:"What made common diseases harder to cure than expected?", options:["A. Scientists lacked technology","B. The project was not completed","C. They involve complex interactions between genes and environment","D. Most diseases are caused by bacteria"], answer:2,
        explanation:"El texto dice: 'most common conditions involve complex interactions between hundreds of genes and environmental factors.'",
        correctEs:"C. Complex interactions between genes and environment = interacciones complejas entre genes y factores ambientales" },
      { q:"What ethical concern about genomic data is specifically mentioned?", options:["A. Scientists might steal genetic discoveries","B. Insurance companies might use genomic data to set premiums","C. Hospitals might sell DNA","D. Genetic testing is too expensive"], answer:1,
        explanation:"El texto dice: 'Should insurance companies be permitted to use genomic data when setting premiums?'",
        correctEs:"B. Insurance companies using genomic data for premiums = aseguradoras usando datos genómicos para fijar primas" },
      { q:"The phrase 'outstripping the development' means:", options:["A. Slowing down advances","B. Catching up with progress","C. Advancing faster than","D. Stopping progress"], answer:2,
        explanation:"'Outstripping' = superar en velocidad / avanzar más rápido que. La tecnología avanza más rápido que los marcos legales.",
        correctEs:"C. Advancing faster than = avanzando más rápido que (los marcos legales y éticos)" },
    ]
  },
  {
    id:"renewable_energy", level:"hard",
    meta:"Texto Avanzado — Tecnologia",
    title:"The Renewable Energy Revolution",
    body:`The transition from fossil fuels to renewable energy sources represents one of the most significant economic and technological transformations of the 21st century. Solar and wind power, once considered prohibitively expensive niche technologies, have become the cheapest sources of new electricity generation in most of the world. The cost of solar photovoltaic panels has fallen by more than 89% over the past decade, driven by technological improvements and economies of scale achieved through massive manufacturing expansion, primarily in China.

The pace of renewable energy deployment has accelerated beyond most experts' predictions. In 2023, renewable sources accounted for approximately 30% of global electricity generation, with solar power alone growing by a record 36% in a single year. Several countries, including Denmark, Uruguay and Iceland, now generate the vast majority of their electricity from renewable sources.

However, the transition faces significant technical and economic challenges. The intermittent nature of solar and wind power — they generate electricity only when the sun shines or wind blows — requires substantial investment in energy storage technologies and grid infrastructure to ensure reliable supply. Battery technology, while improving rapidly, remains expensive at the scale required for grid-level storage.

The social and geopolitical dimensions of the transition are equally complex. Communities dependent on coal mining or oil production face significant economic disruption. New supply chains for critical minerals such as lithium, cobalt and rare earth elements — essential for batteries and wind turbines — are creating new patterns of resource dependency that may replicate some of the geopolitical tensions associated with oil.`,
    questions:[
      { q:"According to the text, by how much have solar panel costs fallen over the past decade?", options:["A. By 36%","B. By 50%","C. By 89%","D. By 30%"], answer:2,
        explanation:"El texto dice: 'The cost of solar photovoltaic panels has fallen by more than 89% over the past decade.'",
        correctEs:"C. By more than 89% = más del 89% de reducción en costos" },
      { q:"What is the main technical challenge of solar and wind power?", options:["A. They produce too much electricity","B. They are too expensive to build","C. Their intermittent nature requires energy storage solutions","D. They cannot be connected to existing power grids"], answer:2,
        explanation:"El texto dice: 'The intermittent nature of solar and wind power requires substantial investment in energy storage technologies.'",
        correctEs:"C. Their intermittent nature requires energy storage = su naturaleza intermitente requiere almacenamiento de energía" },
      { q:"What social consequence of the energy transition does the text describe?", options:["A. New jobs are created everywhere equally","B. Communities dependent on fossil fuels face economic disruption","C. Renewable energy creates no pollution","D. Energy prices will immediately fall for consumers"], answer:1,
        explanation:"El texto dice: 'Communities dependent on coal mining or oil production face significant economic disruption.'",
        correctEs:"B. Communities dependent on fossil fuels face economic disruption = comunidades dependientes de combustibles fósiles enfrentan disrupciones económicas" },
      { q:"The word 'replicate' in the last paragraph most likely means:", options:["A. Prevent","B. Copy or reproduce","C. Improve","D. Eliminate"], answer:1,
        explanation:"'Replicate' = replicar = copiar, reproducir. Las nuevas dependencias pueden reproducir las tensiones geopolíticas del petróleo.",
        correctEs:"B. Copy or reproduce = copiar o reproducir (las tensiones geopoliticas)" },
    ]
  },
];



// ══════════════════════════════════════════
//  QUESTIONS (opción múltiple independiente)
// ══════════════════════════════════════════

const QUESTIONS = {
  easy: [
    { context:"Avisos y señales", q:"You see a sign: 'Don't feed the monkeys!' Where are you most likely?",
      options:["A. At a supermarket","B. At the beach","C. At a zoo","D. In a classroom"], answer:2,
      explanation:"'Don't feed the monkeys' es una señal típica del zoológico para proteger a los animales.",
      correctEs:"C. At a zoo = en el zoológico",
      example:"Sign at the zoo: 'Don't feed the monkeys! NO CAMERAS. NO PHOTOS.'",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Avisos y señales", q:"A notice says: 'Silence, please!' Where can you see this sign?",
      options:["A. In a library","B. At a sports center","C. At a restaurant","D. On a playground"], answer:0,
      explanation:"'Silence, please!' es una señal común en bibliotecas donde la gente lee y estudia en silencio.",
      correctEs:"A. In a library = en una biblioteca",
      example:"Silence, please! This is a library — typical sign where quiet is required.",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Conversaciones básicas", q:"— 'It seems I'll be the new boss of the business department.' — '______'",
      options:["A. Excuse me!","B. It's ready!","C. Congratulations!","D. Come back!"], answer:2,
      explanation:"Cuando alguien recibe una buena noticia como una promoción, decimos 'Congratulations!' para celebrar.",
      correctEs:"C. Congratulations! = ¡Felicitaciones!",
      example:"— I got the promotion! — Congratulations! You deserve it.",
      video:"https://www.youtube.com/watch?v=fEA5d5YaUNk" },
    { context:"Profesiones", q:"They make fantastic food in restaurants. What profession is this?",
      options:["A. Nurses","B. Chefs","C. Drivers","D. Teachers"], answer:1,
      explanation:"Los chefs son los profesionales de cocina que preparan comida en restaurantes y hoteles.",
      correctEs:"B. Chefs = cocineros / chefs",
      example:"Chefs make fantastic food in restaurants. They are experts in cooking.",
      video:"https://www.youtube.com/watch?v=9Kd87KUwQuo" },
    { context:"Profesiones", q:"They visit you when your teeth hurt. What is this person?",
      options:["A. A driver","B. A nurse","C. A dentist","D. A farmer"], answer:2,
      explanation:"Los dentistas son los profesionales de salud especializados en dientes y salud oral.",
      correctEs:"C. A dentist = un dentista",
      example:"Dentists help you when your teeth hurt. They work in dental clinics.",
      video:"https://www.youtube.com/watch?v=9Kd87KUwQuo" },
    { context:"Deportes", q:"'People who play this are usually very tall.' What sport is it?",
      options:["A. Skiing","B. Swimming","C. Baseball","D. Basketball"], answer:3,
      explanation:"Los jugadores de baloncesto son típicamente altos porque la altura da ventaja para alcanzar el aro.",
      correctEs:"D. Basketball = baloncesto",
      example:"People who play basketball are usually very tall — height gives a big advantage.",
      video:"https://www.youtube.com/watch?v=Hs2NNRSdKgU" },
    { context:"Deportes", q:"'To play this, you hit the ball and run.' What sport is it?",
      options:["A. Basketball","B. Skiing","C. Baseball","D. Swimming"], answer:2,
      explanation:"En el béisbol, el jugador golpea la pelota con un bate y corre por las bases.",
      correctEs:"C. Baseball = béisbol (hit the ball and run)",
      example:"To play baseball, you hit the ball and run around the bases.",
      video:"https://www.youtube.com/watch?v=Hs2NNRSdKgU" },
    { context:"Ropa / Accesorios", q:"'With this, your neck won't be cold.' What item is this?",
      options:["A. Socks","B. Glasses","C. Scarf","D. Skirt"], answer:2,
      explanation:"Una bufanda se usa alrededor del cuello para mantenerse abrigado en clima frío.",
      correctEs:"C. Scarf = bufanda (protege el cuello del frío)",
      example:"In winter, I wear a scarf so my neck won't be cold.",
      video:"https://www.youtube.com/watch?v=UkqvBX_bkfc" },
    { context:"Ropa / Accesorios", q:"'When people can't see well, they need them.' What are these?",
      options:["A. Socks","B. Glasses","C. Handbags","D. Skirts"], answer:1,
      explanation:"Las gafas/anteojos son lo que la gente necesita cuando no puede ver bien.",
      correctEs:"B. Glasses = gafas / anteojos (para ver mejor)",
      example:"When people can't see well, they need glasses — lenses that help your vision.",
      video:"https://www.youtube.com/watch?v=UkqvBX_bkfc" },
    { context:"Avisos y señales", q:"'WARNING! YOU ARE BEING WATCHED.' Where would you most likely see this?",
      options:["A. In a school","B. At the park","C. In a bank","D. At the cinema"], answer:2,
      explanation:"Los avisos de seguridad 'Estás siendo observado/grabado' son comunes en bancos y tiendas con cámaras.",
      correctEs:"C. In a bank = en un banco (cámara de seguridad)",
      example:"Banks use security cameras and post warnings like 'You are being watched.'",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Avisos y señales", q:"A sign says 'WRONG WAY'. Where would you most likely see it?",
      options:["A. In a library","B. In a theatre","C. On a road","D. At a zoo"], answer:2,
      explanation:"'Wrong Way' es una señal de tránsito que se ve en las carreteras para indicar dirección prohibida.",
      correctEs:"C. On a road = en una carretera / vía pública",
      example:"The sign on the road says: WRONG WAY — don't turn here.",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Señales en el cine", q:"A sign says: 'NOW SHOWING: MADAGASCAR'. Where is this?",
      options:["A. In a street","B. At the cinema","C. In an airplane","D. In a school"], answer:1,
      explanation:"'Now Showing' es una expresión usada en los cines para anunciar las películas en cartelera.",
      correctEs:"B. At the cinema = en el cine ('Now Showing' = ahora en cartelera)",
      example:"Now Showing: MADAGASCAR — at our cinema this week!",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
  ],
  medium: [
    { context:"Texto: I'll Be a Nurse", q:"It's good if a nurse is _____.",
      options:["A. excited","B. attractive","C. friendly","D. famous"], answer:2,
      explanation:"El texto dice que las enfermeras deben ser 'kind, brave, and really nice with people' = friendly.",
      correctEs:"C. friendly = amable / agradable con las personas",
      example:"'Nurses should be quite kind, brave, and really nice with people.'",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Present Perfect", q:"Choose the correct sentence using Present Perfect:",
      options:["A. She worked as a nurse last year.","B. She has always dreamed of being a nurse.","C. She was dreaming of being a nurse.","D. She will dream of being a nurse."], answer:1,
      explanation:"Present Perfect (have/has + past participle) se usa para experiencias de vida relevantes hasta hoy.",
      correctEs:"B. She has always dreamed = ella siempre ha soñado (Present Perfect)",
      example:"I have always dreamed of being a nurse. (Toda mi vida he soñado con ser enfermera.)",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Gramática: Present Continuous", q:"'I ___ making an effort to become more of a morning person.' Choose the correct form:",
      options:["A. made","B. make","C. am making","D. have made"], answer:2,
      explanation:"Present Continuous (am/is/are + verb-ing) describe una acción en progreso en este momento o período.",
      correctEs:"C. am making = estoy haciendo (acción en progreso ahora)",
      example:"I am making an effort — está ocurriendo ahora / en este período de tiempo.",
      video:"https://www.youtube.com/watch?v=Bs7Qcb0mncc" },
    { context:"Vocabulario: Hábitos matutinos", q:"'I postpone the alarm many times.' What does 'postpone' mean?",
      options:["A. Ring the alarm","B. Turn off the alarm permanently","C. Delay something to a later time","D. Buy a new alarm"], answer:2,
      explanation:"'Postpone' significa retrasar/aplazar algo para después. Posponer la alarma = darle snooze.",
      correctEs:"C. Delay something to a later time = aplazar / retrasar para después",
      example:"I postpone the alarm many times every morning — it's a bad habit I want to stop.",
      video:"https://www.youtube.com/watch?v=3T1fHMrW7Fo" },
    { context:"Vocabulario: Ivan Moscovich", q:"'He was a legend in the world of puzzles.' What does 'legend' mean here?",
      options:["A. A fictional story","B. A map key","C. A very famous and respected person","D. An old book"], answer:2,
      explanation:"'Legend' en este contexto significa una persona muy famosa y respetada en su campo.",
      correctEs:"C. A very famous and respected person = una persona muy famosa y respetada",
      example:"Ivan Moscovich was a legend — everyone in the puzzle world knew his name.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Past Simple", q:"'In 2020, he ___ an important prize from the US toy industry.'",
      options:["A. win","B. won","C. has won","D. winning"], answer:1,
      explanation:"En 2020 es una fecha específica en el pasado → Past Simple. 'Won' es el pasado irregular de 'win'.",
      correctEs:"B. won = ganó (Past Simple de 'win')",
      example:"In 2020, he won an important prize. (Fecha específica pasada → Past Simple)",
      video:"https://www.youtube.com/watch?v=KK6BRJm8p90" },
    { context:"Vocabulario: Coffee", q:"'Coffee can reduce headaches thanks to caffeine.' What does 'reduce' mean?",
      options:["A. Cause / produce","B. Increase / make worse","C. Decrease / make less","D. Prevent / stop completely"], answer:2,
      explanation:"'Reduce' significa disminuir / hacer menos. El café puede disminuir la intensidad de los dolores de cabeza.",
      correctEs:"C. Decrease / make less = disminuir / reducir",
      example:"Coffee can reduce headaches — it makes them less intense.",
      video:"https://www.youtube.com/watch?v=IjJHFVq-3Mc" },
    { context:"Vocabulario: Salud", q:"'They found an ambulance and took me to the hospital.' What is an ambulance?",
      options:["A. A medical building","B. A vehicle that transports sick people quickly","C. A doctor who visits homes","D. A type of medicine"], answer:1,
      explanation:"Una ambulancia es un vehículo especial equipado para transportar personas enfermas al hospital rápidamente.",
      correctEs:"B. A vehicle that transports sick people = un vehículo que transporta enfermos",
      example:"They found an ambulance and took me to the hospital right away.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
  ],
  hard: [
    { context:"Texto: James Salter", q:"'Passionate Falsehoods was adapted from Salter's book.' What does 'adapted' mean?",
      options:["A. Copied exactly","B. Changed into a different format","C. Translated to another language","D. Rejected by publishers"], answer:1,
      explanation:"'Adapted' significa transformado de un formato a otro. El libro fue convertido en película = adaptado.",
      correctEs:"B. Changed into a different format = transformado en otro formato (libro → película)",
      example:"Passionate Falsehoods was adapted from Salter's book — the book became a movie.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Lectura inferencial", q:"'Salter thought he was wasting his time.' This means he felt his film work was:",
      options:["A. Too dangerous","B. Not useful or worthwhile","C. Very complicated","D. Extremely creative"], answer:1,
      explanation:"'Wasting his time' = perdiendo el tiempo. Sentía que el trabajo en cine no valía la pena.",
      correctEs:"B. Not useful or worthwhile = no útil / no valía la pena",
      example:"'Of sixteen texts for movies, only four were popular.' He was wasting his time.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Past Perfect", q:"Choose the correct sentence using Past Perfect:",
      options:["A. She wrote a book when she was young.","B. She had written the book before she became famous.","C. She is writing a book about her life.","D. She writes books about Caribbean life."], answer:1,
      explanation:"Past Perfect (had + participio pasado) se usa para mostrar una acción COMPLETADA ANTES de otro evento pasado.",
      correctEs:"B. had written = había escrito (acción completada ANTES de hacerse famosa)",
      example:"She had written the book before she became famous. (Primero escribió → después se hizo famosa.)",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Conectores lógicos", q:"'___ it wasn't her goal to be a recognized author, this quickly became her reality.'",
      options:["A. Unless","B. Since","C. Although","D. Whenever"], answer:2,
      explanation:"'Although' (aunque) introduce un contraste/concesión. Aunque no era su meta, se convirtió en autora.",
      correctEs:"C. Although = aunque (introduce contraste entre dos ideas opuestas)",
      example:"Although it wasn't her goal, she became a recognized author.",
      video:"https://www.youtube.com/watch?v=GQAUNZoGxFg" },
    { context:"Texto: Swift Pizza", q:"Mark 'wins £25 for writing about us this week.' This means Mark:",
      options:["A. Paid £25 to eat at the restaurant","B. Won a prize for writing a customer review","C. Spent £25 on food and drinks","D. Received a gift card from YouTube"], answer:1,
      explanation:"'Wins £25 for writing about us' = ganó £25 por escribir sobre el restaurante = publicó una reseña.",
      correctEs:"B. Won a prize for writing a customer review = ganó un premio por escribir una reseña",
      example:"He wins £25 for writing about us this week — he wrote an excellent customer review.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Lectura inferencial: Coffee", q:"'Although many people believe coffee is bad, studies show it is good for your heart.' This sentence shows:",
      options:["A. Coffee is definitely bad for health","B. There are conflicting views about coffee's effects","C. Scientists all agree coffee is harmful","D. Coffee has no health benefits at all"], answer:1,
      explanation:"La frase presenta dos ideas opuestas (creencia popular vs. estudios científicos) = puntos de vista contradictorios.",
      correctEs:"B. There are conflicting views = hay puntos de vista contradictorios sobre el café",
      example:"Although many believe it's bad, studies show it's good for your heart — two opposite views.",
      video:"https://www.youtube.com/watch?v=IjJHFVq-3Mc" },
    { context:"Gramática: Conectores", q:"'Coffee can reduce headaches ___ blood problems.'",
      options:["A. except","B. and","C. but","D. or"], answer:1,
      explanation:"'And' es el conector para sumar dos beneficios similares. El café reduce dolores de cabeza Y problemas de presión.",
      correctEs:"B. and = y (suma dos beneficios del café)",
      example:"Coffee can reduce headaches and blood problems. (Dos beneficios unidos con 'and')",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Vocabulario avanzado", q:"'Her texts often deal with the relationships between mothers and daughters.' What does 'deal with' mean?",
      options:["A. Sell / trade","B. Be about / treat the subject of","C. Disagree with","D. Finish / end"], answer:1,
      explanation:"'Deal with' en contexto literario significa 'tratar de / ser sobre'. Sus textos son SOBRE las relaciones madre-hija.",
      correctEs:"B. Be about / treat the subject of = tratar sobre el tema de",
      example:"Her texts deal with mother-daughter relationships — they are about this theme.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
  ]
};


// ══════════════════════════════════════════
//  DIALOGS
// ══════════════════════════════════════════

const DIALOGS = [
  { level:"easy", scene:"🍽️ Estás en un restaurante y el mesero te avisa que tu comida está lista.",
    bubbles:[{who:"👤 Mesero",text:"Your food is ready, sir!"}],
    q:"What is the best response?",
    options:["A. Never again!","B. Congratulations!","C. Thank you! It smells great."],
    answer:2, explanation:"La respuesta más natural y educada es agradecer y comentar positivamente.",
    correctEs:"C. Thank you! It smells great. = ¡Gracias! Huele delicioso.",
    example:"— Your food is ready! — Thank you! It smells great." },
  { level:"easy", scene:"🌧️ Tu amigo te dice que va a llover mañana.",
    bubbles:[{who:"👦 Amigo",text:"It will rain tomorrow for sure."}],
    q:"What is the best response?",
    options:["A. Why not?","B. For sure? Let's bring umbrellas!","C. Lucky you."],
    answer:1, explanation:"'For sure? Let's bring umbrellas!' confirma la información y propone una solución práctica.",
    correctEs:"B. For sure? Let's bring umbrellas! = ¿Seguro? ¡Llevemos sombrillas!",
    example:"— It will rain. — For sure? Let's bring umbrellas then!" },
  { level:"easy", scene:"🎂 Tu mejor amigo acaba de llegar a su fiesta sorpresa.",
    bubbles:[{who:"🎉 Todos",text:"Happy Birthday! We love you so much!"}],
    q:"What is the best response from the birthday person?",
    options:["A. Excuse me?","B. Thank you all! This is amazing!","C. Not bad."],
    answer:1, explanation:"Cuando todos te desean feliz cumpleaños, la respuesta apropiada es agradecer con entusiasmo.",
    correctEs:"B. Thank you all! This is amazing! = ¡Gracias a todos! ¡Esto es increíble!",
    example:"— Happy Birthday! We love you! — Thank you all! This is so amazing!" },
  { level:"easy", scene:"🏥 En el consultorio médico. El doctor entra a verte.",
    bubbles:[{who:"👨‍⚕️ Doctor",text:"How are you feeling today?"}],
    q:"What is the best response for a sick patient?",
    options:["A. Not bad, thanks.","B. I feel terrible. I have a headache and fever.","C. Congratulations!"],
    answer:1, explanation:"Cuando un doctor pregunta cómo te sientes, debes describir tus síntomas para recibir la ayuda correcta.",
    correctEs:"B. I feel terrible. I have a headache and fever. = Me siento terrible. Tengo dolor de cabeza y fiebre.",
    example:"— How are you feeling? — I feel terrible. I have a headache and a fever." },
  { level:"medium", scene:"👵 Tu abuela carga muchas bolsas de mercado y se ve cansada.",
    bubbles:[{who:"👵 Abuela",text:"Oh, these bags are so heavy..."}],
    q:"'Grandma, shall I hold those bags for you?' — Grandma's best response:",
    options:["A. I'm not afraid!","B. What's the matter?","C. That's fine, thank you dear!"],
    answer:2, explanation:"'That's fine, thank you!' es una respuesta educada y afectuosa para aceptar la oferta de ayuda.",
    correctEs:"C. That's fine, thank you! = Está bien, ¡gracias querido/a!",
    example:"— Shall I hold your bags? — That's fine, thank you! You're so kind." },
  { level:"medium", scene:"🛒 Estás de compras en una tienda y ves una sombrilla bonita.",
    bubbles:[{who:"👤 Tú",text:"How much is that umbrella?"}],
    q:"What is the best response from the store assistant?",
    options:["A. Anything else?","B. It's fifty dollars.","C. Cash only!"],
    answer:1, explanation:"Cuando alguien pregunta el precio, la respuesta más directa y útil es dar el precio exacto.",
    correctEs:"B. It's fifty dollars. = Son cincuenta dólares.",
    example:"— How much is that umbrella? — It's fifty dollars. Do you want it?" },
  { level:"medium", scene:"📞 Tu amigo te llama y pregunta si olvidaste algo importante.",
    bubbles:[{who:"📱 Amigo",text:"Did you forget about our meeting today?"}],
    q:"What is the best honest response if you forgot?",
    options:["A. Maybe next time.","B. I guess I did! I'm so sorry!","C. It finished late."],
    answer:1, explanation:"'I guess I did' es la manera natural y honesta de admitir que olvidaste algo, seguida de disculpa.",
    correctEs:"B. I guess I did! I'm so sorry! = ¡Creo que sí lo olvidé! ¡Lo siento mucho!",
    example:"— Did you forget? — I guess I did! I'm so sorry, I was very busy." },
  { level:"medium", scene:"🏆 Tu colega acaba de enterarse que obtuvo una gran promoción.",
    bubbles:[{who:"😊 Colega",text:"It seems I'll be the new boss of the business department!"}],
    q:"What is the best response?",
    options:["A. Excuse me!","B. It's ready!","C. Congratulations!"],
    answer:2, explanation:"'Congratulations!' es la respuesta estándar cuando alguien logra algo importante como una promoción.",
    correctEs:"C. Congratulations! = ¡Felicitaciones!",
    example:"— I'm the new boss! — Congratulations! You really deserve it." },
  { level:"hard", scene:"🌂 Estás mirando afuera y el cielo está muy nublado. Tu amigo dice:",
    bubbles:[{who:"👤 Amigo",text:"It will rain. Should we postpone the trip?"}],
    q:"What is the most logical response?",
    options:["A. What a pity! But you're right, let's wait.","B. No, you can't!","C. Let's drive now, immediately!"],
    answer:0, explanation:"'What a pity! But you're right, let's wait.' expresa decepción y acepta sensatamente la sugerencia.",
    correctEs:"A. What a pity! But you're right, let's wait. = ¡Qué lástima! Pero tienes razón, esperemos.",
    example:"— It will rain. — What a pity! But you're right, let's wait until tomorrow." },
  { level:"hard", scene:"📚 En clase de inglés. El profesor acaba de terminar la explicación.",
    bubbles:[{who:"👨‍🏫 Profesor",text:"Did everyone understand the difference between Past Simple and Past Perfect?"}],
    q:"What is the best response if you didn't understand?",
    options:["A. Yes, perfectly!","B. Not really. Could you explain it again, please?","C. It was too long."],
    answer:1, explanation:"La respuesta más honesta y académicamente apropiada es admitir que no entendiste y pedir una explicación.",
    correctEs:"B. Not really. Could you explain it again? = No del todo. ¿Podría explicarlo de nuevo?",
    example:"— Did everyone understand? — Not really. Could you explain it again, please?" },
];

// ══════════════════════════════════════════
//  RESOURCES
// ══════════════════════════════════════════

const RESOURCES = [
  { topic:"Present Simple", icon:"📝", title:"Present Simple — Full Lesson for Beginners", channel:"English with Lucy", url:"https://www.youtube.com/watch?v=FHi-j2R2bGo", duration:"14 min" },
  { topic:"Present Continuous", icon:"⏳", title:"Present Continuous — When & How to Use It", channel:"English Grammar Revolution", url:"https://www.youtube.com/watch?v=Bs7Qcb0mncc", duration:"8 min" },
  { topic:"Past Simple", icon:"🕐", title:"Past Simple Tense — Complete Lesson", channel:"Learn English with Rebecca", url:"https://www.youtube.com/watch?v=KK6BRJm8p90", duration:"12 min" },
  { topic:"Present Perfect", icon:"✅", title:"Present Perfect vs Past Simple (Explained!)", channel:"BBC Learning English", url:"https://www.youtube.com/watch?v=LIe3UxCYQWI", duration:"7 min" },
  { topic:"Past Perfect", icon:"🔙", title:"Past Perfect Tense Made Easy", channel:"English Grammar Revolution", url:"https://www.youtube.com/watch?v=LIe3UxCYQWI", duration:"9 min" },
  { topic:"Future Tenses", icon:"🚀", title:"Will vs Going To — Future Tenses Explained", channel:"English with Lucy", url:"https://www.youtube.com/watch?v=YMJhcNpEJtw", duration:"10 min" },
  { topic:"Vocabulario Hospital", icon:"🏥", title:"Medical & Hospital Vocabulary in English", channel:"Twominute English", url:"https://www.youtube.com/watch?v=XAVyLOy4Y3I", duration:"6 min" },
  { topic:"Rutinas Diarias", icon:"⏰", title:"Daily Routine Vocabulary & Phrases", channel:"Learn English with Emma", url:"https://www.youtube.com/watch?v=3T1fHMrW7Fo", duration:"9 min" },
  { topic:"Comprensión Lectora", icon:"📖", title:"How to Improve Reading Comprehension", channel:"JamesESL English Lessons", url:"https://www.youtube.com/watch?v=4drs1MJgCjE", duration:"11 min" },
  { topic:"Vocabulario Ropa", icon:"👔", title:"Clothes and Fashion Vocabulary", channel:"English with Lucy", url:"https://www.youtube.com/watch?v=UkqvBX_bkfc", duration:"8 min" },
  { topic:"Vocabulario Deportes", icon:"⚽", title:"Sports Vocabulary in English", channel:"Twominute English", url:"https://www.youtube.com/watch?v=Hs2NNRSdKgU", duration:"5 min" },
  { topic:"Conversaciones Básicas", icon:"💬", title:"Basic English Conversations for Beginners", channel:"English Singsing", url:"https://www.youtube.com/watch?v=fEA5d5YaUNk", duration:"13 min" },
  { topic:"Vocabulario Lugares", icon:"🏢", title:"Places in a City / Mall Vocabulary", channel:"Smile and Learn", url:"https://www.youtube.com/watch?v=ypkBRLmJLW8", duration:"6 min" },
  { topic:"Modismos en Inglés", icon:"🎭", title:"Common English Idioms and Expressions", channel:"Learn English with TV Series", url:"https://www.youtube.com/watch?v=GQAUNZoGxFg", duration:"10 min" },
  { topic:"Tips Saber 11", icon:"🏆", title:"Cómo prepararse para el inglés del ICFES", channel:"Aprende con la Profe", url:"https://www.youtube.com/watch?v=IjJHFVq-3Mc", duration:"15 min" },
  { topic:"Conectores Lógicos", icon:"🔗", title:"Linking Words and Connectors in English", channel:"English with Lucy", url:"https://www.youtube.com/watch?v=GQAUNZoGxFg", duration:"12 min" },
  { topic:"Voz Pasiva", icon:"🔄", title:"Passive Voice — Complete English Grammar", channel:"English Grammar Revolution", url:"https://www.youtube.com/watch?v=LIe3UxCYQWI", duration:"10 min" },
  { topic:"Lectura Inferencial", icon:"🔍", title:"How to Make Inferences While Reading", channel:"JamesESL English Lessons", url:"https://www.youtube.com/watch?v=4drs1MJgCjE", duration:"8 min" },
];



// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════

const defaultState = () => ({
  totalAnswered:0, totalCorrect:0, totalWrong:0,
  streak:0, bestStreak:0,
  levelAnswered:{easy:0,medium:0,hard:0},
  levelCorrect:{easy:0,medium:0,hard:0},
  modeStats:{ flashcards:{correct:0,wrong:0}, multiple:{correct:0,wrong:0},
              reading:{correct:0,wrong:0}, dialogs:{correct:0,wrong:0},
              exam:{correct:0,wrong:0}, fullexam:{correct:0,wrong:0} },
  history:[], lastSection:"home", lastLevel:"easy", lastMode:"flashcards"
});

let state = JSON.parse(localStorage.getItem("em_state_v2") || "null") || defaultState();
// Migrate old state if missing modeStats
if (!state.modeStats) {
  state.modeStats = { flashcards:{correct:0,wrong:0}, multiple:{correct:0,wrong:0},
    reading:{correct:0,wrong:0}, dialogs:{correct:0,wrong:0},
    exam:{correct:0,wrong:0}, fullexam:{correct:0,wrong:0} };
}
function saveState(){ localStorage.setItem("em_state_v2", JSON.stringify(state)); }



// ══════════════════════════════════════════
//  AUDIO ENGINE (Web Audio API)
// ══════════════════════════════════════════

let audioCtx = null;
let soundEnabled = true;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playCorrect() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523, now);
    osc.frequency.setValueAtTime(659, now + 0.1);
    osc.frequency.setValueAtTime(784, now + 0.2);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.start(now); osc.stop(now + 0.45);
  } catch(e) {}
}

function playWrong() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.25);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.start(now); osc.stop(now + 0.3);
  } catch(e) {}
}

function playPartial() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.setValueAtTime(380, now + 0.15);
    gain.gain.setValueAtTime(0.13, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now); osc.stop(now + 0.35);
  } catch(e) {}
}

// Sound toggle button
document.getElementById("soundToggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  document.getElementById("soundToggle").textContent = soundEnabled ? "🔊" : "🔇";
  showToast(soundEnabled ? "🔊 Sonido activado" : "🔇 Sonido desactivado");
});

// ══════════════════════════════════════════
//  SRS (Spaced Repetition System)
// ══════════════════════════════════════════

function getSRSData() {
  return JSON.parse(localStorage.getItem("em_srs") || "{}");
}
function saveSRSData(d) { localStorage.setItem("em_srs", JSON.stringify(d)); }

function getSRSEntry(word) {
  const d = getSRSData();
  return d[word] || { correct:0, partial:0, wrong:0, lastReview:null, mastery:0 };
}

function updateSRS(word, result) {
  // result: 'correct' | 'partial' | 'wrong'
  const d = getSRSData();
  if (!d[word]) d[word] = { correct:0, partial:0, wrong:0, lastReview:null, mastery:0 };
  const e = d[word];
  e.lastReview = Date.now();
  if (result === 'correct') { e.correct++; e.mastery = Math.min(5, e.mastery + 1); }
  else if (result === 'partial') { e.partial++; e.mastery = Math.max(0, e.mastery - 0.5); }
  else { e.wrong++; e.mastery = Math.max(0, e.mastery - 2); }
  saveSRSData(d);
}

function getSRSLabel(word) {
  const e = getSRSEntry(word);
  const total = e.correct + e.partial + e.wrong;
  if (total === 0) return { text:"Nueva", cls:"srs-new" };
  if (e.mastery >= 4) return { text:"Dominada ✓", cls:"srs-mastered" };
  if (e.wrong > e.correct) return { text:"Difícil 🔴", cls:"srs-hard" };
  return { text:"Aprendiendo", cls:"srs-learning" };
}

// Sort flashcards by SRS priority (hard words first)
function sortBySRS(items) {
  const d = getSRSData();
  return [...items].sort((a, b) => {
    const ea = d[a.word] || { mastery:0, wrong:0 };
    const eb = d[b.word] || { mastery:0, wrong:0 };
    // Lower mastery and more wrong = higher priority
    const pa = (ea.wrong * 2) - ea.mastery;
    const pb = (eb.wrong * 2) - eb.mastery;
    return pb - pa;
  });
}

// ══════════════════════════════════════════
//  TEXT NORMALIZER for flashcard comparison
// ══════════════════════════════════════════

function normalize(str) {
  return str.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[¡!¿?.,;:'"()]/g, "")   // remove punctuation
    .replace(/\s+/g, " ")              // collapse spaces
    .trim();
}

function compareAnswers(userAnswer, correctAnswer) {
  const uNorm = normalize(userAnswer);
  const cNorm = normalize(correctAnswer);
  if (!uNorm) return "wrong";

  // Direct match
  if (uNorm === cNorm) return "correct";

  // The correct answer may have multiple variants separated by / or ,
  const variants = cNorm.split(/[\/,]/).map(v => v.trim()).filter(Boolean);
  for (const v of variants) {
    if (uNorm === v) return "correct";
    // Partial: user answer contains one of the variants or vice versa
    if (v.includes(uNorm) || uNorm.includes(v)) return "partial";
  }
  // Check if user is close: shared words
  const uWords = uNorm.split(" ");
  const cWords = cNorm.split(" ");
  const shared = uWords.filter(w => w.length > 2 && cWords.includes(w));
  if (shared.length >= Math.ceil(Math.min(uWords.length, cWords.length) / 2)) return "partial";

  return "wrong";
}


// ══════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════

function navigate(sectionId){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l=>l.classList.remove("active"));
  const el = document.getElementById(sectionId);
  if(el) el.classList.add("active");
  const ln = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if(ln) ln.classList.add("active");
  state.lastSection = sectionId; saveState();
  window.scrollTo({top:0,behavior:"smooth"});
  closeMenu();
  if(sectionId==="home") updateDashboard();
  if(sectionId==="stats") updateStatsPage();
  if(sectionId==="resources") renderResources();
}

document.querySelectorAll(".nav-link").forEach(l=>{
  l.addEventListener("click",e=>{ e.preventDefault(); navigate(l.dataset.section); });
});

document.addEventListener("click",e=>{
  const el = e.target.closest("[data-nav]");
  if(!el) return;
  const sec=el.dataset.nav, lvl=el.dataset.lvl, mode=el.dataset.mode;
  if(lvl) selectedLevel=lvl;
  if(mode) selectedMode=mode;
  navigate(sec);
  if(sec==="study"&&lvl&&mode){ updateStudyToggles(); startStudy(); }
  else if(sec==="study"){ showStudySelector(); }
});

document.getElementById("menuToggle").addEventListener("click",()=>{
  document.getElementById("topnav").classList.toggle("open");
});
function closeMenu(){ document.getElementById("topnav").classList.remove("open"); }

// ══════════════════════════════════════════
//  THEME
// ══════════════════════════════════════════

const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("em_theme")||"light";
document.documentElement.setAttribute("data-theme",savedTheme);
themeBtn.textContent = savedTheme==="dark"?"☀️":"🌙";
themeBtn.addEventListener("click",()=>{
  const cur=document.documentElement.getAttribute("data-theme");
  const next=cur==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  themeBtn.textContent=next==="dark"?"☀️":"🌙";
  localStorage.setItem("em_theme",next);
});

// ══════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════

function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

function updateDashboard(){
  document.getElementById("statTotal").textContent=state.totalAnswered;
  document.getElementById("statCorrect").textContent=state.totalCorrect;
  document.getElementById("statWrong").textContent=state.totalWrong;
  const pct=state.totalAnswered?Math.round((state.totalCorrect/state.totalAnswered)*100):0;
  document.getElementById("statPct").textContent=pct+"%";
  ["easy","medium","hard"].forEach(lvl=>{
    const ans=state.levelAnswered[lvl]||0;
    const total=(QUESTIONS[lvl]||[]).length+DIALOGS.filter(d=>d.level===lvl).length;
    const p=total?Math.min(100,Math.round((ans/total)*100)):0;
    document.getElementById(`progBar${cap(lvl)}`).style.width=p+"%";
    document.getElementById(`progPct${cap(lvl)}`).textContent=p+"%";
  });
}

document.getElementById("btnContinue").addEventListener("click",()=>{
  selectedLevel=state.lastLevel||"easy";
  selectedMode=state.lastMode||"flashcards";
  navigate("study"); updateStudyToggles(); startStudy();
});

// ══════════════════════════════════════════
//  STUDY SETUP
// ══════════════════════════════════════════

let selectedLevel="easy", selectedMode="flashcards";

function updateStudyToggles(){
  document.querySelectorAll("#lvlGroup .toggle-btn").forEach(b=>b.classList.toggle("active",b.dataset.val===selectedLevel));
  document.querySelectorAll("#modeGroup .toggle-btn").forEach(b=>b.classList.toggle("active",b.dataset.val===selectedMode));
}
document.querySelectorAll("#lvlGroup .toggle-btn").forEach(b=>b.addEventListener("click",()=>{ selectedLevel=b.dataset.val; updateStudyToggles(); }));
document.querySelectorAll("#modeGroup .toggle-btn").forEach(b=>b.addEventListener("click",()=>{ selectedMode=b.dataset.val; updateStudyToggles(); }));
document.getElementById("btnStartStudy").addEventListener("click",startStudy);

function showStudySelector(){
  document.getElementById("studySelector").classList.remove("hidden");
  document.getElementById("studyArena").classList.add("hidden");
}

function startStudy(){
  document.getElementById("studySelector").classList.add("hidden");
  document.getElementById("studyArena").classList.remove("hidden");
  state.lastLevel=selectedLevel; state.lastMode=selectedMode; saveState();
  hideModes(); resetArena();
  const lNames={easy:"🌱 Básico A1–A2",medium:"⚡ Intermedio A2–B1",hard:"🔥 Avanzado B1"};
  const mNames={flashcards:"🃏 Flashcards",multiple:"✅ Quiz",reading:"📖 Lectura",dialogs:"💬 Diálogos",exam:"🏆 Examen"};
  document.getElementById("arenaMode").textContent=mNames[selectedMode]||selectedMode;
  document.getElementById("arenaLevel").textContent=lNames[selectedLevel]||selectedLevel;
  if(selectedMode==="flashcards") initFlashcards();
  else if(selectedMode==="multiple") initMultiple();
  else if(selectedMode==="reading") initReading();
  else if(selectedMode==="dialogs") initDialogs();
  else if(selectedMode==="exam") initExam();
}

function hideModes(){
  ["modeFlashcards","modeMultiple","modeReading","modeDialogs","modeExam","modeResult"]
    .forEach(id=>document.getElementById(id).classList.add("hidden"));
}

let arenaCorrect=0,arenaWrong=0,arenaTotal=0,arenaIdx=0;
function resetArena(){ arenaCorrect=0;arenaWrong=0;arenaTotal=0;arenaIdx=0;updateArenaScore(); }
function updateArenaScore(){
  document.getElementById("arenaCorrect").textContent=`✓ ${arenaCorrect}`;
  document.getElementById("arenaWrong").textContent=`✗ ${arenaWrong}`;
  document.getElementById("arenaProgress").textContent=`${arenaIdx}/${arenaTotal}`;
  const pct=arenaTotal?(arenaIdx/arenaTotal)*100:0;
  document.getElementById("arenaPBar").style.width=pct+"%";
}
document.getElementById("btnBackStudy").addEventListener("click",showStudySelector);


// ══════════════════════════════════════════
//  FLASHCARDS — SRS + write-before-reveal
// ══════════════════════════════════════════

let fcItems=[], fcIdx=0;

function initFlashcards(){
  document.getElementById("modeFlashcards").classList.remove("hidden");
  const raw = FLASHCARDS[selectedLevel] || [];
  fcItems = sortBySRS(raw);
  fcIdx=0; arenaTotal=fcItems.length; arenaIdx=0;
  updateArenaScore(); showFC();
}

function showFC(){
  if(fcIdx>=fcItems.length){ showResult(); return; }
  const item=fcItems[fcIdx];

  // SRS badge
  const badge = getSRSLabel(item.word);
  const br = document.getElementById("srsBadgeRow");
  br.innerHTML = `<span class="srs-badge ${badge.cls}">${badge.text}</span>`;

  // Reset card front
  document.getElementById("flashcard").classList.remove("flipped");
  document.getElementById("fcTag").textContent=item.tag||"Vocabulario";
  document.getElementById("fcWord").textContent=item.word;
  document.getElementById("fcTranslation").textContent=item.translation;
  document.getElementById("fcExample").textContent=item.example;
  document.getElementById("fcExampleEs").textContent=item.exampleEs;

  // Show initial buttons, hide panels
  document.getElementById("fcControls").classList.remove("hidden");
  document.getElementById("fcWritePanel").classList.add("hidden");
  document.getElementById("fcResultPanel").classList.add("hidden");
  document.getElementById("fcUserAnswer").value = "";

  arenaIdx=fcIdx; updateArenaScore();
}

// "Lo sé" → show write panel
document.getElementById("fcKnow").addEventListener("click",()=>{
  document.getElementById("fcControls").classList.add("hidden");
  document.getElementById("fcWritePanel").classList.remove("hidden");
  document.getElementById("fcUserAnswer").focus();
});

// Submit written answer
document.getElementById("fcSubmit").addEventListener("click", submitFCAnswer);
document.getElementById("fcUserAnswer").addEventListener("keydown", e=>{
  if(e.key==="Enter") submitFCAnswer();
});

function submitFCAnswer(){
  const item = fcItems[fcIdx];
  const userAns = document.getElementById("fcUserAnswer").value.trim();
  if(!userAns) { document.getElementById("fcUserAnswer").focus(); return; }

  const result = compareAnswers(userAns, item.translation);
  document.getElementById("fcWritePanel").classList.add("hidden");

  // Reveal back of card
  document.getElementById("flashcard").classList.add("flipped");
  showFCResult(item, userAns, result);
}

// "No lo sé" → reveal + mark wrong directly
document.getElementById("fcWrong").addEventListener("click",()=>{
  const item = fcItems[fcIdx];
  document.getElementById("fcControls").classList.add("hidden");
  document.getElementById("flashcard").classList.add("flipped");
  showFCResult(item, "(no respondió)", "wrong");
});

function showFCResult(item, userAns, result){
  const panel = document.getElementById("fcResultPanel");
  const badge = document.getElementById("fcResultBadge");
  const detail = document.getElementById("fcResultDetail");
  panel.classList.remove("hidden");

  if(result==="correct"){
    badge.textContent="✅ ¡Correcto!"; badge.className="fc-result-badge correct";
    arenaCorrect++; updateSRS(item.word, "correct"); playCorrect();
    recordAnswer(true);
  } else if(result==="partial"){
    badge.textContent="⚠️ Parcialmente correcto"; badge.className="fc-result-badge partial";
    arenaWrong++; updateSRS(item.word, "partial"); playPartial();
    recordAnswer(false);
  } else {
    badge.textContent="❌ Incorrecto"; badge.className="fc-result-badge wrong";
    arenaWrong++; updateSRS(item.word, "wrong"); playWrong();
    recordAnswer(false);
  }

  detail.innerHTML = `
    <div class="rcd-row"><span class="rcd-label">Tu respuesta:</span><span class="rcd-val">${userAns}</span></div>
    <div class="rcd-row"><span class="rcd-label">Correcta:</span><span class="rcd-val" style="color:var(--green-dark);font-weight:700">${item.translation}</span></div>
    <div class="rcd-row"><span class="rcd-label">Ejemplo:</span><span class="rcd-val" style="font-style:italic">${item.example}</span></div>
    <div class="rcd-row"><span class="rcd-label">Traducción:</span><span class="rcd-val">${item.exampleEs}</span></div>`;

  updateArenaScore();
  fcIdx++;
}

document.getElementById("fcNext").addEventListener("click", showFC);


// ══════════════════════════════════════════
//  MULTIPLE CHOICE
// ══════════════════════════════════════════

let mqItems=[], mqIdx=0;

function initMultiple(){
  document.getElementById("modeMultiple").classList.remove("hidden");
  mqItems=shuffle([...QUESTIONS[selectedLevel]]);
  mqIdx=0; arenaTotal=mqItems.length; showMQ();
}

function showMQ(){
  if(mqIdx>=mqItems.length){ showResult(); return; }
  const q=mqItems[mqIdx];
  document.getElementById("qContext").textContent=q.context||"";
  document.getElementById("qQuestion").textContent=q.q;
  const opts=document.getElementById("qOptions");
  opts.innerHTML="";
  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="option-btn";
    btn.innerHTML=`<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/,"")}`;
    btn.addEventListener("click",()=>selectMQ(i,q));
    opts.appendChild(btn);
  });
  document.getElementById("qFeedback").classList.add("hidden");
  arenaIdx=mqIdx; updateArenaScore();
}

function selectMQ(chosen,q){
  document.querySelectorAll("#qOptions .option-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.answer) btn.classList.add("correct");
    else if(i===chosen&&chosen!==q.answer) btn.classList.add("wrong");
  });
  const correct=chosen===q.answer;
  if(correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct); updateArenaScore();
  const fb=document.getElementById("qFeedback");
  document.getElementById("fbResult").innerHTML=correct
    ?`<span style="color:var(--green)">✓ ¡Correcto!</span>`
    :`<span style="color:var(--red)">✗ Incorrecto.</span>`;
  const ca=document.getElementById("fbCorrectAnswer");
  ca.textContent=`✓ Respuesta correcta: ${q.correctEs||q.options[q.answer]}`;
  document.getElementById("fbExplanation").textContent=q.explanation||"";
  document.getElementById("fbExample").textContent=q.example?`📌 ${q.example}`:"";
  const vb=document.getElementById("fbVideo");
  if(q.video){vb.href=q.video;vb.classList.remove("hidden");}else{vb.classList.add("hidden");}
  fb.classList.remove("hidden");
  mqIdx++;
}
document.getElementById("btnNextQ").addEventListener("click",showMQ);

// ══════════════════════════════════════════
//  READING
// ══════════════════════════════════════════

let rdTexts=[], rdIdx=0, rdQIdx=0, rdActive=null;

function initReading(){
  document.getElementById("modeReading").classList.remove("hidden");
  const filtered=READING_TEXTS.filter(t=>t.level===selectedLevel);
  rdTexts=filtered.length?filtered:READING_TEXTS;
  rdIdx=0; rdQIdx=0;
  arenaTotal=rdTexts.reduce((s,t)=>s+t.questions.length,0);
  arenaIdx=0; showReadingText();
}

function showReadingText(){
  if(rdIdx>=rdTexts.length){ showResult(); return; }
  rdActive=rdTexts[rdIdx]; rdQIdx=0;
  document.getElementById("readMeta").textContent=rdActive.meta||"";
  document.getElementById("readTitle").textContent=rdActive.title;
  document.getElementById("readBody").textContent=rdActive.body;
  document.getElementById("readFeedback").classList.add("hidden");
  showReadQ();
}

function showReadQ(){
  if(rdQIdx>=rdActive.questions.length){ rdIdx++; showReadingText(); return; }
  const q=rdActive.questions[rdQIdx];
  document.getElementById("readQProgress").textContent=`${rdQIdx+1}/${rdActive.questions.length}`;
  const container=document.getElementById("readQuestions");
  container.innerHTML="";
  const block=document.createElement("div");
  block.className="read-question-block";
  block.innerHTML=`<div class="rq-text">${q.q}</div>`;
  const optsDiv=document.createElement("div");
  optsDiv.className="quiz-options";
  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="option-btn";
    btn.innerHTML=`<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/,"")}`;
    btn.addEventListener("click",()=>selectReadQ(i,q));
    optsDiv.appendChild(btn);
  });
  block.appendChild(optsDiv);
  container.appendChild(block);
  document.getElementById("readFeedback").classList.add("hidden");
  const done=rdTexts.slice(0,rdIdx).reduce((s,t)=>s+t.questions.length,0)+rdQIdx;
  arenaIdx=done; updateArenaScore();
}

function selectReadQ(chosen,q){
  document.querySelectorAll("#readQuestions .option-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.answer) btn.classList.add("correct");
    else if(i===chosen&&chosen!==q.answer) btn.classList.add("wrong");
  });
  const correct=chosen===q.answer;
  if(correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct); updateArenaScore();
  const fb=document.getElementById("readFeedback");
  document.getElementById("readFbResult").innerHTML=correct
    ?`<span style="color:var(--green)">✓ ¡Correcto!</span>`
    :`<span style="color:var(--red)">✗ Incorrecto.</span>`;
  document.getElementById("readFbCorrect").textContent=`✓ Respuesta correcta: ${q.correctEs||q.options[q.answer]}`;
  document.getElementById("readFbExpl").textContent=q.explanation||"";
  fb.classList.remove("hidden");
  rdQIdx++;
}
document.getElementById("btnNextRead").addEventListener("click",showReadQ);

// ══════════════════════════════════════════
//  DIALOGS
// ══════════════════════════════════════════

let dlItems=[], dlIdx=0;

function initDialogs(){
  document.getElementById("modeDialogs").classList.remove("hidden");
  const filtered=DIALOGS.filter(d=>d.level===selectedLevel);
  dlItems=shuffle(filtered.length?filtered:DIALOGS);
  dlIdx=0; arenaTotal=dlItems.length; showDialog();
}

function showDialog(){
  if(dlIdx>=dlItems.length){ showResult(); return; }
  const d=dlItems[dlIdx];
  document.getElementById("dialogScene").textContent=d.scene;
  const bw=document.getElementById("dialogBubbles");
  bw.innerHTML="";
  if(d.bubbles&&d.bubbles.length){
    d.bubbles.forEach((b,i)=>{
      const wrap=document.createElement("div");
      wrap.className="dialog-bubble"+(i%2===1?" right":"");
      wrap.innerHTML=`<div class="bubble-avatar">${b.who.split(" ")[0]}</div><div class="bubble-text"><strong>${b.who}</strong><br/>${b.text}</div>`;
      bw.appendChild(wrap);
    });
  }
  document.getElementById("dialogQ").textContent=d.q;
  const opts=document.getElementById("dialogOpts");
  opts.innerHTML="";
  d.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="option-btn";
    btn.innerHTML=`<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-C]\.\s*/,"")}`;
    btn.addEventListener("click",()=>selectDialog(i,d));
    opts.appendChild(btn);
  });
  document.getElementById("dialogFeedback").classList.add("hidden");
  arenaIdx=dlIdx; updateArenaScore();
}

function selectDialog(chosen,d){
  document.querySelectorAll("#dialogOpts .option-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===d.answer) btn.classList.add("correct");
    else if(i===chosen&&chosen!==d.answer) btn.classList.add("wrong");
  });
  const correct=chosen===d.answer;
  if(correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct); updateArenaScore();
  document.getElementById("dialogFbResult").innerHTML=correct
    ?`<span style="color:var(--green)">✓ ¡Correcto!</span>`
    :`<span style="color:var(--red)">✗ Incorrecto.</span>`;
  document.getElementById("dialogFbCorrect").textContent=`✓ Respuesta correcta: ${d.correctEs||d.options[d.answer]}`;
  document.getElementById("dialogFbExpl").textContent=d.explanation+(d.example?` | Ejemplo: ${d.example}`:"");
  document.getElementById("dialogFeedback").classList.remove("hidden");
  dlIdx++;
}
document.getElementById("btnNextDialog").addEventListener("click",showDialog);

// ══════════════════════════════════════════
//  EXAM
// ══════════════════════════════════════════

let exItems=[], exIdx=0;

function initExam(){
  document.getElementById("modeExam").classList.remove("hidden");
  const allQ=[
    ...QUESTIONS.easy.map(q=>({...q,lvl:"easy",type:"q"})),
    ...QUESTIONS.medium.map(q=>({...q,lvl:"medium",type:"q"})),
    ...QUESTIONS.hard.map(q=>({...q,lvl:"hard",type:"q"})),
    ...DIALOGS.map(d=>({...d,type:"dialog"})),
    ...READING_TEXTS.flatMap(t=>t.questions.map(rq=>({
      ...rq,context:t.title,type:"readq",
      textTitle:t.title,textBody:t.body.substring(0,500)+"..."
    }))),
  ];
  exItems=shuffle(allQ).slice(0,25);
  exIdx=0; arenaTotal=exItems.length; showExam();
}

function showExam(){
  if(exIdx>=exItems.length){ showResult(); return; }
  const q=exItems[exIdx];
  document.getElementById("examContext").textContent=q.context||q.scene||"";
  const tb=document.getElementById("examTextBlock");
  if(q.type==="readq"&&q.textBody){
    tb.classList.remove("hidden");
    document.getElementById("examTextTitle").textContent=q.textTitle||"";
    document.getElementById("examTextBody").textContent=q.textBody;
  } else { tb.classList.add("hidden"); }
  document.getElementById("examQuestion").textContent=q.q;
  const opts=document.getElementById("examOptions");
  opts.innerHTML="";
  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="option-btn";
    btn.innerHTML=`<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/,"")}`;
    btn.addEventListener("click",()=>selectExam(i,q));
    opts.appendChild(btn);
  });
  document.getElementById("examFeedback").classList.add("hidden");
  arenaIdx=exIdx; updateArenaScore();
}

function selectExam(chosen,q){
  document.querySelectorAll("#examOptions .option-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.answer) btn.classList.add("correct");
    else if(i===chosen&&chosen!==q.answer) btn.classList.add("wrong");
  });
  const correct=chosen===q.answer;
  if(correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct); updateArenaScore();
  document.getElementById("examFbResult").innerHTML=correct
    ?`<span style="color:var(--green)">✓ ¡Correcto!</span>`
    :`<span style="color:var(--red)">✗ Incorrecto.</span>`;
  document.getElementById("examFbCorrect").textContent=`✓ Respuesta correcta: ${q.correctEs||q.options[q.answer]}`;
  document.getElementById("examFbExpl").textContent=q.explanation||"";
  document.getElementById("examFeedback").classList.remove("hidden");
  exIdx++;
}
document.getElementById("btnNextExam").addEventListener("click",showExam);

// ══════════════════════════════════════════
//  RESULT
// ══════════════════════════════════════════

function showResult(){
  hideModes();
  document.getElementById("modeResult").classList.remove("hidden");
  const total=arenaCorrect+arenaWrong;
  const pct=total?Math.round((arenaCorrect/total)*100):0;
  const emoji=pct>=80?"🏆":pct>=60?"⭐":pct>=40?"📚":"💪";
  const title=pct>=80?"¡Excelente trabajo!":pct>=60?"¡Bien hecho!":pct>=40?"¡Sigue practicando!":"¡No te rindas!";
  document.getElementById("resultEmoji").textContent=emoji;
  document.getElementById("resultTitle").textContent=title;
  document.getElementById("resultScore").textContent=pct+"%";
  document.getElementById("rbCorrectNum").textContent=arenaCorrect;
  document.getElementById("rbWrongNum").textContent=arenaWrong;
  setTimeout(()=>{
    document.getElementById("rbCorrect").style.width=total?(arenaCorrect/total*100)+"%":"0%";
    document.getElementById("rbWrong").style.width=total?(arenaWrong/total*100)+"%":"0%";
  },150);
  let fb="";
  if(pct>=80) fb="🌟 Excelente dominio del nivel. ¡Estás muy bien preparado/a para el Saber 11!";
  else if(pct>=60) fb="📈 Buen progreso. Repasa los textos y palabras que fallaste. ¡Casi llegas!";
  else if(pct>=40) fb="📖 Necesitas repasar vocabulario y textos. Usa las flashcards antes del quiz.";
  else fb="💡 Empieza con las flashcards para aprender el vocabulario básico, luego intenta el quiz.";
  document.getElementById("resultFeedback").textContent=fb;
  const modeNames={flashcards:"Flashcards",multiple:"Quiz",reading:"Lectura",dialogs:"Diálogos",exam:"Examen"};
  state.history.unshift({
    mode:modeNames[selectedMode]||selectedMode, level:selectedLevel,
    correct:arenaCorrect, wrong:arenaWrong, pct,
    date:new Date().toLocaleDateString("es-CO")
  });
  if(state.history.length>20) state.history.pop();
  saveState();
}
document.getElementById("btnRetry").addEventListener("click",()=>{ resetArena(); startStudy(); });

// ══════════════════════════════════════════
//  RECORD ANSWER
// ══════════════════════════════════════════

function recordAnswer(correct){
  state.totalAnswered++;
  if(correct){ state.totalCorrect++;state.streak++;if(state.streak>state.bestStreak)state.bestStreak=state.streak; }
  else{ state.totalWrong++;state.streak=0; }
  state.levelAnswered[selectedLevel]=(state.levelAnswered[selectedLevel]||0)+1;
  if(correct) state.levelCorrect[selectedLevel]=(state.levelCorrect[selectedLevel]||0)+1;
  if(!state.modeStats) state.modeStats={};
  if(!state.modeStats[selectedMode]) state.modeStats[selectedMode]={correct:0,wrong:0};
  if(correct) state.modeStats[selectedMode].correct++; else state.modeStats[selectedMode].wrong++;
  saveState();
}


// ══════════════════════════════════════════
//  STATS PAGE (enhanced)
// ══════════════════════════════════════════

// Stats tabs
document.querySelectorAll(".stats-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".stats-tab").forEach(t=>t.classList.remove("active"));
    document.querySelectorAll(".stats-tab-panel").forEach(p=>p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab"+cap(tab.dataset.tab)).classList.add("active");
  });
});

function updateStatsPage(){
  document.getElementById("statsCorrect").textContent=state.totalCorrect;
  document.getElementById("statsWrong").textContent=state.totalWrong;
  const pct=state.totalAnswered?Math.round((state.totalCorrect/state.totalAnswered)*100):0;
  document.getElementById("statsPct").textContent=pct+"%";
  document.getElementById("statsStreak").textContent=state.bestStreak;

  // Level stats
  const ls=document.getElementById("levelStats");
  ls.innerHTML="";
  [{key:"easy",label:"🌱 Básico A1–A2"},{key:"medium",label:"⚡ Intermedio A2–B1"},{key:"hard",label:"🔥 Avanzado B1"}].forEach(({key,label})=>{
    const ans=state.levelAnswered[key]||0,cor=state.levelCorrect[key]||0;
    const total=(QUESTIONS[key]||[]).length+DIALOGS.filter(d=>d.level===key).length;
    const p=total?Math.min(100,Math.round((ans/total)*100)):0;
    const row=document.createElement("div");
    row.className="lstat-row";
    row.innerHTML=`<div class="lstat-name">${label}</div><div class="lstat-bar-wrap"><div class="lstat-bar" style="width:${p}%"></div></div><div class="lstat-pct">${p}%</div><div style="font-size:.8rem;color:var(--text3);width:70px;text-align:right">${cor}/${ans} ✓</div>`;
    ls.appendChild(row);
  });

  // Mode stats
  const ms=document.getElementById("modeStats");
  ms.innerHTML="";
  const modeInfo=[
    {key:"flashcards",label:"Flashcards",icon:"🃏"},
    {key:"multiple",label:"Quiz",icon:"✅"},
    {key:"reading",label:"Lectura",icon:"📖"},
    {key:"dialogs",label:"Diálogos",icon:"💬"},
    {key:"exam",label:"Examen",icon:"🏆"},
  ];
  modeInfo.forEach(({key,label,icon})=>{
    const ms2=state.modeStats&&state.modeStats[key]||{correct:0,wrong:0};
    const tot=ms2.correct+ms2.wrong;
    const pp=tot?Math.round((ms2.correct/tot)*100):0;
    const row=document.createElement("div");
    row.className="mstat-row";
    row.innerHTML=`<div class="mstat-icon">${icon}</div><div class="mstat-name">${label}</div><div class="mstat-bar-wrap"><div class="mstat-bar" style="width:${pp}%"></div></div><div class="mstat-pct">${pp}%</div><div class="mstat-count">${tot} resp.</div>`;
    ms.appendChild(row);
  });

  // Words tab
  renderWordsStats();

  // History tab
  const hl=document.getElementById("historyList");
  hl.innerHTML="";
  if(!state.history.length){ hl.innerHTML="<p style='color:var(--text3);font-size:.9rem;padding:.5rem 0'>Aún no hay historial. ¡Comienza a estudiar!</p>"; return; }
  const icons2={Flashcards:"🃏",Quiz:"✅",Lectura:"📖",Diálogos:"💬",Examen:"🏆","Examen Completo":"🏅"};
  state.history.slice(0,15).forEach(h=>{
    const item=document.createElement("div");
    item.className="history-item";
    item.innerHTML=`<div class="hi-icon">${icons2[h.mode]||"📝"}</div><div class="hi-info"><div class="hi-mode">${h.mode}</div><div class="hi-detail">${h.level} · ${h.date}</div></div><div class="hi-score ${h.pct>=60?"good":"bad"}">${h.pct}% (${h.correct}✓/${h.wrong}✗)</div>`;
    hl.appendChild(item);
  });
}

function renderWordsStats(){
  const srs = getSRSData();
  const allWords = [
    ...FLASHCARDS.easy, ...FLASHCARDS.medium, ...FLASHCARDS.hard
  ];

  const withStats = allWords.map(w => ({
    word:w.word, translation:w.translation,
    data: srs[w.word] || {correct:0,partial:0,wrong:0,mastery:0}
  })).filter(w => w.data.correct+w.data.wrong+w.data.partial > 0);

  // Hard words: most wrong attempts
  const hard = [...withStats].sort((a,b) => b.data.wrong - a.data.wrong).slice(0,10);
  const hardEl = document.getElementById("hardWordsList");
  hardEl.innerHTML = hard.length ? "" : "<p style='color:var(--text3);font-size:.85rem'>Aún no has practicado flashcards.</p>";
  hard.forEach(w => {
    const el = document.createElement("div");
    el.className = "word-item";
    el.innerHTML=`<div><div class="word-item-name">${w.word}</div><div class="word-item-trans">${w.translation}</div></div><div class="word-item-stats"><span class="w-correct">✓${w.data.correct}</span><span class="w-wrong">✗${w.data.wrong}</span></div>`;
    hardEl.appendChild(el);
  });

  // Mastered words: mastery >= 4
  const mastered = withStats.filter(w => w.data.mastery >= 4)
    .sort((a,b) => b.data.correct - a.data.correct).slice(0,10);
  const mastEl = document.getElementById("masteredWordsList");
  mastEl.innerHTML = mastered.length ? "" : "<p style='color:var(--text3);font-size:.85rem'>Aún no tienes palabras dominadas. ¡Sigue practicando!</p>";
  mastered.forEach(w => {
    const el = document.createElement("div");
    el.className = "word-item";
    el.innerHTML=`<div><div class="word-item-name">${w.word}</div><div class="word-item-trans">${w.translation}</div></div><div class="word-item-stats"><span class="w-correct">✓${w.data.correct}</span><span class="w-wrong">✗${w.data.wrong}</span></div>`;
    mastEl.appendChild(el);
  });
}

document.getElementById("btnReset").addEventListener("click",()=>{
  if(confirm("¿Seguro que quieres borrar todo el progreso? Esta acción no se puede deshacer.")){
    state=defaultState(); saveState();
    localStorage.removeItem("em_srs");
    localStorage.removeItem("em_full_exams");
    updateStatsPage(); updateDashboard();
    showToast("✅ Progreso reiniciado");
  }
});

// ══════════════════════════════════════════
//  FULL EXAM — Examen Completo Saber 11
// ══════════════════════════════════════════

let feItems=[], feIdx=0, feUserAnswers=[];
let feTimerDuration=45*60, feTimerLeft=0, feTimerInterval=null;
let feSelectedDuration=45, feSelectedDiff="mixed";

// Config toggles
document.querySelectorAll("#timerGroup .toggle-btn").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll("#timerGroup .toggle-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); feSelectedDuration=parseInt(b.dataset.val);
  });
});
document.querySelectorAll("#examDiffGroup .toggle-btn").forEach(b=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll("#examDiffGroup .toggle-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); feSelectedDiff=b.dataset.val;
  });
});

// Render exam history on page load
function renderExamHistory(){
  const exams = JSON.parse(localStorage.getItem("em_full_exams")||"[]");
  const container = document.getElementById("examHistory");
  if(!exams.length){ container.innerHTML=""; return; }
  container.innerHTML=`<h3 class="exam-hist-title">📅 Historial de simulacros</h3><div class="exam-hist-list"></div>`;
  const list = container.querySelector(".exam-hist-list");
  exams.slice(0,8).forEach(e=>{
    const item=document.createElement("div");
    item.className="exam-hist-item";
    item.innerHTML=`<div class="ehi-score">${e.pct}%</div><div class="ehi-info"><strong>${e.correct}/${e.total} correctas</strong><div class="ehi-date">${e.date} · ${e.duration} min</div></div><div style="font-size:1.2rem">${e.pct>=70?"🏆":e.pct>=50?"⭐":"📚"}</div>`;
    list.appendChild(item);
  });
}

document.getElementById("btnStartFullExam").addEventListener("click", startFullExam);
document.getElementById("btnRetryFE").addEventListener("click",()=>{
  document.getElementById("examResultScreen").classList.add("hidden");
  document.getElementById("examConfig").classList.remove("hidden");
  renderExamHistory();
});

function startFullExam(){
  // Build question pool based on difficulty
  let pool=[];
  if(feSelectedDiff==="easy"){
    pool=[...QUESTIONS.easy.map(q=>({...q,lvl:"easy",type:"q"})),
          ...DIALOGS.filter(d=>d.level==="easy").map(d=>({...d,type:"dialog"})),
          ...READING_TEXTS.filter(t=>t.level==="easy").flatMap(t=>t.questions.map(rq=>({...rq,context:t.title,type:"readq",textTitle:t.title,textBody:t.body.substring(0,500)+"..."}))),
    ];
  } else if(feSelectedDiff==="hard"){
    pool=[...QUESTIONS.hard.map(q=>({...q,lvl:"hard",type:"q"})),
          ...QUESTIONS.medium.map(q=>({...q,lvl:"medium",type:"q"})),
          ...READING_TEXTS.filter(t=>t.level==="hard").flatMap(t=>t.questions.map(rq=>({...rq,context:t.title,type:"readq",textTitle:t.title,textBody:t.body.substring(0,500)+"..."}))),
    ];
  } else {
    pool=[
      ...QUESTIONS.easy.map(q=>({...q,lvl:"easy",type:"q"})),
      ...QUESTIONS.medium.map(q=>({...q,lvl:"medium",type:"q"})),
      ...QUESTIONS.hard.map(q=>({...q,lvl:"hard",type:"q"})),
      ...DIALOGS.map(d=>({...d,type:"dialog"})),
      ...READING_TEXTS.flatMap(t=>t.questions.map(rq=>({...rq,context:t.title,type:"readq",textTitle:t.title,textBody:t.body.substring(0,500)+"..."}))),
    ];
  }

  feItems=shuffle(pool).slice(0,25);
  feUserAnswers=new Array(feItems.length).fill(null);
  feIdx=0;
  feTimerDuration=feSelectedDuration*60;
  feTimerLeft=feTimerDuration;

  document.getElementById("examConfig").classList.add("hidden");
  document.getElementById("examResultScreen").classList.add("hidden");
  document.getElementById("examArena").classList.remove("hidden");

  startFETimer();
  showFEQuestion();
}

function startFETimer(){
  clearInterval(feTimerInterval);
  updateFETimerDisplay();
  const progressEl=document.getElementById("examTimerProgress");
  progressEl.style.width="100%";
  progressEl.className="exam-timer-progress";

  feTimerInterval=setInterval(()=>{
    feTimerLeft--;
    updateFETimerDisplay();
    const pct=(feTimerLeft/feTimerDuration)*100;
    progressEl.style.width=pct+"%";

    const warn5=feTimerLeft<=300;
    const danger1=feTimerLeft<=60;
    const display=document.getElementById("examTimerDisplay");
    const warnBanner=document.getElementById("examWarn");

    if(danger1){ display.className="exam-timer-display danger"; progressEl.className="exam-timer-progress danger"; }
    else if(warn5){ display.className="exam-timer-display warning"; progressEl.className="exam-timer-progress warning"; warnBanner.classList.remove("hidden"); document.getElementById("examTimerIcon").textContent="⚠️"; }
    else { display.className="exam-timer-display"; }

    if(feTimerLeft<=0){ clearInterval(feTimerInterval); finishFullExam(); }
  },1000);
}

function updateFETimerDisplay(){
  const m=Math.floor(feTimerLeft/60), s=feTimerLeft%60;
  document.getElementById("examTimerDisplay").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function showFEQuestion(){
  if(feIdx>=feItems.length){ finishFullExam(); return; }
  const q=feItems[feIdx];
  document.getElementById("examQCounter").textContent=`${feIdx+1}/${feItems.length}`;
  document.getElementById("feContext").textContent=q.context||q.scene||"";
  const tb=document.getElementById("feTextBlock");
  if(q.type==="readq"&&q.textBody){
    tb.classList.remove("hidden");
    document.getElementById("feTextTitle").textContent=q.textTitle||"";
    document.getElementById("feTextBody").textContent=q.textBody;
  } else { tb.classList.add("hidden"); }
  document.getElementById("feQuestion").textContent=q.q;
  const opts=document.getElementById("feOptions");
  opts.innerHTML="";
  q.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="option-btn";
    btn.innerHTML=`<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/,"")}`;
    btn.addEventListener("click",()=>selectFEAnswer(i,q));
    opts.appendChild(btn);
  });
  document.getElementById("feFeedback").classList.add("hidden");
}

function selectFEAnswer(chosen,q){
  document.querySelectorAll("#feOptions .option-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.answer) btn.classList.add("correct");
    else if(i===chosen&&chosen!==q.answer) btn.classList.add("wrong");
  });
  const correct=chosen===q.answer;
  feUserAnswers[feIdx]={chosen,correct,q};
  if(correct) playCorrect(); else playWrong();
  document.getElementById("feFbResult").innerHTML=correct
    ?`<span style="color:var(--green)">✓ ¡Correcto!</span>`
    :`<span style="color:var(--red)">✗ Incorrecto.</span>`;
  document.getElementById("feFbCorrect").textContent=`✓ Respuesta correcta: ${q.correctEs||q.options[q.answer]}`;
  document.getElementById("feFbExpl").textContent=q.explanation||"";
  document.getElementById("feFeedback").classList.remove("hidden");
  feIdx++;
}

document.getElementById("btnNextFE").addEventListener("click",()=>{
  if(feIdx>=feItems.length) finishFullExam();
  else showFEQuestion();
});

function finishFullExam(){
  clearInterval(feTimerInterval);
  document.getElementById("examArena").classList.add("hidden");
  document.getElementById("examResultScreen").classList.remove("hidden");

  const answered = feUserAnswers.filter(a=>a!==null);
  const correct = answered.filter(a=>a.correct).length;
  const total = feItems.length;
  const pct = total?Math.round((correct/total)*100):0;

  document.getElementById("feResultEmoji").textContent=pct>=80?"🏆":pct>=60?"⭐":"📚";
  document.getElementById("feResultTitle").textContent=pct>=80?"¡Excelente resultado!":pct>=60?"¡Buen trabajo!":"Sigue practicando";
  document.getElementById("feScoreBig").textContent=pct+"%";

  // Result grid
  const grid=document.getElementById("feResultGrid");
  grid.innerHTML=`
    <div class="fe-rg-item"><div class="fe-rg-num green">${correct}</div><div class="fe-rg-label">Correctas</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num red">${answered.length-correct}</div><div class="fe-rg-label">Incorrectas</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num">${total-answered.length}</div><div class="fe-rg-label">Sin responder</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num accent">${pct}%</div><div class="fe-rg-label">Precisión</div></div>`;

  // Category breakdown
  const cats={};
  answered.forEach(a=>{
    const cat=a.q.type==="readq"?"Comprensión Lectora":a.q.type==="dialog"?"Diálogos":(a.q.context||"Vocabulario");
    if(!cats[cat]) cats[cat]={correct:0,total:0};
    cats[cat].total++;
    if(a.correct) cats[cat].correct++;
  });
  const cb=document.getElementById("feCatBreakdown");
  cb.innerHTML="<h3 style='font-family:Syne,sans-serif;font-weight:700;font-size:1rem;margin-bottom:.75rem'>Rendimiento por categoría</h3>";
  Object.entries(cats).slice(0,6).forEach(([cat,d])=>{
    const pp=Math.round((d.correct/d.total)*100);
    const row=document.createElement("div");
    row.className="fe-cat-row";
    row.innerHTML=`<div class="fe-cat-name">${cat.length>18?cat.substring(0,18)+"…":cat}</div><div class="fe-cat-bar-wrap"><div class="fe-cat-bar" style="width:${pp}%"></div></div><div class="fe-cat-pct">${pp}%</div>`;
    cb.appendChild(row);
  });

  // Review list
  const rl=document.getElementById("feReviewList");
  rl.innerHTML="";
  answered.forEach((a,i)=>{
    const item=document.createElement("div");
    item.className="fe-review-item "+(a.correct?"correct-item":"wrong-item");
    item.innerHTML=`<div class="fe-rev-q">${i+1}. ${a.q.q}</div>
      ${!a.correct?`<div class="fe-rev-your">Tu respuesta: ${a.q.options[a.chosen]||"Sin responder"}</div>`:""}
      <div class="fe-rev-correct">✓ ${a.q.correctEs||a.q.options[a.q.answer]}</div>
      ${a.q.explanation?`<div class="fe-rev-expl">${a.q.explanation}</div>`:""}`;
    rl.appendChild(item);
  });

  // Save to localStorage
  const exams=JSON.parse(localStorage.getItem("em_full_exams")||"[]");
  exams.unshift({pct,correct,total,date:new Date().toLocaleDateString("es-CO"),duration:feSelectedDuration});
  if(exams.length>10) exams.pop();
  localStorage.setItem("em_full_exams",JSON.stringify(exams));

  // Update state modeStats
  if(!state.modeStats) state.modeStats={};
  if(!state.modeStats.fullexam) state.modeStats.fullexam={correct:0,wrong:0};
  state.modeStats.fullexam.correct+=correct;
  state.modeStats.fullexam.wrong+=(answered.length-correct);
  state.totalAnswered+=answered.length;
  state.totalCorrect+=correct;
  state.totalWrong+=(answered.length-correct);
  saveState();
}


// ══════════════════════════════════════════
//  TOAST & UTILS
// ══════════════════════════════════════════

function showToast(msg,ms=2500){
  const t=document.getElementById("toast");
  t.textContent=msg; t.classList.remove("hidden");
  setTimeout(()=>t.classList.add("hidden"),ms);
}

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
updateDashboard();
navigate(state.lastSection||"home");

