export class BookDetails {
  constructor(id, author, title, category, coverart) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.category = category;
    this.coverart = coverart;

    if(typeof this.author !== 'undefined'){
      this.author.map(a => a+", ".slice(0,-2))
    }
  }
}

export class CoverArt{
    constructor(width, height, url) {
        this.width = width;
        this.height = height;
        this.url = url;
    }
}