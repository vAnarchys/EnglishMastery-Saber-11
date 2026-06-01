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

    // ── Extra Basic Flashcards ──
    { word:"Doctor", tag:"Profesión", translation:"Médico / Doctor", example:"The doctor will see you now.", exampleEs:"El médico te verá ahora." },
    { word:"Police officer", tag:"Profesión", translation:"Policía / Oficial de policía", example:"The police officer helped us find our way.", exampleEs:"El policía nos ayudó a encontrar el camino." },
    { word:"Firefighter", tag:"Profesión", translation:"Bombero", example:"Firefighters put out the fire quickly.", exampleEs:"Los bomberos apagaron el incendio rápidamente." },
    { word:"Pilot", tag:"Profesión", translation:"Piloto", example:"The pilot announced we would land in ten minutes.", exampleEs:"El piloto anunció que aterrizaríamos en diez minutos." },
    { word:"Engineer", tag:"Profesión", translation:"Ingeniero", example:"She works as an engineer in a technology company.", exampleEs:"Ella trabaja como ingeniera en una compañía de tecnología." },
    { word:"Supermarket", tag:"Lugar", translation:"Supermercado", example:"We buy vegetables and meat at the supermarket.", exampleEs:"Compramos verduras y carne en el supermercado." },
    { word:"Post office", tag:"Lugar", translation:"Correos / Oficina de correos", example:"I need to go to the post office to send a package.", exampleEs:"Necesito ir a la oficina de correos para enviar un paquete." },
    { word:"Pharmacy", tag:"Lugar", translation:"Farmacia", example:"You can buy medicine at the pharmacy.", exampleEs:"Puedes comprar medicamentos en la farmacia." },
    { word:"Bank", tag:"Lugar", translation:"Banco", example:"I need to go to the bank to get some money.", exampleEs:"Necesito ir al banco a sacar dinero." },
    { word:"Airport", tag:"Lugar", translation:"Aeropuerto", example:"We arrived at the airport two hours before the flight.", exampleEs:"Llegamos al aeropuerto dos horas antes del vuelo." },
    { word:"Train station", tag:"Lugar", translation:"Estación de tren", example:"The train station is in the center of the city.", exampleEs:"La estación de tren está en el centro de la ciudad." },
    { word:"Museum", tag:"Lugar", translation:"Museo", example:"The museum has a great collection of ancient art.", exampleEs:"El museo tiene una gran colección de arte antiguo." },
    { word:"Park", tag:"Lugar", translation:"Parque", example:"Children love to play in the park after school.", exampleEs:"A los niños les encanta jugar en el parque después del colegio." },
    { word:"Football / Soccer", tag:"Deporte", translation:"Fútbol", example:"Football is the most popular sport in the world.", exampleEs:"El fútbol es el deporte más popular del mundo." },
    { word:"Tennis", tag:"Deporte", translation:"Tenis", example:"She plays tennis every Saturday morning.", exampleEs:"Ella juega tenis cada sábado por la mañana." },
    { word:"Volleyball", tag:"Deporte", translation:"Voleibol", example:"They formed a volleyball team at school.", exampleEs:"Formaron un equipo de voleibol en el colegio." },
    { word:"Gym", tag:"Actividad", translation:"Gimnasio", example:"He goes to the gym three times a week.", exampleEs:"Él va al gimnasio tres veces a la semana." },
    { word:"Hat", tag:"Ropa / Accesorios", translation:"Sombrero / Gorra", example:"Don't forget your hat — it's very sunny today.", exampleEs:"No olvides tu sombrero — hoy hace mucho sol." },
    { word:"Jacket", tag:"Ropa / Accesorios", translation:"Chaqueta / Saco", example:"Take your jacket — it's cold outside.", exampleEs:"Lleva tu chaqueta — hace frío afuera." },
    { word:"Boots", tag:"Ropa / Accesorios", translation:"Botas", example:"She wears boots in the rainy season.", exampleEs:"Ella usa botas en la temporada de lluvia." },
    { word:"Warning sign", tag:"Aviso / señal", translation:"Señal de advertencia", example:"The warning sign says: Danger — do not enter!", exampleEs:"La señal de advertencia dice: ¡Peligro — no entre!" },
    { word:"Exit", tag:"Aviso / señal", translation:"Salida", example:"The exit is at the end of the corridor.", exampleEs:"La salida está al final del corredor." },
    { word:"Keep out", tag:"Aviso / señal", translation:"Prohibida la entrada / No pasar", example:"The sign on the door says: Keep out!", exampleEs:"El letrero en la puerta dice: ¡No pasar!" },
    { word:"No smoking", tag:"Aviso / señal", translation:"Prohibido fumar", example:"There is a no smoking sign in the restaurant.", exampleEs:"Hay un letrero de prohibido fumar en el restaurante." },
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

    // ── Extra Intermediate Flashcards ──
    { word:"Determined", tag:"Cualidad personal", translation:"Determinado / Decidido", example:"She was determined to pass the English exam.", exampleEs:"Ella estaba determinada a pasar el examen de inglés." },
    { word:"Curious", tag:"Cualidad personal", translation:"Curioso", example:"He is curious about science and always asks questions.", exampleEs:"Él es curioso sobre la ciencia y siempre hace preguntas." },
    { word:"Responsible", tag:"Cualidad personal", translation:"Responsable", example:"A good nurse must be responsible and careful.", exampleEs:"Una buena enfermera debe ser responsable y cuidadosa." },
    { word:"Patient", tag:"Cualidad personal", translation:"Paciente", example:"Teaching requires you to be very patient.", exampleEs:"Enseñar requiere que seas muy paciente." },
    { word:"Creative", tag:"Cualidad personal", translation:"Creativo", example:"She is very creative and loves painting.", exampleEs:"Ella es muy creativa y le encanta pintar." },
    { word:"Ingredient", tag:"Alimentación", translation:"Ingrediente", example:"The main ingredient of this dish is rice.", exampleEs:"El ingrediente principal de este plato es el arroz." },
    { word:"Recipe", tag:"Alimentación", translation:"Receta", example:"My grandmother's recipe for soup is the best.", exampleEs:"La receta de sopa de mi abuela es la mejor." },
    { word:"Vegetarian", tag:"Alimentación", translation:"Vegetariano", example:"She became vegetarian because she loves animals.", exampleEs:"Se volvió vegetariana porque ama a los animales." },
    { word:"Organic", tag:"Alimentación", translation:"Orgánico / Ecológico", example:"Organic food is grown without pesticides.", exampleEs:"Los alimentos orgánicos se cultivan sin pesticidas." },
    { word:"Nutrition", tag:"Alimentación", translation:"Nutrición", example:"Good nutrition is essential for a healthy life.", exampleEs:"Una buena nutrición es esencial para una vida saludable." },
    { word:"Pollution", tag:"Medio ambiente", translation:"Contaminación", example:"Air pollution is a serious problem in big cities.", exampleEs:"La contaminación del aire es un problema grave en las grandes ciudades." },
    { word:"Recycle", tag:"Medio ambiente", translation:"Reciclar", example:"We should recycle paper, plastic and glass.", exampleEs:"Debemos reciclar papel, plástico y vidrio." },
    { word:"Endangered", tag:"Medio ambiente", translation:"En peligro de extinción", example:"Many animal species are endangered due to deforestation.", exampleEs:"Muchas especies animales están en peligro de extinción debido a la deforestación." },
    { word:"Renewable", tag:"Medio ambiente", translation:"Renovable", example:"Solar energy is a great example of renewable energy.", exampleEs:"La energía solar es un gran ejemplo de energía renovable." },
    { word:"Deforestation", tag:"Medio ambiente", translation:"Deforestación", example:"Deforestation destroys the habitat of many animals.", exampleEs:"La deforestación destruye el hábitat de muchos animales." },
    { word:"Scholarship", tag:"Educación", translation:"Beca", example:"She won a scholarship to study at a US university.", exampleEs:"Ella ganó una beca para estudiar en una universidad de EE.UU." },
    { word:"Graduation", tag:"Educación", translation:"Graduación", example:"His graduation ceremony was a very special day.", exampleEs:"Su ceremonia de graduación fue un día muy especial." },
    { word:"Research", tag:"Educación", translation:"Investigación", example:"Scientists conduct research to find new medicines.", exampleEs:"Los científicos realizan investigaciones para encontrar nuevos medicamentos." },
    { word:"Application", tag:"Educación", translation:"Solicitud / Aplicación", example:"She submitted her university application last week.", exampleEs:"Ella presentó su solicitud universitaria la semana pasada." },
    { word:"Assignment", tag:"Educación", translation:"Tarea / Asignación", example:"The assignment is due on Friday at 9 a.m.", exampleEs:"La tarea debe entregarse el viernes a las 9 a.m." },
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
  
    // ── Extra Advanced Flashcards ──
    { word:"Controversial", tag:"Adjetivo académico", translation:"Controvertido / Polémico", example:"The scientist's research was controversial but important.", exampleEs:"La investigación del científico era controvertida pero importante." },
    { word:"Significant", tag:"Adjetivo académico", translation:"Significativo / Importante", example:"The discovery had a significant impact on medicine.", exampleEs:"El descubrimiento tuvo un impacto significativo en la medicina." },
    { word:"Comprehensive", tag:"Adjetivo académico", translation:"Exhaustivo / Completo", example:"She wrote a comprehensive report about the topic.", exampleEs:"Ella escribió un informe exhaustivo sobre el tema." },
    { word:"Sustainable", tag:"Medio ambiente / Académico", translation:"Sostenible", example:"We need sustainable solutions to fight climate change.", exampleEs:"Necesitamos soluciones sostenibles para combatir el cambio climático." },
    { word:"Hypothesis", tag:"Ciencia", translation:"Hipótesis", example:"The scientist formed a hypothesis and then tested it.", exampleEs:"El científico formuló una hipótesis y luego la probó." },
    { word:"Phenomenon", tag:"Ciencia / Literatura", translation:"Fenómeno", example:"The northern lights are a beautiful natural phenomenon.", exampleEs:"Las auroras boreales son un hermoso fenómeno natural." },
    { word:"Perspective", tag:"Concepto literario", translation:"Perspectiva / Punto de vista", example:"The novel is told from the perspective of a child.", exampleEs:"La novela está narrada desde la perspectiva de un niño." },
    { word:"Implication", tag:"Concepto académico", translation:"Implicación / Consecuencia", example:"The implications of this discovery are enormous.", exampleEs:"Las implicaciones de este descubrimiento son enormes." },
    { word:"Contemporary", tag:"Adjetivo literario", translation:"Contemporáneo / Actual", example:"She is one of the most celebrated contemporary writers.", exampleEs:"Ella es una de las escritoras contemporáneas más célebres." },
    { word:"Ideology", tag:"Concepto académico", translation:"Ideología", example:"Political ideology shapes how people see the world.", exampleEs:"La ideología política moldea cómo las personas ven el mundo." },
    { word:"Infrastructure", tag:"Economía / Sociedad", translation:"Infraestructura", example:"The government invested heavily in transport infrastructure.", exampleEs:"El gobierno invirtió mucho en infraestructura de transporte." },
    { word:"Consumption", tag:"Economía", translation:"Consumo", example:"Energy consumption has increased dramatically in recent years.", exampleEs:"El consumo de energía ha aumentado dramáticamente en los últimos años." },
    { word:"Demographic", tag:"Sociedad", translation:"Demográfico / Demografía", example:"Demographic changes are affecting labour markets worldwide.", exampleEs:"Los cambios demográficos están afectando los mercados laborales en todo el mundo." },
    { word:"Narrative", tag:"Literatura", translation:"Narrativa / Relato", example:"The narrative of the novel is complex and multi-layered.", exampleEs:"La narrativa de la novela es compleja y tiene múltiples capas." },
    { word:"Subsequently", tag:"Conector temporal", translation:"Posteriormente / A continuación", example:"She graduated from university and subsequently found a job.", exampleEs:"Ella se graduó de la universidad y posteriormente encontró un trabajo." },
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

  // ══════════ SPORTS & CULTURE TEXTS ══════════

  {
    id:"formula1", level:"medium",
    meta:"Texto Intermedio — Deportes / Historia",
    title:"The History of Formula 1",
    body:`Formula 1 is the highest level of single-seater motor racing in the world. The first official Formula 1 World Championship race took place at Silverstone in the United Kingdom on 13 May 1950. Since then, it has grown into one of the most popular and expensive sporting events on the planet.

The name 'Formula 1' comes from the set of rules, or formula, that all cars must follow. These rules cover the design of the car, the engine, the tyres and safety features. Engineers spend millions of dollars developing cars that can reach speeds of over 350 kilometres per hour.

Ferrari, McLaren, Mercedes and Red Bull are among the most famous teams in the sport. Each team employs hundreds of engineers, mechanics and data analysts who work together to make the car as fast and reliable as possible. A single Formula 1 car costs between five and fifteen million dollars to build.

The drivers are some of the most skilled athletes in the world. They must be physically strong, mentally focused and able to make split-second decisions at extremely high speeds. Great champions like Ayrton Senna, Michael Schumacher and Lewis Hamilton have become global icons, inspiring millions of fans around the world.`,
    questions:[
      { q:"When and where did the first official Formula 1 World Championship race take place?", options:["A. In Monaco in 1955","B. At Silverstone on 13 May 1950","C. In Italy in 1949","D. At Le Mans in 1952"], answer:1,
        explanation:"El texto dice: 'The first official Formula 1 World Championship race took place at Silverstone in the United Kingdom on 13 May 1950.'",
        correctEs:"B. At Silverstone on 13 May 1950 = en Silverstone el 13 de mayo de 1950" },
      { q:"What does the 'Formula' in Formula 1 refer to?", options:["A. A mathematical calculation","B. The name of the first race track","C. A set of rules that all cars must follow","D. The number of wheels on the car"], answer:2,
        explanation:"El texto dice: 'The name Formula 1 comes from the set of rules, or formula, that all cars must follow.'",
        correctEs:"C. A set of rules that all cars must follow = un conjunto de reglas que todos los autos deben seguir" },
      { q:"According to the text, how much can a single Formula 1 car cost?", options:["A. Between one and five million dollars","B. Up to one hundred million dollars","C. Between five and fifteen million dollars","D. Around five hundred thousand dollars"], answer:2,
        explanation:"El texto dice: 'A single Formula 1 car costs between five and fifteen million dollars to build.'",
        correctEs:"C. Between five and fifteen million dollars = entre cinco y quince millones de dólares" },
      { q:"The word 'split-second' in the last paragraph means:", options:["A. Very slow","B. Extremely fast and brief","C. Carefully planned","D. Emotionally difficult"], answer:1,
        explanation:"'Split-second decisions' = decisiones en fracciones de segundo = muy rápidas.",
        correctEs:"B. Extremely fast and brief = extremadamente rápido y breve (fracción de segundo)" },
    ]
  },
  {
    id:"lewis_hamilton", level:"medium",
    meta:"Texto Intermedio — Deportes / Biografía",
    title:"Lewis Hamilton: A Champion's Journey",
    body:`Lewis Hamilton is widely considered one of the greatest Formula 1 drivers of all time. Born in Stevenage, England, in 1985, he grew up in a modest family. His father Anthony worked multiple jobs to support Lewis's early karting career, and from the very beginning it was clear that Lewis had exceptional talent.

Hamilton joined the McLaren junior driver programme at the age of thirteen, becoming one of the youngest drivers to receive factory support. He made his Formula 1 debut in 2007 with McLaren and nearly won the World Championship in his first season. The following year, in 2008, he became World Champion for the first time with a dramatic last-corner overtake in the final race.

After joining Mercedes in 2013, Hamilton dominated the sport for nearly a decade. He won six more World Championships, breaking Michael Schumacher's record to become the most successful Formula 1 driver in history with seven titles. He also holds records for the most race victories and the most pole positions in Formula 1 history.

Beyond racing, Hamilton has used his platform to advocate for diversity and racial equality in motorsport. He established the Hamilton Commission, a body dedicated to improving the representation of Black people in British motorsport. He was awarded a knighthood in 2021 for his services to motorsport.`,
    questions:[
      { q:"Where was Lewis Hamilton born?", options:["A. London, England","B. Stevenage, England","C. Manchester, England","D. Birmingham, England"], answer:1,
        explanation:"El texto dice: 'Born in Stevenage, England, in 1985.'",
        correctEs:"B. Stevenage, England = Stevenage, Inglaterra" },
      { q:"When did Hamilton win his first Formula 1 World Championship?", options:["A. In his first season in 2007","B. In 2008 with Mercedes","C. In 2008 with McLaren","D. In 2013 after joining Mercedes"], answer:2,
        explanation:"El texto dice: 'in 2008, he became World Champion for the first time with a dramatic last-corner overtake.' Estaba en McLaren, no en Mercedes.",
        correctEs:"C. In 2008 with McLaren = en 2008 con McLaren" },
      { q:"What does the Hamilton Commission focus on?", options:["A. Improving Formula 1 safety regulations","B. Increasing representation of Black people in British motorsport","C. Developing new racing technologies","D. Training young drivers from poor backgrounds"], answer:1,
        explanation:"El texto dice: 'He established the Hamilton Commission, a body dedicated to improving the representation of Black people in British motorsport.'",
        correctEs:"B. Improving representation of Black people in motorsport = mejorar la representación de personas negras en el automovilismo" },
      { q:"It can be inferred from the text that Hamilton's success was partly due to:", options:["A. Being born into a wealthy racing family","B. Having natural talent supported by family sacrifice","C. Winning his first race at age thirteen","D. Joining Ferrari at the start of his career"], answer:1,
        explanation:"El texto dice que su padre trabajó múltiples empleos para apoyar su carrera, mostrando que el sacrificio familiar fue clave además de su talento excepcional.",
        correctEs:"B. Natural talent supported by family sacrifice = talento natural apoyado por sacrificio familiar" },
    ]
  },
  {
    id:"michael_jordan", level:"medium",
    meta:"Texto Intermedio — Deportes / Biografía",
    title:"Michael Jordan: The Greatest Basketball Player",
    body:`Michael Jordan is universally regarded as the greatest basketball player of all time. Born in Brooklyn, New York, in 1963, Jordan grew up in Wilmington, North Carolina. As a teenager, he was actually cut from his high school basketball team, an experience that, according to Jordan himself, motivated him to work harder than anyone else.

Jordan played college basketball at the University of North Carolina before being selected by the Chicago Bulls in the 1984 NBA Draft. He quickly became the most exciting player in the league, winning the NBA Rookie of the Year award in his first season. His athleticism, competitive drive and ability to perform under pressure made him unlike any player the sport had seen before.

During his career with the Bulls, Jordan led the team to six NBA Championships, winning the Most Valuable Player award in all six Finals. His rivalry with Magic Johnson and Larry Bird elevated the popularity of basketball worldwide. The documentary series 'The Last Dance', released in 2020, introduced his story to a new generation of fans.

Off the court, Jordan became one of the most recognised brands in the world. His partnership with Nike produced the Air Jordan shoe line, which revolutionised sports marketing and continues to generate billions of dollars in revenue every year.`,
    questions:[
      { q:"What happened to Michael Jordan as a teenager that motivated him?", options:["A. He injured his knee and had to stop playing","B. He was cut from his high school basketball team","C. He lost an important championship game","D. He was told he was too short to play professionally"], answer:1,
        explanation:"El texto dice: 'he was actually cut from his high school basketball team, an experience that motivated him to work harder than anyone else.'",
        correctEs:"B. He was cut from his high school basketball team = lo cortaron del equipo de baloncesto de su escuela secundaria" },
      { q:"How many NBA Championships did Jordan win with the Chicago Bulls?", options:["A. Four","B. Five","C. Six","D. Seven"], answer:2,
        explanation:"El texto dice: 'Jordan led the team to six NBA Championships.'",
        correctEs:"C. Six = seis campeonatos de la NBA" },
      { q:"According to the text, what did the Air Jordan shoe line do?", options:["A. Made Jordan the first athlete with a shoe deal","B. Revolutionised sports marketing","C. Replaced Nike as a brand","D. Made Jordan more famous than his basketball career"], answer:1,
        explanation:"El texto dice: 'His partnership with Nike produced the Air Jordan shoe line, which revolutionised sports marketing.'",
        correctEs:"B. Revolutionised sports marketing = revolucionó el marketing deportivo" },
    ]
  },
  {
    id:"toyota_supra", level:"medium",
    meta:"Texto Intermedio — Vehículos / Cultura",
    title:"The Toyota Supra: A Legend on Wheels",
    body:`The Toyota Supra is one of the most iconic sports cars ever produced. First introduced in 1978 as a variant of the Toyota Celica, the Supra gradually developed its own distinct identity over five generations. It became particularly famous through its appearance in the Fast and Furious film franchise, which introduced the car to a whole new generation of fans around the world.

The fourth generation Supra, produced between 1993 and 2002, is considered the most legendary. It was powered by the 2JZ-GTE engine, a 3.0-litre twin-turbocharged inline-six that produced 280 horsepower in standard form. However, the engine was so well-engineered that with modifications it could produce over 1,000 horsepower, making it one of the most tunable engines ever made. This reliability and tunability made the fourth-generation Supra a favourite among car enthusiasts and street racers globally.

After a seventeen-year production break, Toyota revived the Supra in 2019 in collaboration with BMW. The new model, known as the A90, uses a BMW B58 turbocharged engine producing around 340 horsepower. While enthusiasts debated whether the collaboration diluted the car's Japanese identity, the A90 was praised for its sharp handling and attractive design.

The Supra has become more than just a car — it is a cultural symbol representing Japanese automotive engineering excellence and the global car modification culture that grew around it.`,
    questions:[
      { q:"What year was the Toyota Supra first introduced?", options:["A. 1970","B. 1978","C. 1993","D. 2019"], answer:1,
        explanation:"El texto dice: 'First introduced in 1978 as a variant of the Toyota Celica.'",
        correctEs:"B. 1978 = fue introducido por primera vez en 1978" },
      { q:"Why is the 2JZ-GTE engine considered special according to the text?", options:["A. It was the most expensive engine ever made","B. It could only be used in Toyota cars","C. It was highly tunable and could produce over 1,000 horsepower with modifications","D. It was the first engine to use turbocharging"], answer:2,
        explanation:"El texto dice: 'with modifications it could produce over 1,000 horsepower, making it one of the most tunable engines ever made.'",
        correctEs:"C. Highly tunable, over 1,000 hp with modifications = altamente modificable, más de 1,000 hp con modificaciones" },
      { q:"What controversy surrounded the 2019 Supra revival?", options:["A. The price was too high for most buyers","B. It was slower than the previous generation","C. The collaboration with BMW diluted its Japanese identity","D. The design was too similar to a Nissan model"], answer:2,
        explanation:"El texto dice: 'enthusiasts debated whether the collaboration diluted the car's Japanese identity.'",
        correctEs:"C. Collaboration with BMW diluted its Japanese identity = la colaboración con BMW diluyó su identidad japonesa" },
    ]
  },
  {
    id:"steve_jobs", level:"hard",
    meta:"Texto Avanzado — Tecnología / Biografía",
    title:"Steve Jobs and the Apple Revolution",
    body:`Steve Jobs, co-founder of Apple Inc., is widely regarded as one of the most visionary and transformative figures in the history of technology. Born in San Francisco in 1955 and adopted as an infant, Jobs grew up in the Silicon Valley area of California, surrounded by the early pioneers of the electronics industry. From a young age he demonstrated an unusual combination of technical curiosity and aesthetic sensitivity that would define both his personal style and his approach to product design.

Jobs co-founded Apple Computer with Steve Wozniak and Ronald Wayne in 1976, initially operating from his parents' garage. The Apple II, launched in 1977, became one of the first commercially successful personal computers. However, it was the Macintosh in 1984 — marketed with a celebrated Super Bowl advertisement that reimagined George Orwell's novel 1984 — that established Apple's reputation for combining advanced technology with intuitive, beautiful design.

After being forced out of Apple in 1985, Jobs founded NeXT, a computer company focused on higher education, and acquired Pixar, the animation studio that would later produce Toy Story and transform the film industry. When Apple acquired NeXT in 1997 and Jobs returned as CEO, he orchestrated one of the most remarkable corporate turnarounds in business history. The iMac, iPod, iPhone and iPad — introduced over the following decade — redefined entire industries.

Jobs died in October 2011 from pancreatic cancer. His legacy is immense and contested: admirers celebrate his ability to anticipate what consumers wanted before they knew it themselves; critics point to his demanding management style and the labour conditions in Apple's supply chain. Both perspectives acknowledge, however, that Jobs permanently changed the relationship between human beings and technology.`,
    questions:[
      { q:"Where did Apple Computer begin operations?", options:["A. In a Silicon Valley office building","B. In Jobs's parents' garage","C. At Stanford University","D. In a San Francisco apartment"], answer:1,
        explanation:"El texto dice: 'initially operating from his parents' garage.'",
        correctEs:"B. In Jobs's parents' garage = en el garaje de los padres de Jobs" },
      { q:"What was significant about the 1984 Macintosh advertisement?", options:["A. It was the first television advertisement for a computer","B. It reimagined George Orwell's novel and aired during the Super Bowl","C. It featured Steve Jobs speaking directly to customers","D. It showed the computer being used by children"], answer:1,
        explanation:"El texto dice: 'marketed with a celebrated Super Bowl advertisement that reimagined George Orwell's novel 1984.'",
        correctEs:"B. Reimagined Orwell's novel, aired during the Super Bowl = reimaginó la novela de Orwell, emitida durante el Super Bowl" },
      { q:"What did Jobs do after being forced out of Apple in 1985?", options:["A. He retired from the technology industry","B. He joined Microsoft as a consultant","C. He founded NeXT and acquired Pixar","D. He returned immediately as CEO"], answer:2,
        explanation:"El texto dice: 'Jobs founded NeXT, a computer company focused on higher education, and acquired Pixar.'",
        correctEs:"C. He founded NeXT and acquired Pixar = fundó NeXT y adquirió Pixar" },
      { q:"What does the word 'contested' mean as used in the last paragraph?", options:["A. Widely admired and celebrated","B. Disputed or debated by different people","C. Completely forgotten","D. Officially recognised by the government"], answer:1,
        explanation:"'Contested' = debatido / disputado. El legado de Jobs es grande pero la gente no está de acuerdo sobre él.",
        correctEs:"B. Disputed or debated by different people = disputado o debatido por diferentes personas" },
    ]
  },
  {
    id:"nintendo", level:"medium",
    meta:"Texto Intermedio — Cultura Popular / Tecnología",
    title:"Nintendo: From Playing Cards to Video Games",
    body:`Nintendo is one of the most recognisable names in entertainment history. Founded in Kyoto, Japan, in 1889 by Fusajiro Yamauchi, the company originally produced handmade playing cards called Hanafuda. For nearly a century, Nintendo remained primarily a card and toy manufacturer before making a decisive shift that would change popular culture worldwide.

In the 1970s, Nintendo entered the emerging video game market. The company found early success with arcade games and then, in 1983, launched the Famicom in Japan — known outside Japan as the Nintendo Entertainment System (NES). Released in North America in 1985, the NES helped revive a video game industry that had nearly collapsed following the video game crash of 1983. Games like Super Mario Bros. and The Legend of Zelda became instant classics and established Nintendo's reputation for high-quality, creative game design.

Nintendo's philosophy has always prioritised fun and accessibility over technological superiority. While competitors focused on increasingly powerful hardware, Nintendo consistently pursued innovation in how people interact with games. The Nintendo DS introduced dual screens and touch controls. The Wii used motion controls to bring gaming to older adults and casual players. The Nintendo Switch, released in 2017, combined home console and portable gaming in a single device.

Characters created by Nintendo — particularly Mario, Link from Zelda, Pikachu from Pokémon and Kirby — have become global cultural icons recognised by children and adults across generations and cultures.`,
    questions:[
      { q:"What did Nintendo originally produce when it was founded in 1889?", options:["A. Arcade machines","B. Handmade playing cards","C. Mechanical toys","D. Board games"], answer:1,
        explanation:"El texto dice: 'the company originally produced handmade playing cards called Hanafuda.'",
        correctEs:"B. Handmade playing cards = naipes hechos a mano (llamados Hanafuda)" },
      { q:"What was the NES known as in Japan?", options:["A. Super Famicom","B. Game Boy","C. Famicom","D. Nintendo 64"], answer:2,
        explanation:"El texto dice: 'Nintendo launched the Famicom in Japan — known outside Japan as the Nintendo Entertainment System (NES).'",
        correctEs:"C. Famicom = el NES se llamaba Famicom en Japón" },
      { q:"According to the text, what has always been Nintendo's philosophy?", options:["A. Building the most powerful hardware","B. Competing directly with Sony and Microsoft","C. Prioritising fun and accessibility over technological superiority","D. Making games only for children"], answer:2,
        explanation:"El texto dice: 'Nintendo's philosophy has always prioritised fun and accessibility over technological superiority.'",
        correctEs:"C. Fun and accessibility over technological superiority = diversión y accesibilidad sobre superioridad tecnológica" },
    ]
  },
  {
    id:"akira_toriyama", level:"hard",
    meta:"Texto Avanzado — Cultura Popular / Biografía",
    title:"Akira Toriyama and the Dragon Ball Legacy",
    body:`Akira Toriyama, born in Nagoya, Japan, in 1955, became one of the most influential manga artists and character designers in the history of Japanese popular culture. His work on Dragon Ball, which began serialisation in Weekly Shonen Jump magazine in 1984, would go on to define the shonen manga genre and inspire generations of artists, writers and fans worldwide.

Dragon Ball began as a lighthearted adventure story inspired by the classic Chinese novel Journey to the West, following a young boy named Goku in search of mystical Dragon Balls. As the series progressed, it evolved into Dragon Ball Z, a more intense story of increasingly powerful warriors defending Earth against alien threats. The concept of power levels and transformations — most famously the Super Saiyan transformation — became central not only to Dragon Ball but to the wider conventions of battle manga as a genre.

Toriyama's character design work extended well beyond manga. He created the iconic monster and character designs for the Dragon Quest video game franchise, which became one of Japan's most beloved gaming series. His distinctive style — characterised by round, expressive faces, dynamic action poses and a playful balance between comedy and drama — influenced countless subsequent artists.

Toriyama passed away in March 2024 at the age of 68. The global outpouring of tributes from artists, game developers and fans across every continent reflected the extraordinary reach of his creative legacy. Dragon Ball alone has generated over twenty-three billion dollars in merchandise revenue, making it one of the highest-grossing media franchises in history.`,
    questions:[
      { q:"What classic work inspired the original Dragon Ball story?", options:["A. A Japanese folklore legend","B. The Chinese novel Journey to the West","C. A Western comic book series","D. A Greek mythological tale"], answer:1,
        explanation:"El texto dice: 'a lighthearted adventure story inspired by the classic Chinese novel Journey to the West.'",
        correctEs:"B. Journey to the West = la novela clásica china Viaje al Oeste" },
      { q:"What was Toriyama's contribution to the Dragon Quest franchise?", options:["A. He wrote the story and dialogue","B. He composed the music","C. He created the monster and character designs","D. He programmed the game engine"], answer:2,
        explanation:"El texto dice: 'He created the iconic monster and character designs for the Dragon Quest video game franchise.'",
        correctEs:"C. He created the monster and character designs = creó el diseño de monstruos y personajes" },
      { q:"According to the text, how much merchandise revenue has Dragon Ball alone generated?", options:["A. Over five billion dollars","B. Over ten billion dollars","C. Over twenty-three billion dollars","D. Over fifty billion dollars"], answer:2,
        explanation:"El texto dice: 'Dragon Ball alone has generated over twenty-three billion dollars in merchandise revenue.'",
        correctEs:"C. Over twenty-three billion dollars = más de veintitrés mil millones de dólares" },
      { q:"The phrase 'outpouring of tributes' in the last paragraph means:", options:["A. A small number of formal statements","B. An organised official ceremony","C. A large spontaneous expression of admiration and grief","D. A financial donation by companies"], answer:2,
        explanation:"'Outpouring of tributes' = desbordamiento de homenajes = una gran cantidad espontánea de expresiones de admiración y pesar.",
        correctEs:"C. Large spontaneous expression of admiration and grief = gran expresión espontánea de admiración y pesar" },
    ]
  },
  {
    id:"space_exploration", level:"hard",
    meta:"Texto Avanzado — Ciencia / Historia",
    title:"The New Space Race",
    body:`The original space race between the United States and the Soviet Union, which culminated in the Apollo 11 Moon landing in July 1969, was driven primarily by Cold War geopolitical competition. Today, a new and fundamentally different space race is underway — one shaped not by rivalry between superpowers but by a complex mixture of national ambition, scientific curiosity and, increasingly, commercial enterprise.

SpaceX, founded by Elon Musk in 2002, has arguably done more to transform space exploration than any other entity since NASA's Apollo programme. By developing reusable rocket technology — most dramatically demonstrated by the simultaneous landing of two Falcon Heavy boosters in 2018 — SpaceX dramatically reduced the cost of reaching orbit. The company's Starship vehicle, currently under development, is designed to carry humans to the Moon and eventually to Mars.

Other private companies have entered the arena. Blue Origin, founded by Amazon's Jeff Bezos, is developing the New Glenn rocket and has conducted suborbital tourism flights. Virgin Galactic, founded by Richard Branson, targets the space tourism market for wealthy individuals seeking a brief experience of weightlessness. Meanwhile, national space agencies from China, India and the United Arab Emirates have all achieved significant milestones in recent years, including lunar missions and Mars orbiters.

The commercialisation of space raises profound questions. Who owns resources extracted from asteroids or the Moon? How should debris in Earth orbit be managed to prevent catastrophic collisions? What obligations do private companies have to future generations when making decisions that affect the long-term accessibility of outer space? These are questions for which international law currently has no satisfactory answers.`,
    questions:[
      { q:"What primarily drove the original space race according to the text?", options:["A. Scientific curiosity between universities","B. Cold War geopolitical competition","C. Commercial profit from space tourism","D. The desire to explore Mars"], answer:1,
        explanation:"El texto dice: 'driven primarily by Cold War geopolitical competition.'",
        correctEs:"B. Cold War geopolitical competition = competencia geopolítica de la Guerra Fría" },
      { q:"What technological innovation made SpaceX particularly significant?", options:["A. Sending the first humans to Mars","B. Building the largest rocket ever","C. Developing reusable rocket technology","D. Creating the first private space station"], answer:2,
        explanation:"El texto dice: 'By developing reusable rocket technology... SpaceX dramatically reduced the cost of reaching orbit.'",
        correctEs:"C. Developing reusable rocket technology = desarrollar tecnología de cohetes reutilizables" },
      { q:"What unresolved legal question does the text mention about space?", options:["A. Whether private companies can launch rockets","B. Who owns resources extracted from asteroids or the Moon","C. How many astronauts can travel at once","D. Whether space tourism should be taxed"], answer:1,
        explanation:"El texto dice: 'Who owns resources extracted from asteroids or the Moon? These are questions for which international law currently has no satisfactory answers.'",
        correctEs:"B. Who owns resources extracted from asteroids or the Moon = quién posee los recursos extraídos de asteroides o la Luna" },
      { q:"The word 'culminated' in the first sentence means:", options:["A. Started a new competition","B. Reached its highest or final point","C. Ended in failure","D. Was officially recognised"], answer:1,
        explanation:"'Culminated' = culminó = llegó a su punto más alto o conclusión. La carrera espacial culminó (llegó a su clímax) con el alunizaje del Apolo 11.",
        correctEs:"B. Reached its highest or final point = llegó a su punto más alto o conclusión" },
    ]
  },
  {
    id:"ducati", level:"medium",
    meta:"Texto Intermedio — Vehículos / Cultura",
    title:"Ducati: Italian Passion on Two Wheels",
    body:`Ducati is one of the most prestigious motorcycle manufacturers in the world. Founded in Bologna, Italy, in 1926, the company originally produced radio components before transitioning to motorcycles after World War II. Today, Ducati motorcycles are celebrated globally for their combination of Italian style, engineering innovation and thrilling performance.

The brand is closely associated with MotoGP, the premier class of motorcycle road racing. Ducati has won numerous World Constructor Championships and has been ridden to championship victories by legendary riders including Casey Stoner and Francesco Bagnaia. The Ducati Desmosedici GP, the company's MotoGP prototype, is a technological marvel capable of reaching speeds exceeding 340 kilometres per hour.

What distinguishes Ducati from many competitors is its use of the Desmodromic valve system, a unique engine technology in which the valves are mechanically closed rather than relying on springs. This system, which requires greater mechanical complexity and more frequent maintenance, allows the engine to rev higher and produce more power. While most manufacturers abandoned the concept decades ago, Ducati has continued to develop and refine it as a defining characteristic of its engines.

Ducati motorcycles are not just machines — they are emotional objects that represent a lifestyle. Owners often describe their relationship with their Ducati as a passion rather than simple ownership. The brand's striking red colour, the distinctive sound of its V-twin or V4 engine, and the racing heritage combine to create an experience that enthusiasts find uniquely compelling.`,
    questions:[
      { q:"What did Ducati originally produce when it was founded in 1926?", options:["A. Sports cars","B. Military vehicles","C. Radio components","D. Bicycles"], answer:2,
        explanation:"El texto dice: 'the company originally produced radio components before transitioning to motorcycles after World War II.'",
        correctEs:"C. Radio components = componentes de radio" },
      { q:"What is the Desmodromic valve system?", options:["A. A type of suspension technology","B. A system where valves are mechanically closed instead of spring-operated","C. A special tyre compound used in racing","D. An electronic fuel injection system"], answer:1,
        explanation:"El texto dice: 'a unique engine technology in which the valves are mechanically closed rather than relying on springs.'",
        correctEs:"B. Valves mechanically closed instead of spring-operated = válvulas cerradas mecánicamente en lugar de por resortes" },
      { q:"According to the text, how do Ducati owners typically describe their relationship with their motorcycle?", options:["A. As a practical daily tool","B. As an expensive investment","C. As a passion rather than simple ownership","D. As a competitive racing machine"], answer:2,
        explanation:"El texto dice: 'Owners often describe their relationship with their Ducati as a passion rather than simple ownership.'",
        correctEs:"C. As a passion rather than simple ownership = como una pasión más que como una simple posesión" },
    ]
  },
  {
    id:"bill_gates", level:"hard",
    meta:"Texto Avanzado — Tecnología / Biografía",
    title:"Bill Gates and the Personal Computer Revolution",
    body:`Bill Gates, born in Seattle in 1955, co-founded Microsoft with his childhood friend Paul Allen in 1975. The company's founding mission — "a computer on every desk and in every home" — was widely considered absurdly ambitious at a time when computers were enormous, expensive machines operated exclusively by universities and large corporations. Within two decades, however, that vision had been substantially realised, and Gates had become the wealthiest person in the world.

Microsoft's pivotal moment came in 1980 when IBM contracted the company to provide an operating system for its new personal computer. Gates and Allen acquired an existing system, modified it and licensed it to IBM as MS-DOS. Crucially, Microsoft retained the rights to license the software to other manufacturers — a contractual arrangement that generated enormous wealth as the personal computer market exploded.

The launch of Windows in 1985, and its subsequent refinement through the 1990s, established Microsoft's dominance of the PC software market. The bundling of Microsoft Office applications with Windows, combined with aggressive business practices that drew repeated antitrust scrutiny from regulators in the United States and Europe, ensured that Microsoft products were installed on the vast majority of the world's computers by the end of the twentieth century.

In 2008, Gates stepped back from his day-to-day role at Microsoft to focus on the Bill and Melinda Gates Foundation, which has become one of the largest private philanthropic organisations in history. The Foundation focuses primarily on global health, poverty reduction and education, having donated over sixty billion dollars to causes including malaria prevention, polio eradication and vaccine distribution in developing countries.`,
    questions:[
      { q:"What was Microsoft's founding mission?", options:["A. To build the world's fastest computers","B. To put a computer on every desk and in every home","C. To develop software for military use","D. To compete directly with Apple"], answer:1,
        explanation:"El texto dice: 'The company's founding mission — a computer on every desk and in every home.'",
        correctEs:"B. A computer on every desk and in every home = una computadora en cada escritorio y en cada hogar" },
      { q:"What was the key business advantage in Microsoft's deal with IBM?", options:["A. IBM paid Microsoft an enormous sum upfront","B. Microsoft received free advertising from IBM","C. Microsoft retained the rights to license the software to other manufacturers","D. IBM gave Microsoft exclusive access to its technology"], answer:2,
        explanation:"El texto dice: 'Microsoft retained the rights to license the software to other manufacturers — a contractual arrangement that generated enormous wealth as the personal computer market exploded.'",
        correctEs:"C. Microsoft retained rights to license software to other manufacturers = Microsoft conservó los derechos de licenciar el software a otros fabricantes" },
      { q:"What does the word 'scrutiny' mean as used in paragraph 3?", options:["A. Financial support","B. Close and critical examination","C. Legal protection","D. Public praise"], answer:1,
        explanation:"'Antitrust scrutiny' = examen minucioso y crítico por parte de reguladores antimonopolio.",
        correctEs:"B. Close and critical examination = examen minucioso y crítico" },
      { q:"What are the main areas of focus for the Bill and Melinda Gates Foundation?", options:["A. Technology research and space exploration","B. Global health, poverty reduction and education","C. Climate change and renewable energy","D. Arts, culture and media"], answer:1,
        explanation:"El texto dice: 'The Foundation focuses primarily on global health, poverty reduction and education.'",
        correctEs:"B. Global health, poverty reduction and education = salud global, reducción de la pobreza y educación" },
    ]
  },
  {
    id:"pokemon", level:"medium",
    meta:"Texto Intermedio — Cultura Popular / Tecnología",
    title:"Pokemon: A Global Phenomenon",
    body:`Pokémon is one of the most successful entertainment franchises in history. Created by Satoshi Tajiri and Ken Sugimori, Pokémon was first launched in Japan in 1996 as a pair of video games for the original Game Boy handheld console. Tajiri, who loved collecting insects as a child, envisioned a game in which players could catch, train and battle creatures in a world where humans and these fantastical animals coexisted.

The concept proved enormously popular. The Pokémon anime series, following the adventures of ten-year-old Ash Ketchum and his partner Pikachu, quickly became one of the most-watched cartoons in the world. The trading card game, launched in 1996, became a global craze that schools across many countries attempted — with limited success — to ban because students were spending class time trading cards instead of studying.

Pokémon Go, released in 2016, demonstrated the franchise's ability to reinvent itself for new generations and technologies. Using augmented reality technology, the mobile game encouraged players to walk around their physical environments to catch virtual Pokémon superimposed onto the real world. Within weeks of its release, the game had been downloaded over one hundred million times and was generating fifteen million dollars per day in revenue.

Today, Pokémon is the highest-grossing media franchise in history, having surpassed Hello Kitty, Star Wars and Marvel. The franchise has generated over one hundred and fifty billion dollars in revenue across video games, trading cards, merchandise, movies and the anime series. New Pokémon games, animated series and trading card expansions continue to be released regularly, ensuring the franchise's relevance for both original fans and new ones.`,
    questions:[
      { q:"What inspired Satoshi Tajiri to create Pokémon?", options:["A. A Japanese folktale about magical animals","B. His childhood hobby of collecting insects","C. A science fiction novel he read as a teenager","D. His experience working at Nintendo"], answer:1,
        explanation:"El texto dice: 'Tajiri, who loved collecting insects as a child, envisioned a game in which players could catch, train and battle creatures.'",
        correctEs:"B. His childhood hobby of collecting insects = su pasatiempo de coleccionar insectos de niño" },
      { q:"Why did many schools try to ban the Pokémon trading card game?", options:["A. The cards contained violent imagery","B. The game was too expensive for students","C. Students were trading cards instead of studying","D. The cards were being stolen from students"], answer:2,
        explanation:"El texto dice: 'schools across many countries attempted to ban because students were spending class time trading cards instead of studying.'",
        correctEs:"C. Students were trading cards instead of studying = los estudiantes cambiaban cartas en lugar de estudiar" },
      { q:"What technology did Pokémon Go use that made it innovative?", options:["A. Virtual reality headsets","B. Augmented reality on mobile phones","C. Artificial intelligence opponents","D. Online multiplayer competition"], answer:1,
        explanation:"El texto dice: 'Using augmented reality technology, the mobile game encouraged players to walk around their physical environments to catch virtual Pokémon.'",
        correctEs:"B. Augmented reality on mobile phones = realidad aumentada en teléfonos móviles" },
    ]
  },
  {
    id:"robotics", level:"hard",
    meta:"Texto Avanzado — Ciencia / Tecnología",
    title:"The Rise of Robotics and Automation",
    body:`Robotics has evolved from a concept of science fiction into one of the most consequential technologies of the twenty-first century. The word 'robot' itself was coined by Czech playwright Karel Capek in his 1920 play R.U.R., derived from the Czech word 'robota' meaning forced labour. Today, robots are no longer fictional — they assemble cars, perform surgery, explore the surface of Mars and increasingly walk, talk and exhibit behaviours that were once considered exclusively human.

Industrial robots have been transforming manufacturing since the 1960s when General Motors introduced the first industrial robot arm, the Unimate, on its assembly line. Modern industrial robots are extraordinarily precise, tireless and consistent, making them far superior to human workers for repetitive tasks requiring high accuracy. The automotive and electronics industries rely heavily on robotic automation, with some factories now operating almost entirely without human workers on the production floor.

Surgical robots represent perhaps the most significant medical development in this field. The da Vinci Surgical System, introduced in the early 2000s, enables surgeons to perform complex minimally invasive procedures with greater precision than is possible with the human hand alone. Studies suggest that robotic-assisted surgeries result in shorter recovery times, reduced blood loss and lower rates of complications.

The ethical and economic implications of automation are profound and unresolved. The World Economic Forum estimates that automation could displace eighty-five million jobs globally by 2025, while simultaneously creating ninety-seven million new roles. However, critics argue that the transition will be neither automatic nor equitable: new jobs will require different skills and appear in different places than the jobs that are lost, potentially causing significant social disruption in communities dependent on automatable work.`,
    questions:[
      { q:"What is the origin of the word 'robot' according to the text?", options:["A. A German word meaning mechanical worker","B. A Latin term from ancient engineering texts","C. A Czech word meaning forced labour, from a play by Karel Capek","D. An acronym created by General Motors engineers"], answer:2,
        explanation:"El texto dice: 'The word robot was coined by Czech playwright Karel Capek in his 1920 play R.U.R., derived from the Czech word robota meaning forced labour.'",
        correctEs:"C. Czech word for forced labour, from Karel Capek's play = palabra checa para trabajo forzado, de la obra de Karel Capek" },
      { q:"What does the text say about the da Vinci Surgical System?", options:["A. It completely replaces surgeons in operating rooms","B. It enables more precise minimally invasive procedures","C. It was the first robot ever used in medicine","D. It is mainly used for emergency procedures"], answer:1,
        explanation:"El texto dice: 'enables surgeons to perform complex minimally invasive procedures with greater precision than is possible with the human hand alone.'",
        correctEs:"B. Enables more precise minimally invasive procedures = permite procedimientos mínimamente invasivos más precisos" },
      { q:"What is the main concern critics raise about automation's impact on jobs?", options:["A. Automation will create too many jobs too quickly","B. Robots will never replace skilled workers","C. The transition will not be equitable — new jobs require different skills in different places","D. Automation is too expensive for most companies"], answer:2,
        explanation:"El texto dice: 'new jobs will require different skills and appear in different places than the jobs that are lost, potentially causing significant social disruption.'",
        correctEs:"C. Transition not equitable — different skills and places = transición no equitativa, requiere habilidades distintas en lugares distintos" },
      { q:"The word 'displace' in the final paragraph most likely means:", options:["A. Employ","B. Train","C. Replace or force out","D. Improve"], answer:2,
        explanation:"'Displace jobs' = desplazar empleos = reemplazar o eliminar puestos de trabajo.",
        correctEs:"C. Replace or force out = reemplazar o desplazar (quitar empleos)" },
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
,
  // ── Extra Easy Questions ──
  easy_extra: [
    { context:"Profesiones", q:"They help sick people in hospitals and give them medicine. What are they?",
      options:["A. Dentists","B. Farmers","C. Nurses","D. Drivers"], answer:2,
      explanation:"Las enfermeras ayudan a los enfermos en los hospitales y administran medicamentos.",
      correctEs:"C. Nurses = enfermeras / enfermeros",
      example:"Nurses help sick people in hospitals and give them medicine.",
      video:"https://www.youtube.com/watch?v=9Kd87KUwQuo" },
    { context:"Avisos y señales", q:"A sign shows an arrow pointing up and says 'DEPARTURES'. Where is this sign?",
      options:["A. In a hospital","B. At the airport","C. In a library","D. At a hotel"], answer:1,
      explanation:"'Departures' (salidas) y 'Arrivals' (llegadas) son señales típicas de aeropuertos.",
      correctEs:"B. At the airport = en el aeropuerto",
      example:"Departures ↑ and Arrivals → are signs you find at any airport.",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Ropa / Accesorios", q:"'Many girls wear this when they do not want to wear trousers.' What is it?",
      options:["A. A jacket","B. Boots","C. A scarf","D. A skirt"], answer:3,
      explanation:"Una falda (skirt) es la alternativa al pantalón para muchas chicas.",
      correctEs:"D. A skirt = una falda",
      example:"Many girls wear a skirt when they don't want to wear trousers.",
      video:"https://www.youtube.com/watch?v=UkqvBX_bkfc" },
    { context:"Deportes", q:"'You can only do this in the water.' What sport is it?",
      options:["A. Dancing","B. Skiing","C. Swimming","D. Basketball"], answer:2,
      explanation:"La natación (swimming) solo puede practicarse en el agua.",
      correctEs:"C. Swimming = natación (solo en el agua)",
      example:"You can only do swimming in the water — that is what makes it unique.",
      video:"https://www.youtube.com/watch?v=Hs2NNRSdKgU" },
    { context:"Conversaciones básicas", q:"— 'I must go home.' — '______'",
      options:["A. Who is wrong?","B. That's sad!","C. It's brilliant.","D. Come here!"], answer:1,
      explanation:"Cuando alguien dice que debe irse, 'That's sad!' (¡Qué pena!) es una respuesta natural.",
      correctEs:"B. That's sad! = ¡Qué pena! / ¡Qué lástima!",
      example:"— I must go home. — That's sad! We will miss you.",
      video:"https://www.youtube.com/watch?v=fEA5d5YaUNk" },
    { context:"Avisos y señales", q:"A sign says: 'NOT PETS ALLOWED'. Where might you see this?",
      options:["A. In a pet shop","B. At a veterinary clinic","C. In a mall or restaurant","D. At the zoo"], answer:2,
      explanation:"'No se permiten mascotas' es una señal común en centros comerciales, restaurantes y hoteles.",
      correctEs:"C. In a mall or restaurant = en un centro comercial o restaurante",
      example:"The sign on the restaurant door says: Not Pets Allowed inside.",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
    { context:"Vocabulario de lugares", q:"'People get on this to go to different floors.' What is it?",
      options:["A. An escalator","B. A playground","C. An elevator","D. A corridor"], answer:2,
      explanation:"Un ascensor (elevator) lleva a las personas a diferentes pisos del edificio.",
      correctEs:"C. An elevator = un ascensor / elevador",
      example:"People get on an elevator to go to different floors of the mall.",
      video:"https://www.youtube.com/watch?v=ypkBRLmJLW8" },
  ],
  // ── Extra Medium Questions ──
  medium_extra: [
    { context:"Texto: Coffee", q:"Why did Sufi Yemenis start using coffee?",
      options:["A. To improve their memory","B. To stay alert during special activities","C. To cure diseases","D. To make a profitable drink"], answer:1,
      explanation:"El texto de Coffee dice: 'Sufi Yemenis started using coffee to stay alert during special activities.'",
      correctEs:"B. To stay alert during special activities = para mantenerse alerta durante actividades especiales",
      example:"Sufi Yemenis started using coffee to stay alert during special religious activities.",
      video:"https://www.youtube.com/watch?v=IjJHFVq-3Mc" },
    { context:"Gramática: Past Simple irregular", q:"Choose the correct Past Simple form: 'She ___ to the hospital after the accident.'",
      options:["A. goed","B. go","C. went","D. going"], answer:2,
      explanation:"'Go' es un verbo irregular. Su Past Simple es 'went'. No se forma con -ed.",
      correctEs:"C. went = fue (Past Simple irregular de 'go')",
      example:"She went to the hospital after the accident. (go → went)",
      video:"https://www.youtube.com/watch?v=KK6BRJm8p90" },
    { context:"Gramática: Condicional", q:"'If I ___ more time, I would study every day.' Choose the correct form.",
      options:["A. have","B. had","C. will have","D. having"], answer:1,
      explanation:"El segundo condicional (Second Conditional) usa 'if + past simple'. 'Had' es el pasado de 'have'.",
      correctEs:"B. had = tuviera (Second Conditional: if + Past Simple)",
      example:"If I had more time, I would study English every day.",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Vocabulario: Medio ambiente", q:"What does 'deforestation' mean?",
      options:["A. Planting new trees","B. Protecting animal habitats","C. Cutting down large areas of forest","D. Studying forest ecosystems"], answer:2,
      explanation:"'Deforestation' = deforestación = la tala masiva y destrucción de bosques.",
      correctEs:"C. Cutting down large areas of forest = talar grandes extensiones de bosque",
      example:"Deforestation destroys the habitat of millions of animals.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Texto: Vaccines", q:"What does 'immunological memory' mean according to the vaccine text?",
      options:["A. The ability to forget diseases","B. The immune system's ability to remember and quickly fight a pathogen after vaccination","C. A type of vaccine","D. The process of producing antibodies for the first time"], answer:1,
      explanation:"El texto de vacunas dice: 'If the vaccinated person later encounters the real disease, their body can respond quickly. This process is called immunological memory.'",
      correctEs:"B. Immune system remembers and quickly fights a pathogen = el sistema inmune recuerda y combate rápidamente el patógeno",
      example:"Immunological memory means your immune system remembers a pathogen after vaccination.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Future with 'will'", q:"'Don't worry! I ___ help you with the homework.' Choose the correct form.",
      options:["A. am going to","B. will","C. would","D. shall be"], answer:1,
      explanation:"'Will' se usa para promesas espontáneas y decisiones en el momento. 'I will help you' = te ayudaré.",
      correctEs:"B. will = usamos 'will' para promesas espontáneas",
      example:"Don't worry! I will help you with the homework — I promise.",
      video:"https://www.youtube.com/watch?v=YMJhcNpEJtw" },
  ],
  // ── Extra Hard Questions ──
  hard_extra: [
    { context:"Texto: Climate Change", q:"What does 'unprecedented' mean in the context of climate change?",
      options:["A. Expected and normal","B. Having happened many times before","C. Never having occurred at this level before","D. Scientifically uncertain"], answer:2,
      explanation:"'Unprecedented' = sin precedentes. En el texto se usa para describir la velocidad del calentamiento actual, que nunca había ocurrido a este nivel.",
      correctEs:"C. Never having occurred at this level before = sin precedentes / nunca había ocurrido a este nivel",
      example:"The current rate of warming is unprecedented — it has never happened this fast before.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Reported Speech", q:"Direct: 'I have finished the project.' Reported: She said that she ___.",
      options:["A. has finished the project","B. had finished the project","C. finished the project","D. will finish the project"], answer:1,
      explanation:"En Reported Speech, el Present Perfect (have finished) cambia a Past Perfect (had finished).",
      correctEs:"B. had finished the project = había terminado el proyecto (Past Perfect en reported speech)",
      example:"She said: 'I have finished.' → She said that she HAD finished. (backshift)",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Vocabulario avanzado", q:"'The government's decision was met with widespread criticism.' What does 'widespread' mean?",
      options:["A. Very specific and targeted","B. Limited to one region","C. Existing or happening over a large area","D. Official and formal"], answer:2,
      explanation:"'Widespread' = generalizado = que ocurre o existe en una gran área o entre muchas personas.",
      correctEs:"C. Existing or happening over a large area = generalizado / que ocurre en una gran área",
      example:"The decision was met with widespread criticism — people everywhere disagreed with it.",
      video:"https://www.youtube.com/watch?v=GQAUNZoGxFg" },
    { context:"Texto: Urbanisation", q:"What is 'per-capita resource consumption'?",
      options:["A. The total amount of resources used by a country","B. The amount of resources used per person","C. The resources saved by using technology","D. The government's budget for infrastructure"], answer:1,
      explanation:"'Per capita' = por persona. 'Per-capita consumption' = el consumo por persona (no el total).",
      correctEs:"B. The amount of resources used per person = la cantidad de recursos usada por persona",
      example:"Dense cities reduce per-capita resource consumption because infrastructure is shared.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
    { context:"Gramática: Passive Voice", q:"Active: 'Scientists discovered caffeine in 1820.' Passive: 'Caffeine ___ by scientists in 1820.'",
      options:["A. discovered","B. was discovering","C. was discovered","D. has discovered"], answer:2,
      explanation:"Voz pasiva en Past Simple = was/were + past participle. 'Discover' → 'discovered' (participio).",
      correctEs:"C. was discovered = fue descubierta (Past Simple Passive: was + past participle)",
      example:"Caffeine was discovered by scientists in 1820. (Active: Scientists discovered caffeine.)",
      video:"https://www.youtube.com/watch?v=LIe3UxCYQWI" },
    { context:"Inferencia", q:"The text says: 'Although it wasn't her goal to be a recognized author, this quickly became her reality.' What does this imply about Kincaid?",
      options:["A. She worked hard specifically to become famous","B. She was surprised by her own success","C. She stopped writing when she became famous","D. She regretted becoming a recognized author"], answer:1,
      explanation:"'Although it wasn't her goal' + 'this quickly became her reality' implica que el éxito llegó sin haberlo buscado, lo cual sorprendió a Kincaid.",
      correctEs:"B. She was surprised by her own success = fue sorprendida por su propio éxito",
      example:"She wrote to save herself, not to be famous — yet fame found her anyway.",
      video:"https://www.youtube.com/watch?v=XAVyLOy4Y3I" },
  ],
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

  // ── Extra Dialogs ──
  { level:"easy", scene:"🏫 Primer día en una nueva escuela. Un estudiante te saluda.",
    bubbles:[{who:"👦 Compañero",text:"Are you here for the music class?"}],
    q:"What is the best response if you are new?",
    options:["A. See you!","B. I'm not from here.","C. Yes, I'm new."],
    answer:2, explanation:"'Yes, I'm new.' es la respuesta natural para confirmar que eres nuevo en la clase.",
    correctEs:"C. Yes, I'm new. = Sí, soy nuevo/a.",
    example:"— Are you here for the music class? — Yes, I'm new. My name is Carlos." },
  { level:"easy", scene:"☀️ Es un día soleado. Tu amigo propone salir.",
    bubbles:[{who:"👧 Amiga",text:"Let's go for a ride, it's a sunny day!"}],
    q:"What is the best enthusiastic response?",
    options:["A. Are we around?","B. Nothing more.","C. It's the best idea!"],
    answer:2, explanation:"'It's the best idea!' expresa entusiasmo ante una propuesta para aprovechar el buen tiempo.",
    correctEs:"C. It's the best idea! = ¡Es la mejor idea!",
    example:"— Let's go for a ride! — It's the best idea! I'll get my jacket." },
  { level:"easy", scene:"🎫 Tu amigo menciona un concierto de rock.",
    bubbles:[{who:"🎸 Amigo",text:"Everyone bought tickets for the rock concert."}],
    q:"What is the most natural follow-up question?",
    options:["A. Is it on Saturday?","B. There was noise.","C. It is fair!"],
    answer:0, explanation:"Preguntar el día del evento es la respuesta más natural cuando te enteran de un concierto.",
    correctEs:"A. Is it on Saturday? = ¿Es el sábado?",
    example:"— Everyone bought tickets! — Is it on Saturday? I want to go too!" },
  { level:"medium", scene:"🔧 Un amigo acaba de arreglar algo que estaba roto.",
    bubbles:[{who:"🛠️ Amigo",text:"I can go to the restaurant and get some food now!"}],
    q:"What is the best positive response?",
    options:["A. Whose rice?","B. That's really nice!","C. Look at me."],
    answer:1, explanation:"'That's really nice!' expresa una reacción positiva y alentadora ante las buenas noticias.",
    correctEs:"B. That's really nice! = ¡Qué bueno! / ¡Qué bien!",
    example:"— I can go get food now! — That's really nice! I'm hungry too." },
  { level:"medium", scene:"🎉 Te enteras de que un amigo obtuvo algo que quería mucho.",
    bubbles:[{who:"😊 Amigo",text:"Did you get the appointment?"}],
    q:"If the answer is positive, what do you say?",
    options:["A. Never again!","B. Come back!","C. Of course!"],
    answer:2, explanation:"'Of course!' confirma positivamente que sí se obtuvo lo que se buscaba.",
    correctEs:"C. Of course! = ¡Por supuesto! / ¡Claro que sí!",
    example:"— Did you get the appointment? — Of course! It's next Monday." },
  { level:"hard", scene:"📚 Tu profesor pregunta sobre tu comprensión del tema.",
    bubbles:[{who:"👨‍🏫 Profesor",text:"Reading about James Salter's years in cinema could be interesting, don't you think?"}],
    q:"What is the most academically appropriate response?",
    options:["A. Not really, it's just fair.","B. Absolutely, his experiences were quite fascinating.","C. I don't like cinema."],
    answer:1, explanation:"'Absolutely, his experiences were quite fascinating' muestra comprensión y un nivel académico apropiado.",
    correctEs:"B. Absolutely, his experiences were quite fascinating. = Absolutamente, sus experiencias fueron bastante fascinantes.",
    example:"— Could it be interesting? — Absolutely, his experiences in cinema were quite fascinating!" },
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
function playExamPass() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    // Victory fanfare: C-E-G-C ascending
    const notes = [523,659,784,1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i*0.12);
      gain.gain.setValueAtTime(0, now + i*0.12);
      gain.gain.linearRampToValueAtTime(0.18, now + i*0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i*0.12 + 0.35);
      osc.start(now + i*0.12); osc.stop(now + i*0.12 + 0.4);
    });
  } catch(e) {}
}

