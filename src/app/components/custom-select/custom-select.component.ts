import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent {
  // Define the select state
  showDropdown = false;

  constructor(private elementRef: ElementRef) {}

  // On init
  ngOnInit(): void {}

  // Close the dropdown on click outside
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  // Toggle dropdown
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
