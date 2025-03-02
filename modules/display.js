const { readDatabase } = require("./readDB");

const displayAllBooks = async () => {
  let books = await readDatabase();

  if (books.length === 0) {
    console.log("📚 Tidak ada buku dalam arsip.");
    return;
  }

  console.log("\n📚 Daftar Buku:");
  const tableData = books.map((book, index) => ({
    No_Buku: index + 1,
    Judul: book.title,
    Penulis: book.author,
    Tahun: book.year,
    Penerbit: book.publisher,
    Genre: book.genre,
    Halaman: book.pages,
    ISBN: book.isbn,
    Status: book.status,
  }));

  console.table(tableData);
};

