const quizData = [
    {
        topic: "Principios y Valores",
        q: "¿Qué son los principios éticos y los valores?",
        correct: "Los principios éticos son normas o reglas universales que definen lo que es correcto e incorrecto, y proporcionan una guía para la toma de decisiones morales en distintas situaciones. Son aplicables a diversos contextos y orientan el actuar justo y moral de las personas. Los valores son creencias fundamentales o ideales que guían el comportamiento y las actitudes de las personas, influyendo en cómo interpretan y reaccionan ante diversas situaciones de la vida. Los valores son subjetivos y pueden variar entre individuos y culturas, reflejando lo que cada persona o sociedad considera importante. Ambos conceptos están interrelacionados y juntos forman la base de la ética y la moralidad en la vida cotidiana y profesional.",
        others: [
            "Los principios éticos son normativas técnicas y estándares de programación (como ISO/IEC) que regulan estrictamente la codificación. Los valores son métricas de rendimiento que evalúan la calidad del software. Ambos conceptos garantizan la funcionalidad técnica, pero no tienen relación directa con el comportamiento humano o la moralidad en la profesión.", 
            "Los principios éticos son leyes dictadas por el Estado que acarrean sanciones penales inmediatas si son infringidas durante el desarrollo de sistemas. Los valores son cláusulas de confidencialidad incluidas en los contratos comerciales. Juntos, conforman el marco estrictamente punitivo que rige a las empresas de tecnología en el mercado laboral."
        ],
        theory: "Los principios son reglas universales y objetivas (lo correcto/incorrecto). Los valores son creencias subjetivas que cambian según la cultura o persona.",
        hint: "Piénsalo bien. La respuesta correcta menciona la diferencia entre algo 'universal' y algo 'subjetivo'. No tiene que ver con leyes penales ni estándares técnicos ISO.",
        explanation: "¡Exacto! Los principios nos dan un marco universal, mientras que los valores dependen de nuestras creencias personales."
    },
    {
        topic: "Principio de Integridad",
        q: "¿Qué principio ético es fundamental en la ingeniería de sistemas?",
        correct: "La integridad es un principio ético fundamental en la ingeniería de sistemas, ya que asegura que los profesionales actúen de manera honesta, transparente y coherente entre sus creencias y acciones. Este principio implica asumir la responsabilidad de las decisiones tomadas, respetar los derechos de los usuarios y de las partes interesadas, y mantener un comportamiento ético en todos los proyectos y actividades profesionales.",
        others: [
            "La rentabilidad sostenible es un principio ético fundamental en la ingeniería de sistemas, ya que asegura que los profesionales actúen siempre buscando el mayor beneficio económico para la empresa, justificando cualquier medio técnico siempre y cuando se mantengan dentro de los límites legales del libre mercado.", 
            "La neutralidad algorítmica es el único principio ético reconocido, el cual obliga a los ingenieros a programar sin insertar comentarios en el código, garantizando que el software funcione sin intervención humana. Este principio exime al desarrollador de cualquier responsabilidad sobre el impacto social."
        ],
        theory: "El principio más importante se basa en la honestidad, la transparencia y en hacerte responsable de tus decisiones tecnológicas.",
        hint: "Recuerda que la ética no se centra en ganar dinero (rentabilidad) ni en lavar tus manos ante el impacto social. Busca la opción que hable de honestidad.",
        explanation: "¡Muy bien! La integridad es el pilar que asegura que tu trabajo técnico esté alineado con la honestidad y el respeto a los usuarios."
    },
    {
        topic: "Valores Profesionales",
        q: "¿Qué son los valores personales o profesionales?",
        correct: "Los valores son creencias fundamentales o ideales que guían el comportamiento y las actitudes de las personas, influyendo en la forma en que interpretan y reaccionan ante distintas situaciones. Son de carácter subjetivo y pueden variar según la cultura o el individuo. Entre los valores más comunes se encuentran la honestidad, la lealtad, la empatía, la libertad y la solidaridad, los cuales orientan la conducta tanto en la vida personal como profesional.",
        others: [
            "Los valores son exclusivamente los conocimientos técnicos y habilidades de programación que un profesional adquiere a lo largo de su formación académica. Son de carácter objetivo y se miden mediante certificaciones internacionales. Entre los valores más comunes se encuentran el dominio de lenguajes como Python o bases de datos relacionales.", 
            "Los valores son regulaciones impuestas por los colegios de ingenieros que obligan a los profesionales a cobrar tarifas estandarizadas por sus servicios. Estas normas buscan evitar la competencia desleal en el mercado laboral y asegurar que todos los desarrolladores obtengan exactamente la misma remuneración económica."
        ],
        theory: "Los valores son brújulas internas (creencias) que guían cómo actúas frente a las situaciones de la vida diaria y laboral.",
        hint: "No confundas los valores humanos con 'habilidades de programación' o 'tarifas de cobro'. Los valores son conceptos como la empatía y la lealtad.",
        explanation: "¡Correcto! Los valores son completamente subjetivos y marcan la diferencia en cómo un profesional actúa ante dilemas diarios."
    },
    {
        topic: "Ordenamiento Legal",
        q: "¿Qué es el ordenamiento legal?",
        correct: "El ordenamiento legal es el conjunto de normas, leyes, reglamentos y principios que regulan la convivencia social y organizan la sociedad dentro de un territorio determinado. Está estructurado de manera jerárquica, teniendo como norma suprema a la Constitución, seguida por leyes orgánicas y ordinarias, decretos, reglamentos, ordenanzas municipales y otros actos administrativos. Esta jerarquía asegura la coherencia del sistema jurídico y que todas las normas se ajusten a los principios constitucionales, garantizando el orden, la justicia y la previsibilidad en la convivencia social.",
        others: [
            "El ordenamiento legal es el conjunto de directrices técnicas estandarizadas internacionalmente que regulan exclusivamente el ciclo de vida del desarrollo de software. Está estructurado jerárquicamente desde el código fuente hasta la interfaz de usuario, garantizando que los sistemas operativos sean compatibles a nivel mundial.", 
            "El ordenamiento legal es un documento privado redactado por los gerentes de las empresas de tecnología para controlar el comportamiento de sus empleados. Tiene como norma suprema el contrato de confidencialidad (NDA), asegurando que la propiedad intelectual pertenezca siempre a la corporación sin intervención del Estado."
        ],
        theory: "Es el sistema completo de leyes de un país, organizado en jerarquía, donde la Constitución es la regla máxima.",
        hint: "Esta definición es social y política, no técnica ni corporativa. Busca la opción que menciona leyes, la Constitución y la convivencia social.",
        explanation: "¡Excelente! Entender la jerarquía de leyes (con la Constitución arriba) es clave para saber qué normas aplicar en cada caso legal."
    },
    {
        topic: "Concepto de Deontología",
        q: "¿Qué es la deontología?",
        correct: "La deontología es una rama de la ética que estudia los deberes y las normas éticas que determinan qué acciones son moralmente correctas o incorrectas. Se basa en principios y reglas más que en las consecuencias de las acciones. En el ámbito profesional, se refiere al conjunto de normas y principios que guían la conducta ética de los profesionales, asegurando altos estándares de honestidad, integridad y respeto.",
        others: [
            "La deontología es una rama del derecho penal que se encarga exclusivamente de investigar y sancionar los delitos informáticos, como el hacking y la distribución de malware. Se basa en el rastreo de direcciones IP y en la informática forense, asegurando que los infractores reciban penas de cárcel.", 
            "La deontología es una metodología de desarrollo de software ágil que determina qué algoritmos son más eficientes en términos de consumo de memoria y procesamiento. En el ámbito profesional, se refiere al conjunto de patrones de diseño que guían la estructuración de bases de datos de alta disponibilidad."
        ],
        theory: "La deontología es la ética aplicada a tu profesión. Estudia los deberes morales sin importar las consecuencias.",
        hint: "Deontología viene del griego 'deon' (deber). No es una rama del derecho penal para castigar, ni una metodología de software.",
        explanation: "¡Bien hecho! La deontología es lo que da origen a los famosos 'Códigos de Ética Profesional'."
    },
    {
        topic: "Deontología en Ing. de Sistemas",
        q: "¿Qué es la deontología en la ingeniería de sistemas?",
        correct: "La deontología en la ingeniería de sistemas es el estudio y la aplicación de las normas éticas y morales que guían la conducta profesional de los ingenieros de sistemas. Se enfoca en el cumplimiento del deber profesional, la responsabilidad social, el respeto a los usuarios y el compromiso con el bienestar de la sociedad mediante el uso ético de la tecnología.",
        others: [
            "La deontología en la ingeniería de sistemas es el proceso de certificación de calidad de hardware y componentes electrónicos. Se enfoca en garantizar que las piezas físicas de las computadoras cumplan con los estándares de voltaje y resistencia, asegurando que los equipos no causen cortocircuitos.", 
            "La deontología en la ingeniería de sistemas es la disciplina legal encargada de registrar patentes y derechos de autor sobre el código fuente creado. Su objetivo principal es maximizar las ganancias por licencias de uso, enfocándose en evitar que el software libre reduzca los margins de beneficio económico."
        ],
        theory: "Es aplicar la ética a la tecnología: respetar al usuario, crear tecnología responsable y cumplir con el deber profesional.",
        hint: "Concéntrate en la palabra 'conducta' y 'ética'. No tiene que ver con el hardware, los voltajes ni las patentes de software.",
        explanation: "¡Exacto! Es la garantía moral de que un ingeniero usará sus conocimientos técnicos para el bien de la sociedad y no para el daño."
    },
    {
        topic: "Derecho Público",
        q: "¿Qué es el derecho público?",
        correct: "El derecho público es la rama del derecho que regula las relaciones entre los individuos y el Estado, así como las relaciones entre las distintas instituciones estatales. Incluye áreas como el derecho constitucional, administrativo, penal, procesal, financiero y tributario, y el derecho internacional público. Su objetivo es regular la estructura y funcionamiento del Estado, así como los derechos y deberes de los ciudadanos frente a este.",
        others: [
            "El derecho público es la rama del derecho que regula exclusivamente las relaciones comerciales y contratos privados entre empresas transnacionales de tecnología. Su objetivo es asegurar que los acuerdos de compra y venta de licencias de software se realicen sin ninguna intervención, regulación o impuesto por parte de los Estados nacionales.", 
            "El derecho público es el conjunto de normativas de código abierto (Open Source) que permite a cualquier individuo acceder, modificar y distribuir libremente cualquier programa informático, obligando a todas las empresas a publicar su código fuente para el escrutinio público y prohibiendo el software privativo."
        ],
        theory: "Es la parte del derecho donde interviene el Estado como ente regulador o protector frente a los ciudadanos.",
        hint: "La palabra clave es 'Estado'. No confundas 'público' con 'código abierto (Open Source)' ni con contratos privados de empresas.",
        explanation: "¡Perfecto! El derecho público nos protege y regula cómo el Estado interactúa con nosotros (por ejemplo, mediante los impuestos o leyes penales)."
    },
    {
        topic: "Derecho Administrativo",
        q: "¿Qué regula el derecho administrativo?",
        correct: "El derecho administrativo regula la organización, funciones y procedimientos de los órganos del Estado en el ejercicio de la administración pública, así como la relación entre la administración y los ciudadanos. Abarca aspectos como los procesos administrativos, los contratos públicos y el control judicial de la administración pública, garantizando que esta actúe conforme a la ley.",
        others: [
            "El derecho administrativo regula la forma en que los administradores de sistemas informáticos (SysAdmins) deben configurar los servidores web y gestionar los permisos de los usuarios dentro de una red privada. Abarca la asignación de contraseñas, protocolos de enrutamiento y el control de acceso a bases de datos.", 
            "El derecho administrativo es la disciplina que establece las tarifas y costos de los servicios de telecomunicaciones para las empresas privadas. Regula exclusivamente cuánto pueden cobrar los proveedores de internet a los ciudadanos, garantizando que los contratos maximicen las utilidades de las compañías."
        ],
        theory: "Regula el funcionamiento interno del Estado y cómo este (la Administración Pública) presta servicios o firma contratos.",
        hint: "Ojo, no se refiere a los 'administradores de sistemas' (SysAdmins). Se refiere a la 'Administración Pública' del país.",
        explanation: "¡Eso es! Cuando una institución estatal compra computadoras a través de una licitación, se aplica el derecho administrativo."
    },
    {
        topic: "Derecho Laboral",
        q: "¿Qué es el derecho laboral o derecho del trabajo?",
        correct: "El derecho laboral es la rama del derecho que regula las relaciones entre empleadores y trabajadores surgidas del contrato de trabajo. Su propósito principal es proteger a la parte más débil de la relación laboral, generalmente el trabajador, asegurando condiciones justas de trabajo, remuneración adecuada, estabilidad laboral, derechos colectivos, protección social, igualdad y no discriminación.",
        others: [
            "El derecho laboral es la rama del derecho que se dedica a proteger los equipos físicos e infraestructuras de las empresas de tecnología frente a daños ocasionados por los empleados. Su propósito principal es garantizar que el empleador pueda recuperar económicamente cualquier pérdida derivada de errores de programación.", 
            "El derecho laboral es un conjunto de normativas que regula exclusivamente a los trabajadores independientes y consultores de sistemas (freelancers) en mercados internacionales. Asegura que estas personas no paguen impuestos locales y que sus honorarios sean determinados por plataformas digitales."
        ],
        theory: "Se encarga de equilibrar la balanza entre el empleador y el empleado, protegiendo al trabajador mediante salarios justos y estabilidad.",
        hint: "Su objetivo es proteger a la persona (el trabajador), no recuperar pérdidas económicas ni evitar que los freelancers paguen impuestos.",
        explanation: "¡Correcto! Es fundamental para cualquier ingeniero, ya que define tus beneficios sociales, vacaciones y derechos salariales."
    },
    {
        topic: "Derecho Medioambiental",
        q: "¿Qué regula el derecho medioambiental?",
        correct: "El derecho medioambiental regula las actividades humanas en relación con el medio ambiente, estableciendo normas para la protección de los recursos naturales, la prevención de daños ecológicos y la promoción del desarrollo sostenible, con el fin de preservar el entorno para las generaciones presentes y futuras.",
        others: [
            "El derecho medioambiental regula los ambientes de desarrollo integrado (IDE) que utilizan los programadores, estableciendo normas estrictas sobre qué lenguajes de programación se pueden utilizar para evitar la fragmentación del ecosistema de software a nivel corporativo.", 
            "El derecho medioambiental es la rama de las telecomunicaciones que regula la instalación de cables submarinos y fibra óptica a nivel global. Su objetivo es garantizar la máxima velocidad en la transmisión de datos, priorizando la expansión tecnológica sobre el impacto geográfico."
        ],
        theory: "Regula el impacto humano en la naturaleza, promoviendo tecnología que no contamine (desarrollo sostenible).",
        hint: "No te dejes engañar por la palabra 'ambiente'. No habla de entornos de programación (IDE) ni de cables de fibra óptica.",
        explanation: "¡Muy bien! En tecnología, este derecho es vital para regular el reciclaje de basura electrónica (e-waste)."
    },
    {
        topic: "Ley 164 (Bolivia)",
        q: "¿Cuál es el objetivo principal de la Ley 164 de Telecomunicaciones en Bolivia?",
        correct: "El objetivo principal de la Ley 164 es promover el desarrollo y el acceso equitativo a las telecomunicaciones y a las tecnologías de información y comunicación, garantizando el servicio universal y la protección de los derechos de los usuarios.",
        others: [
            "El objetivo principal de la Ley 164 es nacionalizar y expropiar todas las empresas proveedoras de servicios de internet y telefonía móvil, estableciendo un monopolio estatal absoluto para controlar de manera centralizada todo el flujo de datos y comunicaciones privadas.", 
            "El objetivo principal de la Ley 164 es establecer un régimen tributario exclusivo para la importación de equipos de computación y hardware, imponiendo altos aranceles aduaneros para proteger la industria de fabricación de microprocesadores y evitar la entrada de tecnología extranjera."
        ],
        theory: "Busca que todos (sin importar dónde vivan) tengan acceso equitativo al internet y a la comunicación, protegiendo sus derechos.",
        hint: "La ley busca 'equidad y acceso', no nacionalizar empresas a la fuerza ni subir los impuestos aduaneros.",
        explanation: "¡Exacto! Esta ley es la que permite que el acceso a internet y a las telecomunicaciones sea considerado un servicio básico."
    },
    {
        topic: "Propiedad Intelectual",
        q: "¿Qué es la propiedad intelectual?",
        correct: "La propiedad intelectual es el conjunto de derechos exclusivos otorgados a los creadores sobre sus creaciones intelectuales, como inventos, obras literarias y artísticas, software, símbolos, nombres e imágenes utilizadas en el comercio. Su finalidad es proteger las creaciones del uso no autorizado y equilibrar los intereses de los creadores con el bien público, fomentando la innovación y la creatividad.",
        others: [
            "La propiedad intelectual es el conjunto de bienes físicos, como servidores, computadoras y dispositivos de almacenamiento, que pertenecen legalmente a una empresa tecnológica. Su finalidad es proteger estos activos materiales del robo mediante seguros corporativos y videovigilancia.", 
            "La propiedad intelectual es un tratado internacional que obliga a todos los creadores de software a donar sus invenciones al dominio público inmediatamente después de su creación. Su objetivo es eliminar cualquier monopolio comercial sobre las ideas, prohibiendo la venta de licencias."
        ],
        theory: "Son los derechos que protegen a las creaciones de la mente humana (software, inventos, arte) para que sus creadores sean reconocidos.",
        hint: "Hablamos de creaciones de la mente, no de objetos físicos como servidores, y no obliga a donar nada gratis.",
        explanation: "¡Perfecto! Este concepto abarca desde los Derechos de Autor (para el código fuente) hasta las Patentes (para inventos tecnológicos)."
    },
    {
        topic: "P.I. en Software",
        q: "¿Por qué es crucial la propiedad intelectual en el desarrollo de software?",
        correct: "Es crucial porque protege las creaciones intelectuales de los desarrolladores, fomenta la innovación tecnológica y asegura que los creadores reciban reconocimiento y beneficios económicos por su trabajo, incentivando así el desarrollo continuo de nuevas soluciones informáticas.",
        others: [
            "Es crucial porque permite al Estado confiscar y auditar todos los códigos fuente desarrollados por empresas privadas, con el fin de buscar vulnerabilidades de seguridad y utilizar dichos programas para la defensa nacional, sin necesidad de compensar a los desarrolladores.", 
            "Es crucial porque establece un sistema de precios fijos a nivel internacional que obliga a todos los creadores a vender su software exactamente al mismo valor monetario. Esto evita la competencia tecnológica, asegurando que las corporaciones no puedan bajar los precios abruptamente."
        ],
        theory: "Es importante porque asegura que si tú programas una gran app, nadie más pueda robarla, y tú recibas beneficios por tu trabajo.",
        hint: "La PI protege al autor y fomenta que la gente siga inventando. No tiene que ver con confiscar códigos ni fijar precios a nivel mundial.",
        explanation: "¡Excelente! Sin propiedad intelectual, las empresas no invertirían millones en investigar y desarrollar nuevo software porque se lo robarían al día siguiente."
    },
    {
        topic: "Dilemas Éticos",
        q: "¿Qué dilema ético pueden enfrentar los ingenieros de sistemas?",
        correct: "Los ingenieros de sistemas pueden enfrentar dilemas éticos relacionados con el desarrollo de sistemas que puedan invadir la privacidad de los usuarios o ser utilizados para fines no éticos. Estos dilemas exigen equilibrar la innovación tecnológica con la responsabilidad social y el respeto a los derechos fundamentales.",
        others: [
            "Los ingenieros de sistemas pueden enfrentar dilemas éticos relacionados exclusivamente con la selección de la arquitectura de hardware. Estos dilemas exigen equilibrar el costo de los componentes físicos con la velocidad de procesamiento requerida por los videojuegos y aplicaciones de la empresa.", 
            "Los ingenieros de sistemas suelen enfrentar el dilema ético de decidir si deben cobrar sus honorarios profesionales en moneda local o en criptomonedas descentralizadas. Este dilema exige equilibrar el beneficio económico personal con las obligaciones tributarias impuestas por las entidades fiscales."
        ],
        theory: "Un dilema ético surge cuando debes elegir entre la innovación (crear algo asombroso) y el respeto a los derechos humanos (como la privacidad).",
        hint: "Un verdadero dilema moral afecta a las personas (como invadir su privacidad). Decidir qué hardware comprar o cómo cobrar tu sueldo no es un dilema ético de alto nivel.",
        explanation: "¡Así es! Por ejemplo, crear una Inteligencia Artificial de reconocimiento facial es innovador, pero un dilema ético inmenso si se usa para vigilancia masiva."
    },
    {
        topic: "Informática Forense",
        q: "¿Qué es la informática forense?",
        correct: "La informática forense es la práctica de recopilar, analizar y reportar datos digitales de manera legal, principalmente para procesos judiciales. Su objetivo es garantizar la integridad de la evidencia digital y su admisibilidad ante los tribunales.",
        others: [
            "La informática forense es una técnica de programación orientada a objetos que se utiliza para prevenir la aparición de bugs o errores de compilación durante la etapa de desarrollo de software. Su objetivo es garantizar que las aplicaciones se ejecuten de manera limpia y sin interrupciones.", 
            "La informática forense es la disciplina médica que utiliza simulaciones por computadora y realidad virtual de alta definición para realizar intervenciones quirúrgicas a distancia. Su principal objetivo es permitir a los médicos analizar órganos digitales antes de operar a un paciente."
        ],
        theory: "Es la ciencia de tratar un disco duro o dispositivo como la escena de un crimen digital para buscar pruebas legales.",
        hint: "Busca la opción que mencione 'procesos judiciales' y 'evidencia digital'. No tiene que ver con medicina quirúrgica ni buscar bugs en programación.",
        explanation: "¡Genial! Los peritos en informática forense son piezas clave en los juicios modernos para demostrar crímenes financieros o cibernéticos."
    },
    {
        topic: "Delitos Informáticos",
        q: "¿Qué constituye un delito informático?",
        correct: "Un delito informático consiste en actividades ilegales que involucran tecnologías de la información, como el hacking no autorizado, la distribución de malware, el fraude en línea y el robo de datos personales o de propiedad intelectual.",
        others: [
            "Un delito informático consiste en cualquier fallo técnico o lentitud en un sistema operativo causado por falta de mantenimiento preventivo, como no actualizar un antivirus, dejar que se llene el disco duro o utilizar software obsoleto en un entorno corporativo de alta demanda.", 
            "Un delito informático se define como la acción legal de desensamblar o realizar ingeniería inversa a un programa informático con el único propósito de entender cómo fue programado, mejorarlo o adaptarlo a un nuevo hardware, fomentando así el aprendizaje académico."
        ],
        theory: "Es cualquier crimen tradicional (como robo o estafa) pero cometido usando internet, computadoras o tecnología.",
        hint: "No limpiar tu disco duro o no actualizar el antivirus es descuidado, pero no es un delito. Busca la opción que hable de fraude, robo o malware.",
        explanation: "¡Correcto! Delitos como el Phishing (robar contraseñas bancarias) son penalizados gravemente bajo las leyes de tecnología."
    },
    {
        topic: "Concepto de Hacker",
        q: "¿Qué es un hacker?",
        correct: "Un hacker es una persona con un conocimiento profundo de sistemas informáticos, redes o software, dedicada al aprendizaje y exploración de su funcionamiento. Muchos hackers utilizan sus habilidades con fines éticos, como mejorar la seguridad informática, resolver problemas técnicos o contribuir al desarrollo tecnológico.",
        others: [
            "Un hacker es una persona sin conocimientos técnicos formales que utiliza programas automatizados descargados de internet con el único fin de saturar redes sociales, enviar correos no deseados masivamente y causar molestias a los usuarios comunes sin obtener ningún beneficio real.", 
            "Un hacker es exclusivamente un funcionario gubernamental certificado por entidades internacionales que trabaja dentro de las agencias de inteligencia militar, cuya única labor es interceptar las comunicaciones de gobiernos extranjeros mediante el uso de satélites y tecnología clasificada."
        ],
        theory: "Un hacker real es simplemente un experto apasionado por entender cómo funcionan los sistemas para mejorarlos (Hacker Ético).",
        hint: "Recuerda: El hacker investiga, aprende y (muchas veces) protege. No es un ignorante que manda spam ni es exclusivamente un espía militar.",
        explanation: "¡Exactamente! La cultura popular confundió el término. Las empresas de hoy contratan a los Hackers para asegurar sus sistemas, no para destruirlos."
    },
    {
        topic: "Concepto de Cracker",
        q: "¿Qué es un cracker?",
        correct: "Un cracker es una persona que vulnera la seguridad de sistemas informáticos con intenciones maliciosas, como robar datos, cometer fraudes o crear y distribuir malware, realizando actividades ilegales y destructivas.",
        others: [
            "Un cracker es un especialista en ciberseguridad contratado legalmente por las empresas para realizar pruebas de penetración (pentesting) controladas, con el propósito de identificar vulnerabilidades en las redes internas y generar informes detallados para mejorar las defensas.", 
            "Un cracker es una pequeña porción de código incrustada en las páginas web que se descarga en el navegador del usuario para recordar sus preferencias de navegación, mantener sus sesiones activas de manera segura y agilizar la carga de imágenes en visitas posteriores."
        ],
        theory: "Un cracker (Criminal Hacker) usa sus conocimientos técnicos para el mal: robar, extorsionar o dañar sistemas.",
        hint: "No lo confundas con las 'cookies' de las páginas web ni con los pentesters (especialistas legales). El cracker actúa con intenciones maliciosas.",
        explanation: "¡Bien! El cracker es el verdadero 'delincuente informático' que vulnera la ley para beneficio propio."
    },
    {
        topic: "Hacker vs Cracker",
        q: "¿Cuál es la diferencia principal entre un hacker y un cracker?",
        correct: "La diferencia principal radica en la motivación y las actividades. Los hackers suelen enfocarse en el aprendizaje, la mejora de la seguridad y el hacking ético, mientras que los crackers actúan con la intención de causar daño o de obtener beneficios ilícitos mediante el acceso ilegal a sistemas y la comisión de delitos informáticos.",
        others: [
            "La diferencia principal radica en el tipo de equipos e infraestructura que utilizan. Los hackers se especializan exclusivamente en infiltrar redes utilizando dispositivos móviles, mientras que los crackers operan únicamente desde grandes centros de datos utilizando supercomputadoras.", 
            "La diferencia principal es netamente legal e institucional. Un hacker es cualquier ingeniero de sistemas que posee un título universitario avalado por el Estado, mientras que un cracker es una persona empírica que ha aprendido a programar sin ningún tipo de certificación académica formal."
        ],
        theory: "La diferencia no está en las herramientas o los títulos, sino en la motivación: el hacker construye y protege; el cracker destruye y roba.",
        hint: "Concéntrate en la ética. Un hacker no necesita un título universitario para serlo, y la diferencia no radica en usar celulares o supercomputadoras.",
        explanation: "¡Felicidades, llegaste al núcleo del asunto! La ética y la intención marcan la línea entre un profesional respetable y un criminal."
    }
];

