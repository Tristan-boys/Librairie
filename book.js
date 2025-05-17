export class Book {
    title
    autor

    /**
     * Créer un Book.
     * @param _title string
     * @param _autor string
     */
    constructor(_title, _autor) {
        this.title = _title;
        this.autor = _autor;
    }

    /**
     * Retourne un string des détails de l'objet Book.
     */
    getDetails() {
        return "Titre : " + this.title + " / Auteur : " + this.autor;
    }
}