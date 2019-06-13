export class Article {
    constructor(
        public id: string,
        public title: string,
        public categorieUser: string,
        public categorieArticle: string,
        public image: string,
        public description: string,
        public price: number,
        public reference: string,
        public couleur: string,
        public promo?: number,
        public taille?: string|number
    ) {}
}