// --- VARIABLES DE ESTADO ---
const BLOCK_SIZE = 3; 
const MAX_PASSES = 3;

let shuffledData = [];
let currentBlockIndex = 0;
let currentPass = 1;
let blockQuestions = [];
let qIndexInPass = 0;

let weakTopics = new Set(); 
let answeredCorrectly = false;

// --- AUDIO Y FEEDBACK ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
        if(navigator.vibrate) navigator.vibrate(100);
    } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start(); osc.stop(audioCtx.currentTime + 0.2);
        if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
}

function shuffle(a) { 
    return a.sort(() => Math.random() - 0.5); 
}

// --- LÓGICA DE NIVELES ---
function initQuiz() {
    weakTopics.clear();
    currentBlockIndex = 0;
    
    // Barajamos todo el banco de preguntas al inicio
    shuffledData = shuffle([...quizData]); 
    
    document.getElementById('result-ui').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');
    document.getElementById('header-ui').classList.remove('hidden');
    
    startBlock();
}

function startBlock() {
    // Verificar si ya pasamos todos los bloques
    if (currentBlockIndex * BLOCK_SIZE >= shuffledData.length) {
        showAnalytics();
        return;
    }

    currentPass = 1;
    // Extraer las siguientes 3 preguntas (o menos si es el final)
    blockQuestions = shuffledData.slice(currentBlockIndex * BLOCK_SIZE, (currentBlockIndex + 1) * BLOCK_SIZE);
    
    startPass();
}

