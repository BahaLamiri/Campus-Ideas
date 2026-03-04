import { Component } from '@angular/core';
import { Suggestion } from '../../../core/models/suggestion';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SuggestionService } from '../../../core/Service/suggestion.service';

@Component({
  selector: 'app-listesuggestion',
  templateUrl: './listesuggestion.component.html',
  styleUrl: './listesuggestion.component.css',
})
export class ListesuggestionComponent {
  suggestions: Suggestion[] = [];
  searchTerm: any;
  favorites: Suggestion[] = [];
  searchText: string = '';

  likeSuggestion(s: Suggestion) {
    const updatedSuggestion = {
      ...s,
      nbLikes: s.nbLikes + 1,
    };

    this.suggestionService
      .updateSuggestion(s.id, updatedSuggestion)
      .subscribe(() => {
        s.nbLikes++;
      });
  }
  deleteSuggestion(id: number) {
    this.suggestionService.deleteSuggestion(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }
  filteredSuggestions() {
    return this.suggestions.filter(
      (s) =>
        s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.suggestionService.getSuggestionsList().subscribe((data) => {
      this.suggestions = data;
    });
  }
}
