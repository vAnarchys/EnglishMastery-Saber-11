/* ═══════════════════════════════════════════
   English Mastery · Saber 11 — JavaScript
═══════════════════════════════════════════ */

// ─── DATA ───────────────────────────────────

const FLASHCARDS = {
  easy: [
    { word: "Happy Birthday", translation: "¡Feliz Cumpleaños!", example: "Happy Birthday, Anna! We love you so much." },
    { word: "We love you", translation: "Te queremos / Te amamos", example: "Happy Birthday, Anna! We love you." },
    { word: "Big bedrooms", translation: "Habitaciones grandes", example: "The hotel has big bedrooms with TVs." },
    { word: "Breakfast", translation: "Desayuno", example: "Breakfast at 8:30 a.m. is included." },
    { word: "Piano lessons", translation: "Clases de piano", example: "Piano lessons with Ms. Wilson, Room 11, 2:00 p.m." },
    { word: "At school", translation: "En la escuela", example: "We have piano lessons at school today." },
    { word: "At a playground", translation: "En un parque / patio", example: "The children are playing at a playground." },
    { word: "At a mall", translation: "En un centro comercial", example: "We can find a bookstore at a mall." },
    { word: "On a bus", translation: "En un autobús", example: "Don't talk on the phone on a bus." },
    { word: "On a train", translation: "En un tren", example: "Silence, please! We are on a train." },
    { word: "On a plane", translation: "En un avión", example: "The sign says: Don't talk on the phone on a plane." },
    { word: "At the beach", translation: "En la playa", example: "Lucy tells her stories at the beach." },
    { word: "At the zoo", translation: "En el zoológico", example: "Don't feed the monkeys at the zoo." },
    { word: "Don't feed the monkeys", translation: "No alimentes a los monos", example: "There is a sign at the zoo: Don't feed the monkeys." },
    { word: "Silence, please!", translation: "¡Silencio, por favor!", example: "Silence, please! This is a library." },
    { word: "Lunch", translation: "Almuerzo", example: "Lunch is served from 12:00 to 2:30 p.m." },
    { word: "Dinner", translation: "Cena", example: "Dinner is from 7:00 to 10:30 p.m." },
    { word: "Congratulations!", translation: "¡Felicitaciones!", example: "It seems I'll be the new boss. Congratulations!" },
    { word: "Excuse me", translation: "Disculpe / Perdón", example: "Excuse me, is this the music class?" },
    { word: "Come here", translation: "Ven aquí", example: "Come here now! The food is ready." },
    { word: "It's ready", translation: "Está listo/a", example: "The dinner is ready. Come and eat!" },
    { word: "Too long", translation: "Demasiado largo", example: "That story is too long for the class." },
    { word: "Not bad", translation: "No está mal", example: "How are things? Not bad, thank you." },
    { word: "Chefs", translation: "Cocineros/Chefs", example: "Chefs make fantastic food in restaurants." },
    { word: "Nurses", translation: "Enfermeras/os", example: "Nurses help you when you're sick." },
    { word: "Drivers", translation: "Conductores", example: "Drivers take you from one place to another." },
    { word: "Dentists", translation: "Dentistas", example: "Dentists help you when your teeth hurt." },
    { word: "Teachers", translation: "Profesores", example: "Teachers help you learn many new things." },
    { word: "Painters", translation: "Pintores", example: "Famous painters show their art in museums." },
    { word: "Farmers", translation: "Agricultores", example: "Farmers grow food for everyone." },
    { word: "Guitarists", translation: "Guitarristas", example: "Some guitarists show their art in museums." },
    { word: "Basketball", translation: "Baloncesto", example: "People who play basketball are usually very tall." },
    { word: "Baseball", translation: "Béisbol", example: "To play baseball, you hit the ball and run." },
    { word: "Skiing", translation: "Esquí", example: "People do skiing on mountains with snow." },
    { word: "Swimming", translation: "Natación", example: "You can only do swimming in the water." },
    { word: "Dancing", translation: "Baile", example: "People do dancing at parties or in a disco." },
    { word: "Bike riding", translation: "Ciclismo", example: "People do bike riding on mountains." },
    { word: "Handbags", translation: "Bolsos", example: "A woman carries her things in handbags." },
    { word: "Scarf", translation: "Bufanda", example: "With this scarf, your neck won't be cold." },
    { word: "Glasses", translation: "Gafas / Lentes", example: "When people can't see well, they need glasses." },
    { word: "Socks", translation: "Calcetines", example: "These socks are for your feet." },
    { word: "Skirt", translation: "Falda", example: "Many girls wear a skirt when they don't want to wear trousers." },
    { word: "Cinema / Movie theater", translation: "Cine", example: "A cinema is a place to see movies." },
    { word: "Elevator", translation: "Elevador / Ascensor", example: "People get on an elevator to go to different floors." },
    { word: "Playground", translation: "Zona de juegos", example: "A playground is a fun park for children to jump and run." },
    { word: "Bookstore", translation: "Librería", example: "A bookstore is a shop to find things to read." },
    { word: "Café", translation: "Cafetería", example: "People buy a cup of coffee at a café." },
    { word: "Basement", translation: "Sótano", example: "The parking is in the basement of the mall." },
    { word: "Bathroom", translation: "Baño", example: "The bathroom is on the second floor." },
  ],
  medium: [
    { word: "Nurse", translation: "Enfermera/o", example: "I always dreamed of being a nurse." },
    { word: "Ambulance", translation: "Ambulancia", example: "They found an ambulance and took me to the hospital." },
    { word: "Hospital", translation: "Hospital", example: "A group of fantastic nurses looked after me at the hospital." },
    { word: "Drugstore", translation: "Farmacia / Droguería", example: "I only had to go to the drugstore for a few days." },
    { word: "Career", translation: "Carrera / Trayectoria", example: "Soon, I hope to be ready to start my career." },
    { word: "Occupation", translation: "Ocupación / Profesión", example: "Nursing is a wonderful occupation." },
    { word: "Habits", translation: "Hábitos", example: "I have been implementing new habits lately." },
    { word: "Postpone the alarm", translation: "Posponerla alarma (snooze)", example: "I postpone the alarm many times every morning." },
    { word: "To-do list", translation: "Lista de tareas", example: "I make a to-do list for the day every morning." },
    { word: "Routine", translation: "Rutina", example: "These are some essential actions of my morning routine." },
    { word: "Waking up", translation: "Despertar(se)", example: "The most complicated part is the process of waking up." },
    { word: "Depressed", translation: "Deprimida/o", example: "Kincaid declared she was depressed upon her arrival in the US." },
    { word: "Ambition", translation: "Ambición", example: "She had a lot of ambition to become a recognized author." },
    { word: "Achievement", translation: "Logro", example: "He designed 100 toys – what an achievement!" },
    { word: "Pattern", translation: "Patrón / Modelo", example: "Her writing has a very recognizable pattern." },
    { word: "Fashion", translation: "Moda", example: "She appeared in the world of fashion with her designs." },
    { word: "Design", translation: "Diseño", example: "Ivan Moscovich was a fantastic inventor and designer." },
    { word: "Style", translation: "Estilo", example: "Her recent style of essays is powerful yet less bitter." },
    { word: "Ancient", translation: "Antiguo / Ancestral", example: "Few subjects have been as carefully studied as coffee through ancient times." },
    { word: "Elderly", translation: "Anciano / Mayor", example: "He was preparing new products well into his elderly years." },
    { word: "Previous", translation: "Anterior / Previo", example: "Her previous book was more well-known." },
    { word: "Novelist", translation: "Novelista", example: "James Salter was best known as a novelist." },
    { word: "Resilient", translation: "Resistente / Resiliente", example: "Nurses must be resilient and brave with patients." },
    { word: "Dreamed of being", translation: "Soñaba con ser", example: "I always dreamed of being a nurse since I was a child." },
    { word: "Brave", translation: "Valiente", example: "Nurses should be quite kind, brave, and really nice with people." },
    { word: "Kind", translation: "Amable / Bondadoso", example: "Good nurses must be kind with every patient." },
    { word: "Encourage", translation: "Animar / Motivar", example: "This experience encouraged me to become a nurse." },
    { word: "Vocabulary", translation: "Vocabulario", example: "At university, we study hospital vocabulary." },
    { word: "Spare time", translation: "Tiempo libre", example: "Nurses spend even their spare time learning." },
    { word: "Postpone", translation: "Posponer", example: "It is a habit that I am trying to give up: to postpone the alarm." },
    { word: "Morning person", translation: "Persona mañanera", example: "I am making an effort to become more of a morning person." },
    { word: "Implementing", translation: "Implementando", example: "These are essential actions I've been implementing lately." },
    { word: "Accurate", translation: "Acertado / Preciso", example: "My parents were right – breakfast is the most important meal. That idea might indeed be accurate." },
    { word: "Satisfying", translation: "Satisfactorio", example: "There are few things more satisfying than crossing a task off your to-do list." },
    { word: "Objective", translation: "Objetivo", example: "You can set the simple objective of exercising your body each morning." },
    { word: "Yoga session", translation: "Sesión de yoga", example: "A brief yoga session is a great option for morning exercise." },
    { word: "Inventor", translation: "Inventor", example: "Ivan Moscovich was a fantastic inventor of toys and games." },
    { word: "Legend", translation: "Leyenda", example: "He was a legend in the world of puzzles." },
    { word: "Puzzle", translation: "Rompecabezas", example: "He started the Science and Technology Museum of puzzles." },
    { word: "Prize", translation: "Premio", example: "In 2020, he won an important prize from the US toy industry." },
  ],
  hard: [
    { word: "Passionate Falsehoods", translation: "Falsedades apasionadas", example: "In Passionate Falsehoods, Salter tells the story of his life in film." },
    { word: "Adapted", translation: "Adaptado", example: "Passionate Falsehoods was adapted from Salter's book Burning the Days." },
    { word: "Explored", translation: "Exploró", example: "He explored the city with Robert Redford." },
    { word: "Attractive", translation: "Atractivo", example: "His film work involves attractive women and interesting stories." },
    { word: "Entrance", translation: "Entrada / Acceso", example: "There was money, attractive women, and entrance into interesting rooms." },
    { word: "Infer", translation: "Inferir", example: "We can infer from the text that Mark enjoys fast food." },
    { word: "Caffeine", translation: "Cafeína", example: "Caffeine was first studied in the 1800s by Ferdinand Runge." },
    { word: "Component", translation: "Componente", example: "The most important component of coffee is caffeine." },
    { word: "Benefits", translation: "Beneficios", example: "Coffee has lots of benefits for your health." },
    { word: "Popular medicine", translation: "Medicina popular", example: "Coffee became a popular medicine in the 1600s." },
    { word: "Effects", translation: "Efectos", example: "Runge found out some effects that coffee has on people." },
    { word: "Reduce headaches", translation: "Reducir dolores de cabeza", example: "Coffee can reduce headaches thanks to caffeine." },
    { word: "Blood problems", translation: "Problemas de sangre/presión", example: "Coffee can also reduce blood problems." },
    { word: "Considered", translation: "Considerado", example: "Jamaica Kincaid is considered one of the most talented Caribbean novelists." },
    { word: "Respected", translation: "Respetado", example: "Salter was respected by many famous directors." },
    { word: "Admired", translation: "Admirado", example: "Kincaid is admired for her powerful writing style." },
    { word: "Celebrated", translation: "Célebre / Celebrado", example: "She is a celebrated Caribbean author." },
    { word: "Split", translation: "Dividido / Separado", example: "She grew up with a split background between poor and rich life." },
    { word: "Brought", translation: "Trajo / Llevó", example: "She was brought up in a poor background." },
    { word: "Kept", translation: "Mantuvo / Conservó", example: "She kept writing to save herself from depression." },
    { word: "Filled", translation: "Llenó / Relleno", example: "Her texts are filled with references to mothers and daughters." },
    { word: "Achievement", translation: "Logro", example: "Becoming a recognized author was her greatest achievement." },
    { word: "Ambition", translation: "Ambición", example: "Writing was not her goal; her ambition was to save herself." },
    { word: "Developed", translation: "Desarrollado", example: "A developed style appears in her essays." },
    { word: "Appeared", translation: "Apareció / Surgió", example: "Her unique style appeared in her first poem, Girl." },
    { word: "Produced", translation: "Produjo", example: "He produced documentaries during the sixties and seventies." },
    { word: "Encouraged", translation: "Animó / Motivó", example: "His experience at the hospital encouraged him to change careers." },
    { word: "Unless", translation: "A menos que", example: "Unless she changed, she would continue feeling depressed." },
    { word: "Although", translation: "Aunque", example: "Although it wasn't her goal, she became a recognized author." },
    { word: "Since", translation: "Desde / Ya que", example: "Since she was a teenager, writing was her escape." },
    { word: "Whenever", translation: "Siempre que / Cuando sea", example: "I love food delivery companies whenever I don't feel like cooking." },
    { word: "Arrangement", translation: "Acuerdo / Arreglo", example: "Nick Paumgarten wrote about Salter's film arrangement in The Last Book." },
    { word: "Collection", translation: "Colección", example: "The old woman had a wonderful collection of paintings." },
    { word: "Account", translation: "Relato / Cuenta", example: "Salter gives an account of his experiences in film." },
    { word: "Bunch", translation: "Grupo / Montón", example: "She wrote a whole bunch of essays about family." },
    { word: "Pattern", translation: "Patrón literario", example: "Kincaid's pattern of writing is unique and recognizable." },
    { word: "Fashion", translation: "Manera / Moda", example: "She appeared in fashion writing with her essay 'Girl'." },
  ]
};

