import { Component } from '@angular/core';
import { TeamMember } from 'src/app/interface/TeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {



  teamMembers: TeamMember[] = [
    {
      name: 'Daniel Saimanral',
      role: 'Managing Director',
      image: 'assets/images/team-1.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Ganasegaran Thugitha',
      role: 'Secretary',
      image: 'assets/images/team-2.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Karunakaran Sharmila',
      role: 'General Manager',
      image: 'assets/images/team-3.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Selvavinayagar Jinathani',
      role: 'Accountant',
      image: 'assets/images/team-1.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Suthakaran Shansi',
      role: 'Lecturer',
      image: 'assets/images/team-4.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Daniel Denisra',
      role: 'Lecturer',
      image: 'assets/images/team-2.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        instagram: '#',
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