function playExamFail() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    // Two gentle descending tones — motivating, not harsh
    [[330,280],[280,240]].forEach(([f1,f2],i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f1, now + i*0.25);
      osc.frequency.linearRampToValueAtTime(f2, now + i*0.25 + 0.22);
      gain.gain.setValueAtTime(0.12, now + i*0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i*0.25 + 0.28);
      osc.start(now + i*0.25); osc.stop(now + i*0.25 + 0.3);
    });
  } catch(e) {}
}

function playTimeUp() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    // Three urgent beeps
    [0,0.22,0.44].forEach(offset => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'square';
      osc.frequency.setValueAtTime(880, now + offset);
      gain.gain.setValueAtTime(0.1, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.18);
      osc.start(now + offset); osc.stop(now + offset + 0.2);
    });
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
  if(sectionId==="fullexam"){ renderExamHistory(); }
}

function renderResources(){
  const grid=document.getElementById("resourcesGrid");
  if(!grid) return;
  grid.innerHTML="";
  RESOURCES.forEach(r=>{
    const card=document.createElement("div");
    card.className="resource-card";
    const icon=r.icon||"📺";
    card.innerHTML='<div class="rc-thumb"><span style="font-size:2.2rem">'+icon+'</span><div class="rc-play">&#9654;</div></div><div class="rc-body"><div class="rc-topic">'+r.topic+'</div><div class="rc-title">'+r.title+'</div><div class="rc-channel">&#128250; '+r.channel+' &middot; '+r.duration+'</div><a href="'+r.url+'" target="_blank" class="rc-link">&#9654; Ver en YouTube</a></div>';
    grid.appendChild(card);
  });
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
}