const QUESTIONS = {
  easy: [
    {
      context: "Avisos y señales",
      q: "You see a sign that says 'Don't feed the monkeys!' Where are you most likely?",
      options: ["A. At a supermarket", "B. At the beach", "C. At a zoo", "D. In a classroom"],
      answer: 2, explanation: "'Don't feed the monkeys' is a typical sign found at zoos to protect animals.",
      example: "At the zoo: 'Don't feed the monkeys! NO CAMERAS. NO PHOTOS.'",
      video: "https://www.youtube.com/watch?v=ypkBRLmJLW8", videoLabel: "Signs & Public Notices"
    },
    {
      context: "Vocabulario de lugares",
      q: "A notice says: 'Silence, please!' Where can you see this sign?",
      options: ["A. In a library", "B. At a sports center", "C. At a restaurant", "D. On a playground"],
      answer: 0, explanation: "'Silence, please!' is a common sign in libraries where people read and study quietly.",
      example: "Sign: 'Silence, please!' → In a library or museum.",
      video: "https://www.youtube.com/watch?v=ypkBRLmJLW8", videoLabel: "Signs & Notices"
    },
    {
      context: "Conversaciones básicas",
      q: "— 'It seems I'll be the new boss of the business department.' — '______'",
      options: ["A. Excuse me!", "B. It's ready!", "C. Congratulations!", "D. Come back!"],
      answer: 2, explanation: "When someone gets good news like a promotion, we say 'Congratulations!' to celebrate with them.",
      example: "— I got the job! — Congratulations! You deserve it.",
      video: "https://www.youtube.com/watch?v=fEA5d5YaUNk", videoLabel: "Basic English Conversations"
    },
    {
      context: "Descripción de profesiones",
      q: "They make fantastic food in restaurants. What profession is this?",
      options: ["A. Nurses", "B. Chefs", "C. Drivers", "D. Teachers"],
      answer: 1, explanation: "Chefs are cooking professionals who prepare food in restaurants and kitchens.",
      example: "Chefs make fantastic food in restaurants. They are experts in cooking.",
      video: "https://www.youtube.com/watch?v=9Kd87KUwQuo", videoLabel: "Jobs & Professions Vocabulary"
    },
    {
      context: "Descripción de profesiones",
      q: "They visit you when your teeth hurt. What is this person?",
      options: ["A. A driver", "B. A nurse", "C. A dentist", "D. A farmer"],
      answer: 2, explanation: "Dentists are health professionals who specialize in teeth and oral health.",
      example: "Dentists help you when your teeth hurt. They work in dental clinics.",
      video: "https://www.youtube.com/watch?v=9Kd87KUwQuo", videoLabel: "Jobs Vocabulary"
    },
    {
      context: "Vocabulario del centro comercial",
      q: "At the mall: 'This is a place to see movies.' What place is this?",
      options: ["A. Bookstore", "B. Elevator", "C. Cinema", "D. Playground"],
      answer: 2, explanation: "A cinema (or movie theater) is the place in a mall where you can watch films.",
      example: "Now showing: MADAGASCAR — at the cinema in the mall.",
      video: "https://www.youtube.com/watch?v=ypkBRLmJLW8", videoLabel: "Places in a Mall"
    },
    {
      context: "Vocabulario del centro comercial",
      q: "'People get on this to go to different floors.' What is it?",
      options: ["A. Playground", "B. Basement", "C. Café", "D. Elevator"],
      answer: 3, explanation: "An elevator (or lift) takes people to different floors in buildings and malls.",
      example: "Take the elevator to go from Floor 1 to Floor 3 in the mall.",
      video: "https://www.youtube.com/watch?v=ypkBRLmJLW8", videoLabel: "Mall Vocabulary"
    },
    {
      context: "Vocabulario de ropa",
      q: "'With this, your neck won't be cold.' What item is this?",
      options: ["A. Socks", "B. Glasses", "C. Scarf", "D. Skirt"],
      answer: 2, explanation: "A scarf is worn around the neck to keep warm in cold weather.",
      example: "In winter, I wear a scarf so my neck won't be cold.",
      video: "https://www.youtube.com/watch?v=UkqvBX_bkfc", videoLabel: "Clothes Vocabulary"
    },
    {
      context: "Deportes",
      q: "'People who play this are usually very tall.' What sport is it?",
      options: ["A. Skiing", "B. Swimming", "C. Baseball", "D. Basketball"],
      answer: 3, explanation: "Basketball players are typically tall because height gives an advantage in reaching the hoop.",
      example: "Description: People who play this are usually very tall → Basketball.",
      video: "https://www.youtube.com/watch?v=Hs2NNRSdKgU", videoLabel: "Sports Vocabulary"
    },
    {
      context: "Comprensión de avisos",
      q: "A sign says 'WARNING! YOU ARE BEING WATCHED.' Where would you most likely see this?",
      options: ["A. In a school", "B. At the park", "C. In a bank", "D. At the cinema"],
      answer: 2, explanation: "Security warning signs 'You are being watched/recorded' are common in banks and stores.",
      example: "Banks use security cameras and post warnings like 'You are being watched.'",
      video: "https://www.youtube.com/watch?v=ypkBRLmJLW8", videoLabel: "Reading Signs in English"
    },
  ],
  medium: [
    {
      context: "Texto: I'll Be a Nurse – Alexa Smith",
      q: "According to the text, it's good if a nurse is _____.",
      options: ["A. Excited", "B. Attractive", "C. Friendly", "D. Famous"],
      answer: 2, explanation: "The text says nurses should be 'kind, brave, and really nice with people' — which means friendly.",
      example: "Nurses should be quite kind, brave, and really nice with people.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Reading Comprehension Tips"
    },
    {
      context: "Texto: I'll Be a Nurse – Alexa Smith",
      q: "Alexa thinks that soon she will be _____.",
      options: ["A. Working at a hospital", "B. Going to the airport", "C. Feeling better", "D. Studying medicine"],
      answer: 0, explanation: "Alexa says 'I hope to be ready to start my career' in the hospital occupation, meaning she hopes to soon be working at a hospital.",
      example: "Soon, I hope to be ready to start my career in this wonderful occupation.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Reading Comprehension"
    },
    {
      context: "Texto: I'll Be a Nurse – Alexa Smith",
      q: "At the airport, Alexa _____.",
      options: ["A. Suddenly felt ill", "B. Had a terrible accident", "C. Took the wrong medicine", "D. Lost her luggage"],
      answer: 0, explanation: "The text says 'I got sick at the airport' — she suddenly fell ill while visiting a friend.",
      example: "I got sick at the airport. Thank God, they found an ambulance.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Healthcare Vocabulary"
    },
    {
      context: "Texto: I'll Be a Nurse – Alexa Smith",
      q: "In Alexa's opinion, the nurses who helped her were _____.",
      options: ["A. Interesting", "B. Amazing", "C. Lucky", "D. Famous"],
      answer: 1, explanation: "The text describes 'a group of fantastic nurses looked after me' — fantastic means amazing.",
      example: "A group of fantastic nurses looked after me and I soon got better.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "English Reading Skills"
    },
    {
      context: "Texto: I'll Be a Nurse – Alexa Smith",
      q: "Once Alexa felt healthy again, she _____.",
      options: ["A. Posted it online", "B. Flew back home", "C. Decided her future", "D. Called her family"],
      answer: 2, explanation: "The airport experience 'encouraged her to become a nurse' — she decided her future career.",
      example: "This awesome time at the hospital encouraged me to become a nurse.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Narrative Reading"
    },
    {
      context: "Texto: Hábitos matutinos",
      q: "What does the writer mean by 'in the same boat as me'?",
      options: ["A. People who experience the same issues in the morning", "B. People who have the same ambition she does", "C. People who want to quit a bad technique", "D. People who gain experience from waking up early"],
      answer: 0, explanation: "'In the same boat' is an idiom meaning to be in the same situation. Here it refers to people who also struggle with mornings.",
      example: "I'm totally sure there are lots of people who are in the same boat as me — struggling with mornings.",
      video: "https://www.youtube.com/watch?v=GQAUNZoGxFg", videoLabel: "English Idioms"
    },
    {
      context: "Texto: Hábitos matutinos",
      q: "In paragraph 2, what does the writer say about breakfast?",
      options: ["A. It is frequently shared with others", "B. It is made of a fantastic type of food", "C. It is very important to start the day with it", "D. It is as necessary as other meals"],
      answer: 2, explanation: "The writer admits her parents and teachers were right: 'breakfast is the most important meal of the day.'",
      example: "The idea of 'breakfast is the most important meal of the day' might indeed be accurate.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Reading Comprehension"
    },
    {
      context: "Texto: Hábitos matutinos",
      q: "The perfect new routine for the writer's morning would be:",
      options: [
        "A. 8am: postpone alarm / 9am: exercise / 10am: breakfast",
        "B. 8am: have breakfast / 9am: complete activities / 10am: exercise",
        "C. 8am: exercise / 9am: have breakfast / 10am: do yoga",
        "D. 8am: have breakfast / 9am: plan the day / 10am: exercise"
      ],
      answer: 3, explanation: "She mentions: eating a real breakfast (most important), then writing a to-do list (planning the day), then exercising in the morning.",
      example: "The ideal routine: breakfast first, then plan activities, then exercise.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Inferential Reading"
    },
    {
      context: "Vocabulario: Tiempos verbales",
      q: "Choose the correct option: 'Coffee ___ popular around the world for centuries.'",
      options: ["A. is being", "B. has been", "C. was being", "D. had been"],
      answer: 1, explanation: "Present Perfect (has/have + past participle) is used for facts that started in the past and continue to the present.",
      example: "Coffee has been popular around the world. (Empezó en el pasado, sigue siendo verdad.)",
      video: "https://www.youtube.com/watch?v=LIe3UxCYQWI", videoLabel: "Present Perfect Tense"
    },
    {
      context: "Vocabulario: Tiempos verbales",
      q: "'I ___ making an effort to become more of a morning person.' Which tense is this?",
      options: ["A. Simple Present", "B. Past Simple", "C. Present Continuous", "D. Present Perfect"],
      answer: 2, explanation: "Present Continuous (am/is/are + verb-ing) describes an ongoing action happening at or around the present time.",
      example: "I am making an effort — esto está ocurriendo ahora o en este período de tiempo.",
      video: "https://www.youtube.com/watch?v=Bs7Qcb0mncc", videoLabel: "Present Continuous"
    },
  ],
  hard: [
    {
      context: "Texto: James Salter's Days in Film",
      q: "James Salter played an important part in the making of movies from:",
      options: ["A. 1960 to 1979", "B. 1960 to 1970", "C. 1960 to 1985", "D. 1957 to 1979"],
      answer: 0, explanation: "Salter abandoned the military in 1957 and worked in film 'during the sixties and seventies,' meaning from approximately 1960 to 1979.",
      example: "He abandoned the military profession in 1957 and worked in film during the sixties and seventies.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Reading Comprehension B1"
    },
    {
      context: "Texto: James Salter's Days in Film",
      q: "James Salter thinks that his work in the cinema business was:",
      options: ["A. Not useful", "B. Not hard", "C. Not usual", "D. Not interesting"],
      answer: 0, explanation: "Salter thought 'he was wasting his time' — meaning he felt his work was not useful or worthwhile.",
      example: "'Of sixteen texts for movies, only four were popular.' Salter thought he was wasting his time.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Inferential Reading"
    },
    {
      context: "Texto: James Salter's Days in Film",
      q: "Reading about James Salter's years in the cinema could be:",
      options: ["A. Clever enough", "B. Just fair", "C. Quite interesting", "D. Very boring"],
      answer: 2, explanation: "The text says 'it still makes for attractive reading' — meaning reading about it is quite interesting.",
      example: "Perhaps he wasted his time in a larger artistic way, but it still makes for attractive reading.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "B1 Reading Skills"
    },
    {
      context: "Texto: Swift Pizza and Sandwich House",
      q: "According to the text, the customer:",
      options: ["A. Left a £25 tip to the waiters", "B. Celebrated Christmas at the restaurant", "C. Found the restaurant after many attempts", "D. Posted an excellent review about this restaurant"],
      answer: 3, explanation: "The text says Mark 'wins £25 for writing about us this week' — meaning he posted a review.",
      example: "Mark wins £25 for writing about us this week.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Literal Reading"
    },
    {
      context: "Texto: Swift Pizza and Sandwich House",
      q: "It can be inferred from the text that Mark:",
      options: ["A. Does not like cooking food for himself", "B. Almost always eats hamburgers", "C. Enjoys eating fast food sometimes", "D. Is tired of going to restaurants"],
      answer: 2, explanation: "Mark mentions having 'a sad experience with my usual take away restaurant' but still chose fast food — he enjoys it sometimes but not always.",
      example: "I recently had a sad experience with my usual take away restaurant, so I decided to change.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Inferential Comprehension"
    },
    {
      context: "Texto: Jamaica Kincaid",
      q: "Jamaica Kincaid is best described as:",
      options: ["A. Considered", "B. Respected", "C. Admired", "D. Celebrated"],
      answer: 3, explanation: "The text says she is 'one of the most talented Caribbean novelists of all time' — 'celebrated' (célebre) fits best.",
      example: "Jamaica Kincaid is celebrated as one of the most talented Caribbean novelists of all time.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Vocabulary in Context"
    },
    {
      context: "Texto: Jamaica Kincaid",
      q: "Kincaid started writing:",
      options: ["A. To earn money", "B. To save herself from depression", "C. To become famous", "D. To honor her mother"],
      answer: 1, explanation: "The text says 'she had begun writing to save herself' — she used writing as a way to cope with depression.",
      example: "She added that she had begun writing to save herself. It wasn't her goal to be a recognized author.",
      video: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", videoLabel: "Reading Comprehension"
    },
    {
      context: "Texto: Coffee",
      q: "Thanks to caffeine, coffee can:",
      options: ["A. Help you sleep better", "B. Make you feel more energetic", "C. Reduce headaches and blood problems", "D. Improve your appetite"],
      answer: 2, explanation: "The text specifically says: 'Coffee can also reduce headaches and blood problems' thanks to caffeine.",
      example: "Thanks to caffeine you don't get hungry. Coffee can also reduce headaches and blood problems.",
      video: "https://www.youtube.com/watch?v=IjJHFVq-3Mc", videoLabel: "Scientific Reading Comprehension"
    },
    {
      context: "Texto: A Picasso Painting",
      q: "A work of art by Picasso was sold after being _____ 50 years in a closet.",
      options: ["A. spending", "B. spend", "C. spent", "D. spends"],
      answer: 2, explanation: "After the preposition 'after,' we need the past participle form. 'Spent' is the past participle of 'spend.'",
      example: "The painting was found after being spent (hidden) 50 years in a closet.",
      video: "https://www.youtube.com/watch?v=LIe3UxCYQWI", videoLabel: "Grammar: Verb Forms"
    },
    {
      context: "Gramática: Tiempos verbales",
      q: "Choose the correct sentence using Past Perfect:",
      options: [
        "A. She wrote a book when she was young.",
        "B. She had written the book before she became famous.",
        "C. She is writing a book about her life.",
        "D. She writes books about Caribbean life."
      ],
      answer: 1, explanation: "Past Perfect (had + past participle) is used to show an action completed BEFORE another past action.",
      example: "She had written the book before she became famous. (Escribió el libro ANTES de hacerse famosa.)",
      video: "https://www.youtube.com/watch?v=LIe3UxCYQWI", videoLabel: "Past Perfect Tense"
    },
  ]
};

