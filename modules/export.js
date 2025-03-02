const fs = require("fs");
const path = require("path");
const { readDatabase } = require("./readDB");

const exportToCSV = async () => {
    let books = await readDatabase();

    if (books.length === 0) {
        console.log("❌ Tidak ada data untuk diekspor.");
        return;
    }

    const filePath = path.join(__dirname, "../databases/arsip_buku.csv");

    // Membuat header CSV
    const headers = ["Title", "Author", "Year", "Publisher", "Genre", "Pages", "ISBN", "Status"];

    // Mengubah data menjadi format CSV (dengan pemisah koma)
    const csvRows = books.map(book => [
        `"${book.title}"`,
        `"${book.author}"`,
        book.year,
        `"${book.publisher}"`,
        `"${book.genre}"`,
        book.pages,
        book.isbn,
        `"${book.status}"`
    ].join(","));

    // Menggabungkan header dan data
    const csvContent = [headers.join(","), ...csvRows].join("\n");

    // Menulis file CSV
    fs.writeFileSync(filePath, csvContent, "utf8");

    console.log(`✅ Data berhasil diekspor ke ${filePath}`);
};

module.exports = { exportToCSV };