



import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

declare var $: any; // Declare $ as any to avoid TypeScript warnings

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rapidtagscan-ui';
  isSidebarActive: boolean = false;

  ngOnInit() {
    // Ensure the DOM is ready before attempting to manipulate it with jQuery
    $(document).ready(() => {
      // Initialize Bootstrap components here
    });
  }

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.cdr.detectChanges();
  }

}