const READING_TEXTS = [
  {
    level: "medium",
    title: "I'll Be a Nurse",
    body: `I'm Alexa Smith and I've done lots of things, but I always dreamed of being a nurse. Nurses should be quite kind, brave, and really nice with people. They must be careful with everything around them. I'm like this, so I will be able to be the best nurse when I finish my studies and in a short time I will earn money by doing something I like!

My wish to become a nurse comes from an experience as a teenager. When I was going to visit a friend, who I met through Facebook, I got sick at the airport. Thank God, they found an ambulance and took me to the hospital. A group of fantastic nurses looked after me and I soon got better. Then, I only had to go to the drugstore for a few days. This awesome time at the hospital encouraged me to become a nurse.

At university, we study hospital vocabulary, lots of health subjects and practice at local hospitals. My classmates and I can easily see how nurses help people feel less pain. These people are always glad and thanking them for their excellent job. Nurses work all the time and spend, even their free time, learning how to improve people's lives. Soon, I hope to be ready to start my career in this wonderful occupation.`,
    questions: [
      { q: "It's good if a nurse is _____.", options: ["A. Excited", "B. Attractive", "C. Friendly"], answer: 2, explanation: "The text says nurses should be 'kind, brave, and really nice' — friendly." },
      { q: "Alexa thinks that soon she will be _____.", options: ["A. Working at a hospital", "B. Going to the airport", "C. Feeling better"], answer: 0, explanation: "She says: 'Soon, I hope to be ready to start my career in this wonderful occupation.'" },
      { q: "At the airport, Alexa _____.", options: ["A. Suddenly felt ill", "B. Had a terrible accident", "C. Took the wrong medicine"], answer: 0, explanation: "'I got sick at the airport' = she suddenly felt ill." },
      { q: "The nurses at the hospital were _____.", options: ["A. Interesting", "B. Fantastic", "C. Lucky"], answer: 1, explanation: "'A group of fantastic nurses looked after me.'" },
    ]
  },
  {
    level: "hard",
    title: "James Salter's Days in Film",
    body: `James Salter was a pilot in the United States Air Force. He abandoned the military profession in 1957 after the publication of his first novel, The Hunters. He is best known as a novelist, but during the sixties and seventies, he worked in film making. Salter made documentaries, wrote texts for films, and even was the director of a film called Three, starring Charlotte Rampling and Sam Waterston.

In Passionate Falsehoods, which was adapted from Salter's book Burning the Days, published in The New Yorker in 1997, Salter tells the story of his life in film. Salter's time in the film world is both good and bad. In Rome, he met directors and stars. In New York, he explored the city with Robert Redford and enjoyed being famous. Deborah Treisman and Michael Agger have talked about Salter. Nick Paumgarten in The Last Book, describes Salter's opinion about his film career:

"Of sixteen texts for movies, only four were popular. There was money, attractive women, and entrance into rooms where there were stories more for the dinner table than for the page." Salter thought he was wasting his time.

Perhaps he wasted his time in a larger artistic way, but it still makes for attractive reading. The Last Book is available to everyone in online stores.`,
    questions: [
      { q: "James Salter played an important part in the making of movies from:", options: ["A. 1960 to 1979", "B. 1960 to 1970", "C. 1960 to 1985"], answer: 0, explanation: "'During the sixties and seventies' = 1960 to 1979." },
      { q: "Passionate Falsehoods is:", options: ["A. A newspaper", "B. A play", "C. A movie"], answer: 2, explanation: "It was adapted from his book Burning the Days — it became a film (movie)." },
      { q: "James Salter thinks his work in cinema was:", options: ["A. Not useful", "B. Not hard", "C. Not usual"], answer: 0, explanation: "He thought 'he was wasting his time' — not useful." },
      { q: "The Last Book can be found:", options: ["A. In museums", "B. At a café", "C. On the web"], answer: 2, explanation: "'The Last Book is available to everyone in online stores' = on the web." },
    ]
  },
  {
    level: "hard",
    title: "Jamaica Kincaid",
    body: `Jamaica Kincaid is one of the most talented Caribbean novelists of all time. Born in Antigua in 1949, she was brought up in a poor background. When she was 17, she moved to New York. There she worked in different jobs; however, she soon went on to become a well-known writer.

Kincaid declared that she was slightly depressed upon her arrival in the US, and that, by then, she had begun writing to save herself. She added that she didn't have any ambition to be published. Although it wasn't her goal to be a recognized author, this quickly became her reality.

Kincaid built her reputation with the honest pattern of her writing. Her texts often deal with the relationships that are developed between mothers and daughters, like in her first poem, "Girl". Her recent collection of essays "My Garden" is also powerful, yet less bitter than her previous works.`,
    questions: [
      { q: "Jamaica Kincaid is considered one of the most talented:", options: ["A. American writers", "B. Caribbean novelists", "C. British poets"], answer: 1, explanation: "'Jamaica Kincaid is one of the most talented Caribbean novelists of all time.'" },
      { q: "Kincaid started writing:", options: ["A. To earn money", "B. To save herself from depression", "C. To become famous"], answer: 1, explanation: "'She had begun writing to save herself' from depression." },
      { q: "Her texts often deal with:", options: ["A. Life in New York", "B. Caribbean history", "C. Relationships between mothers and daughters"], answer: 2, explanation: "'Her texts often deal with the relationships that are developed between mothers and daughters.'" },
    ]
  },
  {
    level: "easy",
    title: "A Day at the Mall",
    body: `A mall is a big building with many shops and places to go. You can find a cinema to see movies, a bookstore to find things to read, and a café where people buy a cup of coffee. There is an elevator so people can go to different floors, and a playground for children to jump and run.

Many malls also have a basement with parking, and bathrooms on every floor. People love malls because you can find everything in one place. You can have lunch or dinner at a restaurant, buy clothes at a shop, or watch a movie at the cinema.`,
    questions: [
      { q: "Where can people see movies at the mall?", options: ["A. At the bookstore", "B. At the cinema", "C. At the café"], answer: 1, explanation: "A cinema is a place to see movies." },
      { q: "What is an elevator used for?", options: ["A. To buy coffee", "B. To go to different floors", "C. For children to play"], answer: 1, explanation: "People get on an elevator to go to different floors." },
      { q: "A playground at the mall is for:", options: ["A. Adults to exercise", "B. Children to jump and run", "C. People to eat lunch"], answer: 1, explanation: "A playground is a fun park for children to jump and run." },
    ]
  }
];

