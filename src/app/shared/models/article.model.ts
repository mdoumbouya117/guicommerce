export class Article {
    constructor(
        public id: string,
        public title: string,
        public categorie: string,
        public image: string,
        public description: string,
        public price: number,
        public reference: string,
        public couleur: string,
        public promo?: number,
        public taille?: string|number
    ) {}
}