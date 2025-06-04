# 🧠 Pokédex - Examen Práctico SPA React 19

Aplicación web tipo Pokédex desarrollada como examen práctico. Es una SPA (Single Page Application) creada con **React 19** y **Vite**, que consume datos desde la **PokéAPI** y permite explorar, buscar y guardar Pokémon favoritos.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React 19
- ⚡ Vite
- 🔄 React Router DOM
- 🌐 Axios
- 💾 localStorage
- 🔔 Toasts personalizados
- 🎨 CSS personalizado

---

## 🛠️ Instalación y ejecución local

1. Clona este repositorio:

```bash
git clone https://github.com/SergioReyesGuerra/Pokedex.git
cd Pokedex
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación:

```bash
npm run dev
```

4. Abre en tu navegador:

```
http://localhost:5173
```

---

## 🧭 Navegación

La aplicación cuenta con **3 rutas principales**:

- `/` → Página de inicio con presentación y botones de acceso rápido
- `/items` → Pokédex con buscador, favoritos, loader y notificaciones
- `/contact` → Formulario de contacto simulado

---

## 🎮 Funcionalidades principales

### 📦 Pokédex

- Consulta 50 Pokémon desde la [PokéAPI](https://pokeapi.co)
- Muestra sprite, nombre y tipo
- Buscador con **debounce**
- Marcado de favoritos ❤️ (guardados en `localStorage`)
- Loader visual mientras carga ⏳
- Notificaciones tipo toast al marcar/desmarcar favoritos 🔔

### 📄 Home

- Mensaje de bienvenida
- Imagen destacada
- Navegación rápida a otras rutas

### 📬 Contacto

- Formulario básico con campos: nombre, correo, mensaje
- Muestra alerta de éxito simulando envío

---


---

## 👨‍💻 Autor

**Sergio Reyes Guerra**  
Email: sergio.reyes@tecsup.edu.pe  
Proyecto para evaluación del curso React - TECSUP
