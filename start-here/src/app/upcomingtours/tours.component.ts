import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface Trek {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  image: string;
  status: 'available' | 'selling-fast' | 'last-seat' | 'sold-out';
  category: string;
}

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
})
export class ToursComponent implements OnInit {

  selectedYear: number = 2026;
  selectedMonth: string = 'January';
  sortBy: string = 'newest';

  years = [2025, 2026, 2027];

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-high', label: 'Highest Price' },
    { value: 'price-low', label: 'Lowest Price' },
    { value: 'duration-short', label: 'Shortest First' },
    { value: 'duration-long', label: 'Longest First' }
  ];

  allTreks: Trek[] = [
    {
      id: 1,
      name: 'Gokarna Beach Trek & Camping',
      location: 'Gokarna, Karnataka',
      date: '16 Jan',
      time: '9:00 PM',
      duration: '2 Days',
      price: 4249,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'last-seat',
      category: 'Beach Trek'
    },
    {
      id: 2,
      name: 'Bandaje Falls Trek',
      location: 'Chikmagalur, Karnataka',
      date: '16 Jan',
      time: '9:30 PM',
      duration: '2 Days',
      price: 4229,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      status: 'selling-fast',
      category: 'Waterfall Trek'
    },
    {
      id: 3,
      name: 'Tadiandamol Trek, Coorg',
      location: 'Madikeri, Karnataka',
      date: '16 Jan',
      time: '10:00 PM',
      duration: '2 Days',
      price: 4199,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
      status: 'sold-out',
      category: 'Peak Trek'
    },
    {
      id: 4,
      name: 'Uttari Betta Day Trek',
      location: 'Kunigal, Karnataka',
      date: '17 Jan',
      time: '6:30 AM',
      duration: '11 Hours',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400',
      status: 'available',
      category: 'Day Trek'
    },
    {
      id: 5,
      name: 'Gudibande Sunset Trek',
      location: 'Gudibande, Karnataka',
      date: '17 Jan',
      time: '1:00 PM',
      duration: '9 Hours 30 Minutes',
      price: 1159,
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400',
      status: 'available',
      category: 'Sunset Trek'
    },
    {
      id: 6,
      name: 'Uttari Betta Sunrise Trek',
      location: 'Kunigal, Karnataka',
      date: '17 Jan',
      time: '11:00 PM',
      duration: '12 Hours',
      price: 1249,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'available',
      category: 'Sunrise Trek'
    },
    {
      id: 7,
      name: 'Makalidurga Day Trek',
      location: 'Chikkaballapur, Karnataka',
      date: '18 Jan',
      time: '6:30 AM',
      duration: '11 Hours',
      price: 1690,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      status: 'available',
      category: 'Day Trek'
    },
    {
      id: 8,
      name: 'Kudremukh Trek',
      location: 'Chikmagalur, Karnataka',
      date: '06 Feb',
      time: '7:30 PM',
      duration: '2 Days',
      price: 4299,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
      status: 'available',
      category: 'Peak Trek'
    },
    {
      id: 9,
      name: 'Kotagiri Trek, Ooty',
      location: 'Ooty, Tamil Nadu',
      date: '06 Feb',
      time: '9:00 PM',
      duration: '2 Days',
      price: 4590,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'available',
      category: 'Hill Trek'
    },
    {
      id: 10,
      name: 'Netravati Peak Trek',
      location: 'Samse, Karnataka',
      date: '07 Feb',
      time: '6:00 AM',
      duration: '2 Days',
      price: 4399,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400',
      status: 'selling-fast',
      category: 'Peak Trek'
    },
    {
      id: 11,
      name: 'Camping & Trekking in Kabbaladurga',
      location: 'Kabbaladurga, Karnataka',
      date: '07 Feb',
      time: '9:00 PM',
      duration: '16 Hours',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400',
      status: 'available',
      category: 'Camping'
    },
    {
      id: 12,
      name: 'Kodachadri Trek',
      location: 'Shivamogga, Karnataka',
      date: '13 Feb',
      time: '9:30 PM',
      duration: '2 Days',
      price: 4229,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
      status: 'available',
      category: 'Peak Trek'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.filterTreksByMonth();
  }

  get monthTreks(): { [key: string]: Trek[] } {
    const grouped: { [key: string]: Trek[] } = {};

    this.allTreks.forEach(trek => {
      const trekDate = new Date(`${trek.date}, ${this.selectedYear}`);
      const monthName = this.months[trekDate.getMonth()];

      if (!grouped[monthName]) {
        grouped[monthName] = [];
      }
      grouped[monthName].push(trek);
    });

    return grouped;
  }

  get currentMonthTreks(): Trek[] {
    return this.monthTreks[this.selectedMonth] || [];
  }

  get trekCount(): number {
    return this.currentMonthTreks.length;
  }

  filterTreksByMonth() {
    // Filter logic already handled by computed property
  }

  changeYear(direction: 'prev' | 'next') {
    const currentIndex = this.years.indexOf(this.selectedYear);
    if (direction === 'prev' && currentIndex > 0) {
      this.selectedYear = this.years[currentIndex - 1];
    } else if (direction === 'next' && currentIndex < this.years.length - 1) {
      this.selectedYear = this.years[currentIndex + 1];
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'available': return 'success';
      case 'selling-fast': return 'warning';
      case 'last-seat': return 'danger';
      case 'sold-out': return 'medium';
      default: return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'available': return 'Available';
      case 'selling-fast': return 'Selling fast';
      case 'last-seat': return 'Last seat';
      case 'sold-out': return 'SOLD OUT';
      default: return status;
    }
  }

  viewDetails(trekId: number) {
    this.router.navigate(['/tour-details', trekId]);
  }

  sortTreks() {
    // Implement sorting logic based on this.sortBy
  }

}
