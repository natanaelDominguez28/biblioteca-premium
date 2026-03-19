# 📚 Biblioteca Premium

> Explorá el catálogo de los autores más reconocidos del mundo y sus obras, en una interfaz limpia y elegante.

[![Angular](https://img.shields.io/badge/Angular-17-red?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![API](https://img.shields.io/badge/API-HAPI%20Books-orange?style=flat-square)](https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books)

---

## 🚀 Demo en vivo

> 🔗 **[Ver aplicación]( )** ← *(reemplazá con tu URL de Vercel/Netlify)*

---

## 📖 ¿De qué trata?

**Biblioteca Premium** es una aplicación web que consume la API pública **HAPI Books** (vía RapidAPI) para mostrar un catálogo de autores populares a nivel mundial junto con sus obras. El foco del proyecto está en la integración con servicios externos, el tipado correcto de los datos y una presentación visual cuidada con Bootstrap 5.

---

## ✨ Funcionalidades

- 📡 Consumo de la API REST **HAPI Books** mediante `HttpClient` y `RxJS`
- 📋 Listado de autores populares con sus libros presentados en tabla
- 🎨 Interfaz responsiva y estilizada con **Bootstrap 5**
- 🔷 Modelos tipados con **TypeScript** para mayor robustez del código
- ⚡ Configuración con **Server-Side Rendering (SSR)** via Angular Universal

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Rol en el proyecto |
|---|---|---|
| Angular | 17.3 | Framework principal |
| TypeScript | 5.4 | Tipado estático |
| Bootstrap | 5.3 | Diseño y componentes UI |
| RxJS | 7.8 | Manejo de datos asincrónicos |
| Angular SSR | 17.3 | Server-Side Rendering |
| HAPI Books API | — | Fuente de datos de libros y autores |

---

## ⚙️ Instalación local

### Requisitos
- Node.js 18+
- Angular CLI 17+
- API Key de [HAPI Books en RapidAPI](https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books) (gratis)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/natanaelDominguez28/biblioteca-premium.git
cd biblioteca-premium/biblioteca-premium

# 2. Instalar dependencias
npm install

# 3. Configurar tu API Key en src/environments/environment.ts
# apiKey: 'TU_API_KEY_AQUI'

# 4. Iniciar el servidor de desarrollo
ng serve
```

Luego abrí `http://localhost:4200` en tu navegador.

---

## 📸 Capturas

> *(Agregá acá 1-2 screenshots de la app corriendo)*

---

## 🧠 Lo que practiqué

- Separación de responsabilidades usando **servicios Angular** para encapsular las llamadas HTTP
- Tipado end-to-end con interfaces TypeScript para los modelos `Author` y `Book`
- Manejo de `Observables` con `RxJS` para consumir datos asincrónicos de una API externa
- Presentación estructurada de datos relacionados (autores → libros) en una UI responsiva

---

## 👤 Autor

**Natanael Domínguez**  
[GitHub](https://github.com/natanaelDominguez28)