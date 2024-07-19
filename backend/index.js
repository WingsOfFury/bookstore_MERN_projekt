import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware um das request body zu parsen
app.use(express.json());

// Middleware für die Handhabung der CORS-Richtlinie
// Option 1: Alle Origins mit dem Standardwert von Cors zulassen

app.use(cors());

// Option 2: Custom Origins erlauben

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Willkommen zum MERN Stack Projekt.");
});

// Benutze die Bücher Routen
app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App ist mit der Datenbank verbunden.");
    app.listen(PORT, () => {
      console.log(`App lauscht auf Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Zwischen Zeile 16 bis 119 habe ich den unteren Code benutzt um CRUD Operationen durchzuführen

// // Route zum speichern eines neuen Buches
// app.post("/books", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message:
//           "Senden Sie alle erforderlichen Felder: title, author publishYear",
//       });
//     }
//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     };

//     const book = await Book.create(newBook);

//     return response.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Route um alle Buecher aus der Datenbank abzurufen
// app.get("/books", async (request, response) => {
//   try {
//     const books = await Book.find({});

//     return response.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Route um ein Buch aus der Datenbank per ID abzurufen
// app.get("/books/:id", async (request, response) => {
//   try {
//     const { id } = request.params;

//     const book = await Book.findById(id);

//     return response.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Route um ein Buch update durchzuführen
// app.put("/books/:id", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message:
//           "Senden Sie alle erforderlichen Felder: title, author, publishYear",
//       });
//     }

//     const { id } = request.params;

//     const result = await Book.findByIdAndUpdate(id, request.body);

//     if (!result) {
//       return response.status(400).json({ message: "Buch nicht gefunden" });
//     }

//     return response
//       .status(200)
//       .send({ message: "Buch erfolgreich aktualisiert" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Route um ein Buch zu löschen
// app.delete("/books/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: "Buch nicht gefunden" });
//     }

//     return response.status(200).send({ message: "Buch erfolgreich gelöscht" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });
