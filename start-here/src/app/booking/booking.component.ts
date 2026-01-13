import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule, IonicModule, ReactiveFormsModule, RouterLink]
})
export class BookingComponent  implements OnInit {

  tourId: number = 0;
  currentStep: number = 1;

  booking = {
    date: '',
    participants: 1,
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    specialRequests: ''
  };

  tour = {
    name: "Kumara Parvatha Trek",
    price: 2999,
    dates: [
      { value: '2026-02-15', label: 'Feb 15-16, 2026', available: true },
      { value: '2026-02-22', label: 'Feb 22-23, 2026', available: true },
      { value: '2026-03-01', label: 'Mar 1-2, 2026', available: false }
    ]
  };

  addOns = [
    { id: 1, name: 'Trekking Poles', price: 200, selected: false },
    { id: 2, name: 'Sleeping Bag', price: 300, selected: false },
    { id: 3, name: 'Travel Insurance', price: 500, selected: false }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tourId = +params['id'];
    });
  }

  get basePrice(): number {
    return this.tour.price * this.booking.participants;
  }

  get addOnsPrice(): number {
    return this.addOns
      .filter(addon => addon.selected)
      .reduce((sum, addon) => sum + addon.price, 0);
  }

  get totalPrice(): number {
    return this.basePrice + this.addOnsPrice;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  proceedToPayment() {
    console.log('Booking:', this.booking);
    // Implement payment gateway integration
    this.router.navigate(['/payment']);
  }

}
