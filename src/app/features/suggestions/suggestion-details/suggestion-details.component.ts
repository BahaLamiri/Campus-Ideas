import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../core/models/suggestion';
import { SuggestionService } from '../../../core/Service/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css',
})
export class SuggestionDetailsComponent implements OnInit {
  id!: number;
  suggestion?: Suggestion;
  suggestions: Suggestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SuggestionService
  ) {}

  like(s: Suggestion) {
    const newLikes = s.nbLikes + 1;

    this.service.updateLikes(s.id, newLikes).subscribe((updated) => {
      s.nbLikes = updated.nbLikes;
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getSuggestionById(id).subscribe((data) => {
      this.suggestion = data;
    });
  }

  back() {
    this.router.navigate(['/suggestions']);
  }
}