function startPass() {
    qIndexInPass = 0;
    // Mezclar el orden de las preguntas dentro de esta pasada
    blockQuestions = shuffle([...blockQuestions]);
    renderQuestion();
}

function renderQuestion() {
    answeredCorrectly = false;
    const data = blockQuestions[qIndexInPass];
    
    // Actualización de UI: Nivel y Pasada
    const totalLevels = Math.ceil(shuffledData.length / BLOCK_SIZE);
    document.querySelector('.top-info span:first-child').innerText = `NIVEL ${currentBlockIndex + 1}/${totalLevels} | PASADA ${currentPass}/${MAX_PASSES}`;
    
    document.getElementById('q-counter').innerText = `${qIndexInPass + 1}/${blockQuestions.length}`;
    document.getElementById('question').innerText = data.q;
    document.getElementById('bar').style.width = `${(qIndexInPass / blockQuestions.length) * 100}%`;
    
    // Resetear UI
    const fbBox = document.getElementById('feedback-box');
    fbBox.classList.add('hidden');
    fbBox.className = 'feedback-box hidden'; 
    document.getElementById('btn-next').classList.add('hidden');

    const container = document.getElementById('choices-container');
    container.innerHTML = '';

    // Mezclar las opciones de respuesta en cada pasada
    const pool = shuffle([data.correct, ...data.others]);

    pool.forEach((text, i) => {
        const b = document.createElement('button');
        b.className = 'choice-btn';
        b.innerHTML = `<span class="key-badge">${i+1}</span> ${text}`;
        b.onclick = () => handleChoice(text, b);
        container.appendChild(b);
    });
}

