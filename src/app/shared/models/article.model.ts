export class Article {
    constructor(
        public title: string,
        public categorie: string,
        public image: string,
        public description: string,
        public price: number,
        public reference: string,
        public promo?: number
    ) {}
}
