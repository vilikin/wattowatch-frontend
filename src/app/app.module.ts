import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RootStoreModule } from './root-store';
import { ReactiveFormsModule } from '@angular/forms';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { VideoComponent } from './components/video/video.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { ChannelComponent } from './components/channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    SubscribePageComponent,
    LiveStreamComponent,
    VideoComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RootStoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