function hideModes(){
  ["modeFlashcards","modeMultiple","modeReading","modeDialogs","modeResult"]
    .forEach(id=>{ const el=document.getElementById(id); if(el) el.classList.add("hidden"); });
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

// ══════════════════════════════════════════
//  FULL EXAM SYSTEM v2
// ══════════════════════════════════════════

// ── State ──
let feItems=[], feIdx=0, feUserAnswers=[];
let feTimerDuration=45*60, feTimerLeft=0, feTimerInterval=null;
let feStartTime=0, feSelectedDuration=45, feSelectedType="mixed";
let feTenSecInterval=null;

// ── Helpers to build question pool by type ──
function buildPool(type) {
  const allRT = READING_TEXTS.flatMap(t => t.questions.map(rq => ({
    ...rq, context: t.title, type:"readq",
    textTitle: t.title, textBody: t.body.substring(0,520)+"...",
    lvl: t.level
  })));

  const qEasy   = [...(QUESTIONS.easy   ||[]), ...(QUESTIONS.easy_extra   ||[])].map(q=>({...q,lvl:"easy",  qtype:"vocab"}));
  const qMedium = [...(QUESTIONS.medium ||[]), ...(QUESTIONS.medium_extra ||[])].map(q=>({...q,lvl:"medium",qtype:"grammar"}));
  const qHard   = [...(QUESTIONS.hard   ||[]), ...(QUESTIONS.hard_extra   ||[])].map(q=>({...q,lvl:"hard",  qtype:"grammar"}));
  const dialogs = DIALOGS.map(d=>({...d, type:"dialog", qtype:"dialog",
    lvl: d.level==="easy"?"easy": d.level==="medium"?"medium":"hard"}));

  let pool = [];
  if (type==="basic") {
    pool = [
      ...shuffle(qEasy).slice(0,6),
      ...shuffle(qMedium).slice(0,4),
      ...shuffle(dialogs.filter(d=>d.lvl==="easy"||d.lvl==="medium")).slice(0,5),
      ...shuffle(allRT.filter(t=>t.lvl==="easy"||t.lvl==="medium")).slice(0,10),
    ];
  } else if (type==="intermediate") {
    pool = [
      ...shuffle(qMedium).slice(0,6),
      ...shuffle(qHard).slice(0,4),
      ...shuffle(dialogs.filter(d=>d.lvl==="medium"||d.lvl==="hard")).slice(0,5),
      ...shuffle(allRT.filter(t=>t.lvl==="medium"||t.lvl==="hard")).slice(0,10),
    ];
  } else if (type==="advanced") {
    pool = [
      ...shuffle(qHard).slice(0,8),
      ...shuffle(dialogs.filter(d=>d.lvl==="hard")).slice(0,4),
      ...shuffle(allRT.filter(t=>t.lvl==="hard")).slice(0,13),
    ];
  } else { // mixed
    pool = [
      ...shuffle(qEasy).slice(0,3),
      ...shuffle(qMedium).slice(0,4),
      ...shuffle(qHard).slice(0,4),
      ...shuffle(dialogs).slice(0,4),
      ...shuffle(allRT).slice(0,10),
    ];
  }
  return shuffle(pool).slice(0,25);
}

// ── Exam type card selection ──
document.querySelectorAll(".exam-type-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".exam-type-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    feSelectedType = card.dataset.type;
  });
});

// ── Timer duration buttons ──
document.querySelectorAll("#timerGroup .toggle-btn").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll("#timerGroup .toggle-btn").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    feSelectedDuration = parseInt(b.dataset.val);
  });
});

// ── Render exam history ──
function renderExamHistory() {
  const exams = JSON.parse(localStorage.getItem("em_full_exams") || "[]");
  const container = document.getElementById("examHistory");
  if (!container) return;
  if (!exams.length) { container.innerHTML = ""; return; }
  container.innerHTML = `<h3 class="exam-hist-title">📅 Historial de simulacros</h3><div class="exam-hist-list"></div>`;
  const list = container.querySelector(".exam-hist-list");
  exams.slice(0,8).forEach(e => {
    const item = document.createElement("div");
    item.className = "exam-hist-item";
    item.innerHTML = `<div class="ehi-score">${e.pct}%</div>
      <div class="ehi-info"><strong>${e.correct}/${e.total} correctas</strong>
      <div class="ehi-date">${e.date} · ${e.duration === 0 ? "Sin límite" : e.duration+" min"} · ${e.examType||"mixto"}</div></div>
      <div style="font-size:1.3rem">${e.pct>=70?"🏆":e.pct>=50?"⭐":"📚"}</div>`;
    list.appendChild(item);
  });
}

