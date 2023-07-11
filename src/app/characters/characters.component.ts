import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = []; // Arreglo para almacenar todos los personajes
  displayedCharacters: any[] = []; // Arreglo para almacenar los personajes mostrados en pantalla
  selectedCharacter: any = null; // Variable para almacenar el personaje seleccionado

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCharacters(); // Obtener la lista de personajes al inicializar el componente
  }

  getCharacters() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(data => {
      this.characters = data.results; // Almacenar los personajes obtenidos de la API
      this.displayedCharacters = this.getRandomCharacters(4); // Mostrar inicialmente 4 personajes aleatorios
    });
  }

getRandomCharacters(count: number): any[] {
  const totalCharacters = this.characters.length;
  const randomCharacters: any[] = [];
  const availableIndices = [...Array(totalCharacters).keys()]; // Crear un arreglo con los índices disponibles

  while (randomCharacters.length < count && availableIndices.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const characterIndex = availableIndices[randomIndex];
    const randomCharacter = this.characters[characterIndex];

    randomCharacters.push(randomCharacter);
    availableIndices.splice(randomIndex, 1); // Eliminar el índice seleccionado de los disponibles
  }

  return randomCharacters;
}

  showCharacterDetails(character: any) {
    this.selectedCharacter = character; // Asignar el personaje seleccionado
  }

  closeCharacterDetails() {
    this.selectedCharacter = null; // Cerrar el panel de detalles del personaje
  }
}
