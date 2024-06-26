import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0)
  counterRef: number | undefined

  constructor() {
    // no asyn
    // crea valores por defecto
    // before render
    // se utiliza rara vez
    console.log('constructor')
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes:SimpleChanges) {
    // before and during render
    // detecta cambios
    console.log('ngOnChanges')
    console.log('-'.repeat(10))
    console.log(changes)
    const duration = changes['duration']
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething()
    }
  }
  ngOnInit() {
    // after render
    // corre una vez
    // async, then, subs, promise
    console.log('ngOnInit')
    console.log('-'.repeat(10))
    console.log('duration =>',this.duration)
    console.log('message =>', this.message)
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1)
    }, 1000)
  }
  ngAfterViewInit() {
    // after render
    // pregunta si los hijos ya fueron renderizados
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10))
  }
  ngOnDestroy() {
    // destruye componente
    console.log('ngOnDestroy')
    console.log('-'.repeat(10))
    window.clearInterval(this.counterRef)
  }
  doSomething() {
    console.log('change duration')
    // async
  }

}
