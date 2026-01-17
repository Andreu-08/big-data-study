"use client";
import React, { useState } from 'react';
import { BookOpen, Brain, Check, Moon, Sun } from 'lucide-react';

// --- BASE DE DATOS DEL TEMARIO (CONTENIDO COMPLETO DEL PDF) ---

type ContentSection = {
  subtitle: string;
  text?: string;
  keyPoint?: string;
  details?: string[];
  list?: string[];
  comparison?: {
    left: string;
    right: string;
    leftDesc: string;
    rightDesc: string;
  };
  isCode?: boolean;
  codeBlock?: string;
};

type CourseTheme = {
  id: number;
  title: string;
  content: ContentSection[];
};

const courseData: CourseTheme[] = [
  {
    id: 1,
     title: "1. Introducción",
    content: [
      {
        subtitle: "1. El origen del Big Data: el problema real",
        text: "Big Data surge como respuesta a un problema práctico, no como una moda tecnológica. Durante años, las organizaciones almacenaron datos de forma tradicional: primero en papel, luego en hojas de cálculo y finalmente en bases de datos relacionales. Este modelo funcionaba bien mientras los datos eran pocos, estructurados y generados lentamente.",
        details: [
          "El problema aparece cuando los datos crecen de forma masiva.",
          "Los datos provienen de múltiples fuentes distintas.",
          "Se generan de manera continua.",
          "No tienen una estructura fija."
        ],
        keyPoint: "Idea clave: Big Data aparece cuando los métodos tradicionales no pueden gestionar la cantidad, velocidad y diversidad de los datos."
      },
      {
        subtitle: "2. ¿Qué es realmente Big Data?",
        text: "Big Data no significa únicamente 'muchos datos'. El término hace referencia al conjunto de datos, pero también a las tecnologías, arquitecturas y métodos necesarios para almacenarlos, procesarlos y analizarlos con el objetivo de extraer valor.",
        list: [
          "Como un problema de datos masivos.",
          "Como un conjunto de tecnologías.",
          "Como un modelo de procesamiento distribuido.",
          "Como una base para analítica avanzada e inteligencia artificial."
        ],
        keyPoint: "Frase ancla: Big Data es la capacidad de transformar grandes volúmenes de datos complejos en conocimiento útil."
      },
      {
        subtitle: "3. La naturaleza de los datos",
        text: "Uno de los grandes cambios que introduce Big Data es que no todos los datos son iguales. Los datos estructurados siguen un esquema fijo (filas, columnas, tipos definidos), son fáciles de almacenar y consultar, pero representan solo una parte del mundo real.",
        details: [
          "Estructurados: Esquema fijo (filas/columnas, tipos definidos). Fáciles de almacenar y consultar.",
          "No estructurados: Sin formato predefinido (texto libre, imágenes, audio, vídeo, emails). Son los más abundantes y difíciles de analizar.",
          "Semi-estructurados: Sin esquema rígido pero con cierta organización interna mediante etiquetas (JSON, XML)."
        ],
        keyPoint: "Idea clave: El verdadero reto del Big Data no son los datos estructurados, sino los no estructurados y semi-estructurados."
      },
      {
        subtitle: "4. Las V del Big Data: el marco conceptual",
        text: "Para definir formalmente Big Data se utilizan las llamadas V. Con el tiempo, el modelo original de 3 V se ha ampliado para reflejar mejor la realidad.",
        list: [
          "Volumen: Enorme cantidad de datos generados y almacenados.",
          "Velocidad: Rapidez con la que los datos se generan y deben procesarse (tiempo real).",
          "Variedad: Diversidad de formatos, fuentes y tipos de datos.",
          "Veracidad: Relacionada con la calidad de los datos.",
          "Valor: Los datos solo importan si generan conocimiento útil. LA MÁS IMPORTANTE.",
          "Variabilidad: Los datos y su significado cambian con el tiempo.",
          "Visualización: Clave para interpretar la información.",
          "Vulnerabilidad: Ligada a la seguridad y privacidad de los datos."
        ],
        keyPoint: "Regla mnemotécnica: Sin VALOR, las demás V no sirven de nada."
      },
      {
        subtitle: "5. De dónde provienen los datos",
        text: "Los datos en Big Data no proceden de una única fuente. Su riqueza está en la diversidad de orígenes.",
        list: [
          "Personas: Correos electrónicos, redes sociales, formularios, navegación web.",
          "Máquinas: Sensores, dispositivos IoT, logs de sistemas.",
          "Transacciones: Compras, pagos, reservas.",
          "Analítica digital: Comportamiento de usuarios en entornos online."
        ],
        keyPoint: "Idea clave: Big Data integra datos heterogéneos que antes estaban aislados."
      },
      {
        subtitle: "6. Big Data, Business Intelligence y Data Science",
        text: "El temario distingue claramente entre Business Intelligence y Data Science. BI se centra en analizar el pasado y presente (¿qué ha ocurrido y por qué?). Data Science va más allá usando estadística avanzada, machine learning e IA.",
        comparison: {
          left: "Business Intelligence (BI)",
          right: "Data Science",
          leftDesc: "Mira al PASADO. Análisis descriptivo y diagnóstico. Informes y dashboards.",
          rightDesc: "Mira al FUTURO. Analítica predictiva y prescriptiva. Machine Learning e IA."
        },
        keyPoint: "Comparación mental rápida: BI mira hacia atrás; Data Science mira hacia adelante."
      },
      {
        subtitle: "7. El enfoque de proyecto en Big Data",
        text: "Un proyecto Big Data no empieza por la tecnología, sino por el objetivo. El proceso es ITERATIVO, no lineal: los resultados pueden obligar a volver atrás y mejorar pasos anteriores.",
        list: [
          "1. Definir qué se quiere resolver.",
          "2. Recopilar los datos necesarios.",
          "3. Limpiar y preparar los datos.",
          "4. Explorar para comprenderlos.",
          "5. Analizar mediante modelos.",
          "6. Presentar y automatizar resultados."
        ],
        keyPoint: "Idea clave: En Big Data, el dato sin contexto no tiene valor."
      },
      {
        subtitle: "8. Beneficios y casos de éxito",
        text: "El uso correcto de Big Data permite obtener ventajas competitivas reales. Empresas como Netflix, Amazon o Spotify son ejemplos claros de cómo el análisis masivo de datos se traduce en valor económico.",
        list: [
          "Tomar mejores decisiones basadas en datos.",
          "Anticipar tendencias del mercado.",
          "Optimizar procesos internos.",
          "Personalizar productos y servicios.",
          "Obtener ventajas competitivas sostenibles."
        ]
      },
      {
        subtitle: "9. Idea final del Tema 1",
        text: "Concepto fundamental para recordar en el examen:",
        keyPoint: "Big Data no trata de almacenar datos, sino de convertir datos complejos y masivos en conocimiento útil mediante nuevas tecnologías y enfoques."
      }
    ]
  },
  {
    id: 2,
    title: "2. Arquitectura",
    content: [
      {
        subtitle: "1. Por qué son necesarias las arquitecturas Big Data",
        text: "Una arquitectura Big Data no surge por capricho tecnológico, sino por una necesidad estructural. Cuando el volumen de datos crece de forma masiva y estos se generan a gran velocidad y desde múltiples fuentes, una única máquina deja de ser suficiente.",
        details: [
          "Los datos son demasiado grandes para sistemas tradicionales.",
          "Los datos llegan demasiado rápido para procesarlos de forma convencional.",
          "Los datos son demasiado complejos (múltiples formatos y fuentes).",
          "El sistema debe seguir funcionando incluso cuando parte de la infraestructura falla."
        ],
        keyPoint: "Idea clave: Una arquitectura Big Data existe para garantizar escalabilidad, tolerancia a fallos y procesamiento distribuido."
      },
      {
        subtitle: "2. Principios fundamentales de una arquitectura Big Data",
        text: "Toda arquitectura Big Data debe cumplir una serie de principios básicos que garantizan su funcionamiento correcto en entornos distribuidos.",
        details: [
          "Escalabilidad: Capacidad de crecer añadiendo recursos sin rediseñar. Se prioriza el escalado HORIZONTAL (añadir nodos) sobre el vertical (máquina más potente).",
          "Tolerancia a fallos: En un entorno distribuido los fallos OCURREN. El sistema debe seguir funcionando aunque fallen uno o varios nodos.",
          "Procesamiento distribuido: Las tareas se reparten entre múltiples máquinas para reducir el tiempo de ejecución.",
          "Localidad del dato: Los cálculos deben ejecutarse lo más cerca posible de donde están los datos, evitando transferencias costosas por red."
        ],
        keyPoint: "Frase ancla: En Big Data, los fallos no son una excepción, son la norma."
      },
      {
        subtitle: "3. Almacenamiento: Data Warehouse vs Data Lake",
        text: "Antes de analizar arquitecturas complejas, es fundamental entender cómo y dónde se almacenan los datos. Representan dos filosofías opuestas.",
        comparison: {
          left: "Data Warehouse",
          right: "Data Lake",
          leftDesc: "Datos estructurados y procesados. Schema-on-WRITE (ordenar ANTES de guardar). Control y consistencia, pero poca flexibilidad.",
          rightDesc: "Datos en bruto tal como se generan. Schema-on-READ (ordenar AL LEER). Máxima flexibilidad para análisis avanzados y Data Science."
        },
        keyPoint: "Idea clave: El Data Warehouse organiza los datos antes de guardarlos; el Data Lake los organiza cuando se usan."
      },
      {
        subtitle: "4. Procesamiento: Batch vs Streaming",
        text: "Las arquitecturas Big Data se diferencian también por cómo procesan los datos. Muchas arquitecturas actuales combinan ambos enfoques.",
        comparison: {
          left: "Procesamiento Batch",
          right: "Procesamiento Streaming",
          leftDesc: "Grandes volúmenes acumulados. Inicio y fin definidos. Prioriza PRECISIÓN sobre rapidez. Ideal para análisis históricos.",
          rightDesc: "Datos que llegan de forma continua. Sin final temporal. Resultados casi en TIEMPO REAL. Sacrifica precisión por velocidad."
        },
        keyPoint: "Comparación mental: Batch analiza el pasado; Streaming reacciona al presente."
      },
      {
        subtitle: "5. Arquitectura Lambda",
        text: "La arquitectura Lambda surge para combinar procesamiento batch y streaming en un mismo sistema. Su objetivo es ofrecer baja latencia sin renunciar a la precisión, pero a costa de mayor complejidad.",
        details: [
          "Capa Batch: Almacena datos en bruto de forma inmutable. Recalcula resultados sobre todo el histórico. MÁS PRECISA pero MÁS LENTA.",
          "Capa Speed (Velocidad): Procesa datos recientes en tiempo real. Resultados RÁPIDOS pero menos precisos.",
          "Capa Serving (Servicio): Permite consultar los resultados generados por las dos capas anteriores."
        ],
        keyPoint: "Idea clave de examen: Lambda DUPLICA la lógica de procesamiento para combinar precisión y velocidad."
      },
      {
        subtitle: "6. Arquitectura Kappa",
        text: "La arquitectura Kappa surge como una simplificación de Lambda. En lugar de mantener dos caminos de procesamiento, Kappa propone un único flujo basado exclusivamente en streaming.",
        details: [
          "Todos los datos se tratan como un flujo continuo.",
          "Si es necesario recalcular resultados, se vuelve a procesar el stream completo desde el inicio.",
          "Reduce la complejidad y elimina la duplicación de código.",
          "Facilita el mantenimiento del sistema."
        ],
        keyPoint: "Frase ancla: En Kappa, TODO es un stream."
      },
      {
        subtitle: "7. Arquitectura por capas",
        text: "Otra forma de diseñar sistemas Big Data es la arquitectura por capas, que separa el ciclo de vida del dato en distintas fases bien definidas. Facilita la organización, escalabilidad y mantenimiento.",
        list: [
          "Ingesta de datos: Recepción de datos desde las fuentes.",
          "Transporte y colección: Movimiento de datos dentro del sistema.",
          "Procesamiento: Transformación y análisis de los datos.",
          "Almacenamiento: Persistencia de datos procesados.",
          "Consulta analítica: Acceso a los datos para análisis.",
          "Visualización: Presentación de resultados."
        ],
        keyPoint: "Idea clave: Separar responsabilidades reduce la complejidad del sistema."
      },
      {
        subtitle: "8. Infraestructura: On-Premise vs Cloud",
        text: "Las arquitecturas Big Data pueden desplegarse en distintos entornos según las necesidades del negocio.",
        comparison: {
          left: "On-Premise",
          right: "Cloud",
          leftDesc: "Infraestructura propia (CAPEX). Mayor control pero grandes inversiones iniciales y mantenimiento continuo.",
          rightDesc: "Recursos bajo demanda (OPEX). Escalabilidad, elasticidad y pago por uso. Reduce costes iniciales."
        },
        keyPoint: "Idea clave de examen: El Cloud convierte el coste fijo en coste variable."
      },
      {
        subtitle: "9. Modelos de servicio en la nube",
        text: "En entornos cloud se distinguen tres modelos principales, cada uno con un nivel distinto de control y responsabilidad.",
        list: [
          "IaaS (Infrastructure as a Service): Se alquila la infraestructura; el cliente gestiona el software.",
          "PaaS (Platform as a Service): Plataforma completa para desarrollar y desplegar aplicaciones.",
          "SaaS (Software as a Service): El usuario consume directamente el software sin gestionar infraestructura."
        ]
      },
      {
        subtitle: "10. Idea final del Tema 2",
        text: "Concepto fundamental para recordar en el examen:",
        keyPoint: "Las arquitecturas Big Data existen para procesar datos masivos de forma distribuida, escalable y tolerante a fallos, adaptándose a distintos tipos de procesamiento y despliegue."
      }
    ]
  },
  {
    id: 3,
    title: "3. Hadoop",
    content: [
      {
        subtitle: "1. Hadoop como pieza clave del Big Data",
        text: "Apache Hadoop es la tecnología que hace posible el Big Data en la práctica. Si Big Data define el problema —datos masivos, rápidos y variados—, Hadoop proporciona la infraestructura necesaria para resolverlo.",
        details: [
          "En lugar de usar una sola máquina muy potente, se utilizan muchas máquinas normales trabajando juntas (clúster).",
          "El sistema puede crecer fácilmente añadiendo nodos.",
          "Sigue funcionando aunque algunos nodos fallen."
        ],
        keyPoint: "Idea clave: Hadoop está diseñado para trabajar con grandes volúmenes de datos en entornos distribuidos, asumiendo que los fallos son normales."
      },
      {
        subtitle: "2. Qué es Apache Hadoop",
        text: "Apache Hadoop es un framework open source orientado al almacenamiento y procesamiento distribuido de datos. No es un único programa, sino un ecosistema de componentes que cooperan entre sí.",
        list: [
          "Escalar horizontalmente (añadiendo nodos).",
          "Procesar grandes volúmenes de datos en paralelo.",
          "Recuperarse automáticamente de fallos de hardware.",
          "Utilizar hardware estándar, reduciendo costes."
        ],
        keyPoint: "Frase ancla: Hadoop no es un producto, es una plataforma distribuida."
      },
      {
        subtitle: "3. Características fundamentales de Hadoop",
        text: "Hadoop se apoya en cuatro características esenciales que garantizan su funcionamiento en entornos Big Data.",
        details: [
          "Escalabilidad: Permite ampliar el sistema sin rediseñarlo.",
          "Tolerancia a fallos: El sistema sigue funcionando incluso si fallan nodos.",
          "Fiabilidad: Se logra mediante la replicación automática de los datos.",
          "Portabilidad: Permite ejecutarlo en distintos sistemas y entornos."
        ],
        keyPoint: "Idea clave: Hadoop está pensado para crecer y fallar sin detenerse."
      },
      {
        subtitle: "4. Arquitectura general de Hadoop",
        text: "Hadoop se estructura en cuatro módulos principales, cada uno con una función clara.",
        list: [
          "Hadoop Common: Librerías y utilidades básicas.",
          "HDFS: Sistema de archivos distribuido (almacena).",
          "YARN: Gestor de recursos del clúster (gestiona).",
          "MapReduce: Modelo de procesamiento distribuido (procesa)."
        ],
        keyPoint: "Regla mnemotécnica: Common soporta, HDFS almacena, YARN gestiona y MapReduce procesa."
      },
      {
        subtitle: "5.1 HDFS: Concepto",
        text: "HDFS (Hadoop Distributed File System) es el sistema de archivos de Hadoop. Divide los archivos en bloques grandes (128 MB) y los distribuye por el clúster, replicándolos para garantizar tolerancia a fallos.",
        details: [
          "Bloques de 128 MB distribuidos por el clúster.",
          "Replicación automática (por defecto x3) para tolerancia a fallos.",
          "Filosofía WORM (Write Once, Read Many): los datos se escriben una vez y se leen muchas veces."
        ],
        keyPoint: "Idea clave: HDFS prioriza rendimiento y fiabilidad, no la modificación de datos."
      },
      {
        subtitle: "5.2 HDFS: Nodos",
        text: "HDFS funciona con una arquitectura maestro-esclavo donde cada tipo de nodo tiene una función específica.",
        details: [
          "NameNode (Maestro): Gestiona los METADATOS (estructura y ubicación de bloques). NO guarda datos reales.",
          "DataNode (Esclavo): Almacena los DATOS reales en bloques.",
          "Secondary NameNode: Ayuda a gestionar los metadatos (fsimage + edits). NO es un backup del NameNode."
        ],
        keyPoint: "Idea de examen: El NameNode NO guarda datos, guarda información SOBRE los datos."
      },
      {
        subtitle: "5.3 HDFS: Comandos del examen práctico",
        text: "En el examen práctico, HDFS se usa como un sistema de archivos, pero con comandos propios. Todos empiezan por 'hdfs dfs'.",
        isCode: true,
        codeBlock: `# NAVEGACIÓN
hdfs dfs -ls /ruta

# CREAR DIRECTORIOS
hdfs dfs -mkdir /practicas
hdfs dfs -mkdir -p /datos/entradas

# SUBIR ARCHIVOS (MUY IMPORTANTE)
hdfs dfs -put archivo.txt /practicas
hdfs dfs -put -f archivo.txt /practicas  # Sobrescribir

# VER ARCHIVOS
hdfs dfs -cat /practicas/archivo.txt
hdfs dfs -head /practicas/archivo.txt

# BORRAR
hdfs dfs -rm /practicas/archivo.txt
hdfs dfs -rm -r /practicas`,
        keyPoint: "Regla de oro: Si no empieza por 'hdfs dfs', estás en local, NO en HDFS."
      },
      {
        subtitle: "6. Metadatos en HDFS",
        text: "HDFS mantiene su estado con dos archivos que se combinan durante el arranque para reconstruir el estado actual.",
        details: [
          "fsimage: Imagen completa del sistema de archivos en un momento dado.",
          "edits: Registro de todos los cambios realizados desde la última imagen."
        ],
        keyPoint: "Frase ancla: fsimage es la foto, edits es el historial."
      },
      {
        subtitle: "7. YARN: Gestión de recursos",
        text: "YARN separa la gestión de recursos del procesamiento. Gracias a YARN, Hadoop puede ejecutar distintos tipos de aplicaciones, no solo MapReduce.",
        details: [
          "YARN decide qué nodo ejecuta cada tarea.",
          "Permite ver ejecuciones desde la interfaz web (normalmente localhost:8088).",
          "Gestiona CPU y memoria del clúster."
        ],
        keyPoint: "Idea clave: YARN no ejecuta el código, gestiona QUIÉN lo ejecuta."
      },
      {
        subtitle: "8.1 MapReduce: Concepto",
        text: "MapReduce divide un problema en tareas pequeñas que se ejecutan en paralelo y luego combina los resultados. Aunque hoy existen alternativas más rápidas, MapReduce sigue siendo clave en exámenes.",
        details: [
          "Map: Divide el problema en tareas pequeñas que se procesan en paralelo.",
          "Reduce: Combina los resultados parciales en un resultado final.",
          "YARN decide QUIÉN ejecuta. MapReduce define CÓMO se ejecuta."
        ]
      },
      {
        subtitle: "8.2 MapReduce: Flujo práctico",
        text: "Pasos típicos para ejecutar un trabajo MapReduce en el examen práctico.",
        isCode: true,
        codeBlock: `# 1. COMPILAR
export HADOOP_CLASSPATH=$JAVA_HOME/lib/tools.jar
hadoop com.sun.tools.javac.Main MyJob.java

# 2. CREAR JAR
jar cvf MyJob.jar MyJob*

# 3. EJECUTAR (¡El directorio de salida NO debe existir!)
hadoop jar MyJob.jar MyJob /entrada /salida

# 4. VER RESULTADOS
hdfs dfs -ls /salida
hdfs dfs -cat /salida/part-r-00000`,
        keyPoint: "Idea clave: Ejecutar, comprobar y entender el resultado es más importante que el código."
      },
      {
        subtitle: "9. Errores típicos en el examen práctico",
        text: "Errores comunes que debes evitar durante el examen práctico de Hadoop.",
        list: [
          "Usar comandos Linux (ls, mkdir) en lugar de HDFS (hdfs dfs -ls).",
          "Confundir rutas locales con rutas HDFS.",
          "Ejecutar MapReduce con un directorio de salida que YA EXISTE.",
          "No comprobar los resultados después de cada paso."
        ],
        keyPoint: "Consejo de examen: Siempre verifica cada paso antes de pasar al siguiente."
      },
      {
        subtitle: "10. Listado de comandos para repaso rápido",
        text: "Referencia rápida de los comandos más importantes.",
        isCode: true,
        codeBlock: `# COMANDOS HDFS
hdfs dfs -ls /ruta        # Listar
hdfs dfs -mkdir /dir      # Crear directorio
hdfs dfs -put local hdfs  # Subir archivo
hdfs dfs -get hdfs local  # Descargar archivo
hdfs dfs -cat /archivo    # Ver contenido
hdfs dfs -head /archivo   # Ver inicio
hdfs dfs -rm /archivo     # Borrar archivo
hdfs dfs -rm -r /dir      # Borrar directorio

# COMANDOS MAPREDUCE
export HADOOP_CLASSPATH=$JAVA_HOME/lib/tools.jar
hadoop com.sun.tools.javac.Main Clase.java
jar cvf MiJob.jar Clase*
hadoop jar MiJob.jar Clase /entrada /salida`
      },
      {
        subtitle: "11. Idea final del Tema 3",
        text: "Concepto fundamental para recordar en el examen:",
        keyPoint: "Hadoop es la plataforma que permite almacenar y procesar datos masivos de forma distribuida, y en el examen práctico se demuestra sabiendo usar HDFS y ejecutar procesos."
      }
    ]
  },
  {
    id: 4,
    title: "4. Bases de datos",
    content: [
      {
        subtitle: "1. Por qué existen las bases de datos",
        text: "Las bases de datos aparecen como solución a un problema básico: almacenar información de forma organizada, persistente y accesible. Antes de ellas, los datos se guardaban en archivos planos, lo que provocaba duplicidades, errores y dificultades para consultar la información.",
        list: [
          "Centralizar la información.",
          "Evitar redundancias.",
          "Acceder a los datos de forma eficiente.",
          "Mantener integridad y consistencia."
        ],
        keyPoint: "Idea clave: Una base de datos existe para almacenar datos de forma estructurada y controlada."
      },
      {
        subtitle: "2. Conceptos fundamentales",
        text: "Una base de datos es un conjunto de datos relacionados entre sí, almacenados de forma estructurada. Un SGBD (Sistema Gestor de Bases de Datos) es el software que permite crear, gestionar y consultar esa base de datos.",
        list: [
          "MySQL: SGBD relacional open source muy popular.",
          "Oracle: SGBD empresarial de alto rendimiento.",
          "PostgreSQL: SGBD relacional avanzado open source."
        ],
        keyPoint: "Frase ancla: La base de datos es el dato; el SGBD es quien lo gestiona."
      },
      {
        subtitle: "3.1 Bases de datos relacionales",
        text: "El modelo relacional organiza la información en tablas formadas por filas (registros) y columnas (atributos). Las tablas se relacionan entre sí mediante claves.",
        details: [
          "Esquema fijo: La estructura se define antes de insertar datos.",
          "Datos estructurados: Formato predefinido y consistente.",
          "Lenguaje SQL: Estándar para consultas y manipulación.",
          "Alta consistencia: Garantías ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)."
        ],
        keyPoint: "Idea clave: El modelo relacional prioriza el orden y la consistencia."
      },
      {
        subtitle: "3.2 Bases de datos NoSQL",
        text: "Las bases de datos NoSQL surgen para responder a las necesidades del Big Data. No significa 'sin estructura', sino 'sin esquema fijo'.",
        details: [
          "No usan un esquema rígido.",
          "Escalan horizontalmente con facilidad.",
          "Manejan grandes volúmenes de datos.",
          "Soportan datos no estructurados."
        ],
        list: [
          "Clave-valor: Redis, DynamoDB.",
          "Documentos: MongoDB, CouchDB.",
          "Columnas: Cassandra, HBase.",
          "Grafos: Neo4j, Amazon Neptune."
        ]
      },
      {
        subtitle: "3.3 SQL vs NoSQL",
        text: "Comparación fundamental para el examen.",
        comparison: {
          left: "SQL (Relacional)",
          right: "NoSQL",
          leftDesc: "Estructura y consistencia. Esquema fijo. Escalado vertical. ACID.",
          rightDesc: "Flexibilidad y escalabilidad. Sin esquema fijo. Escalado horizontal. BASE."
        }
      },
      {
        subtitle: "4. Esquema y estructura de los datos",
        text: "El esquema define cómo se organizan los datos. Este concepto es fundamental para entender la diferencia entre bases de datos tradicionales y Big Data.",
        comparison: {
          left: "Schema-on-write",
          right: "Schema-on-read",
          leftDesc: "El esquema se define ANTES de insertar datos. Cambiarlo es costoso. Control y consistencia.",
          rightDesc: "El esquema se aplica AL LEER los datos. Mayor flexibilidad. Exploración y análisis."
        },
        keyPoint: "Idea clave de examen: Schema-on-write CONTROLA; schema-on-read EXPLORA."
      },
      {
        subtitle: "5. Lenguajes de consulta: SQL",
        text: "SQL (Structured Query Language) es el lenguaje estándar para trabajar con bases de datos relacionales. Se divide en varios tipos de comandos.",
        list: [
          "DDL (Data Definition Language): Definición de estructuras - CREATE, DROP, ALTER.",
          "DML (Data Manipulation Language): Manipulación de datos - INSERT, UPDATE, DELETE.",
          "DQL (Data Query Language): Consultas - SELECT."
        ],
        keyPoint: "Idea clave: SQL no es solo SELECT, es definición, manipulación y consulta."
      },
      {
        subtitle: "6. Bases de datos y Big Data",
        text: "Las bases de datos tradicionales NO desaparecen con Big Data, pero NO son suficientes por sí solas. Big Data introduce nuevas formas de almacenamiento y procesamiento, complementando a las BBDD tradicionales.",
        details: [
          "Limitación: Escalado vertical (máquinas más potentes, no más máquinas).",
          "Limitación: Dificultad para manejar datos no estructurados.",
          "Limitación: Coste elevado al crecer."
        ],
        keyPoint: "Idea clave: Big Data AMPLÍA el concepto de base de datos, no lo sustituye."
      },
      {
        subtitle: "7. Enfoque práctico en el examen",
        text: "En el examen práctico, este tema no suele pedir crear una base de datos clásica, pero sí entender conceptos clave que luego se aplican en Hive.",
        list: [
          "Qué es una tabla y cómo se estructura.",
          "Qué es un esquema y por qué importa.",
          "Diferencia entre SQL y NoSQL.",
          "Qué implica schema-on-write vs schema-on-read."
        ],
        keyPoint: "Muy típico: Preguntas teórico-prácticas que conectan BBDD → Hive."
      },
      {
        subtitle: "8. Errores típicos de examen",
        text: "Errores comunes que debes evitar en preguntas sobre bases de datos.",
        list: [
          "Pensar que Big Data elimina SQL (lo complementa).",
          "Confundir base de datos con SGBD.",
          "Creer que NoSQL significa 'sin estructura' (significa sin esquema FIJO).",
          "No entender el concepto de esquema."
        ],
        keyPoint: "Regla de examen: NoSQL no significa 'sin orden', significa 'sin esquema fijo'."
      },
      {
        subtitle: "9. Conexión directa con Hive (Tema 5)",
        text: "Este tema es la base directa de Hive. Los conceptos aquí aprendidos se aplican directamente.",
        details: [
          "Tablas → Tablas Hive.",
          "SQL → HiveQL (muy similar).",
          "Schema → Definición de tablas en Hive.",
          "Datos estructurados → HDFS + Hive."
        ],
        keyPoint: "Idea puente: Hive es la adaptación del modelo de base de datos al entorno Big Data."
      },
      {
        subtitle: "10. Idea final del Tema 4",
        text: "Concepto fundamental para recordar en el examen:",
        keyPoint: "Las bases de datos organizan los datos; Big Data las amplía para manejar volumen, variedad y escalabilidad."
      }
    ]
  },
  {
    id: 5,
    title: "5. Hive",
    content: [
      {
        subtitle: "1. Por qué aparece Hive",
        text: "Hive surge para resolver un problema concreto: Hadoop y HDFS son muy potentes para almacenar y procesar datos, pero no son cómodos para consultar información. Trabajar directamente con MapReduce implica programar en Java, mucha complejidad y poco enfoque analítico.",
        details: [
          "Hive es una capa de abstracción sobre Hadoop.",
          "Permite consultar datos en HDFS como si fueran tablas.",
          "Utiliza un lenguaje similar a SQL (HiveQL)."
        ],
        keyPoint: "Idea clave: Hive permite consultar datos en HDFS sin programar MapReduce."
      },
      {
        subtitle: "2. Qué es Hive",
        text: "Apache Hive es un sistema de data warehouse construido sobre Hadoop. Permite definir tablas, ejecutar consultas tipo SQL y traduce esas consultas a jobs de procesamiento (MapReduce, Tez o Spark).",
        details: [
          "NO es una base de datos tradicional.",
          "No está orientado a transacciones.",
          "Está pensado para análisis por lotes (batch).",
          "Prioriza grandes volúmenes de datos."
        ],
        keyPoint: "Frase ancla: Hive NO ejecuta SQL, lo TRADUCE a procesamiento distribuido."
      },
      {
        subtitle: "3. Arquitectura de Hive",
        text: "Hive se compone de varios elementos que trabajan juntos para procesar consultas sobre datos distribuidos.",
        details: [
          "Driver: Gestiona la sesión del usuario y coordina la ejecución de consultas.",
          "Metastore: Almacena los metadatos (tablas, columnas, tipos, ubicaciones en HDFS).",
          "Motor de ejecución: Lanza los jobs sobre Hadoop (MapReduce, Tez, Spark).",
          "Interfaces: Hive CLI, Beeline u otras herramientas externas."
        ],
        keyPoint: "Idea clave: Hive separa los DATOS (HDFS) de los METADATOS (Metastore)."
      },
      {
        subtitle: "4. Metastore: el corazón de Hive",
        text: "El Metastore es un repositorio central de metadatos. NO guarda datos, solo información sobre ellos (esquema, ubicación, tipos).",
        list: [
          "Modo Embebido: Sencillo, para pruebas.",
          "Modo Local: Metadatos en BBDD local.",
          "Modo Remoto: Metadatos compartidos (modo profesional)."
        ],
        keyPoint: "Conexión con Tema 4: El Metastore equivale al esquema de una base de datos."
      },
      {
        subtitle: "5.1 Tablas internas (Managed Tables)",
        text: "En una tabla interna, Hive gestiona tanto los datos como los metadatos. Los datos se almacenan en el warehouse de Hive.",
        details: [
          "Hive controla datos Y metadatos.",
          "Los datos se guardan en /user/hive/warehouse/.",
          "Al hacer DROP TABLE, se BORRAN los datos."
        ],
        keyPoint: "Idea clave de examen: Borrar tabla interna = BORRAR DATOS."
      },
      {
        subtitle: "5.2 Tablas externas (External Tables)",
        text: "En una tabla externa, Hive solo gestiona los metadatos. Los datos están fuera del control de Hive, en cualquier ubicación de HDFS.",
        details: [
          "Hive solo controla metadatos.",
          "Los datos permanecen en su ubicación original.",
          "Al hacer DROP TABLE, los datos PERMANECEN."
        ],
        keyPoint: "Idea clave de examen: Borrar tabla externa ≠ borrar datos."
      },
      {
        subtitle: "5.3 Comparación: Internas vs Externas",
        text: "La diferencia más importante del examen práctico.",
        comparison: {
          left: "Tabla Interna (Managed)",
          right: "Tabla Externa (External)",
          leftDesc: "Hive controla datos y metadatos. DROP TABLE BORRA los datos. Datos en warehouse.",
          rightDesc: "Hive solo controla metadatos. DROP TABLE MANTIENE los datos en HDFS. Más seguro."
        }
      },
      {
        subtitle: "6. Tipos de datos en Hive",
        text: "Hive soporta tipos simples y tipos complejos para modelar datos ricos.",
        list: [
          "Simples: INT, BIGINT, FLOAT, DOUBLE, STRING, BOOLEAN, TIMESTAMP.",
          "ARRAY: Listas ordenadas de elementos.",
          "MAP: Pares clave-valor.",
          "STRUCT: Estructuras con campos nombrados."
        ],
        keyPoint: "Idea clave: Hive permite trabajar con datos complejos sin desnormalizar."
      },
      {
        subtitle: "7. HiveQL: el lenguaje de Hive",
        text: "HiveQL es un lenguaje similar a SQL, pero adaptado a Big Data. No está pensado para operaciones rápidas, sino para consultas analíticas sobre grandes volúmenes.",
        list: [
          "DDL: Definición de estructuras (CREATE, DROP, ALTER).",
          "DML: Carga y manipulación de datos (LOAD, INSERT).",
          "SELECT: Consultas analíticas."
        ]
      },
      {
        subtitle: "8. Hive en el examen práctico",
        text: "En el examen práctico, Hive suele evaluarse a través de tareas específicas. No se busca complejidad, sino entender el flujo completo.",
        list: [
          "Crear tablas (internas y externas).",
          "Cargar datos desde local o HDFS.",
          "Ejecutar consultas SELECT.",
          "Relacionar tablas con JOIN."
        ]
      },
      {
        subtitle: "9.1 Comandos: Bases de datos",
        text: "Comandos para gestionar bases de datos en Hive.",
        isCode: true,
        codeBlock: `-- Ver bases de datos disponibles
SHOW DATABASES;

-- Crear base de datos
CREATE DATABASE mibase;

-- Usar una base de datos
USE mibase;

-- Ver tablas de la base de datos actual
SHOW TABLES;`
      },
      {
        subtitle: "9.2 Comandos: Crear tablas",
        text: "Sintaxis para crear tablas internas y externas.",
        isCode: true,
        codeBlock: `-- Tabla INTERNA (Managed)
CREATE TABLE empleados (
  nombre STRING,
  edad INT,
  salario DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ',';

-- Tabla EXTERNA (Recomendado para examen)
CREATE EXTERNAL TABLE empleados_ext (
  nombre STRING,
  edad INT,
  salario DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LOCATION '/datos/empleados';`
      },
      {
        subtitle: "9.3 Comandos: Cargar datos",
        text: "Formas de cargar datos en tablas Hive.",
        isCode: true,
        codeBlock: `-- Cargar desde sistema LOCAL (copia a HDFS)
LOAD DATA LOCAL INPATH '/home/usuario/empleados.csv'
INTO TABLE empleados;

-- Cargar desde HDFS (mueve el archivo)
LOAD DATA INPATH '/hdfs/datos/empleados.csv'
INTO TABLE empleados;

-- IMPORTANTE: LOCAL = copia, sin LOCAL = mueve`,
        keyPoint: "Recuerda: LOCAL indica sistema local → HDFS (copia). Sin LOCAL, mueve el archivo."
      },
      {
        subtitle: "9.4 Comandos: Consultas básicas",
        text: "Consultas SELECT fundamentales para el examen.",
        isCode: true,
        codeBlock: `-- Ver todos los registros
SELECT * FROM empleados;

-- Limitar resultados
SELECT * FROM empleados LIMIT 5;

-- Filtrar con WHERE
SELECT nombre, salario FROM empleados WHERE salario > 30000;

-- Contar registros (¡IMPORTANTE para verificar carga!)
SELECT COUNT(*) FROM empleados;

-- Si COUNT(*) da 0, algo cargaste mal`
      },
      {
        subtitle: "9.5 Comandos: JOINs",
        text: "Unir tablas es muy típico en el examen práctico.",
        isCode: true,
        codeBlock: `-- JOIN básico entre dos tablas
SELECT e.nombre, d.departamento
FROM empleados e
JOIN departamentos d
ON e.id = d.id;

-- LEFT JOIN (mantiene todos los de la izquierda)
SELECT e.nombre, d.departamento
FROM empleados e
LEFT JOIN departamentos d
ON e.id = d.id;`
      },
      {
        subtitle: "10. Errores típicos en el examen",
        text: "Errores comunes que debes evitar durante el examen práctico de Hive.",
        list: [
          "Confundir tablas internas con externas (DROP borra datos en internas).",
          "Pensar que Hive es transaccional (es para análisis batch).",
          "Olvidar que Hive trabaja sobre HDFS (los datos deben estar ahí).",
          "No entender qué se borra al hacer DROP TABLE.",
          "Olvidar ROW FORMAT DELIMITED (todo sale NULL).",
          "No verificar con COUNT(*) si los datos cargaron."
        ],
        keyPoint: "Regla de examen: Hive CONSULTA datos, no los modifica como una BBDD clásica."
      },
      {
        subtitle: "11. Conexión final: Hadoop + BBDD + Hive",
        text: "Hive es el punto de unión entre el mundo de las bases de datos tradicionales y el ecosistema Big Data.",
        details: [
          "Hadoop aporta el almacenamiento y procesamiento distribuido.",
          "Las BBDD aportan el modelo tabular y SQL.",
          "Hive une ambos mundos."
        ],
        keyPoint: "Idea puente final: Hive es el SQL del Big Data sobre Hadoop."
      },
      {
        subtitle: "12. Idea final del Tema 5",
        text: "Concepto fundamental para recordar en el examen:",
        keyPoint: "Hive permite analizar grandes volúmenes de datos en Hadoop usando un lenguaje similar a SQL, separando datos y metadatos."
      }
    ]
  },
  {
    id: 6,
    title: "6. Práctica",
    content: [
      {
        subtitle: "0. Flujo general del examen",
        text: "Si sigues este orden NUNCA te pierdes. Es la clave para aprobar el examen práctico.",
        list: [
          "1️⃣ VER DATOS: Explora qué hay en HDFS.",
          "2️⃣ PREPARAR HDFS: Crea directorios y sube archivos.",
          "3️⃣ CREAR TABLA: Define la estructura en Hive.",
          "4️⃣ CARGAR DATOS: Conecta la tabla con los datos.",
          "5️⃣ CONSULTAR: Ejecuta las consultas del enunciado."
        ],
        keyPoint: "Flujo: Ver datos → Preparar HDFS → Crear tabla → Cargar datos → Consultar"
      },
      {
        subtitle: "1.1 HDFS: Ver qué hay",
        text: "SIEMPRE empieza aquí. Antes de hacer nada, mira qué hay en HDFS.",
        isCode: true,
        codeBlock: `# Ver raíz de HDFS
hdfs dfs -ls /

# Si el enunciado dice "trabaja en /practicas"
hdfs dfs -ls /practicas

# Ver contenido de un archivo (comprobar separador)
hdfs dfs -head /practicas/fichero.csv`
      },
      {
        subtitle: "1.2 HDFS: Crear directorio",
        text: "Solo si el enunciado lo pide o necesitas organizar los datos.",
        isCode: true,
        codeBlock: `# Crear directorio (con -p crea padres si no existen)
hdfs dfs -mkdir -p /practicas

# Verificar que se creó
hdfs dfs -ls /`
      },
      {
        subtitle: "1.3 HDFS: Subir datos (CASI SIEMPRE)",
        text: "Paso crítico. Los datos deben estar en HDFS antes de usarlos en Hive.",
        isCode: true,
        codeBlock: `# Subir archivo a HDFS (-f sobrescribe si existe)
hdfs dfs -put -f fichero.csv /practicas/

# VERIFICAR SIEMPRE que el archivo está
hdfs dfs -ls /practicas`,
        keyPoint: "Regla de oro: NUNCA pases a Hive sin comprobar que el fichero está en HDFS."
      },
      {
        subtitle: "1.4 HDFS: Comprobar separador",
        text: "Antes de crear la tabla, mira qué separador usa el CSV (coma, punto y coma, tabulador).",
        isCode: true,
        codeBlock: `# Ver las primeras líneas del archivo
hdfs dfs -head /practicas/fichero.csv

# Si ves: nombre,edad,salario → separador es ','
# Si ves: nombre;edad;salario → separador es ';'
# Si ves espacios grandes → separador es '\\t' (tabulador)`
      },
      {
        subtitle: "2. Entrar en Hive",
        text: "Una vez los datos están en HDFS, entra en Hive para crear tablas y consultar.",
        isCode: true,
        codeBlock: `# Desde terminal Ubuntu
hive

# Verás el prompt:
# hive>

# Ver bases de datos disponibles
SHOW DATABASES;

# Si el examen pide una base concreta
USE examen;

# Si no dice nada, trabaja en 'default' (no pasa nada)

# Ver tablas existentes
SHOW TABLES;`
      },
      {
        subtitle: "3.1 Crear tabla: ¿INTERNA o EXTERNA?",
        text: "Decisión crítica. Elige mal y puedes perder los datos.",
        comparison: {
          left: "Usar EXTERNA cuando...",
          right: "Usar INTERNA cuando...",
          leftDesc: "Los datos YA están en HDFS. Te dicen 'no borrar datos'. Es lo MÁS SEGURO.",
          rightDesc: "Cargas desde LOCAL. No especifican nada. Quieres que Hive gestione todo."
        },
        keyPoint: "En caso de duda, usa EXTERNA. Es más seguro."
      },
      {
        subtitle: "3.2 Plantilla: Tabla INTERNA",
        text: "Memoriza esta estructura. Hive gestiona datos y metadatos.",
        isCode: true,
        codeBlock: `CREATE TABLE tabla (
  col1 TIPO,
  col2 TIPO,
  col3 TIPO
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ',';

-- Ejemplo real:
CREATE TABLE empleados (
  nombre STRING,
  edad INT,
  salario DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ',';`
      },
      {
        subtitle: "3.3 Plantilla: Tabla EXTERNA (MUY TÍPICA)",
        text: "Memoriza esta estructura. LOCATION apunta al DIRECTORIO, no al archivo.",
        isCode: true,
        codeBlock: `CREATE EXTERNAL TABLE tabla (
  col1 TIPO,
  col2 TIPO,
  col3 TIPO
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LOCATION '/practicas';

-- Ejemplo real:
CREATE EXTERNAL TABLE empleados_ext (
  nombre STRING,
  edad INT,
  salario DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
LOCATION '/practicas/empleados';`,
        keyPoint: "LOCATION siempre apunta al DIRECTORIO, NO al fichero."
      },
      {
        subtitle: "3.4 Comprobar estructura de tabla",
        text: "Verifica que la tabla se creó correctamente antes de cargar datos.",
        isCode: true,
        codeBlock: `-- Ver estructura de la tabla
DESCRIBE tabla;

-- Ver información extendida
DESCRIBE EXTENDED tabla;

-- Ver todas las tablas
SHOW TABLES;`
      },
      {
        subtitle: "4.1 Cargar datos: Desde HDFS",
        text: "Si los datos YA están en HDFS, NO uses LOCAL. El archivo se MUEVE.",
        isCode: true,
        codeBlock: `-- Datos YA en HDFS → NO uses LOCAL
LOAD DATA INPATH '/practicas/fichero.csv'
INTO TABLE tabla;

-- ⚠️ IMPORTANTE: Esto MUEVE el archivo, no lo copia
-- El archivo desaparece de /practicas/`,
        keyPoint: "Sin LOCAL = el archivo se MUEVE a la tabla."
      },
      {
        subtitle: "4.2 Cargar datos: Desde LOCAL",
        text: "Si los datos están en el sistema de archivos local (no HDFS), USA LOCAL.",
        isCode: true,
        codeBlock: `-- Datos en LOCAL → USA LOCAL
LOAD DATA LOCAL INPATH '/home/hadoop/fichero.csv'
INTO TABLE tabla;

-- ⚠️ IMPORTANTE: Esto COPIA el archivo a HDFS
-- El archivo original permanece en local`,
        keyPoint: "Con LOCAL = el archivo se COPIA a HDFS."
      },
      {
        subtitle: "4.3 Comprobación OBLIGATORIA",
        text: "SIEMPRE verifica que los datos cargaron correctamente. Si da 0, algo está mal.",
        isCode: true,
        codeBlock: `-- COMPROBACIÓN OBLIGATORIA después de cargar
SELECT COUNT(*) FROM tabla;

-- Si da 0, revisa:
-- 1. ¿La ruta era correcta?
-- 2. ¿El separador es el correcto?
-- 3. ¿Los tipos coinciden con los datos?

-- Ver algunos registros para verificar
SELECT * FROM tabla LIMIT 5;`,
        keyPoint: "Si COUNT(*) da 0 → algo está mal (ruta, separador, tipos)."
      },
      {
        subtitle: "5.1 Consultas: Orden de prueba",
        text: "Siempre prueba en este orden antes de hacer consultas complejas.",
        isCode: true,
        codeBlock: `-- 1. Primero, verifica que hay datos
SELECT COUNT(*) FROM tabla;

-- 2. Luego, mira algunos registros
SELECT * FROM tabla LIMIT 5;

-- 3. Ya puedes hacer lo que pida el enunciado
SELECT col1, col2 FROM tabla WHERE condicion;
SELECT col1, COUNT(*) FROM tabla GROUP BY col1;
SELECT * FROM tabla ORDER BY col1;`
      },
      {
        subtitle: "5.2 Consultas: JOINs (MUY TÍPICO)",
        text: "Unir dos tablas es muy común en el examen. Revisa tipos si no hay resultados.",
        isCode: true,
        codeBlock: `-- JOIN básico
SELECT a.col, b.col
FROM tabla1 a
JOIN tabla2 b
ON a.id = b.id;

-- Si no hay resultados, revisa:
-- 1. ¿Los tipos coinciden? (INT vs STRING)
SELECT DISTINCT id FROM tabla1 LIMIT 10;
SELECT DISTINCT id FROM tabla2 LIMIT 10;

-- LEFT JOIN (mantiene todos de la izquierda)
SELECT a.col, b.col
FROM tabla1 a
LEFT JOIN tabla2 b
ON a.id = b.id;`
      },
      {
        subtitle: "6. Borrar y rehacer (SIN MIEDO)",
        text: "Si algo sale mal, puedes borrar y empezar de nuevo. Pero cuidado con las internas.",
        isCode: true,
        codeBlock: `-- Borrar tabla
DROP TABLE tabla;

-- ⚠️ Si es INTERNA → BORRA los datos
-- ⚠️ Si es EXTERNA → NO borra los datos (solo metadatos)

-- Borrar base de datos (debe estar vacía)
DROP DATABASE mibase;

-- Forzar borrado de base de datos con tablas
DROP DATABASE mibase CASCADE;`
      },
      {
        subtitle: "7. Errores típicos del examen",
        text: "Lista de errores que DEBES evitar. Repásalos antes del examen.",
        list: [
          "Usar comandos Linux (ls) en lugar de HDFS (hdfs dfs -ls).",
          "No verificar que el archivo está en HDFS antes de ir a Hive.",
          "Olvidar ROW FORMAT DELIMITED → todo sale NULL.",
          "Usar el separador incorrecto (, vs ; vs \\t).",
          "LOCATION apuntando al archivo en vez del directorio.",
          "Borrar tabla INTERNA sin querer → pierdes los datos.",
          "No hacer SELECT COUNT(*) para verificar la carga.",
          "JOIN sin resultados por tipos diferentes (INT vs STRING)."
        ]
      },
      {
        subtitle: "8. Tipos de datos más usados",
        text: "Referencia rápida de los tipos que usarás en el examen.",
        list: [
          "STRING: Texto (nombre, dirección, descripción).",
          "INT: Números enteros (edad, cantidad, id).",
          "DOUBLE: Números decimales (precio, salario, porcentaje).",
          "BIGINT: Enteros grandes (timestamps, ids largos).",
          "BOOLEAN: Verdadero/Falso (activo, verificado)."
        ]
      },
      {
        subtitle: "9. Resumen de comandos HDFS",
        text: "Todos los comandos HDFS que necesitas para el examen.",
        isCode: true,
        codeBlock: `hdfs dfs -ls /ruta        # Listar contenido
hdfs dfs -mkdir -p /dir   # Crear directorio
hdfs dfs -put -f f /dest  # Subir archivo
hdfs dfs -get /hdfs /loc  # Descargar archivo
hdfs dfs -cat /archivo    # Ver contenido completo
hdfs dfs -head /archivo   # Ver primeras líneas
hdfs dfs -rm /archivo     # Borrar archivo
hdfs dfs -rm -r /dir      # Borrar directorio`
      },
      {
        subtitle: "10. Resumen de comandos Hive",
        text: "Todos los comandos Hive que necesitas para el examen.",
        isCode: true,
        codeBlock: `SHOW DATABASES;           -- Ver bases de datos
USE database;             -- Usar base de datos
SHOW TABLES;              -- Ver tablas
DESCRIBE tabla;           -- Ver estructura

CREATE TABLE / CREATE EXTERNAL TABLE  -- Crear
LOAD DATA [LOCAL] INPATH '...'        -- Cargar
SELECT * FROM tabla;                  -- Consultar
DROP TABLE tabla;                     -- Borrar`
      },
      {
        subtitle: "11. Checklist pre-examen",
        text: "Revisa esto 5 minutos antes de empezar el examen.",
        list: [
          "✅ Sé el flujo: Ver → Preparar → Crear → Cargar → Consultar.",
          "✅ Todos los comandos HDFS empiezan por 'hdfs dfs'.",
          "✅ Siempre verifico con -ls que los archivos están.",
          "✅ Miro el separador con -head antes de crear la tabla.",
          "✅ EXTERNA = datos seguros. INTERNA = datos en riesgo.",
          "✅ LOCATION apunta a directorio, no a archivo.",
          "✅ LOCAL = copia desde local. Sin LOCAL = mueve desde HDFS.",
          "✅ Siempre hago SELECT COUNT(*) después de cargar."
        ],
        keyPoint: "Si sigues el flujo y verificas cada paso, aprobarás."
      }
    ]
  }
];

