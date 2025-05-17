export class Library {
    books = [];

    /**
     * Ajoute un objet Book dans le tableau de l'objet Library.
     * @param Book Book
     */
    addBook(Book) {
        this.books.push(Book);
    }

    /**
     * Retourne un élement HTML du tableau de l'objet Library.
     */
    listBooks() {
        const list = document.createElement("div");
        this.books.map((Book) => {
            const detail = document.createElement("p");
            detail.innerText = Book.getDetails();
            list.append(detail);
            console.log(Book.getDetails());
        });
        return list;
    }

    /**
     * Retourne un élement HTML du tableau de l'objet Library, trier par titre.
     * @param title string
     */
    findBookByTitle(title) {
        const list = document.createElement("div");
        this.books.map((Book) => {
            if(Book.title.includes(title)) {
                const detail = document.createElement("p");
                detail.innerText = Book.getDetails();
                list.append(detail);
            }
        });

        if(list.innerHTML === "") {
            list.append(document.createElement("p").innerText = "Le titre que vous cherchez n'existe pas dans la libraire.");
        }

        return list;
    }
}