import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  private panel: HTMLElement | null = null;

  constructor() {}

  ngOnInit() {
    this.showPanel('1');
  }

  showPanel(panId: string) {
    if (this.panel) { // hide currently shown panel
      this.panel.style.display = 'none';
    }
    this.panel = document.getElementById(`MainContent_${panId}`) as HTMLElement;
    this.panel.style.display = 'block';
  }
}