const DIALOGS = [
  {
    level: "easy",
    scene: "👩 Anna se ve feliz. Su amigo le pregunta:",
    q: "'Did you get the appointment?' — What is the best response?",
    options: ["A. Never again!", "B. Come back!", "C. Of course!"],
    answer: 2, explanation: "'Of course!' is the natural positive response when confirming you got something.",
    example: "— Did you get the appointment? — Of course! It's tomorrow at 3 pm."
  },
  {
    level: "easy",
    scene: "🌧️ Está lloviendo afuera. Tu amigo dice:",
    q: "'It will rain.' — What is the best response?",
    options: ["A. Why not?", "B. For sure.", "C. Lucky you."],
    answer: 1, explanation: "'For sure.' is used to confirm or agree with something certain.",
    example: "— It will rain today. — For sure! Look at those clouds."
  },
  {
    level: "easy",
    scene: "🎵 Hay un concierto de rock y tu amigo dice:",
    q: "'Everyone bought tickets for the rock concert.' — Best response?",
    options: ["A. Is it on Saturday?", "B. There was noise.", "C. It is fair!"],
    answer: 0, explanation: "Asking 'Is it on Saturday?' is a natural follow-up when learning about an event.",
    example: "— Everyone bought tickets! — Is it on Saturday? I want to go too."
  },
  {
    level: "medium",
    scene: "👵 Tu abuela lleva muchas bolsas. Tú le ofreces ayuda:",
    q: "'Grandma, shall I hold those bags for you?' — Best response?",
    options: ["A. I'm not afraid!", "B. What's the matter?", "C. That's fine."],
    answer: 2, explanation: "'That's fine.' means 'yes, please' in a polite way — accepting the offer of help.",
    example: "— Shall I hold your bags? — That's fine, thank you so much!"
  },
  {
    level: "medium",
    scene: "🛒 Estás en una tienda mirando una sombrilla.",
    q: "'How much is that umbrella?' — Best response from the seller?",
    options: ["A. Anything else?", "B. 50 dollars.", "C. Cash only!"],
    answer: 1, explanation: "When someone asks the price, the most direct and helpful answer is the actual price.",
    example: "— How much is that umbrella? — 50 dollars. Do you want it?"
  },
  {
    level: "medium",
    scene: "📞 Tu amigo te llama y le dices que estás ocupado:",
    q: "'Did you forget the appointment?' — Best response?",
    options: ["A. Maybe next time.", "B. I guess I did.", "C. It finished late."],
    answer: 1, explanation: "'I guess I did' is used to admit you did something you shouldn't have, with a slight apology.",
    example: "— Did you forget the appointment? — I guess I did. I'm so sorry!"
  },
  {
    level: "hard",
    scene: "🏢 Tu jefe anuncia que serás el nuevo director del departamento:",
    q: "'It seems I'll be the new boss of the business department.' — Best response?",
    options: ["A. Excuse me!", "B. It's ready!", "C. Congratulations!"],
    answer: 2, explanation: "'Congratulations!' is the standard response when someone achieves something great.",
    example: "— I got promoted! — Congratulations! You deserve it."
  },
  {
    level: "hard",
    scene: "🎟️ Tu amigo dice que consiguió entradas de última hora:",
    q: "'If I get the money, I will travel next month.' — Best response?",
    options: ["A. What a pity!", "B. No, you can't!", "C. Let's drive!"],
    answer: 2, explanation: "'Let's drive!' suggests joining the action enthusiastically — responding positively to travel plans.",
    example: "— I will travel next month! — Let's drive! I'll come with you."
  },
];

