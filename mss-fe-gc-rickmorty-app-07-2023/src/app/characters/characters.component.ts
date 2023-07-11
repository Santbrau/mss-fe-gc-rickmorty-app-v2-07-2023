import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Earth",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Citadel of Ricks",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Dead",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Dead",
      "species": "Human",
      "gender": "Male",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
  ];

  displayedCharacters: any[] = [];
  selectedCharacter: any = null;

  ngOnInit() {
    this.displayedCharacters = this.getRandomCharacters(4);
  }
  
  getRandomCharacters(count: number): any[] {
    const totalCharacters = this.characters.length;
    const randomCharacters: any[] = [];
    const usedIndices: number[] = [];
  
    while (randomCharacters.length < count) {
      const randomIndex = Math.floor(Math.random() * totalCharacters);
  
      if (!usedIndices.includes(randomIndex)) {
        randomCharacters.push(this.characters[randomIndex]);
        usedIndices.push(randomIndex);
      }
    }
  
    return randomCharacters;
  }
  

  showCharacterDetails(character: any) {
    this.selectedCharacter = character;
  }

  closeCharacterDetails() {
    this.selectedCharacter = null;
  }
}