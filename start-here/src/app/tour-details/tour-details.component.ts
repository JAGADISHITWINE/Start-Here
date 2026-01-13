import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
})
export class TourDetailsComponent  implements OnInit {

  tourId: number = 0;
  selectedSegment: string = 'overview';

  tour = {
    id: 1,
    name: "Kumara Parvatha Trek",
    location: "Coorg, Karnataka",
    duration: "2 Days / 1 Night",
    difficulty: "Challenging",
    price: 2999,
    rating: 4.8,
    reviewCount: 145,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800"
    ],
    overview: "Kumara Parvatha is the second highest peak in Karnataka and offers one of the most challenging treks in the Western Ghats. The trek takes you through dense forests, rocky terrains, and offers breathtaking views from the summit.",
    highlights: [
      "Summit at 1,712 meters above sea level",
      "Trek through Pushpagiri Wildlife Sanctuary",
      "360-degree panoramic views from the peak",
      "Experience diverse flora and fauna",
      "Camping under the stars"
    ],
    inclusions: [
      "Experienced trek leader and support staff",
      "All meals (breakfast, lunch, dinner)",
      "Camping equipment (tents, sleeping bags)",
      "First aid kit and emergency support",
      "Forest entry permits",
      "Transportation from base point"
    ],
    exclusions: [
      "Transportation to base point",
      "Personal trekking gear",
      "Travel insurance",
      "Any personal expenses",
      "Items not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Base Camp to Bhagwati Peak",
        description: "Start early morning from base camp. Trek through dense shola forests and grasslands. Reach Bhagwati peak by afternoon. Set up camp and enjoy sunset views.",
        distance: "8 km",
        duration: "6-7 hours"
      },
      {
        day: 2,
        title: "Summit Push and Return",
        description: "Early morning summit push to Kumara Parvatha peak. Enjoy sunrise from the summit. Descend back to base camp via the same route.",
        distance: "8 km",
        duration: "7-8 hours"
      }
    ],
    nextDates: [
      "Feb 15-16, 2026",
      "Feb 22-23, 2026",
      "Mar 1-2, 2026",
      "Mar 8-9, 2026"
    ]
  };

  reviews: Review[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "Jan 10, 2026",
      comment: "Amazing trek! The guides were very experienced and helpful. The views from the summit were absolutely breathtaking.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma"
    },
    {
      id: 2,
      name: "Priya Menon",
      rating: 4,
      date: "Jan 5, 2026",
      comment: "Challenging but worth it! Make sure you're physically prepared. The camping experience was wonderful.",
      avatar: "https://ui-avatars.com/api/?name=Priya+Menon"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      rating: 5,
      date: "Dec 28, 2025",
      comment: "Best trek I've done so far! Well organized, safety was top priority, and the food was surprisingly good!",
      avatar: "https://ui-avatars.com/api/?name=Arjun+Reddy"
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tourId = +params['id'];
      // Load tour details based on ID
    });
  }

  bookNow() {
    this.router.navigate(['/booking', this.tourId]);
  }

  getDifficultyColor(difficulty: string): string {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'moderate': return 'warning';
      case 'challenging': return 'danger';
      default: return 'medium';
    }
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

}
