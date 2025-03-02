const { readDatabase, writeDatabase } = require("./readDB");

const deleteBook = async (index) => {
  let books = await readDatabase();
  index = parseInt(index) - 1;

  if (index >= 0 && index < books.length) {
    console.log(`🗑️ Menghapus buku: ${books[index].title}`);
    books.splice(index, 1);
    await writeDatabase(books);
    console.log("✅ Buku berhasil dihapus.");
  } else {
    console.log("❌ Nomor buku tidak valid.");
  }
};

module.exports = { deleteBook };
