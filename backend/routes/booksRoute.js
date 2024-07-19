import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route zum speichern eines neuen Buches
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message:
          "Senden Sie alle erforderlichen Felder: title, author publishYear",
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
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message:
          "Senden Sie alle erforderlichen Felder: title, author, publishYear",
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(400).json({ message: "Buch nicht gefunden" });
    }

    return response
      .status(200)
      .send({ message: "Buch erfolgreich aktualisiert" });
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

/* Die Middleware im index.js übernimmt jetzt alle Anfragen für ("/books"). 
Deswegen brauche ich hier in der booksRoute.js keine app.get() oder app.put() mehr und das Routing mit ("/books") ist dann auch überflüssig.
*/
