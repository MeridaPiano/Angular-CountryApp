import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onNewSearch : EventEmitter<string> = new EventEmitter();

  emitSearch(term: string):void{
    this.onNewSearch.emit(term);
  }

}

