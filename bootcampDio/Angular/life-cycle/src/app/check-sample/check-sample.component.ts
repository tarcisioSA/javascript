import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy  {

    quantidade: number = 0

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -= 1;
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

  }

  //quando o primeiro conteudo é iniciado
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

//após alguma alteração
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }


  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}