const RESOURCES = [
  { topic: "Present Simple", icon: "📝", title: "Present Simple Tense - Full Lesson", channel: "English with Lucy", url: "https://www.youtube.com/watch?v=FHi-j2R2bGo", duration: "14 min" },
  { topic: "Present Continuous", icon: "⏳", title: "Present Continuous - When to Use It", channel: "English Grammar Revolution", url: "https://www.youtube.com/watch?v=Bs7Qcb0mncc", duration: "8 min" },
  { topic: "Past Simple", icon: "🕐", title: "Past Simple Tense - Complete Lesson", channel: "Learn English with Rebecca", url: "https://www.youtube.com/watch?v=KK6BRJm8p90", duration: "12 min" },
  { topic: "Present Perfect", icon: "✅", title: "Present Perfect vs Past Simple", channel: "BBC Learning English", url: "https://www.youtube.com/watch?v=LIe3UxCYQWI", duration: "7 min" },
  { topic: "Future Tenses", icon: "🚀", title: "Will vs Going To - Future Tenses", channel: "English with Lucy", url: "https://www.youtube.com/watch?v=YMJhcNpEJtw", duration: "10 min" },
  { topic: "Vocabulario Hospital", icon: "🏥", title: "Medical & Hospital Vocabulary", channel: "Twominute English", url: "https://www.youtube.com/watch?v=XAVyLOy4Y3I", duration: "6 min" },
  { topic: "Rutinas Diarias", icon: "⏰", title: "Daily Routine Vocabulary & Phrases", channel: "Learn English with Emma", url: "https://www.youtube.com/watch?v=3T1fHMrW7Fo", duration: "9 min" },
  { topic: "Comprensión Lectora", icon: "📖", title: "How to Improve Reading Comprehension", channel: "JamesESL English Lessons", url: "https://www.youtube.com/watch?v=4drs1MJgCjE", duration: "11 min" },
  { topic: "Vocabulario Ropa", icon: "👔", title: "Clothes and Fashion Vocabulary", channel: "English with Lucy", url: "https://www.youtube.com/watch?v=UkqvBX_bkfc", duration: "8 min" },
  { topic: "Vocabulario Deportes", icon: "⚽", title: "Sports Vocabulary in English", channel: "Twominute English", url: "https://www.youtube.com/watch?v=Hs2NNRSdKgU", duration: "5 min" },
  { topic: "Conversaciones Básicas", icon: "💬", title: "Basic English Conversations", channel: "English Singsing", url: "https://www.youtube.com/watch?v=fEA5d5YaUNk", duration: "13 min" },
  { topic: "Vocabulario Lugares", icon: "🏢", title: "Places in a City / Mall Vocabulary", channel: "Smile and Learn English", url: "https://www.youtube.com/watch?v=ypkBRLmJLW8", duration: "6 min" },
  { topic: "Modales y Expresiones", icon: "🎭", title: "Common English Idioms and Expressions", channel: "Learn English with TV Series", url: "https://www.youtube.com/watch?v=GQAUNZoGxFg", duration: "10 min" },
  { topic: "Saber 11 Tips", icon: "🏆", title: "Tips para el Inglés Saber 11", channel: "Aprende con la Profe", url: "https://www.youtube.com/watch?v=IjJHFVq-3Mc", duration: "15 min" },
  { topic: "Past Perfect", icon: "🔙", title: "Past Perfect Tense Made Easy", channel: "English Grammar Revolution", url: "https://www.youtube.com/watch?v=LIe3UxCYQWI", duration: "9 min" },
];

// ─── STATE ──────────────────────────────────
const defaultState = () => ({
  totalAnswered: 0,
  totalCorrect: 0,
  totalWrong: 0,
  streak: 0,
  bestStreak: 0,
  levelProgress: { easy: 0, medium: 0, hard: 0 },
  levelAnswered: { easy: 0, medium: 0, hard: 0 },
  levelCorrect: { easy: 0, medium: 0, hard: 0 },
  history: [],
  lastSection: "home",
  lastLevel: "easy",
  lastMode: "flashcards",
});

let state = JSON.parse(localStorage.getItem("em_state") || "null") || defaultState();

function saveState() {
  localStorage.setItem("em_state", JSON.stringify(state));
}

// ─── NAVIGATION ─────────────────────────────
let currentSection = "home";

function navigate(sectionId) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    currentSection = sectionId;
  }
  const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if (link) link.classList.add("active");
  state.lastSection = sectionId;
  saveState();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (sectionId === "home") updateDashboard();
  if (sectionId === "stats") updateStatsPage();
  if (sectionId === "resources") renderResources();
}

// Bind nav links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navigate(link.dataset.section);
    closeMenu();
  });
});

// Bind data-nav buttons
document.addEventListener("click", e => {
  const el = e.target.closest("[data-nav]");
  if (!el) return;
  const section = el.dataset.nav;
  const level = el.dataset.lvl;
  const mode = el.dataset.mode;
  if (level) selectedLevel = level;
  if (mode) selectedMode = mode;
  navigate(section);
  if (section === "study" && level && mode) {
    updateStudyToggles();
    startStudy();
  } else if (section === "study") {
    showStudySelector();
  }
});

// Menu toggle
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("topnav");
  nav.classList.toggle("open");
});
function closeMenu() {
  document.getElementById("topnav").classList.remove("open");
}

// ─── THEME ──────────────────────────────────
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("em_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("em_theme", next);
});

// ─── DASHBOARD ──────────────────────────────
function updateDashboard() {
  document.getElementById("statTotal").textContent = state.totalAnswered;
  document.getElementById("statCorrect").textContent = state.totalCorrect;
  document.getElementById("statWrong").textContent = state.totalWrong;
  const pct = state.totalAnswered ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
  document.getElementById("statPct").textContent = pct + "%";

  ["easy", "medium", "hard"].forEach(lvl => {
    const ans = state.levelAnswered[lvl] || 0;
    const total = QUESTIONS[lvl].length + DIALOGS.filter(d => d.level === lvl).length;
    const pct = total ? Math.min(100, Math.round((ans / total) * 100)) : 0;
    document.getElementById(`progBar${cap(lvl)}`).style.width = pct + "%";
    document.getElementById(`progPct${cap(lvl)}`).textContent = pct + "%";
  });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

document.getElementById("btnContinue").addEventListener("click", () => {
  selectedLevel = state.lastLevel || "easy";
  selectedMode = state.lastMode || "flashcards";
  navigate("study");
  updateStudyToggles();
  startStudy();
});

// ─── STUDY SETUP ────────────────────────────
let selectedLevel = "easy";
let selectedMode = "flashcards";

function updateStudyToggles() {
  document.querySelectorAll("#lvlGroup .toggle-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.val === selectedLevel);
  });
  document.querySelectorAll("#modeGroup .toggle-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.val === selectedMode);
  });
}

document.querySelectorAll("#lvlGroup .toggle-btn").forEach(b => {
  b.addEventListener("click", () => { selectedLevel = b.dataset.val; updateStudyToggles(); });
});
document.querySelectorAll("#modeGroup .toggle-btn").forEach(b => {
  b.addEventListener("click", () => { selectedMode = b.dataset.val; updateStudyToggles(); });
});

document.getElementById("btnStartStudy").addEventListener("click", startStudy);

function showStudySelector() {
  document.getElementById("studySelector").classList.remove("hidden");
  document.getElementById("studyArena").classList.add("hidden");
}

function startStudy() {
  document.getElementById("studySelector").classList.add("hidden");
  document.getElementById("studyArena").classList.remove("hidden");
  state.lastLevel = selectedLevel;
  state.lastMode = selectedMode;
  saveState();
  hideModes();
  resetArena();

  const levelNames = { easy: "🌱 Sencillo A1", medium: "⚡ Medio A2", hard: "🔥 Complejo B1" };
  const modeNames = { flashcards: "🃏 Flashcards", multiple: "✅ Quiz", reading: "📖 Lectura", dialogs: "💬 Diálogos", exam: "🏆 Examen" };
  document.getElementById("arenaMode").textContent = modeNames[selectedMode] || selectedMode;
  document.getElementById("arenaLevel").textContent = levelNames[selectedLevel] || selectedLevel;

  if (selectedMode === "flashcards") initFlashcards();
  else if (selectedMode === "multiple") initMultiple();
  else if (selectedMode === "reading") initReading();
  else if (selectedMode === "dialogs") initDialogs();
  else if (selectedMode === "exam") initExam();
}

