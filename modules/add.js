const { readDatabase, writeDatabase } = require("./readDB");

const addBook = async (book) => {
    let books = await readDatabase();
    books.push(book);
    await writeDatabase(books);
    console.log("✅ Buku berhasil ditambahkan!");
};

module.exports = { addBook };