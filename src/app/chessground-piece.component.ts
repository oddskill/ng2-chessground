import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'chessground-piece',
    styles:[`.container{
               display: flex;
               padding-left:0;
             }
             .piece{
               width:inherit;
               height:inherit; 
               position:relative;
               display:inline-block;
               left:0%;
             }
             .is3d
             { 
               height:140%;
               width:100%;
               top:-25% 
             }
             
    `],
    template:`    
                    
                    <div [ngClass]="[pieces]" [style.width.px]="height" [style.height.px]="height">
                      <piece  [style.width.px]="height" [style.height.px]="height" [ngClass]="[color,piece]" class="piece"></piece>
                    </div>
                    
             `, 
    
})
export class ChessGroundPieceComponent{
  
  @Input() width: number = 0;
  @Input() height: number =0;
  @Input() pieces: string = 'merida';
  @Input() piece:string ='king';
  @Input() color: string = 'black';
  @Input() is3d: boolean = false;
  
  @Output() mousedownonpiece: EventEmitter<any> = new EventEmitter();
  
  constructor(){
    
  }
  
  
  
}