// ── Start exam ──
document.getElementById("btnStartFullExam").addEventListener("click", startFullExam);
document.getElementById("btnRetryFE").addEventListener("click", () => {
  document.getElementById("examResultScreen").classList.add("hidden");
  document.getElementById("examConfig").classList.remove("hidden");
  renderExamHistory();
});

function startFullExam() {
  feItems = buildPool(feSelectedType);
  feUserAnswers = new Array(feItems.length).fill(null);
  feIdx = 0;
  feTimerDuration = feSelectedDuration > 0 ? feSelectedDuration * 60 : Infinity;
  feTimerLeft = feSelectedDuration > 0 ? feSelectedDuration * 60 : 99999;
  feStartTime = Date.now();

  document.getElementById("examConfig").classList.add("hidden");
  document.getElementById("examResultScreen").classList.add("hidden");
  document.getElementById("examArena").classList.remove("hidden");

  const typeNames = {basic:"📚 Básico",intermediate:"🎯 Intermedio",advanced:"🔥 Avanzado",mixed:"🏆 Mixto"};
  document.getElementById("examTypeLabel").textContent = typeNames[feSelectedType] || "Examen";

  if (feSelectedDuration === 0) {
    document.getElementById("examTimerDisplay").textContent = "∞";
    document.getElementById("examTimerProgress").style.width = "100%";
  } else {
    startFETimer();
  }

  // 3-2-1 countdown then show first question
  showExamCountdown(() => showFEQuestion());
}