// --- FUNCIÓN DE RESALTADO DE SINTAXIS ---
function highlightCode(code: string, isDark: boolean): React.ReactNode {
  const lines = code.split('\n');
  
  return lines.map((line, lineIdx) => {
    // Colores según el modo
    const colors = isDark ? {
      comment: 'text-slate-500',
      keyword: 'text-purple-400',
      command: 'text-cyan-400',
      string: 'text-amber-300',
      path: 'text-green-400',
      flag: 'text-orange-400',
      number: 'text-blue-400',
      operator: 'text-pink-400',
      default: 'text-slate-300'
    } : {
      comment: 'text-slate-500',
      keyword: 'text-purple-600',
      command: 'text-blue-700',
      string: 'text-amber-700',
      path: 'text-green-700',
      flag: 'text-orange-600',
      number: 'text-blue-600',
      operator: 'text-pink-600',
      default: 'text-slate-200'
    };

    // Detectar tipo de línea
    const trimmedLine = line.trim();
    
    // Comentarios (# o --)
    if (trimmedLine.startsWith('#') || trimmedLine.startsWith('--')) {
      return <span key={lineIdx} className={colors.comment}>{line}{'\n'}</span>;
    }

    // Token key para React keys
    let tokenKey = 0;

    // Función para aplicar resaltado
    const highlightPart = (text: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      
      // Combinar todas las regex en un patrón
      const combinedRegex = /(\b(?:SELECT|FROM|WHERE|JOIN|ON|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|LIMIT|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|DROP|TABLE|DATABASE|EXTERNAL|IF EXISTS|IF NOT EXISTS|SHOW|DESCRIBE|USE|LOAD DATA|LOCAL|INPATH|OVERWRITE|AS|AND|OR|NOT|IN|LIKE|BETWEEN|COUNT|SUM|AVG|MAX|MIN|DISTINCT|HAVING|UNION|ALL|ROW FORMAT|DELIMITED|FIELDS TERMINATED BY|LINES TERMINATED BY|STORED AS|LOCATION|TBLPROPERTIES|PARTITIONED BY)\b)|(\b(?:hdfs|dfs|hadoop|hive|beeline|mkdir|ls|cat|head|tail|put|get|rm|cp|mv|chmod|chown|du|df)\b)|(\s-[a-zA-Z]+\b)|(\/[\w\-\.\/]+)|(['"][^'"]*['"])|(\b\d+\b)/gi;
      
      let match;
      while ((match = combinedRegex.exec(text)) !== null) {
        // Añadir texto antes del match
        if (match.index > lastIndex) {
          parts.push(<span key={tokenKey++} className={colors.default}>{text.slice(lastIndex, match.index)}</span>);
        }
        
        // Determinar el tipo de match y aplicar color
        if (match[1]) { // SQL keyword
          parts.push(<span key={tokenKey++} className={colors.keyword}>{match[0]}</span>);
        } else if (match[2]) { // HDFS command
          parts.push(<span key={tokenKey++} className={colors.command}>{match[0]}</span>);
        } else if (match[3]) { // Flag
          parts.push(<span key={tokenKey++} className={colors.flag}>{match[0]}</span>);
        } else if (match[4]) { // Path
          parts.push(<span key={tokenKey++} className={colors.path}>{match[0]}</span>);
        } else if (match[5]) { // String
          parts.push(<span key={tokenKey++} className={colors.string}>{match[0]}</span>);
        } else if (match[6]) { // Number
          parts.push(<span key={tokenKey++} className={colors.number}>{match[0]}</span>);
        }
        
        lastIndex = match.index + match[0].length;
      }
      
      // Añadir el resto del texto
      if (lastIndex < text.length) {
        parts.push(<span key={tokenKey++} className={colors.default}>{text.slice(lastIndex)}</span>);
      }
      
      return parts.length > 0 ? parts : [<span key={tokenKey++} className={colors.default}>{text}</span>];
    };

    return <span key={lineIdx}>{highlightPart(line)}{'\n'}</span>;
  });
}

