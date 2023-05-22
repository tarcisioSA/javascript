import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dados} from '../../data/dados'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photo:string = ''
  @Input()
  description:string = ''
  @Input()
  title:string = ''

  private id:string | null = '0'

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get('id'))
      )

      this.setValues(this.id)
  }

  setValues(id:string | null ){
    const result = dados.filter(article => article.id === id)[0]


    this.title = result.title
    this.photo = result.photo
    this.description = result.description



  }

}
