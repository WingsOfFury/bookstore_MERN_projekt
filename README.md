# Bookstore MERN Projekt
---
## Einleitung
Dies ist ein Full-Stack-Projekt, das auf dem MERN-Stack basiert: MongoDB, Express.js, React und Node.js. Das Projekt ist eine Buchverwaltungsanwendung, die es Benutzern ermöglicht, Bücher zu erstellen, anzuzeigen, zu bearbeiten und zu löschen.

---

## Video-Demonstration

Schau dir dieses kurze Video zur Demonstration der Funktionalität an:

[![Video Thumbnail](https://github.com/user-attachments/assets/dcfe0b6c-fff1-4025-9073-167ce728bfb5)](https://www.youtube.com/watch?v=R3nCoJjif7Q&feature=youtu.be)

---
## Screenshots

Als Tabelle
<img width="2550" alt="bookstore_MERN_projekt" src="https://github.com/user-attachments/assets/cb2122a3-335f-4164-be0b-00fc725aeb72">

---
Als Blog-Card
<img width="2558" alt="bookstore_MERN_projekt_blog_card" src="https://github.com/user-attachments/assets/273cc57c-c7dc-4994-8c49-9804e9cfba65">

---
Buch erstellen
<img width="2560" alt="bookstore_MERN_projekt_buch_erstellen" src="https://github.com/user-attachments/assets/f39bb78c-6aa0-43c0-aba8-15e97a43f134">

---
Buch erstellt! <br /> Unten in der linken Ecke wird immer ein Pop-up-Fenster von Snackbar eingeblendet, wenn man CRUD Operationen durchführt.
<img width="2560" alt="bookstore_MERN_projekt_buch_erstellt" src="https://github.com/user-attachments/assets/c2f0906e-99b6-419c-b74e-9fa7f8226be0">

---

## Features
- **Bücher erstellen, lesen, aktualisieren und löschen (CRUD)**
- **Modale Fenster zur Anzeige von Buchdetails**
- **Verwendung von Tailwind CSS für das Styling**
- **React Router für die Navigation**
- **Postman zur API-Tests**

## Technologie-Stack
### Frontend
- **React**: Für den Aufbau der Benutzeroberfläche
- **React Router Dom**: Für die Verwaltung des Client-seitigen Routings
- **Axios**: Für HTTP-Anfragen
- **Notistack**: Für Benachrichtigungen und Snackbar
- **Tailwind CSS**: Für das Styling
- **React Icons**: Für Icons

### Backend
- **Node.js**: Für die serverseitige Laufzeitumgebung
- **Express.js**: Für die Erstellung der RESTful API
- **MongoDB**: Für die Datenbank
- **Mongoose**: Für das Objekt-Daten-Modell (ODM)
- **Cors**: Für Cross-Origin Resource Sharing

## Installation und Einrichtung
### Voraussetzungen
- Node.js und npm
- MongoDB

### Backend
1. Repository klonen
    ```bash
    git clone https://github.com/WingsOfFury/bookstore_MERN_projekt
    ```
2. In das Backend-Verzeichnis wechseln
    ```bash
    cd backend
    ```
3. Abhängigkeiten installieren
    ```bash
    npm install
    ```
4. Umgebungsvariablen einrichten
   - Erstelle eine `.env` Datei im Backend-Verzeichnis und füge die folgenden Umgebungsvariablen hinzu:
     ```javascript
     PORT=5000
     MONGO_URI= "your_mongodb_uri"
     ```
5. Backend starten
    ```bash
    npm run dev
    ```

### Frontend
1. In das Frontend-Verzeichnis wechseln
    ```bash
    cd frontend
    ```
2. Abhängigkeiten installieren
    ```bash
    npm install
    ```
3. Frontend starten
    ```bash
    npm run dev
    ```

## Projektdetails
### Frontend-Dateien
- **App.jsx**
    ```javascript
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import CreateBooks from './pages/CreateBooks';
    import ShowBook from './pages/ShowBook';
    import EditBook from './pages/EditBook';
    import DeleteBook from './pages/DeleteBook';

    const App = () => {
      return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBooks />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      );
    };

    export default App;
    ```

- **main.jsx**
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './index.css';
    import { BrowserRouter } from 'react-router-dom';
    import { SnackbarProvider } from 'notistack';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    );
    ```

- **package.json**
    ```json
    {
      "name": "frontend",
      "private": true,
      "version": "1.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
      },
      "dependencies": {
        "axios": "^1.7.2",
        "notistack": "^3.0.1",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-icons": "^5.2.1",
        "react-router-dom": "^6.25.1"
      },
      "devDependencies": {
        "@types/react": "^18.3.3",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.3.1",
        "autoprefixer": "^10.4.19",
        "eslint": "^8.57.0",
        "eslint-plugin-react": "^7.34.3",
        "eslint-plugin-react-hooks": "^4.6.2",
        "eslint-plugin-react-refresh": "^0.4.7",
        "postcss": "^8.4.39",
        "tailwindcss": "^3.4.6",
        "vite": "^5.3.4"
      }
    }
    ```

### Backend-Dateien
- **bookModel.js**
    ```javascript
    import mongoose from "mongoose";

    const bookSchema = mongoose.Schema(
      {
        title: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
        publishYear: {
          type: String,
          required: true,
        },
      },
      {
        timestamps: true,
      }
    );

    export const Book = mongoose.model("Book", bookSchema);
    ```

- **booksRoute.js**
    ```javascript
    import express from "express";
    import { Book } from "../models/bookModel.js";

    const router = express.Router();

    // Route zum speichern eines neuen Buches
    router.post("/", async (request, response) => {
      try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
          return response.status(400).send({
            message: "Senden Sie alle erforderlichen Felder: title, author, publishYear",
          });
        }
        const newBook = {
          title: request.body.title,
          author: request.body.author,
          publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    // Route um alle Buecher aus der Datenbank abzurufen
    router.get("/", async (request, response) => {
      try {
        const books = await Book.find({});

        return response.status(200).json({
          count: books.length,
          data: books,
        });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    // Route um ein Buch aus der Datenbank per ID abzurufen
    router.get("/:id", async (request, response) => {
      try {
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    // Route um ein Buch update durchzuführen
    router.put("/:id", async (request, response) => {
      try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
          return response.status(400).send({
            message: "Senden Sie alle erforderlichen Felder: title, author, publishYear",
          });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
          return response.status(400).json({ message: "Buch nicht gefunden" });
        }

        return response.status(200).send({ message: "Buch erfolgreich aktualisiert" });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    // Route um ein Buch zu löschen
    router.delete("/:id", async (request, response) => {
      try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
          return response.status(404).json({ message: "Buch nicht gefunden" });
        }

        return response.status(200).send({ message: "Buch erfolgreich gelöscht" });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    export default router;
    ```

- **index.js**
    ```javascript
    import express from "express";
    import { PORT, mongoDBURL } from "./config.js";
    import mongoose from "mongoose";
    import booksRoute from "./routes/booksRoute.js";
    import cors from "cors";

    const app = express();

    // Middleware um das request body zu parsen
    app.use(express.json());

    // Middleware für die Handhabung der CORS-Richtlinie
    app.use(cors());

    app.use("/api/books", booksRoute);

    app.get("/", (request, response) => {
      response.send("Willkommen zu meiner Buch API.");
    });

    mongoose
      .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Verbindung zur MongoDB-Datenbank erfolgreich");
        app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
      })
      .catch((error) => {
        console.log(error.message);
        process.exit(1);
      });
    ```

## API-Endpoints
- **POST** `/api/books` : Ein neues Buch erstellen
- **GET** `/api/books` : Alle Bücher abrufen
- **GET** `/api/books/:id` : Ein Buch per ID abrufen
- **PUT** `/api/books/:id` : Ein Buch aktualisieren
- **DELETE** `/api/books/:id` : Ein Buch löschen

## Tests
Verwende Postman, um die API-Endpunkte zu testen:
- **Erstelle ein neues Buch**: Sende eine POST-Anfrage an `/api/books` mit dem Buchobjekt im Anfragetext.
- **Zeige alle Bücher**: Sende eine GET-Anfrage an `/api/books`.
- **Zeige ein bestimmtes Buch**: Sende eine GET-Anfrage an `/api/books/:id`.
- **Aktualisiere ein Buch**: Sende eine PUT-Anfrage an `/api/books/:id` mit den aktualisierten Feldern im Anfragetext.
- **Lösche ein Buch**: Sende eine DELETE-Anfrage an `/api/books/:id`.
