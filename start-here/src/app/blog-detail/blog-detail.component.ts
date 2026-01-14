import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class BlogDetailComponent implements OnInit {

  postId: number = 0;

  post = {
    id: 1,
    title: 'Complete Guide to Kumara Parvatha Trek: Everything You Need to Know',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    author: {
      name: 'Rajesh Kumar',
      avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=100',
      bio: 'Trek Leader & Adventure Enthusiast with 15+ years of experience'
    },
    category: 'trek-guides',
    tags: ['Kumara Parvatha', 'Coorg', 'Challenging Treks', 'Western Ghats'],
    date: '12 Jan 2026',
    readTime: '8 min read',
    views: 2450,
    likes: 156,
    content: `
      <h2>Introduction</h2>
      <p>Kumara Parvatha, standing tall at 1,712 meters above sea level, is Karnataka's second-highest peak and one of the most challenging treks in the Western Ghats. Located in the Pushpagiri Wildlife Sanctuary near Somwarpet in Coorg district, this trek offers an exhilarating experience for adventure enthusiasts.</p>

      <h2>Trek Difficulty</h2>
      <p>This trek is rated as <strong>challenging to difficult</strong>. The trail is steep, rocky, and demands good physical fitness. It's not recommended for first-time trekkers. You should have previous trekking experience and be in good cardiovascular shape.</p>

      <h2>Best Time to Trek</h2>
      <p>The ideal time to trek Kumara Parvatha is from <strong>October to February</strong>. During these months, the weather is pleasant, and the views are crystal clear. Avoid trekking during monsoons (June-September) as the trail becomes extremely slippery and dangerous.</p>

      <h2>Trek Route & Itinerary</h2>
      <h3>Day 1: Base Camp to Bhagwati Peak</h3>
      <ul>
        <li><strong>Distance:</strong> 8 km</li>
        <li><strong>Duration:</strong> 6-7 hours</li>
        <li><strong>Difficulty:</strong> Steep ascent through dense forests</li>
      </ul>
      <p>The trek begins early morning from Kukke Subramanya. The initial trail takes you through dense shola forests with stunning biodiversity. After about 3-4 hours of steep climbing, you'll reach Shesha Parvatha, the first peak. From here, continue to Bhagwati Peak where you'll camp for the night.</p>

      <h3>Day 2: Summit Push and Return</h3>
      <ul>
        <li><strong>Distance:</strong> 8 km (return)</li>
        <li><strong>Duration:</strong> 7-8 hours</li>
        <li><strong>Difficulty:</strong> Rocky terrain with steep sections</li>
      </ul>
      <p>Wake up early to witness the spectacular sunrise from the camp. After breakfast, begin the final ascent to Kumara Parvatha peak. The last stretch is rocky and requires careful navigation. From the summit, you'll be rewarded with 360-degree panoramic views of the Western Ghats. Descend back to the base camp via the same route.</p>

      <h2>What to Pack</h2>
      <ul>
        <li>Sturdy trekking shoes with good grip</li>
        <li>Comfortable trekking clothes (moisture-wicking)</li>
        <li>Warm layers for camping (temperatures drop at night)</li>
        <li>Raincoat or poncho (weather can be unpredictable)</li>
        <li>At least 2-3 liters of water</li>
        <li>Energy bars and dry fruits</li>
        <li>First aid kit and personal medications</li>
        <li>Headlamp or flashlight</li>
        <li>Sunscreen and sunglasses</li>
        <li>Trekking pole (recommended)</li>
      </ul>

      <h2>Safety Tips</h2>
      <ol>
        <li>Never trek alone - always go with a group or experienced guide</li>
        <li>Start early to avoid trekking in darkness</li>
        <li>Stay hydrated throughout the trek</li>
        <li>Follow Leave No Trace principles - carry back all waste</li>
        <li>Be aware of leeches during monsoon season</li>
        <li>Check weather forecast before starting</li>
        <li>Inform someone about your trek plans</li>
        <li>Respect wildlife - maintain safe distance</li>
      </ol>

      <h2>Permits & Regulations</h2>
      <p>Forest department permits are required for this trek. Your trek organizer will usually arrange these. Individual trekkers need to obtain permits from the forest office at Kukke Subramanya.</p>

      <h2>Conclusion</h2>
      <p>Kumara Parvatha is a challenging but incredibly rewarding trek. The stunning views, diverse flora and fauna, and the sense of achievement make every drop of sweat worth it. Proper preparation, good fitness, and the right gear are essential for a successful summit. Happy trekking!</p>
    `
  };

  relatedPosts = [
    {
      id: 2,
      title: '10 Essential Items Every Trekker Must Carry',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
      category: 'tips-tricks',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Monsoon Trekking Safety: 15 Critical Tips',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      category: 'safety',
      readTime: '9 min'
    },
    {
      id: 6,
      title: 'Exploring Coorg: Top 5 Treks for Beginners',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'destinations',
      readTime: '8 min'
    }
  ];

  comments: Comment[] = [
    {
      id: 1,
      author: {
        name: 'Arun Sharma',
        avatar: 'https://ui-avatars.com/api/?name=Arun+Sharma&size=100'
      },
      content: 'Great guide! Did this trek last month and your tips were spot on. The sunrise from the peak was absolutely breathtaking.',
      date: '2 days ago',
      likes: 12
    },
    {
      id: 2,
      author: {
        name: 'Neha Patel',
        avatar: 'https://ui-avatars.com/api/?name=Neha+Patel&size=100'
      },
      content: 'Very comprehensive guide. One addition - trekking poles are highly recommended, especially for the descent. Saved my knees!',
      date: '5 days ago',
      likes: 8
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
    });
  }

  async sharPost() {
    if (navigator.share) {
      await navigator.share({
        title: this.post.title,
        text: 'Check out this article',
        url: window.location.href
      });
    }
  }

  viewRelatedPost(postId: number) {
    this.router.navigate(['/blog', postId]);
  }

  getCategoryLabel(category: string): string {
    return category.replace(/-/g, ' ');
  }


}
