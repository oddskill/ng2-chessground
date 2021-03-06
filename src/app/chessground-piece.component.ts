import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'chessground-piece',
    template:`<div [ngClass]="[pieces]" [style.width.px]="height" [style.height.px]="height" class="chessgroundpiece">
                <piece  [style.width.px]="height" [style.height.px]="height" [ngClass]="[color,piece]" class="chessgroundpiece"></piece>
              </div>`, 
    
})
export class ChessGroundPieceComponent{
  
  @Input() width: number = 0;
  @Input() height: number =0;
  @Input() pieces: string = 'merida';
  @Input() piece:string ='';
  @Input() color: string = 'black';
  @Input() is3d: boolean = false;
  
  constructor(){
    
  }
 
}