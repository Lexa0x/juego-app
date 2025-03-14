# Proyecto de Juegos

Este proyecto es una aplicación web que permite explorar y filtrar juegos de diferentes géneros, plataformas y etiquetas. Está construido usando **React**, con funcionalidades adicionales de filtrado y búsqueda, utilizando varias bibliotecas y herramientas modernas para mejorar la experiencia de desarrollo.

## Tecnologías y Bibliotecas

### **React**
La aplicación está construida con **React**, una biblioteca de JavaScript para la construcción de interfaces de usuario. React nos permite construir componentes reutilizables que facilitan la gestión del estado y la interacción con el DOM de manera eficiente.

### **Axios**
[Axios](https://axios-http.com/) es una biblioteca de JavaScript para hacer solicitudes HTTP. En este proyecto, se utiliza para realizar llamadas a la API de RAWG, que proporciona información sobre juegos, géneros, plataformas y etiquetas. Axios es especialmente útil porque maneja las solicitudes asíncronas de manera sencilla y permite trabajar con promesas.

### **React Router**
[React Router](https://reactrouter.com/) es una biblioteca de enrutamiento que permite la navegación entre diferentes vistas dentro de una aplicación de React. Utilizamos **React Router** para gestionar la navegación entre las distintas páginas de la aplicación, como la página de inicio y la página de detalles del juego.

### **Vite**
[Vite](https://vitejs.dev/) es una herramienta de construcción de proyectos que nos permite un desarrollo más rápido y eficiente. Vite proporciona una experiencia de desarrollo optimizada mediante la recarga en caliente y una construcción más rápida al compilar el código JavaScript en un servidor de desarrollo. Se utiliza para el montaje y la optimización de nuestro proyecto.

## Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Accede al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```

3. Instala las dependencias necesarias utilizando npm o yarn:

    Si usas npm:
    ```bash
    npm install
    ```

    Si usas yarn:
    ```bash
    yarn install
    ```

4. Para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:

    Si usas npm:
    ```bash
    npm run dev
    ```

    Si usas yarn:
    ```bash
    yarn dev
    ```

5. La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Hosteo

La aplicación está hospedada en **Vercel**. Puedes acceder a la versión en producción en la siguiente URL:

[https://juego-app.vercel.app/](https://juego-app.vercel.app/)

## Estructura del Proyecto

- **/src**: Contiene todo el código fuente del proyecto, incluidas las interfaces de usuario (componentes), servicios, y archivos relacionados con la configuración de la aplicación.
- **/public**: Archivos estáticos como el archivo `index.html`, imágenes y otros recursos públicos.
- **/services/api.js**: Contiene funciones que interactúan con la API de RAWG para obtener datos sobre juegos, géneros, plataformas y etiquetas.
- **/components**: Carpeta que contiene los componentes principales de la interfaz de usuario (filtros, detalles del juego, etc.).
- **/styles**: Archivos de hojas de estilo.

## Funcionalidades

- **Filtros de juegos**: Los usuarios pueden filtrar juegos por año de lanzamiento, género, plataforma, desarrollador y etiquetas.
- **Detalles del juego**: Al hacer clic en un juego en la lista, el usuario es llevado a una página con más detalles sobre el juego seleccionado.

## Contribuir

Si deseas contribuir a este proyecto, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
