import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { PluginTvShowsComponent } from './plugin-tv-shows/plugin-tv-shows.component';
import { ShowSearchComponent } from './tv-shows/show-search/show-search.component';
import {TvShowsService} from "./tv-shows.service";
import {HttpModule} from "@angular/http";
import { ShowPeopleComponent } from './tv-shows/show-people/show-people.component';
import { ShowDisplayerComponent } from './tv-shows/show-displayer/show-displayer.component';
import { ShowSeasonsComponent } from './tv-shows/show-seasons/show-seasons.component';
import { ShowSeasonDisplayerComponent } from './tv-shows/show-season-displayer/show-season-displayer.component';
import { ShowPeopleDisplayerComponent } from './tv-shows/show-people-displayer/show-people-displayer.component';
import { ImageDisplayerComponent } from './tv-shows/image-displayer/image-displayer.component';
import { ShowActorsComponent } from './tv-shows/show-actors/show-actors.component';
import { ShowHelpComponent } from './tv-shows/show-help/show-help.component';
import { ShowEpisodesComponent } from './tv-shows/show-episodes/show-episodes.component';
import { ShowEpisodeDisplayerComponent } from './tv-shows/show-episode-displayer/show-episode-displayer.component';

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
    PluginTvShowsComponent,
    ShowSearchComponent,
    ShowPeopleComponent,
    ShowDisplayerComponent,
    ShowSeasonsComponent,
    ShowSeasonDisplayerComponent,
    ShowPeopleDisplayerComponent,
    ImageDisplayerComponent,
    ShowActorsComponent,
    ShowHelpComponent,
    ShowEpisodesComponent,
    ShowEpisodeDisplayerComponent
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
    TvShowsService,
    ConnectedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