function showExamCountdown(cb) {
  const overlay = document.getElementById("examCountdown");
  const numEl   = document.getElementById("ecdNumber");
  overlay.classList.remove("hidden");
  let count = 3;
  numEl.textContent = count;
  const iv = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(iv);
      overlay.classList.add("hidden");
      cb();
    } else {
      numEl.textContent = count;
      // trigger animation restart
      numEl.style.animation = "none";
      void numEl.offsetWidth;
      numEl.style.animation = "countPulse .8s ease";
    }
  }, 900);
}

// ── Timer ──
function startFETimer() {
  clearInterval(feTimerInterval);
  clearInterval(feTenSecInterval);
  updateFETimerDisplay();
  const progEl = document.getElementById("examTimerProgress");
  progEl.style.width = "100%";
  progEl.className = "exam-timer-progress";

  feTimerInterval = setInterval(() => {
    feTimerLeft--;
    updateFETimerDisplay();

    const pct = (feTimerLeft / feTimerDuration) * 100;
    progEl.style.width = pct + "%";

    const warn5  = feTimerLeft <= 300 && feTimerLeft > 60;
    const warn1  = feTimerLeft <= 60  && feTimerLeft > 10;
    const warn10 = feTimerLeft <= 10  && feTimerLeft > 0;

    if (warn10) {
      progEl.className = "exam-timer-progress danger";
      document.getElementById("examTimerDisplay").className = "exam-timer-display danger";
      document.getElementById("examWarn").classList.add("hidden");
      document.getElementById("examDangerWarn").classList.add("hidden");
      const tenEl = document.getElementById("tenSecCountdown");
      const numEl = document.getElementById("tenSecNum");
      tenEl.classList.remove("hidden");
      numEl.textContent = feTimerLeft;
    } else if (warn1) {
      progEl.className = "exam-timer-progress danger";
      document.getElementById("examTimerDisplay").className = "exam-timer-display danger";
      document.getElementById("examDangerWarn").classList.remove("hidden");
      document.getElementById("tenSecCountdown").classList.add("hidden");
    } else if (warn5) {
      progEl.className = "exam-timer-progress warning";
      document.getElementById("examTimerDisplay").className = "exam-timer-display warning";
      document.getElementById("examWarn").classList.remove("hidden");
      document.getElementById("examTimerIcon").textContent = "⚠️";
    } else {
      document.getElementById("examTimerDisplay").className = "exam-timer-display";
    }

    if (feTimerLeft <= 0) {
      clearInterval(feTimerInterval);
      document.getElementById("tenSecCountdown").classList.add("hidden");
      playTimeUp();
      finishFullExam(true);
    }
  }, 1000);
}

