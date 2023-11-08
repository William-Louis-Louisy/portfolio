import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { IOption } from 'src/app/types/option.model';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
})
export class FormSelectComponent {
  // Define options
  @Input() options: IOption[] = [];

  // Define placeholder
  @Input() placeholder: string = '';

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
