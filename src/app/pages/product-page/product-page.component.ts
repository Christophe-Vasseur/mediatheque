import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  // Tableau des films
  films: any[] = [
    {
      id: 1,
      nom: "La cité de la peur",
      real: "Alain Berbérian",
      synopsis: "Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film `Red is Dead'. Malheureusement, celui-ci est d'une telle faiblesse que personne ne souhaite en faire l'écho. Cependant, lorsque les projectionnistes du long-métrage en question meurent chacun leur tour dans d'étranges circonstances, `Red is dead' bénéficie d'une incroyable publicité. Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film.",
      annee: 1994,
      img: "https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
      details: ""
    },
    {
    id: 2,
    nom: "Le parrain",
    real: "Francis Ford Coppola",
    synopsis: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.",
    annee: 1972,
    img: "",
    details: ""
    },
    {
    id: 3,
    nom: "Fight Club",
    real: "David Fincher",
    synopsis: "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'énergie négative de chacun.",
    annee: 1999,
    img: "",
    details: ""
    },
    {
    id: 4,
    nom: "American Pie : No Limit !",
    real: "Steve Rash",
    synopsis: "Après avoir ruiné la cérémonie de remise des diplômes de son lycée, Matt Stifler, petit frère de Steve, est envoyé à Toal Oaks durant tout l'été en guise de punition. Mais le jeune... ",
    annee: 2005,
    img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL4Z73/image?locale=fr-fr&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
    details: ""
    },
    {
      id: 5,
      nom: "Tarantula",
      real: "Jack Arnold",
      synopsis: "Dans un laboratoire isolé, le Professeur Gerald Deemer travaille sur un nutriment qui permettrait de soulager la famine que menace de provoquer l'accroissement de population. Ses expérimentations ont abouti à certains résultats ; mais au prix de sérieux déboires. Un jour qu'il s'est absenté, deux de ses collègues s'injectent le nutriment...",
      annee: 1955,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tarantula_1955.jpg/290px-Tarantula_1955.jpg",
      details: ""
      },
    ];

    // Liste des albums
    albums: any[] = [
      {
      id: 4,
      nom: "The Dark Side of the Moon",
      artiste: "Pink Floyd",
      annee: 1973,
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg",
      details: ""
      },
      {
        id: 5,
        nom: "Space Oddity",
        artiste: "David Bowie",
        annee: 1969,
        img: "https://m.media-amazon.com/images/I/81GaOhfPyFL._SL1300_.jpg",
        details: ""
      },
      {
        id: 6,
        nom: "Becassine",
        artiste: "Chantal Goya",
        annee: 1979,
        img: "https://fr.shopping.rakuten.com/photo/321257880.jpg",
        details: ""
      },
      {
        id: 7,
        nom: "Live And Dangerous",
        artiste: "Thin Lizzy",
        annee: 1978,
        img: "https://www.auxportesdumetal.com/reviews/ThinLizzy/thinlizzy-liveanddangerous170.jpg",
        details: ""
      },
      {
        id: 8,
        nom: "Surfing With The Alien",
        artiste: "Joe Satriani",
        annee: 1986,
        img: "https://m.media-amazon.com/images/I/818ZIp4Ez3L._SL1500_.jpg",
        details: ""
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

  public getListFilm(): any[] {
    return this.films;
  }

  public getListAlbum(): any[] {
    return this.albums;
  }

}
