import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, AfterContentInit {
  @Input('headerTitle') title: string;
  // @ContentChild('filterButton') filterButton: ElementRef;
  @ContentChildren('filterButton') filterButton: QueryList<any>;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.filterButton.toArray().forEach(
      (elem: ElementRef) => {
        console.log(elem);
        if ((elem.nativeElement as HTMLElement).nodeName === 'P') {
          (elem.nativeElement as HTMLElement).style.color = 'red';
        } else if ((elem.nativeElement as HTMLElement).nodeName === 'BUTTON') {
          (elem.nativeElement as HTMLElement).classList.add('ms-2');
        }
      }
    )
    // (this.filterButton.nativeElement as HTMLElement).classList.add('ms-2');
  }
}
