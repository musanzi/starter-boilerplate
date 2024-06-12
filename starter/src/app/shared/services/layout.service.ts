import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  
  public customizer : string = '';

  public config = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'dark-sidebar',
      sidebar_type: 'compact-wrapper',
      icon: "stroke-svg",
    },
    color: {
      primary_color: '#7A70BA',
      secondary_color: '#48A3D7',
    },
  };

  constructor() { }

}