function hideModes() {
  ["modeFlashcards","modeMultiple","modeReading","modeDialogs","modeExam","modeResult"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
}

// Arena state
let arenaCorrect = 0, arenaWrong = 0, arenaTotal = 0, arenaIdx = 0;
let arenaItems = [];

function resetArena() {
  arenaCorrect = 0; arenaWrong = 0; arenaTotal = 0; arenaIdx = 0;
  updateArenaScore();
}

function updateArenaScore() {
  document.getElementById("arenaCorrect").textContent = `✓ ${arenaCorrect}`;
  document.getElementById("arenaWrong").textContent = `✗ ${arenaWrong}`;
  document.getElementById("arenaProgress").textContent = `${arenaIdx}/${arenaTotal}`;
  const pct = arenaTotal ? (arenaIdx / arenaTotal) * 100 : 0;
  document.getElementById("arenaPBar").style.width = pct + "%";
}

document.getElementById("btnBackStudy").addEventListener("click", showStudySelector);

// ─── FLASHCARDS ─────────────────────────────
let fcIdx = 0, fcItems = [], fcFlipped = false;

function initFlashcards() {
  document.getElementById("modeFlashcards").classList.remove("hidden");
  fcItems = shuffle([...FLASHCARDS[selectedLevel]]);
  fcIdx = 0; fcFlipped = false;
  arenaTotal = fcItems.length;
  arenaIdx = 0;
  updateArenaScore();
  showFC();
}

function showFC() {
  if (fcIdx >= fcItems.length) { showResult(); return; }
  const item = fcItems[fcIdx];
  document.getElementById("fcWord").textContent = item.word;
  document.getElementById("fcTranslation").textContent = item.translation;
  document.getElementById("fcExample").textContent = item.example;
  const fc = document.getElementById("flashcard");
  fc.classList.remove("flipped");
  fcFlipped = false;
  arenaIdx = fcIdx;
  arenaTotal = fcItems.length;
  updateArenaScore();
}

document.getElementById("fcFlip").addEventListener("click", () => {
  const fc = document.getElementById("flashcard");
  fcFlipped = !fcFlipped;
  fc.classList.toggle("flipped", fcFlipped);
});
document.getElementById("flashcard").addEventListener("click", () => {
  const fc = document.getElementById("flashcard");
  fcFlipped = !fcFlipped;
  fc.classList.toggle("flipped", fcFlipped);
});

document.getElementById("fcCorrect").addEventListener("click", () => {
  arenaCorrect++; fcIdx++;
  recordAnswer(true);
  showFC();
});
document.getElementById("fcWrong").addEventListener("click", () => {
  arenaWrong++; fcIdx++;
  recordAnswer(false);
  showFC();
});

// ─── MULTIPLE CHOICE ────────────────────────
let mqItems = [], mqIdx = 0;

function initMultiple() {
  document.getElementById("modeMultiple").classList.remove("hidden");
  mqItems = shuffle([...QUESTIONS[selectedLevel]]);
  mqIdx = 0;
  arenaTotal = mqItems.length;
  showMQ();
}

function showMQ() {
  if (mqIdx >= mqItems.length) { showResult(); return; }
  const q = mqItems[mqIdx];
  document.getElementById("qContext").textContent = q.context || "";
  document.getElementById("qQuestion").textContent = q.q;
  const opts = document.getElementById("qOptions");
  opts.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/, "")}`;
    btn.addEventListener("click", () => selectMQ(i, q));
    opts.appendChild(btn);
  });
  document.getElementById("qFeedback").classList.add("hidden");
  arenaIdx = mqIdx;
  updateArenaScore();
}

function selectMQ(chosen, q) {
  const opts = document.querySelectorAll("#qOptions .option-btn");
  opts.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === chosen && chosen !== q.answer) btn.classList.add("wrong");
  });
  const correct = chosen === q.answer;
  if (correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct);
  updateArenaScore();

  const fb = document.getElementById("qFeedback");
  document.getElementById("fbResult").innerHTML = correct
    ? `<span style="color:var(--green)">✓ ¡Correcto!</span>`
    : `<span style="color:var(--red)">✗ Incorrecto. La respuesta era: ${q.options[q.answer]}</span>`;
  document.getElementById("fbExplanation").textContent = q.explanation || "";
  document.getElementById("fbExample").textContent = q.example ? `📌 ${q.example}` : "";
  if (q.video) {
    document.getElementById("fbVideo").href = q.video;
    document.getElementById("fbVideo").textContent = `▶ ${q.videoLabel || "Ver video explicativo"}`;
    document.getElementById("fbVideo").style.display = "inline-flex";
  } else {
    document.getElementById("fbVideo").style.display = "none";
  }
  fb.classList.remove("hidden");
  mqIdx++;
}

document.getElementById("btnNextQ").addEventListener("click", showMQ);

// ─── READING ────────────────────────────────
let rdItems = [], rdIdx = 0, rdQIdx = 0, rdActive = null;

function initReading() {
  document.getElementById("modeReading").classList.remove("hidden");
  const allTexts = READING_TEXTS.filter(t => t.level === selectedLevel);
  rdItems = allTexts.length ? allTexts : READING_TEXTS;
  rdIdx = 0; rdQIdx = 0;
  arenaTotal = rdItems.reduce((s, t) => s + t.questions.length, 0);
  showReading();
}

function showReading() {
  if (rdIdx >= rdItems.length) { showResult(); return; }
  rdActive = rdItems[rdIdx];
  document.getElementById("readTitle").textContent = rdActive.title;
  document.getElementById("readBody").textContent = rdActive.body;
  rdQIdx = 0;
  const container = document.getElementById("readQuestions");
  container.innerHTML = "";
  const q = rdActive.questions[0];
  renderReadQ(q, container);
  document.getElementById("readFeedback").classList.add("hidden");
}

function renderReadQ(q, container) {
  container.innerHTML = "";
  const block = document.createElement("div");
  block.className = "read-question-block";
  block.innerHTML = `<div class="rq-text">${rdQIdx + 1}. ${q.q}</div>`;
  const optsDiv = document.createElement("div");
  optsDiv.className = "quiz-options";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-C]\.\s*/, "")}`;
    btn.addEventListener("click", () => selectRQ(i, q));
    optsDiv.appendChild(btn);
  });
  block.appendChild(optsDiv);
  container.appendChild(block);
  arenaIdx = arenaTotal - rdItems.slice(rdIdx).reduce((s,t) => s + t.questions.length, 0) + rdQIdx;
  updateArenaScore();
}

function selectRQ(chosen, q) {
  document.querySelectorAll("#readQuestions .option-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === chosen && chosen !== q.answer) btn.classList.add("wrong");
  });
  const correct = chosen === q.answer;
  if (correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct);
  updateArenaScore();

  const fb = document.getElementById("readFeedback");
  document.getElementById("readFbResult").innerHTML = correct
    ? `<span style="color:var(--green)">✓ ¡Correcto!</span>`
    : `<span style="color:var(--red)">✗ Incorrecto. La respuesta correcta era: ${q.options[q.answer]}</span>`;
  document.getElementById("readFbExpl").textContent = q.explanation || "";
  fb.classList.remove("hidden");
  rdQIdx++;
}

document.getElementById("btnNextRead").addEventListener("click", () => {
  document.getElementById("readFeedback").classList.add("hidden");
  if (rdQIdx < rdActive.questions.length) {
    renderReadQ(rdActive.questions[rdQIdx], document.getElementById("readQuestions"));
  } else {
    rdIdx++;
    if (rdIdx >= rdItems.length) showResult();
    else showReading();
  }
});

// ─── DIALOGS ────────────────────────────────
let dlItems = [], dlIdx = 0;

function initDialogs() {
  document.getElementById("modeDialogs").classList.remove("hidden");
  const filtered = DIALOGS.filter(d => d.level === selectedLevel);
  dlItems = shuffle(filtered.length ? filtered : DIALOGS);
  dlIdx = 0;
  arenaTotal = dlItems.length;
  showDialog();
}

function showDialog() {
  if (dlIdx >= dlItems.length) { showResult(); return; }
  const d = dlItems[dlIdx];
  document.getElementById("dialogScene").textContent = d.scene;
  document.getElementById("dialogQ").textContent = d.q;
  const opts = document.getElementById("dialogOpts");
  opts.innerHTML = "";
  d.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-C]\.\s*/, "")}`;
    btn.addEventListener("click", () => selectDialog(i, d));
    opts.appendChild(btn);
  });
  document.getElementById("dialogFeedback").classList.add("hidden");
  arenaIdx = dlIdx;
  updateArenaScore();
}

function selectDialog(chosen, d) {
  document.querySelectorAll("#dialogOpts .option-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === d.answer) btn.classList.add("correct");
    else if (i === chosen && chosen !== d.answer) btn.classList.add("wrong");
  });
  const correct = chosen === d.answer;
  if (correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct);
  updateArenaScore();

  const fb = document.getElementById("dialogFeedback");
  document.getElementById("dialogFbResult").innerHTML = correct
    ? `<span style="color:var(--green)">✓ ¡Correcto!</span>`
    : `<span style="color:var(--red)">✗ Incorrecto. La respuesta correcta era: ${d.options[d.answer]}</span>`;
  document.getElementById("dialogFbExpl").textContent = d.explanation || (d.example ? `Ejemplo: ${d.example}` : "");
  fb.classList.remove("hidden");
  dlIdx++;
}

document.getElementById("btnNextDialog").addEventListener("click", showDialog);

// ─── EXAM ────────────────────────────────────
let exItems = [], exIdx = 0;

function initExam() {
  document.getElementById("modeExam").classList.remove("hidden");
  const allQ = [
    ...QUESTIONS.easy.map(q => ({...q, lvl:"easy"})),
    ...QUESTIONS.medium.map(q => ({...q, lvl:"medium"})),
    ...QUESTIONS.hard.map(q => ({...q, lvl:"hard"})),
    ...DIALOGS.map(d => ({...d, type:"dialog"})),
  ];
  exItems = shuffle(allQ).slice(0, 20);
  exIdx = 0;
  arenaTotal = exItems.length;
  showExam();
}

function showExam() {
  if (exIdx >= exItems.length) { showResult(); return; }
  const q = exItems[exIdx];
  document.getElementById("examContext").textContent = q.context || q.scene || "";
  document.getElementById("examQuestion").textContent = q.q;
  const opts = document.getElementById("examOptions");
  opts.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/, "")}`;
    btn.addEventListener("click", () => selectExam(i, q));
    opts.appendChild(btn);
  });
  document.getElementById("examFeedback").classList.add("hidden");
  arenaIdx = exIdx;
  updateArenaScore();
}