function updateFETimerDisplay() {
  if (feSelectedDuration === 0) return;
  const m = Math.floor(feTimerLeft / 60);
  const sec = feTimerLeft % 60;
  document.getElementById("examTimerDisplay").textContent =
    `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

// ── Show question ──
function showFEQuestion() {
  if (feIdx >= feItems.length) { finishFullExam(false); return; }
  const q = feItems[feIdx];
  document.getElementById("examQCounter").textContent = `${feIdx+1}/${feItems.length}`;
  document.getElementById("feContext").textContent = q.context || q.scene || "";

  const tb = document.getElementById("feTextBlock");
  if (q.type === "readq" && q.textBody) {
    tb.classList.remove("hidden");
    document.getElementById("feTextTitle").textContent = q.textTitle || "";
    document.getElementById("feTextBody").textContent = q.textBody;
  } else {
    tb.classList.add("hidden");
  }

  document.getElementById("feQuestion").textContent = q.q;
  const optsEl = document.getElementById("feOptions");
  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+i)}</span> ${opt.replace(/^[A-D]\.\s*/, "")}`;
    btn.addEventListener("click", () => selectFEAnswer(i, q));
    optsEl.appendChild(btn);
  });

  document.getElementById("feFeedback").classList.add("hidden");
}

// ── Select answer ──
function selectFEAnswer(chosen, q) {
  document.querySelectorAll("#feOptions .option-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === chosen && chosen !== q.answer) btn.classList.add("wrong");
  });

  const correct = chosen === q.answer;
  feUserAnswers[feIdx] = { chosen, correct, q };
  if (correct) playCorrect(); else playWrong();

  document.getElementById("feFbResult").innerHTML = correct
    ? `<span style="color:var(--green)">✓ ¡Correcto!</span>`
    : `<span style="color:var(--red)">✗ Incorrecto.</span>`;
  document.getElementById("feFbCorrect").textContent =
    `✓ Respuesta correcta: ${q.correctEs || q.options[q.answer]}`;
  document.getElementById("feFbExpl").textContent = q.explanation || "";
  document.getElementById("feFeedback").classList.remove("hidden");
  feIdx++;
}