function showTheory() {
    if (answeredCorrectly) return; 
    const data = blockQuestions[qIndexInPass];
    weakTopics.add(data.topic); 
    showFeedbackBox(data.theory, 'info');
}

function handleChoice(choice, btn) {
    if (answeredCorrectly) return; 
    if (!audioCtx) audioCtx = new AudioContext();

    const data = blockQuestions[qIndexInPass];
    
    if (choice === data.correct) {
        answeredCorrectly = true;
        btn.classList.add('correct');
        playSound('correct');
        showFeedbackBox(data.explanation, 'success');
        document.getElementById('btn-next').classList.remove('hidden');
        
        Array.from(document.querySelectorAll('.choice-btn')).forEach(b => {
            if (b !== btn) b.classList.add('wrong');
        });
    } else {
        btn.classList.add('wrong');
        btn.disabled = true; 
        playSound('wrong');
        showFeedbackBox(data.hint, 'warning');
        weakTopics.add(data.topic); // Anotarlo para el resumen final
    }
}

function showFeedbackBox(text, type) {
    const box = document.getElementById('feedback-box');
    box.innerText = text;
    box.className = `feedback-box feedback-${type}`; 
    box.classList.remove('hidden');
}

function nextQuestion() {
    qIndexInPass++;
    
    if (qIndexInPass < blockQuestions.length) {
        // Aún hay preguntas en esta pasada
        renderQuestion();
    } else {
        // Terminó la pasada, evaluar si faltan repeticiones
        currentPass++;
        if (currentPass <= MAX_PASSES) {
            // Siguiente pasada del MISMO bloque (se mezclarán automáticamente)
            startPass();
        } else {
            // Terminaron las 3 pasadas, avanzar al siguiente bloque/nivel
            currentBlockIndex++;
            startBlock();
        }
    }
}

