import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IContainerConfig, IPageConfig } from 'src/app/modules/view/services/view.service';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterContentInit {
  @Input()
  page: IPageConfig | undefined;
  containers: IContainerConfig[] | undefined;
  constructor(private pageService: PageService) {
    this.containers = this.page?.containers;
  }

  ngOnInit(): void {
    console.log('PageComponent | ngOnInit');
    this.pageService.init();
  }

  ngAfterContentInit(): void {
    console.log('PageComponent | ngAfterContentInit');
    this.containers = this.page?.containers;
  }
}
