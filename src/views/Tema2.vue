<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y diagnóstico organizacional

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-5.mb-3

          figure
            img(src='@/assets/curso/temas/tema2/img-1.svg')

      .col-md-6.col-lg-7
        p Es importante conocer que el análisis que se despliega a partir de la generación de información en la fase diagnóstica de una empresa, proporciona, a la organización, la oportunidad de generar soluciones ante sus necesidades, dependiendo ellas, de su situación en el mercado, su situación interna y sus objetivos a futuro y contemplando en esto, las posibilidades de ser innovadores en sus prácticas.

    p.mb-5 Existen dos tipos de diagnóstico organizacional, el funcional y el cultural, y a partir de ellos puede darse la captura de información relevante para la empresa y sus requerimientos.

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema2/img-2.svg')    
      .col-lg-8
        TabsA.color-acento-contenido.grs.mb-3
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Funcional")
            p Examina primordialmente las estructuras formales e informales de la comunicación, aquellas prácticas que tienen relación con el proceso de producción, mantenimiento, atención al cliente y la innovación. Los métodos y técnicas aplicables son:
            ul.lista-ul--color.cir
              li 
                i.fas.fa-circle.circle
                p.mb-0 Entrevista.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Cuestionario.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Análisis de transmisión de mensajes.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Análisis de experiencias de comunicación críticas.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Análisis de redes de comunicación.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Entrevista grupal.
            
          .tarjeta.color-acento-botones.fnd-3.p-4(titulo="Cultural")
            p Su propósito es el de descubrir los valores y principios que rigen una organización y el grado de conocimiento, congruencia y apropiación de los miembros o integrantes de la misma en su comportamiento como empresa. Los principios y valores pueden determinarse a partir de los campos en que se evidencian, por lo que mientras más manifestaciones sean analizadas, más enriquecido el ejercicio y más certero será el diagnóstico. Se habla de manifestaciones en cualquiera de los siguientes campos:
            ul.lista-ul--color.cir
              li 
                i.fas.fa-circle.circle
                p.mb-0 Espirituales: filosofía, ideología, símbolos, historia o mitos.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Conductuales: comportamiento no verbal, actos rituales, formas de interactuar, lenguaje.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Estructurales: políticas y procedimientos, normas, estructura de autoridad.
              li 
                i.fas.fa-circle.circle
                p.mb-0 Materiales: tecnología, instalaciones, mobiliario y equipo.

    p.mb-5 Y las técnicas para obtener esta información pueden ser cualitativas o cuantitativas.               
    p.mb-5 Conozcamos sobre cada una de ellas:

    .row.justify-content-between
      .col-md-6.col-lg-4
          figure.mb-5
            img(src='@/assets/curso/temas/tema2/img-3.svg') 

      .col-md-6.col-lg-8  
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-5")
          .row(titulo="Cualitativas")
            ul.lista-ul--color.nar
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Observación: se da cuando el observador lo realiza como parte del grupo, participando en actividades dispuestas para el ejercicio diagnóstico.
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Entrevistas individuales: se dan a partir de la generación de un ambiente de confianza y afinidad entre el entrevistador y el entrevistado.
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Análisis de documentos: se reúnen documentos con el fin de ser analizados e interpretados.
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Discusión en pequeños grupos: sesiones grupales y dirigidas.
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Dramatización: proporciona información sobre la percepción que las personas tienen de diversos temas.



          .row(titulo="Cuantitativa")
            ul.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Encuesta: un cuestionario con preguntas que permitan aproximarse a la situación actual de estudio o análisis.
              li 
                i.fas.fa-check
                | Análisis de redes de comunicación: se analiza cómo es la comunicación entre las personas dentro de la organización.
    separador 

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Instrumentos y matrices de análisis estratégico

    p.mb-5 Por esta razón, a continuación se presentan algunos instrumentos de análisis estratégico:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="<em>Análisis PESTEL </em>")
        .row    
          .col-md-6.mb-4.mb-md-0
              figure.px-3
                img.img-240(src='@/assets/curso/temas/tema2/img-4.svg')                     
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Además de tener en cuenta las variables políticas, económicas, sociales y tecnológicas, se analizan también las ecológicas, como el cambio climático y las consecuencias que puede tener el sector turístico o de aseguradoras, la influencia de las leyes de protección medioambiental o las regulaciones en materia de gestión de residuos o de energías. Y, por otro lado, las variables legales, analizando desde este factor, las leyes en defensa del consumidor, antimonopolio, licencias, legislación laboral, leyes de protección de la salud, entre otras.
      .py-3.py-md-4(titulo="<em>Análisis DOFA – FODA </em>")
        .row    
          .col-md-6.mb-4.mb-md-0
              figure.px-3
                img.img-240(src='@/assets/curso/temas/tema2/img-5.svg')                     
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Una herramienta de análisis estratégico que posibilita analizar la situación interna y externa de una empresa o proyecto; análogamente es como la fotografía de la empresa o el proyecto, en un momento determinado de tiempo. Sin embargo, al tener en cuenta que la cotidianidad no es estática y por el contrario, presenta constante evolución; además de ser una herramienta utilizada para elaborar planes de negocio, resulta conveniente repetirla en el tiempo, para reconocer la situación real en la que se desenvuelve, con el fin de planear en función de ella, la estrategia de futuro más adecuada. 
            p El nombre de esta herramienta está representado por las siglas que significan: Fortalezas, Oportunidades, Debilidades y Amenazas. Las fortalezas y debilidades forman parte del análisis interno, de las cosas que se pueden controlar, mientras que las oportunidades y las amenazas hacen parte del análisis externo, es decir, de las cosas o variables que no dependen de la empresa y, por lo tanto, no se pueden controlar. Este análisis permite realizar cruces de variables obtenidas, entendiendo que las debilidades, con la adopción de estrategias adecuadas, pueden convertirse en fortalezas; asimismo, las amenazas, con la respectiva intervención de la empresa en la medida de sus capacidades y posibilidades, pueden convertirse en oportunidades. 

      .py-3.py-md-4(titulo="<em>Factores críticos de éxito (CSF) </em>")
        .row    
          .col-md-6.mb-4.mb-md-0
              figure.px-3
                img.img-240(src='@/assets/curso/temas/tema2/img-6.svg')                     
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Una herramienta de análisis estratégico que posibilita analizar la situación interna y externa de una empresa o proyecto; análogamente es como la fotografía de la empresa o el proyecto, en un momento determinado de tiempo. Sin embargo, al tener en cuenta que la cotidianidad no es estática y por el contrario, presenta constante evolución; además de ser una herramienta utilizada para elaborar planes de negocio, resulta conveniente repetirla en el tiempo, para reconocer la situación real en la que se desenvuelve, con el fin de planear en función de ella, la estrategia de futuro más adecuada. 
            p El nombre de esta herramienta está representado por las siglas que significan: Fortalezas, Oportunidades, Debilidades y Amenazas. Las fortalezas y debilidades forman parte del análisis interno, de las cosas que se pueden controlar, mientras que las oportunidades y las amenazas hacen parte del análisis externo, es decir, de las cosas o variables que no dependen de la empresa y, por lo tanto, no se pueden controlar. Este análisis permite realizar cruces de variables obtenidas, entendiendo que las debilidades, con la adopción de estrategias adecuadas, pueden convertirse en fortalezas; asimismo, las amenazas, con la respectiva intervención de la empresa en la medida de sus capacidades y posibilidades, pueden convertirse en oportunidades. 
            
    p.mb-5 Es así como los instrumentos de análisis representan la posibilidad de obtener información que, en sí misma, no debe ser una decisión, sino que convocan a realizar interpretaciones del contexto y de las realidades que vive la empresa o el proyecto. Ahora bien, también existen ilustraciones que posibilitan visualmente organizar la información para ser analizada de manera efectiva y eficiente; por esta razón, vamos a conocer sobre ellas.

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Matrices de análisis estratégico
    
    .row.justify-content-between.mb-5


      .col-md-7.col-lg-7
        p Las matrices estratégicas son representaciones que muestran de manera sintética, algunos parámetros o características para tener en cuenta en la toma de decisiones; es decir, para definir la estrategia apropiada de intervención en función de las metas y los objetivos estratégicos de la empresa, teniendo en cuenta la situación del entorno, las capacidades internas y los recursos con los que se cuenta para proceder.

      .col-md-5.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/img-7.svg')

    p.mb-5 Estas combinan factores tanto internos como externos, relacionados con la industria o el sector en el que se desenvuelve la empresa y pueden ser de uno de los dos siguientes tipos: 

    .row.justify-content-center.mb-5.ddd
      .col-lg-4.d-flex
        .tarjeta.color-acento-botones.p-4.fnd-1
          .row.justify-content-center.mb-3
            .col-8
              img.img-150(src='@/assets/curso/temas/tema2/img-8.svg' alt='AvatarTop')
          h3.text-center Matrices de posicionamiento
          p.text-center Proporcionan la “posición” de un proyecto o empresa con referencia al entorno o al mercado en el que opera.
      .col-lg-4.d-flex
        .tarjeta.color-acento-botones.p-4.fnd-1
          .row.justify-content-center.mb-3
            .col-8
              img.img-150(src='@/assets/curso/temas/tema2/img-9.svg' alt='AvatarTop')
          h3.text-center Matrices de evaluación
          p.text-center Proporcionan una valoración de aspectos internos o externos de la empresa, para proyectar una orientación acerca de la estrategia a emprender, de acuerdo con la realidad evidenciada.

    p.mb-5 Determinadas matrices existentes sirven para apoyar las diferentes etapas en las que se puede requerir el análisis estratégico; por ejemplo, hay matrices que resultan útiles para la recopilación de información, otras para el proceso de adaptación y otras para el proceso de decisión. Analice algunas de ellas en el documento Matrices análisis estratégico.



    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .tarjeta.p-3.fnd-7
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Matrices análisis estratégico
                  p.text-small Para ampliar esta información se invita al aprendiz a explorar el el documento<b> Matrices análisis estratégico. </b>

                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('downloads/matrices_analisis_estrategico_anexo_cf17.pdf')" target="_blank")
                    span Descargar 
                    i.fas.fa-download


    separador 

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Indicadores de gestión e informes de diagnóstico

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-6.mb-3

          figure
            img(src='@/assets/curso/temas/tema2/img-11.png')

      .col-md-6.col-lg-6
        p Evaluar resultados resulta indispensable si la aspiración es administrar una empresa o proyecto con responsabilidad, buscando la sostenibilidad y supervivencia. Por esta razón, conocer <b>los indicadores de gestión</b> termina siendo, más que una opción, una necesidad. Los indicadores de gestión son una expresión, valor, o signo cuantitativo o cualitativo que muestran el desempeño o el logro en el proceso; sin embargo, en sí mismo el indicador no dice mucho; por esta razón, es preciso también definir valores de referencia para ser comparados a la luz de una meta u objetivo. Un indicador puede ser la evidencia del avance o estado de un proceso específico, pero el conjunto de varios indicadores bien analizados puede mostrar la situación de la empresa. La principal función de los indicadores de gestión es la de evaluar la implementación de la planeación estratégica y el alcance de sus propósitos; por esta razón, dentro de sus características principales, se encuentra el ser accesible, explícito (concreto), objetivo, sensible, fidedigno y, sobre todo, pertinente. 



    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-8
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3
                p.text-black Los principales motivadores para hacer uso de los indicadores de gestión son:
            .col-lg-9.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.mb-sm-3
                ul.lista-ul--color.nar
                  li 
                    i.fas.fa-check
                    | Contribuyen activamente y de manera contundente en la toma de decisiones.
                  li 
                    i.fas.fa-check
                    | Hacen manifiesta la eficiencia de las actividades y acciones de la empresa, conjuntamente.                  
                  li 
                    i.fas.fa-check
                    | Facilitan la identificación de las problemáticas que se presentan y las que podrían llegar a surgir.

    p.mb-5 Existen diversos tipos de indicadores de gestión:
    figure.mb-5 
      img(src='@/assets/curso/temas/tema2/img-12.png')

    p.mb-5 Ahora, para generar o crear indicadores de gestión, se deben tener en cuenta diferentes pasos, evidenciados en la Figura 3, porque el nivel de credibilidad y certeza del indicador dependerá de su asertividad en la formulación. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3 
          br
          em Pasos para generar indicadores de gestión

        figure.px-3
          img(src='@/assets/curso/temas/tema2/img-13.svg')  

        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p Como lo indican García y Carrillo: “La necesidad de obtener información oportuna, fiable y rápida para que las empresas puedan controlar la evolución de su actividad y, más concretamente, los resultados obtenidos, hace necesaria la generación de indicadores que permitan, en primer lugar, medir la actuación de los diferentes responsables; en segundo lugar, valorar e informar sobre el cumplimiento y evolución de los objetivos fijados; y, por último, prever la evolución presente y futura del negocio”. (p.16) 
          .row.align-items-end
            .col
              .bloque-texto-e__autor
                .h5.mb-0 García y Carrillo(p.16) 
                  |      
                  i.fas.fa-quote-right

    p.mb-5 En ámbitos de la innovación, también existen indicadores útiles para medir avances en la materia; enunciemos algunos ejemplos: 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-14.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-11-
            .p-4
              p.text-center Cantidad de propuestas (nuevas ideas).

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-15.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-1
            .p-4
              p.text-center Porcentaje de ideas seleccionadas para su desarrollo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-16.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-11-
            .p-4
              p.text-center Cantidad de proyectos o propuestas sin éxito.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/img-17.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.fnd-11-
                .p-4
                  p.text-center Ingresos generados por nuevas ideas.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/img-18.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.fnd-1
                .p-4
                  p.text-center Porcentaje de ventas de nuevos productos.    

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Informes de diagnóstico

    p.mb-5 Para finalizar, hablemos sobre los informes de diagnóstico, y para hacerlo, lo invitamos a ver el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fj3zHwTwVsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.mb-5 Finalizamos así la temática sobre innovación, análisis y diagnóstico empresarial.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4.fnd-2
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