function selectExam(chosen, q) {
  document.querySelectorAll("#examOptions .option-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === chosen && chosen !== q.answer) btn.classList.add("wrong");
  });
  const correct = chosen === q.answer;
  if (correct) arenaCorrect++; else arenaWrong++;
  recordAnswer(correct);
  updateArenaScore();

  const fb = document.getElementById("examFeedback");
  document.getElementById("examFbResult").innerHTML = correct
    ? `<span style="color:var(--green)">✓ ¡Correcto!</span>`
    : `<span style="color:var(--red)">✗ Incorrecto. La respuesta era: ${q.options[q.answer]}</span>`;
  document.getElementById("examFbExpl").textContent = q.explanation || "";
  fb.classList.remove("hidden");
  exIdx++;
}

document.getElementById("btnNextExam").addEventListener("click", showExam);

// ─── RESULT ─────────────────────────────────
function showResult() {
  hideModes();
  document.getElementById("modeResult").classList.remove("hidden");
  const total = arenaCorrect + arenaWrong;
  const pct = total ? Math.round((arenaCorrect / total) * 100) : 0;
  let emoji = pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : pct >= 40 ? "📚" : "💪";
  let title = pct >= 80 ? "¡Excelente trabajo!" : pct >= 60 ? "¡Bien hecho!" : pct >= 40 ? "¡Sigue practicando!" : "¡No te rindas!";
  document.getElementById("resultEmoji").textContent = emoji;
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultScore").textContent = `${pct}%`;

  setTimeout(() => {
    document.getElementById("rbCorrect").style.width = total ? (arenaCorrect/total*100)+"%" : "0%";
    document.getElementById("rbWrong").style.width = total ? (arenaWrong/total*100)+"%" : "0%";
  }, 100);

  let feedback = "";
  if (pct >= 80) feedback = "🌟 Tienes un excelente dominio de este nivel. ¡Estás listo para el Saber 11!";
  else if (pct >= 60) feedback = "📈 Buen progreso. Repasa las palabras que fallaste y practica más los textos de comprensión.";
  else if (pct >= 40) feedback = "📖 Necesitas repasar el vocabulario y los textos. Usa las flashcards antes del quiz.";
  else feedback = "💡 Empieza con las flashcards para aprender el vocabulario, luego intenta el quiz de nuevo.";
  document.getElementById("resultFeedback").textContent = feedback;

  // Save to history
  const modes = { flashcards: "Flashcards", multiple: "Quiz", reading: "Lectura", dialogs: "Diálogos", exam: "Examen" };
  state.history.unshift({
    mode: modes[selectedMode] || selectedMode,
    level: selectedLevel,
    correct: arenaCorrect,
    wrong: arenaWrong,
    pct,
    date: new Date().toLocaleDateString("es-CO")
  });
  if (state.history.length > 20) state.history.pop();
  saveState();
}

document.getElementById("btnRetry").addEventListener("click", () => {
  resetArena();
  startStudy();
});

// ─── RECORD ANSWER ──────────────────────────
function recordAnswer(correct) {
  state.totalAnswered++;
  if (correct) {
    state.totalCorrect++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  } else {
    state.totalWrong++;
    state.streak = 0;
  }
  state.levelAnswered[selectedLevel] = (state.levelAnswered[selectedLevel] || 0) + 1;
  if (correct) state.levelCorrect[selectedLevel] = (state.levelCorrect[selectedLevel] || 0) + 1;
  const total = QUESTIONS[selectedLevel].length;
  state.levelProgress[selectedLevel] = Math.min(100, Math.round(((state.levelAnswered[selectedLevel]) / (total || 1)) * 100));
  saveState();
}

// ─── STATS PAGE ─────────────────────────────
function updateStatsPage() {
  document.getElementById("statsCorrect").textContent = state.totalCorrect;
  document.getElementById("statsWrong").textContent = state.totalWrong;
  const pct = state.totalAnswered ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
  document.getElementById("statsPct").textContent = pct + "%";
  document.getElementById("statsStreak").textContent = state.bestStreak;

  const ls = document.getElementById("levelStats");
  ls.innerHTML = "";
  const lvlData = [
    { key: "easy", label: "🌱 Sencillo A1" },
    { key: "medium", label: "⚡ Medio A2" },
    { key: "hard", label: "🔥 Complejo B1" },
  ];
  lvlData.forEach(({ key, label }) => {
    const ans = state.levelAnswered[key] || 0;
    const cor = state.levelCorrect[key] || 0;
    const total = QUESTIONS[key].length;
    const p = total ? Math.min(100, Math.round((ans / total) * 100)) : 0;
    const row = document.createElement("div");
    row.className = "lstat-row";
    row.innerHTML = `
      <div class="lstat-name">${label}</div>
      <div class="lstat-bar-wrap"><div class="lstat-bar" style="width:${p}%"></div></div>
      <div class="lstat-pct">${p}%</div>
      <div style="font-size:.8rem;color:var(--text3);width:80px;text-align:right">${cor}/${ans} ✓</div>
    `;
    ls.appendChild(row);
  });

  const hl = document.getElementById("historyList");
  hl.innerHTML = "";
  if (!state.history.length) {
    hl.innerHTML = "<p style='color:var(--text3);font-size:.9rem'>Aún no hay historial. ¡Comienza a estudiar!</p>";
    return;
  }
  state.history.slice(0, 10).forEach(h => {
    const item = document.createElement("div");
    item.className = "history-item";
    const icons = { Flashcards: "🃏", Quiz: "✅", Lectura: "📖", Diálogos: "💬", Examen: "🏆" };
    item.innerHTML = `
      <div class="hi-icon">${icons[h.mode] || "📝"}</div>
      <div class="hi-info">
        <div class="hi-mode">${h.mode}</div>
        <div class="hi-detail">${h.level} · ${h.date}</div>
      </div>
      <div class="hi-score ${h.pct >= 60 ? "good" : "bad"}">${h.pct}%</div>
    `;
    hl.appendChild(item);
  });
}

document.getElementById("btnReset").addEventListener("click", () => {
  if (confirm("¿Seguro que quieres borrar todo el progreso? Esta acción no se puede deshacer.")) {
    state = defaultState();
    saveState();
    updateStatsPage();
    updateDashboard();
    showToast("✅ Progreso reiniciado");
  }
});

// ─── RESOURCES ──────────────────────────────
function renderResources() {
  const grid = document.getElementById("resourcesGrid");
  grid.innerHTML = "";
  RESOURCES.forEach(r => {
    const card = document.createElement("div");
    card.className = "resource-card";
    card.innerHTML = `
      <div class="rc-thumb">
        <span style="font-size:2.5rem">${r.icon}</span>
        <div class="rc-play">▶</div>
      </div>
      <div class="rc-body">
        <div class="rc-topic">${r.topic}</div>
        <div class="rc-title">${r.title}</div>
        <div class="rc-channel">📺 ${r.channel} · ${r.duration}</div>
        <a href="${r.url}" target="_blank" class="rc-link">▶ Ver en YouTube</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── TOAST ──────────────────────────────────
function showToast(msg, ms = 2500) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  setTimeout(() => t.classList.add("hidden"), ms);
}

// ─── UTILS ──────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── INIT ───────────────────────────────────
updateDashboard();
navigate(state.lastSection || "home");
