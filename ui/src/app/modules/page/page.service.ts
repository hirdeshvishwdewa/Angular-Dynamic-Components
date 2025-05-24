import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "../shared/services/api.service";
import { GridItemHTMLElement, GridStack, GridStackNode } from "gridstack";
import 'gridstack/dist/h5/gridstack-dd-native';

@Injectable()
export class PageService implements OnDestroy {
    grid: GridStack | undefined;
    private subscriptions: Subscription = new Subscription();

    constructor(private apiService: ApiService) {
        console.log('PageService - constructor called');
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
    init() {
        setTimeout(() => {
            const gridClass: string = 'grid-stack'
            // 1. Get all the elements with .grid-stack class.
            const pageGrids: HTMLCollectionOf<Element> = document.getElementsByClassName(gridClass);
            // 2. Iterate over the HTMLCollectionOf grid-stack class elements and initialize the grids.
            Array.prototype.forEach.call(pageGrids, (pageGrid) => {
              this.grid = GridStack.init({
                acceptWidgets: true,
                animate: true,
                auto: true,
                float: true,
                margin: '10px',
                removable: true,
              }, pageGrid);
              this.grid.on('resize', (evt, item) => this.onContainerReSize(evt, item));
            });
          }, 0)
    }

  onContainerReSize(evt: Event, item: GridItemHTMLElement | GridStackNode | GridStackNode[] | undefined): void {

  }
}