document.getElementById("btnNextFE").addEventListener("click", () => {
  if (feIdx >= feItems.length) finishFullExam(false);
  else showFEQuestion();
});

// ── Finish exam ──
function finishFullExam(timedOut) {
  clearInterval(feTimerInterval);
  clearInterval(feTenSecInterval);
  document.getElementById("examArena").classList.add("hidden");
  document.getElementById("examResultScreen").classList.remove("hidden");

  const timeUsed = Math.round((Date.now() - feStartTime) / 1000);
  const answered = feUserAnswers.filter(a => a !== null);
  const correct  = answered.filter(a => a.correct).length;
  const total    = feItems.length;
  const pct      = total ? Math.round((correct / total) * 100) : 0;

  // Play result sound
  if (pct >= 60) playExamPass(); else playExamFail();
  if (timedOut) playTimeUp();

  document.getElementById("feResultEmoji").textContent = pct>=80?"🏆":pct>=60?"⭐":pct>=40?"📚":"💪";
  document.getElementById("feResultTitle").textContent =
    timedOut ? "¡Tiempo agotado!" : pct>=80 ? "¡Excelente resultado!" : pct>=60 ? "¡Buen trabajo!" : "Sigue practicando";
  document.getElementById("feScoreBig").textContent = pct + "%";

  // Main stats grid
  const timeStr = `${Math.floor(timeUsed/60)}m ${timeUsed%60}s`;
  const avgTime = answered.length ? Math.round(timeUsed / answered.length) : 0;
  document.getElementById("feResultGrid").innerHTML = `
    <div class="fe-rg-item"><div class="fe-rg-num green">${correct}</div><div class="fe-rg-label">Correctas</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num red">${answered.length-correct}</div><div class="fe-rg-label">Incorrectas</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num">${total-answered.length}</div><div class="fe-rg-label">Sin responder</div></div>
    <div class="fe-rg-item"><div class="fe-rg-num accent">${pct}%</div><div class="fe-rg-label">Precisión</div></div>`;

  // Time stats
  document.getElementById("feTimeStats").innerHTML = `
    <div class="fe-ts-item"><div class="fe-ts-num">${timeStr}</div><div class="fe-ts-label">Tiempo usado</div></div>
    <div class="fe-ts-item"><div class="fe-ts-num">${avgTime}s</div><div class="fe-ts-label">Promedio por pregunta</div></div>
    <div class="fe-ts-item"><div class="fe-ts-num">${feSelectedDuration===0?"∞":feSelectedDuration+"m"}</div><div class="fe-ts-label">Duración configurada</div></div>`;

  // Category breakdown
  const cats = {};
  answered.forEach(a => {
    const cat = a.q.type==="readq"?"Comprensión Lectora":
                a.q.type==="dialog"?"Diálogos":
                (a.q.context||"Vocabulario").substring(0,22);
    if (!cats[cat]) cats[cat] = {correct:0,total:0};
    cats[cat].total++;
    if (a.correct) cats[cat].correct++;
  });
  const cbEl = document.getElementById("feCatBreakdown");
  cbEl.innerHTML = `<div class="fe-lb-title">📊 Rendimiento por categoría</div>`;
  const catColors = {"Comprensión Lectora":"#1e88e5","Diálogos":"#7c3aed","Vocabulario":"#00c853","Gramática":"#f9a825"};
  Object.entries(cats).slice(0,6).forEach(([cat, d]) => {
    const pp = Math.round((d.correct/d.total)*100);
    const col = catColors[cat] || "var(--accent)";
    const row = document.createElement("div");
    row.className = "fe-cat-row";
    row.innerHTML = `<div class="fe-cat-name">${cat.length>20?cat.slice(0,20)+"…":cat}</div>
      <div class="fe-cat-bar-wrap"><div class="fe-cat-bar" style="width:${pp}%;background:${col}"></div></div>
      <div class="fe-cat-pct">${pp}%</div>`;
    cbEl.appendChild(row);
  });

  // Level breakdown
  const levels = {easy:{correct:0,total:0},medium:{correct:0,total:0},hard:{correct:0,total:0}};
  answered.forEach(a => {
    const lvl = a.q.lvl || "medium";
    if (!levels[lvl]) levels[lvl] = {correct:0,total:0};
    levels[lvl].total++;
    if (a.correct) levels[lvl].correct++;
  });
  const lbEl = document.getElementById("feLevelBreakdown");
  lbEl.innerHTML = `<div class="fe-lb-title">📈 Rendimiento por nivel</div>`;
  [{key:"easy",label:"🌱 Básico A1–A2",col:"#00c853"},
   {key:"medium",label:"⚡ Intermedio A2–B1",col:"#f9a825"},
   {key:"hard",label:"🔥 Avanzado B1",col:"#e53935"}].forEach(({key,label,col}) => {
    const d = levels[key] || {correct:0,total:0};
    if (!d.total) return;
    const pp = Math.round((d.correct/d.total)*100);
    const row = document.createElement("div");
    row.className = "fe-lb-row";
    row.innerHTML = `<div class="fe-lb-name">${label}</div>
      <div class="fe-lb-bar-wrap"><div class="fe-lb-bar" style="width:${pp}%;background:${col}"></div></div>
      <div class="fe-lb-pct">${pp}%</div>
      <div class="fe-lb-count">${d.correct}/${d.total}</div>`;
    lbEl.appendChild(row);
  });

  // Review list
  const rl = document.getElementById("feReviewList");
  rl.innerHTML = "";
  answered.forEach((a, i) => {
    const item = document.createElement("div");
    item.className = "fe-review-item " + (a.correct ? "correct-item" : "wrong-item");
    item.innerHTML = `<div class="fe-rev-q">${i+1}. ${a.q.q}</div>
      ${!a.correct ? `<div class="fe-rev-your">Tu respuesta: ${a.q.options[a.chosen] || "Sin responder"}</div>` : ""}
      <div class="fe-rev-correct">✓ ${a.q.correctEs || a.q.options[a.q.answer]}</div>
      ${a.q.explanation ? `<div class="fe-rev-expl">${a.q.explanation}</div>` : ""}`;
    rl.appendChild(item);
  });

  // Save history
  const exams = JSON.parse(localStorage.getItem("em_full_exams") || "[]");
  exams.unshift({ pct, correct, total, date: new Date().toLocaleDateString("es-CO"),
    duration: feSelectedDuration, examType: feSelectedType, timeUsed });
  if (exams.length > 10) exams.pop();
  localStorage.setItem("em_full_exams", JSON.stringify(exams));

  // Update global stats
  if (!state.modeStats) state.modeStats = {};
  if (!state.modeStats.fullexam) state.modeStats.fullexam = {correct:0,wrong:0};
  state.modeStats.fullexam.correct += correct;
  state.modeStats.fullexam.wrong   += (answered.length - correct);
  state.totalAnswered += answered.length;
  state.totalCorrect  += correct;
  state.totalWrong    += (answered.length - correct);
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

