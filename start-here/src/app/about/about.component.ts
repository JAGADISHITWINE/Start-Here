import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Trek Leader",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200",
      bio: "15+ years of trekking experience in the Western Ghats"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&size=200",
      bio: "Expert in trek logistics and safety protocols"
    },
    {
      name: "Arjun Menon",
      role: "Senior Trek Guide",
      image: "https://ui-avatars.com/api/?name=Arjun+Menon&size=200",
      bio: "Certified wilderness first responder and mountaineer"
    },
    {
      name: "Meera Reddy",
      role: "Trek Guide & Naturalist",
      image: "https://ui-avatars.com/api/?name=Meera+Reddy&size=200",
      bio: "Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna"
    }
  ];

  values = [
    {
      icon: "shield-checkmark",
      title: "Safety First",
      description: "All our treks are led by certified guides with comprehensive safety protocols"
    },
    {
      icon: "leaf",
      title: "Eco-Friendly",
      description: "We practice and promote responsible trekking with minimal environmental impact"
    },
    {
      icon: "people",
      title: "Community",
      description: "Building a community of adventure enthusiasts who respect nature"
    },
    {
      icon: "star",
      title: "Excellence",
      description: "Committed to providing exceptional experiences on every trek"
    }
  ];

  stats = [
    { number: "10,000+", label: "Happy Trekkers" },
    { number: "50+", label: "Trek Routes" },
    { number: "15", label: "Years Experience" },
    { number: "4.8", label: "Average Rating" }
  ];

}
