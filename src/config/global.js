export default {
  global: {
    componenteFormativo: 'Innovación, análisis y diagnóstico organizacional',
    descripcionCurso:
      'Este componente formativo presenta conceptos relevantes sobre la innovación empresarial, vista desde el diagnóstico y el análisis empresarial. Metodologías y herramientas que se utilizan para dar orden al proceso innovativo y a la fase diagnóstica; todo esto, incluido como aportes para la toma de decisiones y la evolución empresarial, que exigen la permanencia en el mercado actual dinámico y flexible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg/'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La capacidad de innovar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas del proceso de innovación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodologías de innovación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis y diagnóstico organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instrumentos y matrices de análisis estratégico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores de gestión e informes de diagnóstico',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Metodologías de innovación',
      referencia:
        'Flores-Cerna, F., Sanhueza-Salazar, V. M., Valdés-González, H. M. & Reyes-Bozo, L. (2022). Metodologías ágiles: un análisis de los desafíos organizacionales para su implementación. <em>Revista científica,</em> 43(1).',
      tipo: 'Artículo',
      link:
        'https://revistas.udistrital.edu.co/index.php/revcie/article/view/18332',
    },
    {
      tema: 'Instrumentos y matrices de análisis estratégico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Técnicas de planeación estratégica</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tTTeEk2PySs',
    },
    {
      tema: 'Instrumentos y matrices de análisis estratégico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Matriz DOFA </em>(video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
    {
      tema: 'Indicadores de gestión e informes de diagnóstico',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Clasificación de los indicadores</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RhvHUVVLaBg',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones.',
    },
    {
      termino: 'Capital humano',
      significado:
        'valor económico o de producción procedente de la formación y experiencia de los trabajadores. En teoría económica se usa el concepto de capital humano para estimar el valor productivo y económico de las habilidades profesionales de los empleados.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona que utiliza los servicios de un profesional o de una empresa, o que compra en un establecimiento comercial o público, especialmente si lo hace de forma regular.',
    },
    {
      termino: 'Consumidor',
      significado:
        'persona que consume bienes y productos en una sociedad de mercado.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa que tiene por fin proyectar objetos que sean útiles y estéticos.',
    },
    {
      termino: 'Empatía',
      significado:
        'participación afectiva de una persona en una realidad ajena a ella, generalmente en los sentimientos de otra persona.',
    },
    {
      termino: 'Indicadores',
      significado:
        'dato o información que sirve para conocer o valorar las características y la intensidad de un hecho, o para determinar su evolución futura.',
    },
    {
      termino: 'Innovación',
      significado:
        'aplicación de nuevas ideas, conceptos, productos, servicios y prácticas, con la intención de ser útiles para el incremento de la productividad y la competitividad.',
    },
    {
      termino: 'Metodología',
      significado:
        'ciencia del método y conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas y medios organizados con un fin determinado.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },

    {
      referencia:
        'Cuatrecasas Arbós, L. (2012). <em>Organización de la producción y dirección de operaciones: sistemas actuales de gestión eficiente y competitiva.</em> Díaz de Santos.',
    },
    {
      referencia:
        'De Pablos, F. y Lasa, M. (2017).<em> Dibújalo: Innova, crea y comunica de manera visual.</em> Editorial LID.',
    },
    {
      referencia:
        'Galván, L. (2017). <em>Creatividad para el cambio: innovación para la vida y la empresa.</em> Ecoe Ediciones.',
    },
    {
      referencia:
        'García Cediel, G. y Carrillo Bautista, M. (2016). <em>Indicadores de gestión. Manual básico de aplicación para Mipyme.</em>Ediciones de la U.',
    },
    {
      referencia:
        'González Millán, J. J. y Rodríguez Díaz, M. T. (2020).<em> Manual práctico de planeación estratégica.</em> Díaz de Santos.',
    },
    {
      referencia:
        'Quinteros Camacho, J. y Hamann Pastorino, A. (2017). Planeamiento estratégico prospectivo: métodos MACTOR y SMIC. Ecoe Ediciones.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
