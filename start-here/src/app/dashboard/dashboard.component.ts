import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface Trek {
  id: number;
  name: string;
  location: string;
  duration: string;
  difficulty: string;
  price: string;
  rating: number;
  image: string;
  date: string;
  groupSize: string;
  highlights: string[];
}

interface Filter {
  id: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class DashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  selectedFilter: string = 'all';

  treks: Trek[] = [
    {
      id: 1,
      name: "Kumara Parvatha Trek",
      location: "Coorg, Karnataka",
      duration: "2 Days",
      difficulty: "Challenging",
      price: "₹2,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "Feb 15-16, 2026",
      groupSize: "15-20",
      highlights: ["Stunning peak views", "Dense forests", "Camping under stars"]
    },
    {
      id: 2,
      name: "Kudremukh Trek",
      location: "Chikmagalur, Karnataka",
      duration: "2 Days",
      difficulty: "Moderate",
      price: "₹2,799",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      date: "Feb 22-23, 2026",
      groupSize: "15-25",
      highlights: ["Horse-face peak", "Grasslands", "Waterfalls"]
    },
    {
      id: 3,
      name: "Tadiandamol Trek",
      location: "Coorg, Karnataka",
      duration: "1 Day",
      difficulty: "Easy",
      price: "₹1,499",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      date: "Feb 18, 2026",
      groupSize: "20-30",
      highlights: ["Highest peak in Coorg", "Sunrise views", "Coffee plantations"]
    },
    {
      id: 4,
      name: "Mullayanagiri Trek",
      location: "Chikmagalur, Karnataka",
      duration: "1 Day",
      difficulty: "Easy",
      price: "₹1,299",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      date: "Feb 20, 2026",
      groupSize: "20-30",
      highlights: ["Highest peak in Karnataka", "Temple visit", "Panoramic views"]
    },
    {
      id: 5,
      name: "Skandagiri Night Trek",
      location: "Bangalore Rural, Karnataka",
      duration: "1 Day",
      difficulty: "Moderate",
      price: "₹1,199",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      date: "Feb 24, 2026",
      groupSize: "25-35",
      highlights: ["Night trek", "Sunrise views", "Ancient fort ruins"]
    },
    {
      id: 6,
      name: "Savandurga Trek",
      location: "Magadi, Karnataka",
      duration: "1 Day",
      difficulty: "Moderate",
      price: "₹999",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop",
      date: "Feb 25, 2026",
      groupSize: "20-30",
      highlights: ["Asia's largest monolith", "Rock climbing", "Temple visit"]
    }
  ];

  filters: Filter[] = [
    { id: 'all', label: 'All Treks' },
    { id: 'easy', label: 'Easy' },
    { id: 'moderate', label: 'Moderate' },
    { id: 'challenging', label: 'Challenging' }
  ];

  get filteredTreks(): Trek[] {
    if (this.selectedFilter === 'all') {
      return this.treks;
    }
    return this.treks.filter(trek =>
      trek.difficulty.toLowerCase() === this.selectedFilter
    );
  }

  setFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  getDifficultyColor(difficulty: string): string {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'moderate': return 'warning';
      case 'challenging': return 'danger';
      default: return 'medium';
    }
  }

  bookTrek(trek: Trek): void {
    console.log('Booking trek:', trek.name);
    // Implement booking logic here
  }

}
