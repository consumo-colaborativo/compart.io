compart.io
====================
compart.io es un proyecto llevado por voluntarios - gratuitamente y de código libre.

# Introducción
Este documento sirve de guía de desarrollo para la plataforma digital del proyecto social de consumo colaborativo.

La idea se inició alrededor de Junio de 2012 mediante la creación de un [grupo de Consumo Colaborativo en Facebook](https://www.facebook.com/groups/310342205721740/) bajo el lema "No compres; pide. No tires; regala", como un proyecto web piloto de consumo colaborativo abierto, libre y gratuito. Hasta la fecha, el grupo cuenta con más de 10.000 miembros.

Este desarrollo quiere ofrecer una plataforma digital ágil y sencilla enfocada a la comunicación, donación y petición de bienes y necesidades en el marco del consumo colaborativo.


# Objetivos
1. Mejorar la experiencia de usuario del proyecto piloto del grupo de consumo colaborativo de Facebook.
2. Investigar en formas de interacción social en torno al consumo colaborativo (reputación, organización,...).
 

# Principios
- Éste es un proyecto abierto, libre (con licencia GPL) y sin ánimo de lucro.
- El proyecto acepta donaciones para asegurar el buen funcionamiento, mantenimiento y desarrollo de la iniciativa, siempre y cuando no alteren la naturaleza colectiva, desinteresada y abierta. 
- El [equipo inicial de mantenedores de compart.io](https://github.com/consumo-colaborativo?tab=members) está formado por Álvaro Saco, Toni Castillo, Delphine Gimbert, Javier Jiménez y Magda Sánchez. Una vez lanzemos la primera versión de Compart.io liberaremos el código incluyendo toda la documentación necesaria y las formas posibles de contribuir.   

# Punto de partida
Dejo por aquí algunas apreciaciones o inferencias sobre la experiencia con el grupo de consumo colaborativo de Facebook para de ahí, comentarlas, tomar ideas de funcionalidades y definir prioridades para comenzar con lo más básico.
- Mejorar la **búsqueda** de objetos/necesidades parece el punto central.
- A la hora de **insertar un mensaje**, es interesante ofrecer la posibilidad de **adjuntar una imagen** e indicar **localización**, para así, poder posteriormente filtrar por ubicación.
- Hay ciertos **temas populares**, como ropa, animales (mascotas), mobiliario, libros o comida; también servicios. Podría ser interesante como posible filtrado o categorización.
- También se publican mensajes relacionados con **noticias** de divulgación o **eventos** relacionados con el consumo colaborativo. 
- Hay también muchos mensajes de **agradecimientos**. Pienso que sería genial poder, mediante alguna acción, darle las gracias a alguien.
- También el tema de a quién decido entregar algo ha traído muchas discusiones. En mi opinión, los **comentarios públicos** sobre un mensaje publicado es algo que por un lado refleja la actividad del grupo, pero por otro, trae en ocasiones la polémica. Los acuerdos (cuando decido a quién entrego algo y donde quedo con la persona) suelen llegar por **mensajes privados**.
- Una idea que me parece muy práctica es que cada uno, en su **perfil**, pueda indicar por un lado, qué cosas está buscando o necesita, y por otro lado, que cosas tiene para ofrecer y regalar a alguien. También se podría reflejar los agradecimientos recibidos y dados, enlazando a la donación que lo originó. El perfil también podría reflejar los mensajes privados recibidos y/o enviados y la funcionalidad para asignar X objeto a Y persona, y así, generar la donación y el posible agradecimiento o comentario al respecto.
- Para más adelante, el **préstamo** también es algo que sería de gran utilidad. La posibilidad de prestar a alguien ciertos objetos en lugar de regalarlos, por ejemplo un proyector, un libro, ...etc. Además, podría quedar reflejado en el perfil personal, esto es, qué cosas tengo prestadas, a quién y de quién son. ¡Ya no perderemos el rastro de ese libro o disco que una vez prestamos a no me acuerdo quién!
- También es interesante ofrecer la posibilidad de "denunciar" un mensaje por su contenido (ha habido casos de gente ofreciendo seguros y préstamos).
- ¿**Alertas**? Sería interesante si en mi perfil indico que estoy buscando una bicicleta, si alguien publica una bicicleta para dar, me llegase un aviso.
- Sobre el **registro de usuarios**, hay quien no tiene perfil en Facebook, por lo que sería genial abrir el grupo a todas las personas.
- Mantener la presencia en Facebook también resulta interesante en la divulgación del proyecto. Aquí sería idóneo investigar formas de **integración con Facebook** (*Open Graph*, *likes*, ...)

- Otro elemento diferenciador con respecto al resto de proyectos: en lugar de centrarlo en torno a los objetos que se ofertan centrarlo en torno a las personas que dan y piden cosas.

# Proyectos de Referencia

Podemos aprender mucho de proyectos que ya existen en otros países y que promueven el consumo colaborativo:
- [Obsso Collaborative Thinking App](http://obsso.com/) solo disponible para móviles, permite cambiar cosas.
- [StreetBank](http://www.streetbank.com/splash) find and share anything in your neighbourhood. El vídeo lo explica muy bien, añade la idea de prestar cosas.
- [Freegle](http://www.ilovefreegle.org/) tiene aplicación Facebook asociada. Habría que analizar bien como funciona.
- [Lynxup](http://www.lynxup.com/) permite login con facebook o google. lynxup is a simple way of finding free stuff in your area, and a great way to get rid of old stuff you no longer need.
- [Nolotiro](https://github.com/alabs/nolotiro) "es un sitio web donde regalar y buscar cosas gratis de segunda mano". De este proyecto surgió [segundamanita.com](http://www.segundamanita.com), enfocado a niños y bebés, y [ropadona.com](http://www.ropadona.com), orientado a ropa.
- [etruekko](https://github.com/wadobo/etruekko) es una red de comunidades para intercambiar objetos y servicios. Usa la moneda TRUEKO como unidad para los intercambios.
- [Sharetribe](https://www.sharetribe.com/) Let your community sell, rent, swap and share goods and services online. Aquí el [código fuente](https://github.com/sharetribe/sharetribe)
- [Peerby](http://peerby.com) tiene conexión con Facebook. Parte de la geolocalización para publicar peticiones y hacerte llegar aquéllas que se publiquen por personas en tu vecindad. Visualiza los anuncions como el listado de twitter, falta información más visual.
- [Telodoy](http://www.telodoy.net/) doy, necesito y cambio, por país y provincia. Muchos anuncios, diseño pobre.
- [Circle](http://discovercircle.com/) sólo App móvil, De todas las que he usado o conocido, a nivel de diseño es la que más me ha gustado. Parte de la localización en la que estés. Para iOS y Android. Está pensada para enterarse de que ocurre a tu alrededor en todo momento: problemas con tráfico, etc. Quizás demasiado genérica, el diseño muy chulo.
- Google Mine es un proyecto en desarrollo que se rumoreó en [este post](http://googlesystem.blogspot.com.es/2013/06/google-mine.html), que también citó el blog consumocolaborativo.com en este artículo titulado *lo que mejoraría de [Google Mine](http://www.consumocolaborativo.com/2013/06/25/lo-que-mejoraria-de-google-mine/), en el que además cita otros proyectos relacionados.
- [mine](http://getmine.com/) A directory of people and purchases. Parece estar en standby "Sign Ups Closed".
- [Fribi](http://www.fribi.com/) Your social marketplace. Tiene login con Facebook y te pide permiso para publicar en tu Facebook. Tienen un [video](https://vimeo.com/40324408) explicativo.
- [NeighborGoods](http://neighborgoods.net/) Parece enfocado a compartir objetos y, según leo, ofrecen un sistema de inventario con recordatorios.
- [Bondsy](https://www.bondsy.com/) Una app para iOS. Parece tener un diseño más cuidado que otros proyectos que hemos citado.
- [Yerdle](https://www.yerdle.com/) "Give and get free stuff". Otra app para iOS.
- [Gnibble](http://gnibble.com/?locale=en) Un proyecto alemán para compartir y dar. Integran Google Map para visualmente localizar objetos y mostrar información de la distancia de un objeto de ti. Parece que también los usuarios tienen valoraciones (estrellas), un panel para ver sus objetos prestados y alquilados, y una lista de necesidades. Los objetos tienen información del número de veces que han sido prestados (¡curioso!).
- [imixme](http://imixme.com) Por lo que sé, es un proyecto que se ha desarrollado recientemente desde Málaga. Se definen como una red comercial para regalar objetos, cambiar o recibir dinero ya sea por venderlo o por alquilarlo durante un tiempo. Además los usuarios podrán decir qué cosas necesitan, qué cosas les hace falta y imixme buscará usuarios que tengan cosas que ambos necesiten para que los 2 puedan salir beneficiados.
- [Favorece](http://favorece.net/) Es un proyecto que parece ya abandonado. Para pedir y ofrecer cosas y servicios o favores.
- [Gitflow](https://github.com/GiftFlow/giftflow) La web del proyecto no va, pero está el código publicado en github. "*GiftFlow is an open-source web platform that makes it easy for communities to give and share their extra resources*".
- [Relendo](https://www.relendo.com/) Relendo es una plataforma de Consumo Colaborativo que permite el alquiler de productos entre personas con dinero.

# Evaluación de ShareTribe

Conclusiones sobre la evaluación de ShareTribe y las razones por las cuales hemos decidido no basarnos en su código y desarrollar una una plataforma nueva:
- Se necesitan añadir bastantes funcionalidades nuevas: sistema de categorías, extender la información mostrada en las "Cards", implementar un sistema de control basado en estadísticas de usuario (nivel de satisfacción), implementar un funcionamiento en tiempo real (necesita de recarga de página), etc.
- Un primer intento de instalación del código disponible en GitHub da bastantes problemas y no se completa con éxito.
- Comunidad reducida: se trata de una herramienta de código abierto cuyo modelo de negocio se basa en ofrecer servicios de customización de interfaz. Sus esfuerzos están más enfocados a mantener estos servicios que a crear una comunidad de desarrolladores alrededor. Es difícil que los programadores se sientan motivados a aportar a un proyecto del cual luego se beneficiarán económicamente sólo los mantenedores. 

# ¿Cómo contribuir al proyecto?

¡Estamos deseando que puedas unirte a Compart.io! Como en todo proyecto libre para poder abrirlo a aportaciones, primero tenemos que desarrollar una versión básica y documentarla adecuadamente. Mientras tanto puedes seguir y aportar a las discusiones que mantenemos en las "Issues" del proyecto sobre las decisiones técnicas y de diseño que vamos tomando, ¡tu opinión es muy valiosa! 

# ¿Qué modelo de trabajo usamos?

- Usar el modelo de trabajo [GitHub Flow](http://zachholman.com/talk/how-github-uses-github-to-build-github/). Las reglas básicas de GitHub Flow son:
 - Anything in the master branch is deployable
 - To work on something new, create a descriptively named branch off of master (ie: new-oauth2-scopes)
 - Commit to that branch locally and regularly push your work to the same named branch on the server
 - When you need feedback or help, or you think the branch is ready for merging, open a pull request
 - After someone else has reviewed and signed off on the feature, you can merge it into master
 - Once it is merged and pushed to ‘master’, you can and should deploy immediately

# Tecnologías Front & Back-end

Cuando estamos hablando de en qué tecnología vamos a hacer el proyecto tenemos claro que la mayor parte será en HTML5, CSS3 y Javascript, lenguajes de front-end y que se ejecuta en el lado del cliente. Cuanto más podamos hacer en el lado del cliente mejor, más rápido, mejos nos costará el hosting y más aprovecharán los usuarios esos pedazos de procesadores cuad-core e i7 que tendrán bajo sus dedos.

Lo que quedaba por decidir es la tecnología que íbamos a usar del lado del servidor.

Node JS para mí es una nueva era en las tecnologías de servidor y que deja atrás a sus competidores por lo siguiente:

- No hay que aprender otro lenguaje. Sólo aprender a programar bien en JavaScript y usar una serie de librerías y funciones que se ejecutarán en el lado del servidor.
- Podremos reutilizar código hecho para el front-end para el back-end.
- Favorece usar bases de datos como redis o mongodb, mucho más simples y más pensadas para aplicaciones web (también podemos usar mysql)
- Mejoraremos la velocidad de los procesos del servidor al usar un lenguaje de programación no bloqueante y que nos permitirá escribir código "asíncrono". Pensad los beneficios que tiene esto a nivel de front-end pues lo mismo para el back-end. Es el punto fuerte de Node.
- Mejoraremos enormemente la escalabilidad de la carga del servidor. Una máquina con apache suele petar alrededor de las 400 conexiones. La misma máquina con Node sobre los 3000.
- Además de una mucho mejor escalabilidad vertical es mucho más fácil escalarlo horizontalmete ya que sólo se ejecuta un proceso por procesador o núcleo.
- Mejora de la seguridad puesto que, además del punto anterior para ataques DDOS, tiene una superficie de ataque/fallo muy reducida. No hay apache con 35 módulos que nadie sabe configurar y propensos a tener vulnerabilidades. Solo node y con 15 lineas de código tienes un servidor que va a toda leche.

Pensad que Javascript es el único lenguaje pensado, diseñado y creado para ejecutar aplicaciones web... como un tal Andreesen dijo hace ya casi 25 años "Al final sólo nos quedará el navegador".
