import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from "@angular/core";

import { Place } from "../place.model";
import { PlacesComponent } from "../places.component";
import { PlacesContainerComponent } from "../places-container/places-container.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-available-places",
  standalone: true,
  templateUrl: "./available-places.component.html",
  styleUrl: "./available-places.component.css",
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFecthing = signal(true);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.httpClient.get<{ places: Place[] }>("http://localhost:3000/places").subscribe({
      next: (res) => this.places.set(res.places),
      complete: () => this.isFecthing.set(false),
      error: (error) => console.log(error),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSelectPlace(place: Place) {
    this.httpClient
      .put("http://localhost:3000/user-places", {
        placeId: place.id,
      })
      .subscribe({
        next: (res) => console.log(res),
        error: (error) => console.log(error),
      });
  }
}
