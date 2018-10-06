export class BookDetails {
  constructor(id, author, title, category, coverart) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.category = category;
    this.coverart = coverart;
  }
}

export class CoverArt{
    constructor(width, height, url) {
        this.width = width;
        this.height = height;
        this.url = url;
    }
}