<img align="right" width="186" src="https://user-images.githubusercontent.com/3740101/43857581-a0d9e2c0-9b43-11e8-99a1-f88326bb9040.png">

# GSOC18 
## Free Software Habits

<img align="right" width="179" alt="screen shot 2018-07-20 at 18 21 10" src="https://user-images.githubusercontent.com/20709874/43801850-78bbe0ea-9a94-11e8-8fd5-b22bdda08be6.png">


This repo contains  the work that has been done on developing a firefox extension called "Free Software Habits", which is the Google Summer of Code project of Enkelena Haxhija under Debian project. The goal as described in GSoC project proposal by [Daniel Pocock](https://danielpocock.com/gsoc-project-beating-cambridge-analytica-at-their-own-game) for the 2018 edition, under Debian's umbrella, is to create more awareness of existing free software, highlight alternatives that otherwise wouldn't be known by the user and change habits into using free software.

Enkelena presented the project on DebConf'18 in Hsinchu, Taiwan [Video](https://gemmei.ftp.acc.umu.se/pub/debian-meetings/2018/DebConf18/2018-07-31/gsoc-session.webm) - Watch it from 16:20


## Implementation

Mozilla API (Extension <> web-browser API)

Json Data file ( Proof of concept  software list). Later put it on a real database </br>
[JSON file](https://github.com/Enkelena/free-software-habits/blob/master/alternativeApps.json)

Code Logic (Select and display alternatives to the user, based on the active website):
 <img align="center" src="https://user-images.githubusercontent.com/20709874/43799716-9509bb4c-9a8e-11e8-978e-ab224820d571.png">

 * Getting the URL, identify the app, search on database, give free software alternative </br>
    [main-logic code](https://github.com/Enkelena/free-software-habits/blob/master/notification/notification.js)

 * To not annoy the user - Show notification only once per session for the current app and ability to stop/start 
 * Use localStorage to hold user’s settings </br>
    [Stop / Start logic](https://github.com/Enkelena/free-software-habits/blob/master/normalView/normalView.js)

 * Presenting the Free Software list on a web-page that is generated by the database </br>
    [generating list to web-page](https://github.com/Enkelena/free-software-habits/blob/master/docs/scripts/data.js)	
 * [Web-page](https://enkelena.github.io/free-software-habits/)
 <img src ="https://user-images.githubusercontent.com/20709874/43801497-8f065fd4-9a93-11e8-9403-43cbb29800de.png">


## Project management

For the managment of the project, we are using a kanban board, hosted on [storm.debian.net](https://storm.debian.net), with weekly reviews of the tasks, create new tasks and closing existing ones.

<img width="1408" alt="kanban project" src="https://user-images.githubusercontent.com/3740101/43017215-37654dca-8c4d-11e8-87b4-d208f988b40e.png">

We're also using github to create new issues based on the tasks, that can divided in smaller chunks given the complexity of the goal. Gitflow was adopted where feature branchs are created and reviewed (PR) by a peer before merged into master.

The kanban board is available online (read-only) on this link: [Kanban board (read-only)](https://storm.debian.net/shared/pNYyAAjAgoMbwcaTqQTeJhFWfAx0pNsa1D9IeXJpzAD).

## Reports

The weekly reports, containing a summary of the progress made each week, are archived on debian-outreach mailing list, and available on the links below.

 ː | ː | ː | ː
--- | --- | --- | ---
[report1](https://lists.debian.org/debian-outreach/2018/05/msg00023.html) | [report2](https://lists.debian.org/debian-outreach/2018/05/msg00047.html) | [report3](https://lists.debian.org/debian-outreach/2018/06/msg00006.html) | [report4](https://lists.debian.org/debian-outreach/2018/06/msg00049.html)
[report5](https://lists.debian.org/debian-outreach/2018/06/msg00087.html) | [report6](https://lists.debian.org/debian-outreach/2018/06/msg00124.html) | [report7](https://lists.debian.org/debian-outreach/2018/07/msg00002.html) | [report8](https://lists.debian.org/debian-outreach/2018/07/msg00025.html)
[report9](https://lists.debian.org/debian-outreach/2018/07/msg00058.html) | [report10](https://lists.debian.org/debian-outreach/2018/07/msg00089.html) | [report11](https://lists.debian.org/debian-outreach/2018/07/msg00106.html)

## Work to do

Currently, the list of recommended software is being hosted on github in a [JSON formatted file](https://github.com/Enkelena/free-software-habits/blob/master/alternativeApps.json). The extension downloads the file from GitHub and filters the list to show the user the specific alternatives to the currently visited app. In the roadmap is the creation of a server + API that will allow the extension to make a call and receive the list of alternative apps. Either integrating with an existing service that returns a list open source software, or maintaining our own database.

The cards in backlog lane in the [Kanban board (read-only)](https://storm.debian.net/shared/pNYyAAjAgoMbwcaTqQTeJhFWfAx0pNsa1D9IeXJpzAD) show the work to be done and future roadmap.


## Work Product

A work product package was created on debian.salsa.org for archive purposes, containing project info and a zip file of this repo. [Package on Salsa](https://salsa.debian.org/outreach-team/intern-work-products/tree/master/gsoc/2018/EnkelenaH-guest)

---

We've included a guide for new contributors, with instructions on how to test and debug the extension.

## Guide to new contributors

Code contributions are welcome! Please commit any pull requests against the `master` branch. Learn more about how to contribute by reading the [Github Flow guide](https://guides.github.com/introduction/flow/).

### Debug the extension

- Clone the repo: 
  1. ```git clone https://github.com/Enkelena/free-software-habits.git```
- Open Firefox:
  1. Type `about:debugging` in your address bar to bring up the add-ons page.
  2. Click the `Load Temporary Add-on` button, navigate to the `build/manifest.json` file, and "Open".

## Reach out

I'm available either on irc.debian.org (#debian-outreach, nickname: EnkelenaH) or through the contacts available on the debian wiki.

### Other useful links:

[Debian's SummerOfCode2018 Project page]( https://wiki.debian.org/SummerOfCode2018/Projects/FirefoxAndThunderbirdPluginFreeSoftwareHabitsDetails)
