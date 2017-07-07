import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChatHandlerService} from "./chat-handler.service";
import {UsersListComponent} from "./users-list/users-list.component";
import {ChatCommunicationService} from "./chat-communication.service";
import {ChatViewComponent} from "./chat-view/chat-view.component";
import {RouterModule} from "@angular/router";
import {routes} from "./route";
import {LoginViewComponent} from "./login-view/login-view.component";
import {DisconnectedViewComponent} from "./disconnected-view/disconnected-view.component";
import {ConnectedGuard} from "./connected.guard";
import {MessageViewComponent} from "./message-view/message-view.component";
import {PluginTestComponent} from "./plugin-test/plugin-test.component";
import {MessageInterceptorComponent} from "./message-interceptor/message-interceptor.component";
import { PluginPrivateComponent } from './plugin-private/plugin-private.component';
import {PluginMathComponent} from "./plugin-math/plugin-math.component";
import {MathService} from "./math.service";
import { HttpModule } from '@angular/http';
import { PluginBeerComponent } from './plugin-beer/plugin-beer.component';
import { BeerService } from './plugin-beer/beer.service';
import { PluginChuckComponent } from './plugin-chuck/plugin-chuck.component';
import {ChucknorrisService} from "./chucknorris.service";
import {GiphyService} from "./giphy.service";
import { PluginGiphyComponent } from './plugin-giphy/plugin-giphy.component';
import { PluginFixerComponent } from './plugin-fixer/plugin-fixer.component';
import {PluginSunriseComponent} from "./plugin-sunrise/plugin-sunrise.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ChatViewComponent,
    LoginViewComponent,
    DisconnectedViewComponent,
    MessageInterceptorComponent,
    PluginTestComponent,
    MessageViewComponent,
    PluginPrivateComponent,
    PluginMathComponent,
    PluginBeerComponent,
    PluginChuckComponent,
    PluginGiphyComponent,
    PluginSunriseComponent,
    PluginFixerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChatHandlerService,
    ChatCommunicationService,
    ConnectedGuard,
    MathService,
    BeerService,
    ChucknorrisService,
    ConnectedGuard,
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
