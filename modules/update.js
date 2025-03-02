const { readDatabase, writeDatabase } = require("./readDB");

const updateBook = async (index, attribute, newValue) => {
    let books = await readDatabase();
    index = parseInt(index) - 1;

    if (index >= 0 && index < books.length) {
        if (books[index][attribute] !== undefined) {
            books[index][attribute] = newValue;
            await writeDatabase(books);
            console.log(`✏️ ${attribute} berhasil diperbarui menjadi: ${newValue}`);
        } else {
            console.log("❌ Atribut tidak valid. Pilih atribut yang benar.");
        }
    } else {
        console.log("❌ Nomor buku tidak valid.");
    }
};

module.exports = { updateBook };