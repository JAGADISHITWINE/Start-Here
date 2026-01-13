import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface FAQ {
  question: string;
  answer: string;
  category: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

    selectedCategory: string = 'all';
  searchQuery: string = '';

  categories = [
    { value: 'all', label: 'All' },
    { value: 'booking', label: 'Booking' },
    { value: 'cancellation', label: 'Cancellation' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'safety', label: 'Safety & Gear' },
    { value: 'general', label: 'General' }
  ];

  faqs: FAQ[] = [
    {
      question: "How do I book a trek?",
      answer: "You can book a trek through our website or mobile app. Select your preferred trek, choose a date, fill in your details, and proceed with payment. You'll receive a confirmation email with all the details.",
      category: "booking"
    },
    {
      question: "What is your cancellation policy?",
      answer: "Full refund if cancelled 15+ days before trek. 50% refund for 7-14 days. No refund for cancellations within 7 days. However, you can transfer your booking to another date without charges.",
      category: "cancellation"
    },
    {
      question: "Do I need to be very fit for trekking?",
      answer: "Fitness requirements vary by trek. Easy treks require basic fitness - ability to walk 5-6 km. Moderate treks need regular exercise routine. Challenging treks require high stamina and previous trekking experience. We recommend starting with easier treks.",
      category: "fitness"
    },
    {
      question: "What should I bring for the trek?",
      answer: "Essential items include: comfortable trekking shoes, water bottle, sunscreen, hat, basic first aid, personal medications, extra clothes, raincoat, and snacks. We provide detailed packing lists after booking.",
      category: "safety"
    },
    {
      question: "Are the treks suitable for beginners?",
      answer: "Yes! We have treks for all levels. Easy treks like Tadiandamol and Mullayanagiri are perfect for beginners. Our guides provide full support and we maintain a comfortable pace.",
      category: "general"
    },
    {
      question: "What's included in the trek price?",
      answer: "Trek price includes: experienced trek leader, support staff, all meals during trek, camping equipment, first aid kit, forest permits, and transportation from designated base point.",
      category: "booking"
    },
    {
      question: "Can I join if I'm traveling solo?",
      answer: "Absolutely! Many of our trekkers are solo travelers. It's a great way to meet like-minded people. We ensure everyone feels welcome and part of the group.",
      category: "general"
    },
    {
      question: "What if it rains during the trek?",
      answer: "We trek in light to moderate rain with proper gear. In case of heavy rain or dangerous weather, we may modify the route or reschedule for safety. Rescheduling is free of charge.",
      category: "safety"
    },
    {
      question: "Is travel insurance necessary?",
      answer: "While not mandatory, we strongly recommend travel insurance covering adventure activities. It provides protection against unforeseen circumstances like accidents or medical emergencies.",
      category: "safety"
    },
    {
      question: "What's your age policy?",
      answer: "Minimum age is 12 for easy treks, 15 for moderate, and 18 for challenging treks. Minors must be accompanied by guardians. Senior citizens can participate if medically fit.",
      category: "general"
    },
    {
      question: "Can I transfer my booking to someone else?",
      answer: "Yes, you can transfer your booking to another person up to 7 days before the trek date. Contact us with the new participant's details.",
      category: "booking"
    },
    {
      question: "Do you provide trekking equipment?",
      answer: "We provide tents, sleeping bags, and basic camping gear. Personal items like trekking poles, shoes, and backpacks are your responsibility. We offer rentals for some equipment.",
      category: "safety"
    }
  ];

  get filteredFaqs(): FAQ[] {
    let filtered = this.faqs;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  toggleFaq(faq: FAQ) {
    faq.expanded = !faq.expanded;
  }
}

