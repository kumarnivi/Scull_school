import { Component } from '@angular/core';
import { TeamMember } from 'src/app/interface/TeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {


  openWhatsapp() {
    const phoneNumber = '+94759840406'; //  phone number
      const message = 'Hello! I have a question.'; 
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
      window.open(whatsappUrl, '_blank');
     
    }

  teamMembers: TeamMember[] = [
    {
      name: 'Daniel Saimanral',
      role: 'Managing Director',
      image: 'assets/images/team-1.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: 'https://www.instagram.com/scull_english/#',
        youtube: '#'
      }
    },
    {
      name: 'Ganasegaran Thugitha',
      role: 'Secretary',
      image: 'assets/images/team-2.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: 'https://www.instagram.com/scull_english/#',
        youtube: '#'
      }
    },
    {
      name: 'Karunakaran Sharmila',
      role: 'General Manager',
      image: 'assets/images/team-3.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: 'https://www.instagram.com/scull_english/#',
        youtube: '#'
      }
    },
    {
      name: 'Selvavinayagar Jinathani',
      role: 'Accountant',
      image: 'assets/images/team-1.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: 'https://www.instagram.com/scull_english/#',
        youtube: '#'
      }
    },
    {
      name: 'Suthakaran Shansi',
      role: 'Lecturer',
      image: 'assets/images/team-4.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Daniel Denisra',
      role: 'Lecturer',
      image: 'assets/images/team-2.jpg',
      socialLinks: {
        facebook: 'https://web.facebook.com/profile.php?id=61552559295286&__tn__=-UC*F',
        whatsapp: '#',
        linkedin: 'https://www.linkedin.com/in/scull-soe-undefined-b23323333/',
        instagram: 'https://www.instagram.com/scull_english/#',
        youtube: '#'
      }
    },

    // Additional team members can be added here
  ];

  showAll: boolean = false;
  buttonText: string = 'See All';

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.buttonText = this.showAll ? 'Hide' : 'See All';
  }
}
