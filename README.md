# Proyecto de Juegos

Este proyecto es una aplicación web que permite explorar y filtrar juegos de diferentes géneros, plataformas y etiquetas. Está construido con **React** y utiliza la API de RAWG para obtener datos sobre juegos. La aplicación incluye funcionalidades de búsqueda, filtrado y navegación entre páginas.

## Características Principales

- **Exploración de Juegos**: Los usuarios pueden explorar una lista de juegos populares con detalles como nombre, imagen, puntuación y más.
- **Filtros Avanzados**: Los juegos se pueden filtrar por año de lanzamiento, género, plataforma, desarrollador y etiquetas.
- **Detalles del Juego**: Al hacer clic en un juego, los usuarios pueden ver información detallada, como descripción, géneros, plataformas y tráileres (si están disponibles).
- **Búsqueda**: Los usuarios pueden buscar juegos por nombre utilizando el campo de búsqueda.
- **Diseño Responsivo**: La aplicación está diseñada para funcionar en dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Axios**: Para realizar solicitudes HTTP a la API de RAWG.
- **React Router**: Para gestionar la navegación entre páginas.
- **Vite**: Herramienta de construcción para un desarrollo rápido y eficiente.
- **CSS**: Para estilos personalizados y diseño responsivo.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Accede al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    ```

5. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

## Hosting

La aplicación está hospedada en **Vercel**. Puedes acceder a la versión en producción aquí:

[**Ver Proyecto en Vivo**](https://juego-app.vercel.app/)

## Estructura del Proyecto

- **/src**: Contiene el código fuente de la aplicación.
  - **/components**: Componentes reutilizables como filtros, tarjetas de juegos y detalles del juego.
  - **/services**: Lógica para interactuar con la API de RAWG.
  - **/styles**: Archivos CSS para los estilos de la aplicación.
- **/public**: Archivos estáticos como imágenes y el archivo `index.html`.

## Cómo Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```
3. Realiza tus cambios y haz commit:
    ```bash
    git commit -am 'Agrega nueva funcionalidad'
    ```
4. Haz push a la rama:
    ```bash
    git push origin feature/nueva-funcionalidad
    ```
5. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).