// --- PANTALLA FINAL ---
function showAnalytics() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('header-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');
    
    const list = document.getElementById('weak-topics-list');
    list.innerHTML = '';
    
    if (weakTopics.size === 0) {
        document.getElementById('analysis-msg').innerText = "¡Impresionante! Tienes un dominio absoluto de todos los temas. No hay recomendaciones de repaso.";
    } else {
        document.getElementById('analysis-msg').innerText = "Estos son los temas en los que dudaste (pediste pista o fallaste). Te recomendamos repasarlos:";
        weakTopics.forEach(topic => {
            const li = document.createElement('li');
            li.innerText = `📌 ${topic}`;
            list.appendChild(li);
        });
    }
}

// --- ATAJOS DE TECLADO ---
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz-ui').classList.contains('hidden')) return;
    
    const choices = document.querySelectorAll('.choice-btn');
    
    if (!answeredCorrectly) {
        if (e.key === '1' && choices[0] && !choices[0].disabled) choices[0].click();
        if (e.key === '2' && choices[1] && !choices[1].disabled) choices[1].click();
        if (e.key === '3' && choices[2] && !choices[2].disabled) choices[2].click();
        if (e.key.toLowerCase() === 'h') showTheory();
    } else {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.getElementById('btn-next').click();
        }
    }
});

// Arrancar el juego
initQuiz();