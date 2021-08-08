/*
 *  Copyright 2021 jumpbit.com, Martin Weber Nisslé
 *
 *  Licensed under the Pax License, Version 1.0 (the "License");
 */
import {Injectable} from '@angular/core';
import {Platform, AlertController} from '@ionic/angular';
import { Device } from '@capacitor/device';
import { version } from '../../../package.json';
import { environment } from './../../environments/environment';
import {OnrepStorage} from './onrepstorage.service';


@Injectable({providedIn: 'root'})
export class OnrepService {
  public readonly STORAGE_TUTORIALFLAG = 'hasSeenTutorial10';
  public readonly appversion: string = version;
  public serverOk: boolean;
  readonly appserver: string = environment.rssBase;
  readonly apikey: string;
  readonly appdebug: boolean = environment.debug;
  readonly helpserver: string;
  private tutorialFlag: boolean;
  private onrepPlatform: Platform;

  constructor(public platform: Platform, public alertCtrl: AlertController) {
    // CHANGE this to update DEV/PROD and VERSION
    this.serverOk = false;
    this.appdebug = true;
    this.appserver = 'test';

    // Start with construction of Pax Config object
    // See ionic/ionic.config.json for proxy configs like v1ti, v1t, v1te
    console.log('Online Reports App log start - Construct app config service');
    this.onrepPlatform = platform;
    // TODO - check: this.paxPlatform.setLang('de', true);

    this.helpserver = 'https://www.onlinereports.ch/';
  }

  /**
   * @description return the server URL string
   * @returns URL
   */
  getServer(): string {
    return this.appserver;
  }

  /**
   * @description return the SAP API management access key string
   * @returns string
   */
  getApiKey(): string {
    return this.apikey;
  }

  isOnBrowser() {
    return this.onrepPlatform.is('cordova');
  }

  isOnAndroid() {
    return this.onrepPlatform.is('android');
  }

  isOniOS() {
    return this.onrepPlatform.is('ios');
  }

  getOs(): string {
    let os: string;
    if (this.isOnBrowser()) {
      os = 'desktop';
    } else if (this.isOnAndroid()) {
      os = 'android';
    } else if (this.isOniOS()) {
      os = 'ios';
    } else {
      os = 'other';
    }
    return os;
  }

  public async startMessage() {
    const info = await Device.getInfo();
    this.logConsole('=====================================================================================');
    this.logConsole('Pax Young App für IT Lernende (c) 2018 Martin');
    this.logConsole('=====================================================================================');
    this.logConsole('App - Starting App now');
    this.logConsole('App - Version ' + this.appversion);
    this.logConsole('App - Debug Flag ' + this.appdebug);
    this.logConsole('App - Server Address ' + this.appserver);
    this.logConsole('App - Platform is ' + this.onrepPlatform.platforms());
    this.logConsole('App - Platform Version is ' + JSON.stringify(info.osVersion));
    this.logConsole('=====================================================================================');
  }

  // logging
  public logConsole(logmsg: string) {
    if (this.appdebug) {
      console.log('onrep log: ' + logmsg);
    }
  }

  // logging
  public dialogPrompt(error: boolean, dialogMsg: string, logMsg: string): void {
    this.logConsole(`dialog call - [dialogMsg]: ${dialogMsg} [logMsg]: ${logMsg} [error_flag]: ${error.valueOf()}`);
    if (error) {
      this.dialogPromptIonic('Fehler', dialogMsg);
    } else {
      this.dialogPromptIonic('Erfolgreich', dialogMsg);
    }
  }

  public async dialogPromptIonic(title: string, dialogMsg: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: dialogMsg,
      buttons: ['OK']
    });
    await alert.present();
  }


  // Check if the user has already seen the tutorial
  public async loadTutorialStatus(): Promise<boolean> {
    const val = await this.paxstorage.get(this.STORAGE_TUTORIALFLAG);
    this.logConsole('Storage load tutorial seen status ' + val);
    if (val > 0) {
      this.tutorialFlag = true;
    } else {
      this.tutorialFlag = false;
    }
    return this.tutorialFlag;
  }

  hasSeenTutorial(): boolean {
    return this.tutorialFlag;
  }

  setSeenTutorial(): void {
    this.logConsole('set tutorial seen');
    this.tutorialFlag = true;
    this.paxstorage.set(this.STORAGE_TUTORIALFLAG, true);
  }

  unsetSeenTutorial(): void {
    this.logConsole('UNset tutorial seen');
    this.tutorialFlag = false;
    this.paxstorage.set(this.STORAGE_TUTORIALFLAG, false);
  }

}