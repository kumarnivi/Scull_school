import { Component } from '@angular/core';
interface Service {
  name: string;
  description: string;
  category: string;
}@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  searchText: string  = ''; // Define this as a string
  selectedCategory: string  = ''; // Explicitly define this as a string

  services: Service[] = [
    { name: 'PTE', description: 'PTE exam preparation classes.', category: 'English Language' },
    { name: 'IELTS - General/Academic', description: 'IELTS preparation classes.', category: 'English Language' },
    { name: 'UKVI - General/Academic', description: 'UKVI exam preparation classes.', category: 'English Language' },
    { name: 'Life Skills - A1', description: 'Basic life skills training.', category: 'English Language' },
    { name: 'Life Skills - B1', description: 'Intermediate life skills training.', category: 'English Language' },
    { name: 'Certificate in English', description: 'Certificate program in English.', category: 'English Language' },
    { name: 'Diploma in English', description: 'Diploma program in English.', category: 'English Language' },
    { name: 'Diploma in Business Communication English', description: 'Business communication course in English.', category: 'English Language' },
    { name: 'Diploma in Spoken English', description: 'Spoken English program.', category: 'English Language' },
    { name: 'Diploma in ICT', description: 'Information and Communication Technology diploma.', category: 'ICT' },
    { name: 'YLE', description: 'Young Learners English classes.', category: 'English Language' },
    { name: 'PET/CAT', description: 'PET and CAT exam preparation classes.', category: 'English Language' },
    { name: 'Paper Classes - O/L and A/L', description: 'Classes for O/L and A/L examinations.', category: 'School Subjects' },
    { name: 'School Subjects in English Medium', description: 'Classes for school subjects taught in English medium.', category: 'School Subjects' },
    { name: 'Early Child Care', description: 'Early childhood care classes.', category: 'Child Care' },
    { name: 'Day Care', description: 'Day care services for children.', category: 'Child Care' },
    { name: 'Diploma in Crafting', description: 'Crafting diploma program.', category: 'Crafting' },
    { name: 'Chess Classes', description: 'Chess training classes.', category: 'Recreation' },
    { name: 'Saturday School', description: 'Saturday school program for additional learning.', category: 'School Subjects' },
    { name: 'Language Classes - French', description: 'French language classes.', category: 'Language Classes' },
    { name: 'Language Classes - Dutch', description: 'Dutch language classes.', category: 'Language Classes' },
    { name: 'Educational Services - College Admissions', description: 'Guidance on college admissions.', category: 'Educational Services' },
    { name: 'Educational Services - Documentation', description: 'Documentation assistance for students.', category: 'Educational Services' },
    { name: 'Educational Services - Visa Services', description: 'Visa assistance for students.', category: 'Educational Services' },
  ];
  // Filtered services based on search and selected category
  filteredServices(): Service[] {
    return this.services.filter(service => 
      service.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedCategory ? service.category === this.selectedCategory : true)
    );
  }
}

