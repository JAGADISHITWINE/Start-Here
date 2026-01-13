import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface Tour {
  id: number;
  name: string;
  location: string;
  duration: string;
  difficulty: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  nextDate: string;
}

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
})
export class ToursComponent  implements OnInit {

  tours: Tour[] = [];
  filteredTours: Tour[] = [];

  filters = {
    search: '',
    difficulty: 'all',
    category: 'all',
    priceRange: 'all',
    duration: 'all'
  };

  categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'family', label: 'Family Trips' },
    { value: 'weekend', label: 'Weekend Getaways' }
  ];

  difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'easy', label: 'Easy' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'challenging', label: 'Challenging' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadTours();
  }

  loadTours() {
    this.tours = [
      {
        id: 1,
        name: "Kumara Parvatha Trek",
        location: "Coorg, Karnataka",
        duration: "2 Days",
        difficulty: "Challenging",
        price: "₹2,999",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        category: "trekking",
        nextDate: "Feb 15-16, 2026"
      },
      {
        id: 2,
        name: "Kudremukh Trek",
        location: "Chikmagalur, Karnataka",
        duration: "2 Days",
        difficulty: "Moderate",
        price: "₹2,799",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        category: "trekking",
        nextDate: "Feb 22-23, 2026"
      },
      {
        id: 3,
        name: "Coorg Family Adventure",
        location: "Coorg, Karnataka",
        duration: "3 Days",
        difficulty: "Easy",
        price: "₹4,999",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        category: "family",
        nextDate: "Feb 20-22, 2026"
      },
      {
        id: 4,
        name: "Dandeli River Rafting",
        location: "Dandeli, Karnataka",
        duration: "2 Days",
        difficulty: "Moderate",
        price: "₹3,499",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
        category: "adventure",
        nextDate: "Feb 18-19, 2026"
      },
      {
        id: 5,
        name: "Skandagiri Weekend Trek",
        location: "Bangalore Rural, Karnataka",
        duration: "1 Day",
        difficulty: "Moderate",
        price: "₹1,199",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
        category: "weekend",
        nextDate: "Feb 24, 2026"
      }
    ];
    this.filteredTours = [...this.tours];
  }

  applyFilters() {
    this.filteredTours = this.tours.filter(tour => {
      const matchesSearch = tour.name.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                           tour.location.toLowerCase().includes(this.filters.search.toLowerCase());
      const matchesDifficulty = this.filters.difficulty === 'all' ||
                               tour.difficulty.toLowerCase() === this.filters.difficulty;
      const matchesCategory = this.filters.category === 'all' ||
                             tour.category === this.filters.category;

      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }

  viewDetails(tourId: number) {
    this.router.navigate(['/tour-details', tourId]);
  }

  getDifficultyColor(difficulty: string): string {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'moderate': return 'warning';
      case 'challenging': return 'danger';
      default: return 'medium';
    }
  }

}
