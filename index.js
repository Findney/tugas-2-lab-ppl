const readline = require("readline");
const { displayAllBooks, searchBookByName } = require("./modules/display");
const { addBook } = require("./modules/add");
const { deleteBook } = require("./modules/delete");
const { updateBook } = require("./modules/update");
const { exportToCSV } = require("./modules/export");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const showMenu = () => {
    console.log("\n📚 Sistem Arsip Buku");
    console.log("1. Lihat semua buku");
    console.log("2. Cari buku");
    console.log("3. Tambah buku baru");
    console.log("4. Hapus buku");
    console.log("5. Update buku");
    console.log("6. Export ke CSV");
    console.log("7. Keluar");

    rl.question("\nPilih menu (atau tekan 'q' untuk keluar): ", async (choice) => {
        if (choice.toLowerCase() === "q" || choice === "7") {
            console.log("👋 Terima kasih telah menggunakan sistem!");
            rl.close();
            return;
        }

        switch (choice) {
            case "1":
                await displayAllBooks();
                break;

            case "2":
                rl.question("Masukkan nama buku yang ingin dicari (atau 'q' untuk kembali): ", async (name) => {
                    if (name.toLowerCase() === "q") return showMenu();
                    await searchBookByName(name);
                    showMenu();
                });
                return;

            case "3":
                handleAddBook();
                return;

            case "4":
                rl.question("Masukkan nomor buku yang ingin dihapus (atau 'q' untuk kembali): ", async (index) => {
                    if (index.toLowerCase() === "q") return showMenu();
                    await deleteBook(index);
                    showMenu();
                });
                return;

            case "5":
                handleUpdateBook();
                return;

            case "6":
                await exportToCSV();
                showMenu();
                return;

            default:
                console.log("❌ Pilihan tidak valid.");
        }
        showMenu();
    });
};

// Fungsi untuk menangani penambahan buku dengan opsi keluar
const handleAddBook = () => {
    rl.question("Masukkan judul buku (atau 'q' untuk kembali): ", (title) => {
        if (title.toLowerCase() === "q") return showMenu();

        rl.question("Masukkan penulis: ", (author) => {
            rl.question("Masukkan tahun: ", (year) => {
                rl.question("Masukkan penerbit: ", (publisher) => {
                    rl.question("Masukkan genre: ", (genre) => {
                        rl.question("Masukkan jumlah halaman: ", (pages) => {
                            rl.question("Masukkan ISBN: ", async (isbn) => {
                                await addBook({ title, author, year, publisher, genre, pages, isbn, status: "Tersedia" });
                                showMenu();
                            });
                        });
                    });
                });
            });
        });
    });
};

// Fungsi untuk menangani pembaruan buku dengan opsi keluar
const handleUpdateBook = () => {
    rl.question("Masukkan nomor buku yang ingin diperbarui (atau 'q' untuk kembali): ", (index) => {
        if (index.toLowerCase() === "q") return showMenu();

        console.log("\nPilih atribut yang ingin diperbarui:");
        console.log("1. Judul");
        console.log("2. Penulis");
        console.log("3. Tahun");
        console.log("4. Penerbit");
        console.log("5. Genre");
        console.log("6. Jumlah Halaman");
        console.log("7. ISBN");
        console.log("8. Status (Tersedia/Dipinjam)");

        rl.question("\nMasukkan nomor atribut (atau 'q' untuk kembali): ", (attrChoice) => {
            if (attrChoice.toLowerCase() === "q") return showMenu();

            const attributes = ["title", "author", "year", "publisher", "genre", "pages", "isbn", "status"];
            const attrIndex = parseInt(attrChoice) - 1;

            if (attrIndex >= 0 && attrIndex < attributes.length) {
                const attribute = attributes[attrIndex];

                rl.question(`Masukkan nilai baru untuk ${attribute} (atau 'q' untuk kembali): `, async (newValue) => {
                    if (newValue.toLowerCase() === "q") return showMenu();
                    await updateBook(index, attribute, newValue);
                    showMenu();
                });
            } else {
                console.log("❌ Pilihan atribut tidak valid.");
                showMenu();
            }
        });
    });
};

showMenu();