// --- COMPONENTE PRINCIPAL ---
export default function BigDataStudyApp() {
  const [activeTab, setActiveTab] = useState('study'); // study, cheat, flashcards
  const [activeTheme, setActiveTheme] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState<'all' | 'theme' | 'hard'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedThemeForStudy, setSelectedThemeForStudy] = useState(0);
  const [hardCards, setHardCards] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    // Inicialización en cliente
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bigdata-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Guardar preferencia cuando cambia
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('bigdata-theme', newMode ? 'dark' : 'light');
  };

  // Generar Flashcards completas desde los datos con tema incluido
  const allFlashcards = courseData.flatMap((theme, themeIdx) => 
    theme.content
      .filter(item => item.keyPoint || item.comparison)
      .map(item => ({
        themeIdx,
        themeName: theme.title,
        question: item.subtitle || "Concepto Clave",
        answer: item.keyPoint ? item.keyPoint.replace("Idea clave:", "").replace("Frase ancla:", "").replace("Regla mnemotécnica:", "").replace("Comparación mental:", "").replace("Idea de examen:", "").replace("Consejo de examen:", "").replace("Regla de examen:", "").replace("Idea puente:", "").replace("Conexión con Tema 4:", "").replace("Idea puente final:", "").trim() : 
                item.comparison ? `${item.comparison.left}: ${item.comparison.leftDesc}\n\nvs\n\n${item.comparison.right}: ${item.comparison.rightDesc}` : "",
        type: item.comparison ? 'comparison' : 'concept'
      }))
  );

  // Filtrar tarjetas según el modo
  const getFilteredCards = () => {
    if (studyMode === 'theme') {
      return allFlashcards.filter(card => card.themeIdx === selectedThemeForStudy);
    } else if (studyMode === 'hard') {
      return hardCards.map(idx => allFlashcards[idx]).filter(Boolean);
    }
    return allFlashcards;
  };

  const filteredCards = getFilteredCards();

  // Iniciar sesión de estudio
  const startSession = () => {
    const cards = getFilteredCards();
    const indices = cards.map((_, i) => i);
    // Mezclar tarjetas usando Fisher-Yates shuffle
    const shuffleArray = (arr: number[]) => {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
        const j = randomValue % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledCards(shuffleArray(indices));
    setCurrentCardIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setShowFlashcardAnswer(false);
    setSessionStarted(true);
  };

  // Reiniciar sesión
  const resetSession = () => {
    setSessionStarted(false);
    setShowFlashcardAnswer(false);
    setCurrentCardIndex(0);
  };

  // Marcar como correcta
  const markCorrect = () => {
    setCorrectCount(prev => prev + 1);
    // Remover de difíciles si estaba
    const realIndex = getRealCardIndex();
    setHardCards(prev => prev.filter(idx => idx !== realIndex));
    nextCard();
  };

  // Marcar como incorrecta
  const markIncorrect = () => {
    setIncorrectCount(prev => prev + 1);
    // Añadir a difíciles
    const realIndex = getRealCardIndex();
    if (!hardCards.includes(realIndex)) {
      setHardCards(prev => [...prev, realIndex]);
    }
    nextCard();
  };

  // Obtener índice real de la tarjeta actual
  const getRealCardIndex = () => {
    if (studyMode === 'hard') {
      return hardCards[shuffledCards[currentCardIndex]];
    } else if (studyMode === 'theme') {
      const themeCards = allFlashcards.filter(card => card.themeIdx === selectedThemeForStudy);
      const cardInTheme = themeCards[shuffledCards[currentCardIndex]];
      return allFlashcards.indexOf(cardInTheme);
    }
    return shuffledCards[currentCardIndex];
  };

  const nextCard = () => {
    setShowFlashcardAnswer(false);
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Fin de la sesión
      setSessionStarted(false);
    }
  };

  const currentCard = sessionStarted && shuffledCards.length > 0 
    ? filteredCards[shuffledCards[currentCardIndex]] 
    : null;

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${darkMode ? 'dark-mode bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Header Responsive */}
      <header className={`sticky top-0 z-30 border-b transition-colors duration-300 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="max-w-5xl mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
          <h1 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
            <Brain className="w-5 h-5 sm:w-6 sm:h-6" /> <span className="hidden xs:inline">Big Data</span><span className="xs:hidden">BD</span>
          </h1>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <nav className={`flex gap-1 p-1 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
              {['study', 'cheat', 'flashcards'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? darkMode 
                        ? 'bg-slate-600 text-teal-400 shadow-sm' 
                        : 'bg-white text-teal-700 shadow-sm'
                      : darkMode
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'study' && 'Temario'}
                  {tab === 'cheat' && 'Glosario'}
                  {tab === 'flashcards' && 'Repaso Activo'}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Controles Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-600'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            <nav className="flex flex-col p-2 gap-1">
              {['study', 'cheat', 'flashcards'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); setMobileSidebarOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? darkMode 
                        ? 'bg-slate-700 text-teal-400' 
                        : 'bg-teal-50 text-teal-700'
                      : darkMode
                        ? 'text-slate-300 hover:bg-slate-700'
                        : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab === 'study' && '📚 Temario'}
                  {tab === 'cheat' && '📋 Glosario'}
                  {tab === 'flashcards' && '🧠 Repaso Activo'}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-3 sm:p-4 md:p-8">
        
        {/* MODO ESTUDIO */}
        {activeTab === 'study' && (
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8">
            
            {/* Botón para abrir sidebar en móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className={`w-full flex items-center justify-between p-3 rounded-lg font-medium transition-all ${
                  darkMode ? 'bg-slate-800 text-teal-400 border border-slate-700' : 'bg-white text-teal-700 border border-slate-200 shadow-sm'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {courseData[activeTheme].title}
                </span>
                <svg className={`w-5 h-5 transition-transform ${mobileSidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Sidebar desplegable en móvil */}
              {mobileSidebarOpen && (
                <div className={`mt-2 p-2 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="grid grid-cols-2 gap-2">
                    {courseData.map((theme, idx) => (
                      <button
                        key={theme.id}
                        onClick={() => { setActiveTheme(idx); setMobileSidebarOpen(false); }}
                        className={`text-left p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          activeTheme === idx 
                            ? darkMode
                              ? 'bg-teal-900/50 text-teal-400 border border-teal-500'
                              : 'bg-teal-50 text-teal-800 border border-teal-500' 
                            : darkMode
                              ? 'bg-slate-700 text-slate-300 border border-slate-600'
                              : 'bg-slate-50 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {theme.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Desktop - Sticky */}
            <aside className="hidden md:block md:col-span-1 space-y-2 md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-8rem)] md:overflow-y-auto">
              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Índice</p>
              {courseData.map((theme, idx) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(idx)}
                  className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                    activeTheme === idx 
                      ? darkMode
                        ? 'bg-teal-900/50 text-teal-400 border-l-4 border-teal-500 font-medium'
                        : 'bg-teal-50 text-teal-800 border-l-4 border-teal-600 font-medium' 
                      : darkMode
                        ? 'hover:bg-slate-800 text-slate-400'
                        : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {theme.title.split('.')[1] || theme.title}
                </button>
              ))}
            </aside>

            {/* Contenido Tema */}
            <section className="md:col-span-3 space-y-4 sm:space-y-6">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 border-b pb-3 sm:pb-4 ${darkMode ? 'text-slate-100 border-slate-700' : 'text-slate-900 border-slate-200'}`}>
                {courseData[activeTheme].title}
              </h2>
              
              {courseData[activeTheme].content.map((section, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-xl shadow-sm border transition-shadow hover:shadow-md ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>{section.subtitle}</h3>
                  
                  {section.text && <p className={`text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{section.text}</p>}
                  
                  {section.details && (
                    <ul className="space-y-2 mb-3 sm:mb-4">
                      {section.details.map((detail: string, i: number) => (
                        <li key={i} className={`flex items-start gap-2 text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 shrink-0 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.list && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {section.list.map((item: string, i: number) => (
                        <li key={i} className={`p-2 rounded text-xs sm:text-sm border ${darkMode ? 'bg-slate-700 text-slate-300 border-slate-600' : 'bg-slate-50 text-slate-700 border-slate-100'}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.comparison && (
                    <div className={`flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border my-3 sm:my-4 ${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
                      <div className={`pb-3 sm:pb-0 sm:border-r sm:pr-4 border-b sm:border-b-0 ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}>
                        <strong className={`block mb-1 text-sm sm:text-base ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>{section.comparison.left}</strong>
                        <span className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{section.comparison.leftDesc}</span>
                      </div>
                      <div className="pt-3 sm:pt-0">
                        <strong className={`block mb-1 text-sm sm:text-base ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>{section.comparison.right}</strong>
                        <span className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{section.comparison.rightDesc}</span>
                      </div>
                    </div>
                  )}

                  {section.isCode && (
                    <div className="relative group">
                      <div className={`absolute top-2 right-2 text-[10px] sm:text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>bash/sql</div>
                      <pre className={`p-3 sm:p-4 rounded-lg overflow-x-auto text-[11px] sm:text-sm font-mono leading-relaxed ${darkMode ? 'bg-slate-950' : 'bg-slate-900'}`}>
                        {highlightCode(section.codeBlock || '', darkMode)}
                      </pre>
                    </div>
                  )}

                  {section.keyPoint && (
                    <div className={`mt-3 sm:mt-4 p-2.5 sm:p-3 border-l-4 text-xs sm:text-sm font-medium italic ${darkMode ? 'bg-yellow-900/30 border-yellow-500 text-yellow-300' : 'bg-yellow-50 border-yellow-400 text-yellow-800'}`}>
                      {section.keyPoint}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>
        )}

        {/* MODO FLASHCARDS - REPASO ACTIVO MEJORADO */}
        {activeTab === 'flashcards' && (
          <div className="max-w-3xl mx-auto">
            
            {/* Pantalla de configuración inicial */}
            {!sessionStarted ? (
              <div className={`rounded-xl sm:rounded-2xl shadow-lg border p-4 sm:p-6 md:p-8 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <div className="text-center mb-6 sm:mb-8">
                  <Brain className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>Repaso Activo</h2>
                  <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Sistema de flashcards con seguimiento de progreso</p>
                </div>

                {/* Estadísticas de sesión anterior */}
                {(correctCount > 0 || incorrectCount > 0) && (
                  <div className={`rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 ${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
                    <h3 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>📊 Última Sesión</h3>
                    <div className="flex justify-center gap-4 sm:gap-8">
                      <div className="text-center">
                        <div className={`text-2xl sm:text-4xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{correctCount}</div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Correctas</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl sm:text-4xl font-bold ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{incorrectCount}</div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>A repasar</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl sm:text-4xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                          {correctCount + incorrectCount > 0 ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) : 0}%
                        </div>
                        <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Acierto</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Selector de modo */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <h3 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>Modo de estudio</h3>
                  
                  <label className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${studyMode === 'all' ? darkMode ? 'border-teal-500 bg-teal-900/30' : 'border-teal-500 bg-teal-50' : darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input type="radio" name="mode" checked={studyMode === 'all'} onChange={() => setStudyMode('all')} className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    <div className="flex-1">
                      <div className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>📚 Todas las tarjetas</div>
                      <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{allFlashcards.length} tarjetas de todos los temas</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${studyMode === 'theme' ? darkMode ? 'border-teal-500 bg-teal-900/30' : 'border-teal-500 bg-teal-50' : darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-slate-200 hover:border-slate-300'}`}>
                    <input type="radio" name="mode" checked={studyMode === 'theme'} onChange={() => setStudyMode('theme')} className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    <div className="flex-1">
                      <div className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>🎯 Por tema específico</div>
                      <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Estudia un tema concreto</div>
                    </div>
                  </label>

                  {studyMode === 'theme' && (
                    <div className="ml-7 sm:ml-9 grid grid-cols-2 gap-1.5 sm:gap-2">
                      {courseData.map((theme, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedThemeForStudy(idx)}
                          className={`p-2 sm:p-3 rounded-lg text-left text-xs sm:text-sm font-medium transition-all ${
                            selectedThemeForStudy === idx 
                              ? 'bg-teal-600 text-white' 
                              : darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {theme.title}
                          <span className="block text-[10px] sm:text-xs opacity-75">
                            {allFlashcards.filter(c => c.themeIdx === idx).length} tarjetas
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  <label className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${studyMode === 'hard' ? darkMode ? 'border-orange-500 bg-orange-900/30' : 'border-orange-500 bg-orange-50' : darkMode ? 'border-slate-600 hover:border-slate-500' : 'border-slate-200 hover:border-slate-300'} ${hardCards.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <input type="radio" name="mode" checked={studyMode === 'hard'} onChange={() => hardCards.length > 0 && setStudyMode('hard')} disabled={hardCards.length === 0} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    <div className="flex-1">
                      <div className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>🔥 Tarjetas difíciles</div>
                      <div className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {hardCards.length > 0 ? `${hardCards.length} tarjetas marcadas para repasar` : 'Aún no tienes tarjetas marcadas'}
                      </div>
                    </div>
                  </label>
                </div>

                {/* Botón de inicio */}
                <button
                  onClick={startSession}
                  disabled={filteredCards.length === 0}
                  className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  Comenzar Repaso ({filteredCards.length} tarjetas)
                </button>

                {/* Info de tarjetas difíciles */}
                {hardCards.length > 0 && studyMode !== 'hard' && (
                  <p className={`text-center text-xs sm:text-sm mt-3 sm:mt-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                    💡 Tienes {hardCards.length} tarjetas marcadas como difíciles
                  </p>
                )}
              </div>
            ) : (
              /* Sesión activa */
              <div className="space-y-4 sm:space-y-6">
                {/* Barra de progreso */}
                <div className={`rounded-xl shadow-sm border p-3 sm:p-4 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {currentCardIndex + 1}/{shuffledCards.length}
                    </span>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓ {correctCount}</span>
                      <span className={`font-bold ${darkMode ? 'text-red-400' : 'text-red-500'}`}>✗ {incorrectCount}</span>
                    </div>
                  </div>
                  <div className={`w-full h-2 sm:h-3 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                    <div 
                      className="h-full bg-linear-to-r from-teal-500 to-teal-600 transition-all duration-300"
                      style={{ width: `${((currentCardIndex + 1) / shuffledCards.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Tarjeta actual */}
                {currentCard && (
                  <>
                    <div 
                      onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
                      className={`w-full min-h-64 sm:min-h-80 rounded-xl sm:rounded-2xl shadow-lg border-2 cursor-pointer flex flex-col p-4 sm:p-6 md:p-8 transition-all hover:shadow-xl relative overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-600 hover:border-teal-500' : 'bg-white border-slate-200 hover:border-teal-300'}`}
                    >
                      {/* Badge del tema */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${darkMode ? 'bg-teal-900 text-teal-400' : 'bg-teal-100 text-teal-700'}`}>
                          {currentCard.themeName.length > 20 ? currentCard.themeName.substring(0, 18) + '...' : currentCard.themeName}
                        </span>
                      </div>

                      {/* Indicador de tipo */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                          currentCard.type === 'comparison' 
                            ? darkMode ? 'bg-purple-900 text-purple-400' : 'bg-purple-100 text-purple-700'
                            : darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {currentCard.type === 'comparison' ? '⚖️' : '💡'}
                        </span>
                      </div>

                      {/* Contenido de la tarjeta */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center mt-6 sm:mt-8 px-2">
                        {!showFlashcardAnswer ? (
                          <>
                            <Brain className={`w-10 h-10 sm:w-14 sm:h-14 mb-3 sm:mb-4 ${darkMode ? 'text-slate-600' : 'text-slate-300'}`} />
                            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{currentCard.question}</h3>
                            <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Toca para revelar</p>
                          </>
                        ) : (
                          <>
                            <Check className={`w-10 h-10 sm:w-14 sm:h-14 mb-3 sm:mb-4 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
                            <div className={`text-sm sm:text-base md:text-lg whitespace-pre-line leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                              {currentCard.answer}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Indicador de clic */}
                      <div className="absolute bottom-3 left-0 right-0 text-center sm:bottom-4">
                        <span className={`text-[10px] sm:text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          {showFlashcardAnswer ? '↑ Evalúa abajo' : '👆 Toca'}
                        </span>
                      </div>
                    </div>

                    {/* Botones de evaluación */}
                    {showFlashcardAnswer && (
                      <div className="flex gap-2 sm:gap-4">
                        <button
                          onClick={markIncorrect}
                          className={`flex-1 border-2 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${darkMode ? 'bg-red-900/30 border-red-700 text-red-400 hover:bg-red-900/50' : 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100'}`}
                        >
                          <span className="text-lg sm:text-2xl">😓</span> <span className="hidden sm:inline">No lo sabía</span><span className="sm:hidden">No</span>
                        </button>
                        <button
                          onClick={markCorrect}
                          className={`flex-1 border-2 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all flex items-center justify-center gap-1 sm:gap-2 ${darkMode ? 'bg-green-900/30 border-green-700 text-green-400 hover:bg-green-900/50' : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'}`}
                        >
                          <span className="text-lg sm:text-2xl">🎉</span> <span className="hidden sm:inline">¡Lo sabía!</span><span className="sm:hidden">Sí</span>
                        </button>
                      </div>
                    )}
                  </>
                )}

                {/* Botón de terminar sesión */}
                <button
                  onClick={resetSession}
                  className={`w-full py-2 sm:py-3 text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  ✕ Terminar sesión
                </button>
              </div>
            )}

            {/* Pantalla de fin de sesión */}
            {!sessionStarted && (correctCount > 0 || incorrectCount > 0) && currentCardIndex >= shuffledCards.length - 1 && shuffledCards.length > 0 && (
              <div className={`mt-6 sm:mt-8 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center ${darkMode ? 'bg-linear-to-br from-teal-600 to-teal-800' : 'bg-linear-to-br from-teal-500 to-teal-700'}`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">🎊 ¡Sesión completada!</h3>
                <p className="text-sm sm:text-base opacity-90">Has repasado {correctCount + incorrectCount} tarjetas</p>
                <div className="mt-4 sm:mt-6 text-4xl sm:text-5xl font-bold">
                  {Math.round((correctCount / (correctCount + incorrectCount)) * 100)}%
                </div>
                <p className="opacity-75 mt-2">de aciertos</p>
                {hardCards.length > 0 && (
                  <p className="mt-4 text-teal-100 text-sm">
                    💪 {hardCards.length} tarjetas añadidas a &quot;difíciles&quot; para repaso
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* MODO GLOSARIO */}
        {activeTab === 'cheat' && (
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>Banco de Recursos</h2>
              <p className={`mt-1 sm:mt-2 text-xs sm:text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Glosario + Comandos + Mapa mental</p>
            </div>

            {/* GLOSARIO TEMA 1 */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className={`px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base ${darkMode ? 'bg-teal-700 text-white' : 'bg-teal-600 text-white'}`}>TEMA 1 · BIG DATA</div>
              <div className="p-2 sm:p-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm min-w-96">
                  <thead><tr className={`border-b ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}><th className={`text-left py-1.5 sm:py-2 font-semibold whitespace-nowrap ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>Concepto</th><th className={`text-left py-1.5 sm:py-2 font-semibold ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>Definición</th></tr></thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <tr><td className="py-2 font-medium">Big Data</td><td className="py-2 text-slate-600">Conjunto de tecnologías para almacenar, procesar y analizar datos masivos que no pueden tratarse con sistemas tradicionales.</td></tr>
                    <tr><td className="py-2 font-medium">Datos estructurados</td><td className="py-2 text-slate-600">Datos con esquema fijo (tablas, filas y columnas). Ej: SQL, Excel.</td></tr>
                    <tr><td className="py-2 font-medium">Datos no estructurados</td><td className="py-2 text-slate-600">Datos sin formato definido. Ej: texto libre, correos, imágenes, vídeos.</td></tr>
                    <tr><td className="py-2 font-medium">Datos semi-estructurados</td><td className="py-2 text-slate-600">Datos con cierta organización sin esquema rígido. Ej: JSON, XML.</td></tr>
                    <tr><td className="py-2 font-medium">Volumen</td><td className="py-2 text-slate-600">Cantidad masiva de datos generados y almacenados.</td></tr>
                    <tr><td className="py-2 font-medium">Velocidad</td><td className="py-2 text-slate-600">Rapidez con la que los datos se generan, transmiten y procesan.</td></tr>
                    <tr><td className="py-2 font-medium">Variedad</td><td className="py-2 text-slate-600">Diversidad de formatos y fuentes de datos.</td></tr>
                    <tr><td className="py-2 font-medium">Veracidad</td><td className="py-2 text-slate-600">Calidad y fiabilidad de los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Valor</td><td className="py-2 text-slate-600">Capacidad de los datos para generar información útil.</td></tr>
                    <tr><td className="py-2 font-medium">Business Intelligence</td><td className="py-2 text-slate-600">Análisis descriptivo del pasado y presente para apoyar decisiones.</td></tr>
                    <tr><td className="py-2 font-medium">Data Science</td><td className="py-2 text-slate-600">Uso de estadística y ML para análisis predictivo y prescriptivo.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GLOSARIO TEMA 2 */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="bg-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base">TEMA 2 · ARQUITECTURAS</div>
              <div className="p-2 sm:p-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm min-w-96">
                  <thead><tr className={`border-b ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}><th className={`text-left py-1.5 sm:py-2 font-semibold whitespace-nowrap ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Concepto</th><th className={`text-left py-1.5 sm:py-2 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Definición</th></tr></thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <tr><td className="py-2 font-medium">Arquitectura Big Data</td><td className="py-2 text-slate-600">Diseño que permite escalabilidad, tolerancia a fallos y procesamiento distribuido.</td></tr>
                    <tr><td className="py-2 font-medium">Escalado horizontal</td><td className="py-2 text-slate-600">Aumentar capacidad añadiendo nodos (no máquinas más potentes).</td></tr>
                    <tr><td className="py-2 font-medium">Tolerancia a fallos</td><td className="py-2 text-slate-600">Capacidad del sistema para seguir funcionando aunque fallen componentes.</td></tr>
                    <tr><td className="py-2 font-medium">Localidad del dato</td><td className="py-2 text-slate-600">Ejecutar los cálculos donde están almacenados los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Data Warehouse</td><td className="py-2 text-slate-600">Repositorio de datos estructurados y procesados, orientado a análisis.</td></tr>
                    <tr><td className="py-2 font-medium">Schema-on-write</td><td className="py-2 text-slate-600">El esquema se define antes de almacenar los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Data Lake</td><td className="py-2 text-slate-600">Repositorio de datos en bruto, de cualquier tipo y formato.</td></tr>
                    <tr><td className="py-2 font-medium">Schema-on-read</td><td className="py-2 text-slate-600">El esquema se aplica en el momento de la lectura.</td></tr>
                    <tr><td className="py-2 font-medium">Procesamiento batch</td><td className="py-2 text-slate-600">Procesamiento por lotes sobre datos históricos.</td></tr>
                    <tr><td className="py-2 font-medium">Procesamiento streaming</td><td className="py-2 text-slate-600">Procesamiento continuo de datos en tiempo real.</td></tr>
                    <tr><td className="py-2 font-medium">Arquitectura Lambda</td><td className="py-2 text-slate-600">Combina batch, streaming y serving para precisión y baja latencia.</td></tr>
                    <tr><td className="py-2 font-medium">Arquitectura Kappa</td><td className="py-2 text-slate-600">Basada solo en streaming, más simple que Lambda.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GLOSARIO TEMA 3 */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="bg-orange-600 text-white px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base">TEMA 3 · HADOOP</div>
              <div className="p-2 sm:p-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm min-w-96">
                  <thead><tr className={`border-b ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}><th className={`text-left py-1.5 sm:py-2 font-semibold whitespace-nowrap ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>Concepto</th><th className={`text-left py-1.5 sm:py-2 font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>Definición</th></tr></thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <tr><td className="py-2 font-medium">Hadoop</td><td className="py-2 text-slate-600">Framework open source para almacenamiento y procesamiento distribuido.</td></tr>
                    <tr><td className="py-2 font-medium">Clúster</td><td className="py-2 text-slate-600">Conjunto de máquinas que trabajan como un único sistema.</td></tr>
                    <tr><td className="py-2 font-medium">HDFS</td><td className="py-2 text-slate-600">Sistema de archivos distribuido de Hadoop.</td></tr>
                    <tr><td className="py-2 font-medium">Bloque HDFS</td><td className="py-2 text-slate-600">Unidad mínima de almacenamiento (128 MB por defecto).</td></tr>
                    <tr><td className="py-2 font-medium">Factor de replicación</td><td className="py-2 text-slate-600">Número de copias de cada bloque (normalmente 3).</td></tr>
                    <tr><td className="py-2 font-medium">WORM</td><td className="py-2 text-slate-600">Write Once, Read Many: escribir una vez, leer muchas.</td></tr>
                    <tr><td className="py-2 font-medium">NameNode</td><td className="py-2 text-slate-600">Nodo maestro que gestiona metadatos (no almacena datos).</td></tr>
                    <tr><td className="py-2 font-medium">DataNode</td><td className="py-2 text-slate-600">Nodo que almacena físicamente los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Secondary NameNode</td><td className="py-2 text-slate-600">Ayuda a gestionar metadatos (no es backup).</td></tr>
                    <tr><td className="py-2 font-medium">fsimage</td><td className="py-2 text-slate-600">Imagen del estado del sistema de archivos HDFS.</td></tr>
                    <tr><td className="py-2 font-medium">edits</td><td className="py-2 text-slate-600">Registro de cambios realizados en HDFS.</td></tr>
                    <tr><td className="py-2 font-medium">YARN</td><td className="py-2 text-slate-600">Gestor de recursos y planificación de tareas del clúster.</td></tr>
                    <tr><td className="py-2 font-medium">MapReduce</td><td className="py-2 text-slate-600">Modelo de procesamiento distribuido por lotes.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GLOSARIO TEMA 4 */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="bg-purple-600 text-white px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base">TEMA 4 · BASES DE DATOS</div>
              <div className="p-2 sm:p-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm min-w-96">
                  <thead><tr className={`border-b ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}><th className={`text-left py-2 font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Concepto</th><th className={`text-left py-2 font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>Definición</th></tr></thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <tr><td className="py-2 font-medium">Base de datos</td><td className="py-2 text-slate-600">Conjunto organizado de datos relacionados.</td></tr>
                    <tr><td className="py-2 font-medium">SGBD</td><td className="py-2 text-slate-600">Software que permite crear, gestionar y consultar bases de datos.</td></tr>
                    <tr><td className="py-2 font-medium">Modelo relacional</td><td className="py-2 text-slate-600">Organización de datos en tablas relacionadas mediante claves.</td></tr>
                    <tr><td className="py-2 font-medium">NoSQL</td><td className="py-2 text-slate-600">Bases de datos sin esquema rígido, escalables horizontalmente.</td></tr>
                    <tr><td className="py-2 font-medium">SQL</td><td className="py-2 text-slate-600">Lenguaje para definir, manipular y consultar datos.</td></tr>
                    <tr><td className="py-2 font-medium">DDL</td><td className="py-2 text-slate-600">Lenguaje de definición de datos (CREATE, DROP).</td></tr>
                    <tr><td className="py-2 font-medium">DML</td><td className="py-2 text-slate-600">Lenguaje de manipulación de datos (INSERT, UPDATE, DELETE).</td></tr>
                    <tr><td className="py-2 font-medium">DQL</td><td className="py-2 text-slate-600">Lenguaje de consulta de datos (SELECT).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* GLOSARIO TEMA 5 */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="bg-rose-600 text-white px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base">TEMA 5 · HIVE</div>
              <div className="p-2 sm:p-4 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm min-w-96">
                  <thead><tr className={`border-b ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}><th className={`text-left py-1.5 sm:py-2 font-semibold whitespace-nowrap ${darkMode ? 'text-rose-400' : 'text-rose-700'}`}>Concepto</th><th className={`text-left py-1.5 sm:py-2 font-semibold ${darkMode ? 'text-rose-400' : 'text-rose-700'}`}>Definición</th></tr></thead>
                  <tbody className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <tr><td className="py-2 font-medium">Hive</td><td className="py-2 text-slate-600">Sistema de data warehouse sobre Hadoop con lenguaje similar a SQL.</td></tr>
                    <tr><td className="py-2 font-medium">HiveQL</td><td className="py-2 text-slate-600">Lenguaje de consultas utilizado por Hive.</td></tr>
                    <tr><td className="py-2 font-medium">Metastore</td><td className="py-2 text-slate-600">Repositorio central de metadatos de Hive.</td></tr>
                    <tr><td className="py-2 font-medium">Tabla interna (managed)</td><td className="py-2 text-slate-600">Hive gestiona datos y metadatos; DROP TABLE borra los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Tabla externa (external)</td><td className="py-2 text-slate-600">Hive gestiona solo metadatos; DROP TABLE no borra los datos.</td></tr>
                    <tr><td className="py-2 font-medium">Warehouse de Hive</td><td className="py-2 text-slate-600">Directorio donde Hive almacena las tablas internas.</td></tr>
                    <tr><td className="py-2 font-medium">ARRAY</td><td className="py-2 text-slate-600">Tipo complejo que almacena listas ordenadas.</td></tr>
                    <tr><td className="py-2 font-medium">MAP</td><td className="py-2 text-slate-600">Tipo complejo que almacena pares clave-valor.</td></tr>
                    <tr><td className="py-2 font-medium">STRUCT</td><td className="py-2 text-slate-600">Tipo complejo que agrupa varios campos con nombre.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BANCO DE COMANDOS */}
            <div className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl ${darkMode ? 'bg-slate-950' : 'bg-slate-900'}`}>
              <div className={`px-3 sm:px-6 py-2 sm:py-3 font-bold text-white text-xs sm:text-sm md:text-base ${darkMode ? 'bg-slate-900' : 'bg-slate-800'}`}>COMANDOS RÁPIDOS</div>
              <div className="p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm space-y-4 sm:space-y-6 overflow-x-auto">
                
                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HDFS</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-ls</span> <span className="text-green-400">/ruta</span>          <span className="text-slate-500"># listar</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-mkdir -p</span> <span className="text-green-400">/ruta</span>    <span className="text-slate-500"># crear directorios</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-put</span> <span className="text-slate-300">fichero</span> <span className="text-green-400">/ruta</span> <span className="text-slate-500"># subir a HDFS</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-get</span> <span className="text-green-400">/ruta/fichero</span> <span className="text-slate-500"># bajar a local</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-head</span> <span className="text-slate-300">fichero</span>      <span className="text-slate-500"># ver primeras líneas</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-cat</span> <span className="text-slate-300">fichero</span>       <span className="text-slate-500"># ver contenido</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-rm</span> <span className="text-slate-300">fichero</span>        <span className="text-slate-500"># borrar archivo</span></code>
                    <code className="block"><span className="text-cyan-400">hdfs dfs</span> <span className="text-orange-400">-rm -r</span> <span className="text-green-400">/ruta</span>        <span className="text-slate-500"># borrar directorio</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Bases de datos</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">SHOW DATABASES</span><span className="text-slate-300">;</span></code>
                    <code className="block"><span className="text-purple-400">USE</span> <span className="text-slate-300">nombre_bd</span><span className="text-slate-300">;</span></code>
                    <code className="block"><span className="text-purple-400">SHOW TABLES</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Tabla interna</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">CREATE TABLE</span> <span className="text-slate-300">tabla</span> <span className="text-slate-400">(</span></code>
                    <code className="block">  <span className="text-slate-300">col1</span> <span className="text-blue-400">TIPO</span><span className="text-slate-400">,</span></code>
                    <code className="block">  <span className="text-slate-300">col2</span> <span className="text-blue-400">TIPO</span></code>
                    <code className="block"><span className="text-slate-400">)</span></code>
                    <code className="block"><span className="text-pink-400">ROW FORMAT DELIMITED</span></code>
                    <code className="block"><span className="text-pink-400">FIELDS TERMINATED BY</span> <span className="text-amber-300">&apos;,&apos;</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Tabla externa</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">CREATE EXTERNAL TABLE</span> <span className="text-slate-300">tabla</span> <span className="text-slate-400">(</span></code>
                    <code className="block">  <span className="text-slate-300">col1</span> <span className="text-blue-400">TIPO</span><span className="text-slate-400">,</span></code>
                    <code className="block">  <span className="text-slate-300">col2</span> <span className="text-blue-400">TIPO</span></code>
                    <code className="block"><span className="text-slate-400">)</span></code>
                    <code className="block"><span className="text-pink-400">ROW FORMAT DELIMITED</span></code>
                    <code className="block"><span className="text-pink-400">FIELDS TERMINATED BY</span> <span className="text-amber-300">&apos;,&apos;</span></code>
                    <code className="block"><span className="text-orange-400">LOCATION</span> <span className="text-green-400">&apos;/ruta_hdfs&apos;</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Cargar datos</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">LOAD DATA LOCAL INPATH</span> <span className="text-green-400">&apos;/ruta_local&apos;</span> <span className="text-purple-400">INTO TABLE</span> <span className="text-slate-300">tabla</span><span className="text-slate-300">;</span></code>
                    <code className="block"><span className="text-purple-400">LOAD DATA INPATH</span> <span className="text-green-400">&apos;/ruta_hdfs&apos;</span> <span className="text-purple-400">INTO TABLE</span> <span className="text-slate-300">tabla</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Consultas</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">SELECT</span> <span className="text-yellow-400">COUNT</span><span className="text-slate-400">(</span><span className="text-pink-400">*</span><span className="text-slate-400">)</span> <span className="text-purple-400">FROM</span> <span className="text-slate-300">tabla</span><span className="text-slate-300">;</span></code>
                    <code className="block"><span className="text-purple-400">SELECT</span> <span className="text-pink-400">*</span> <span className="text-purple-400">FROM</span> <span className="text-slate-300">tabla</span> <span className="text-purple-400">LIMIT</span> <span className="text-blue-400">5</span><span className="text-slate-300">;</span></code>
                    <code className="block"><span className="text-purple-400">DESCRIBE</span> <span className="text-slate-300">tabla</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – JOIN</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">SELECT</span> <span className="text-slate-300">a.col</span><span className="text-slate-400">,</span> <span className="text-slate-300">b.col</span></code>
                    <code className="block"><span className="text-purple-400">FROM</span> <span className="text-slate-300">t1 a</span></code>
                    <code className="block"><span className="text-purple-400">JOIN</span> <span className="text-slate-300">t2 b</span></code>
                    <code className="block"><span className="text-purple-400">ON</span> <span className="text-slate-300">a.id</span> <span className="text-pink-400">=</span> <span className="text-slate-300">b.id</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

                <div>
                  <h3 className="text-teal-400 font-bold mb-2 sm:mb-3 text-xs sm:text-sm"># HIVE – Borrar</h3>
                  <div className="space-y-0.5 sm:space-y-1 whitespace-nowrap">
                    <code className="block"><span className="text-purple-400">DROP TABLE</span> <span className="text-slate-300">tabla</span><span className="text-slate-300">;</span></code>
                  </div>
                </div>

              </div>
            </div>

            {/* MAPA MENTAL */}
            <div className={`glossary-card rounded-lg sm:rounded-xl shadow-sm border overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="bg-slate-700 text-white px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base">MAPA MENTAL</div>
              <div className="p-3 sm:p-6 overflow-x-auto">
                <pre className={`text-[10px] sm:text-xs md:text-sm font-mono leading-relaxed whitespace-pre ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{`BigData
 ├─ Arquitecturas
 │   ├─ Batch / Streaming
 │   ├─ Lambda / Kappa
 │   └─ Data Lake / Warehouse
 ├─ Hadoop
 │   ├─ HDFS (datos)
 │   ├─ YARN (recursos)
 │   └─ MapReduce (procesa)
 ├─ BBDD
 │   ├─ SQL
 │   └─ NoSQL
 └─ Hive
     ├─ Tablas (internas/externas)
     ├─ Metastore
     └─ Consultas HiveQL`}</pre>
              </div>
            </div>

            {/* FRASES CLAVE */}
            <div className={`rounded-lg sm:rounded-xl border-2 overflow-hidden ${darkMode ? 'bg-yellow-900/30 border-yellow-600' : 'bg-yellow-50 border-yellow-400'}`}>
              <div className={`px-3 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base ${darkMode ? 'bg-yellow-700 text-yellow-100' : 'bg-yellow-400 text-yellow-900'}`}>🔑 FRASES CLAVE</div>
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-3">
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>• &quot;Si no empieza por <code className={`px-0.5 sm:px-1 rounded text-[10px] sm:text-xs ${darkMode ? 'bg-yellow-800' : 'bg-yellow-200'}`}>hdfs dfs</code>, estoy en local.&quot;</p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>• &quot;Hive no guarda datos, guarda metadatos.&quot;</p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>• &quot;Tabla interna borra datos, externa no.&quot;</p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>• &quot;Si <code className={`px-0.5 sm:px-1 rounded text-[10px] sm:text-xs ${darkMode ? 'bg-yellow-800' : 'bg-yellow-200'}`}>COUNT(*)</code> da 0, algo está mal antes del SQL.&quot;</p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-yellow-200' : 'text-yellow-900'}`}>• &quot;Primero datos, luego tablas, luego consultas.&quot;</p>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
