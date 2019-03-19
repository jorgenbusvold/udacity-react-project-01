import './icons/no-cover.png';

export class BookDetails {
  constructor(id, author, title, category, coverart) {
    this.id = id;
    this.title = title;
    this.category = category;

    if(typeof author !== 'undefined'){
      this.author = author.map(a => a+", ".slice(0,-2))
    }

    if(typeof coverart !== `undefined`){
      this.coverart = new CoverArt(
        130,
        190,
        coverart.thumbnail
      )
    }
    else{
      this.coverart = new CoverArt(
        130,
        190,
        './icons/no-cover.png'
      )
    }
  }
}

export class CoverArt{
    constructor(width, height, url) {
        this.width = width;
        this.height = height;

        if(typeof url !== `undefined`){
          this.url = url;
        }
        else{
          this.url = './icons/no-cover.png';
        }
        
    }
}