import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './components/product/product.module';

// Import Akita modules
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TetrisContainerModule } from './container/tetris-container/tetris-container.module';
import { KeyboardComponent } from './components/keyboard/keyboard.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AkitaNgDevtools.forRoot(),

    ProductModule,
    TetrisContainerModule,
    KeyboardComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
