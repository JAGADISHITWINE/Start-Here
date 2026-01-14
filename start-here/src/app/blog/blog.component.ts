import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  selectedCategory: string = 'all';
  searchQuery: string = '';

  categories = [
    { value: 'all', label: 'All Posts', icon: 'apps' },
    { value: 'trek-guides', label: 'Trek Guides', icon: 'map' },
    { value: 'tips-tricks', label: 'Tips & Tricks', icon: 'bulb' },
    { value: 'gear-reviews', label: 'Gear Reviews', icon: 'bag-handle' },
    { value: 'travel-stories', label: 'Travel Stories', icon: 'book' },
    { value: 'safety', label: 'Safety', icon: 'shield-checkmark' },
    { value: 'destinations', label: 'Destinations', icon: 'location' }
  ];

  allPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Complete Guide to Kumara Parvatha Trek: Everything You Need to Know',
      excerpt: 'Kumara Parvatha is one of the most challenging and rewarding treks in Karnataka. Standing at 1,712 meters, this trek offers breathtaking views, diverse flora and fauna, and an unforgettable experience for adventure enthusiasts.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=100'
      },
      category: 'trek-guides',
      tags: ['Kumara Parvatha', 'Coorg', 'Challenging Treks', 'Western Ghats'],
      date: '12 Jan 2026',
      readTime: '8 min read',
      views: 2450,
      featured: true
    },
    {
      id: 2,
      title: '10 Essential Items Every Trekker Must Carry',
      excerpt: "Planning your first trek? Here's a comprehensive checklist of must- have items that will ensure your safety and comfort on the trail.From the right footwear to emergency supplies.",
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=100'
      },
      category: 'tips-tricks',
      tags: ['Packing List', 'Beginner Tips', 'Trekking Essentials'],
      date: '10 Jan 2026',
      readTime: '6 min read',
      views: 1890,
      featured: false
    },
    {
      id: 3,
      title: 'Best Trekking Boots Under ₹5000: Honest Reviews',
      excerpt: 'After testing 15 different trekking boots over various terrains, we bring you our top picks that offer the best value for money without compromising on quality and durability.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      author: {
        name: 'Arjun Menon',
        avatar: 'https://ui-avatars.com/api/?name=Arjun+Menon&size=100'
      },
      category: 'gear-reviews',
      tags: ['Trekking Boots', 'Gear Reviews', 'Budget Friendly'],
      date: '08 Jan 2026',
      readTime: '10 min read',
      views: 3200,
      featured: false
    },
    {
      id: 4,
      title: 'Skandagiri Night Trek: A Journey Under the Stars',
      excerpt: 'My unforgettable experience trekking Skandagiri at night. From the initial climb in darkness to witnessing the magical sunrise from the peak - a story that captures the essence of night trekking.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
      author: {
        name: 'Meera Reddy',
        avatar: 'https://ui-avatars.com/api/?name=Meera+Reddy&size=100'
      },
      category: 'travel-stories',
      tags: ['Skandagiri', 'Night Trek', 'Personal Experience', 'Sunrise'],
      date: '05 Jan 2026',
      readTime: '7 min read',
      views: 1650,
      featured: true
    },
    {
      id: 5,
      title: 'Monsoon Trekking Safety: 15 Critical Tips',
      excerpt: 'Monsoon trekking can be both beautiful and dangerous. Learn the essential safety measures, what to avoid, and how to prepare for trekking during the rainy season in the Western Ghats.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=100'
      },
      category: 'safety',
      tags: ['Monsoon', 'Safety Tips', 'Weather', 'Precautions'],
      date: '03 Jan 2026',
      readTime: '9 min read',
      views: 2100,
      featured: false
    },
    {
      id: 6,
      title: 'Exploring Coorg: Top 5 Treks for Beginners',
      excerpt: 'Coorg, the Scotland of India, offers some of the most scenic and beginner-friendly treks. Discover the top trails perfect for first-time trekkers looking to explore this beautiful region.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=100'
      },
      category: 'destinations',
      tags: ['Coorg', 'Beginner Treks', 'Karnataka', 'Hill Station'],
      date: '01 Jan 2026',
      readTime: '8 min read',
      views: 1780,
      featured: false
    },
    {
      id: 7,
      title: 'How to Prepare for Your First High-Altitude Trek',
      excerpt: 'Transitioning from regular treks to high-altitude adventures requires proper preparation. Learn about acclimatization, fitness training, and mental preparation for treks above 3000 meters.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
      author: {
        name: 'Arjun Menon',
        avatar: 'https://ui-avatars.com/api/?name=Arjun+Menon&size=100'
      },
      category: 'tips-tricks',
      tags: ['High Altitude', 'Preparation', 'Fitness', 'Acclimatization'],
      date: '28 Dec 2025',
      readTime: '12 min read',
      views: 2890,
      featured: false
    },
    {
      id: 8,
      title: 'Wildlife Encounters in the Western Ghats: A Photo Journal',
      excerpt: 'From the elusive Malabar Giant Squirrel to colorful birds and butterflies - documenting the incredible biodiversity encountered during treks across the Western Ghats.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800',
      author: {
        name: 'Meera Reddy',
        avatar: 'https://ui-avatars.com/api/?name=Meera+Reddy&size=100'
      },
      category: 'travel-stories',
      tags: ['Wildlife', 'Photography', 'Western Ghats', 'Nature'],
      date: '25 Dec 2025',
      readTime: '6 min read',
      views: 1450,
      featured: false
    },
    {
      id: 9,
      title: 'Best Time to Trek in Karnataka: Month-by-Month Guide',
      excerpt: 'Not all months are created equal for trekking. Discover the best times to trek different peaks in Karnataka based on weather, accessibility, and scenic beauty.',
      content: 'Full content here...',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=100'
      },
      category: 'trek-guides',
      tags: ['Best Time', 'Weather', 'Karnataka', 'Planning'],
      date: '22 Dec 2025',
      readTime: '11 min read',
      views: 3450,
      featured: false
    }
  ];

  popularTags = [
    'Beginner Treks', 'Coorg', 'Western Ghats', 'Safety Tips',
    'Gear Reviews', 'Night Trek', 'Monsoon', 'Photography',
    'High Altitude', 'Karnataka', 'Weekend Treks', 'Camping'
  ];



  get featuredPosts(): BlogPost[] {
    return this.allPosts.filter(post => post.featured);
  }

  get filteredPosts(): BlogPost[] {
    let posts = this.allPosts.filter(post => !post.featured);

    // Filter by category
    if (this.selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === this.selectedCategory);
    }

    // Filter by search
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }

  viewPost(postId: number) {
    this.router.navigate(['/blog', postId]);
  }

  filterByTag(tag: string) {
    this.searchQuery = tag;
  }

  getCategoryIcon(category: string): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.icon : 'document-text';
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'trek-guides': 'primary',
      'tips-tricks': 'success',
      'gear-reviews': 'warning',
      'travel-stories': 'tertiary',
      'safety': 'danger',
      'destinations': 'secondary'
    };
    return colors[category] || 'medium';
  }

  get categoryTitle(): string {
  if (this.selectedCategory === 'all') {
    return 'Latest Articles';
  }

  const category = this.categories.find(
    c => c.value === this.selectedCategory
  );

  return category?.label ?? 'Latest Articles';
}


}
