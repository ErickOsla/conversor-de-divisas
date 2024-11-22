# **Conversor de Divisas - Ionic App**

Una aplicación híbrida desarrollada con **Ionic Framework** para convertir montos en quetzales (GTQ) a dólares estadounidenses (USD) utilizando una tasa fija de 8 Q por dólar.

---

## **Características**
- **Conversión rápida:** Ingresa una cantidad en quetzales y obtén el equivalente en dólares al instante.
- **Interfaz amigable:** Diseño limpio y fácil de usar con componentes modernos de Ionic.
- **Tasa fija:** Conversión basada en una tasa predefinida (1 USD = 8 Q).

---

Requisitos
Para ejecutar esta aplicación, necesitas instalar lo siguiente:

Node.js (versión 14 o superior): Descargar Node.js
Ionic CLI: Instálalo globalmente ejecutando:

bash
npm install -g @ionic/cli


Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

Clona este repositorio:
bash
Copy code
git clone https://github.com/tu-usuario/conversor-de-divisas.git
Entra en el directorio del proyecto:
bash
Copy code
cd conversor-de-divisas
Instala las dependencias del proyecto:
bash
Copy code
npm install
Ejecuta la aplicación en el navegador:
bash
Copy code
ionic serve

---

Estructura del Proyecto
El proyecto sigue la estructura estándar de Ionic:

plaintext
src/
├── app/
│   ├── tab1/           # Lógica y diseño de la pestaña 1
│   ├── tab2/           # Espacio reservado para futuras funcionalidades
│   ├── tab3/           # Espacio reservado para futuras funcionalidades
├── assets/             # Recursos estáticos como imágenes y fuentes
├── environments/       # Configuraciones del entorno
├── theme/              # Configuración de estilos globales

---

Uso de la Aplicación
Ingresa un monto en quetzales en el campo de entrada.
Presiona el botón Convertir.
Visualiza el resultado en dólares.
Tecnologías Utilizadas
Ionic Framework: Para el desarrollo de la interfaz híbrida.
Angular: Para la lógica y gestión de componentes.
TypeScript: Para una programación más robusta y tipada.
HTML5 y SCSS: Para el diseño de la interfaz.
