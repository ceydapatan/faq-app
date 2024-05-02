# ProjectApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Structure of the App
Die Ansicht, in der alle Fragen nach Datum sortiert aufgelistet sind, stellt die Startseite der
Web-Anwendung dar. Wird eine Frage angeklickt, erscheint die Einzelansicht der Frage, wo
Antworten zu der entsprechenden Frage eingesehen oder verfasst werden können.
Da durch die mit den Studentinnen und Dozentinnen geführten Interviews in Erfahrung gebracht wurden konnte, dass diese zu einfach zugänglichen Lösungen tendieren, wurde absichtlich auf ein Login als Startseite verzichtet. Dadurch kann die Einsicht der Fragen und Antworten auch ohne Anmeldung und mit möglichst wenigen Schritten erfolgen.
Möchte eine Studentin beispielsweise das Tool nutzen, um die Antwort auf eine bestimmte
Frage zu finden, kann sie dieser Aufgabe nach dem Abrufen der Webseite direkt nachgehen,
ohne sich davor anmelden zu müssenDabei ist wichtig zu erwähnen, dass der Prototyp unter Berücksichtigung von drei verschiedenen Benutzerrollen entwickelt wurde. Diese haben verschiedene Rechte und somit auch eine
unterschiedliche Sicht auf das Menü, welches sich auf der Startseite befindet und eine Auflistung der auf der Webseite ausführbaren Aktionen enthält.
Dabei ist eine dieser Benutzerrollen, die einer nicht angemeldeten Nutzerin. Ist eine Nutzerin
nicht angemeldet, kann sie gewisse Funktionalitäten zwar nutzen, hat jedoch weniger Rechte
als angemeldete Nutzerinnen. Unangemeldete Nutzerinnen haben kein Zugriff auf das Menü.
Sie können lediglich die Liste aller Fragen einsehen sowie diese nach Schlüsselwörtern und
Kategorien filtern.
Die zwei weiteren Ansichten sind die der angemeldeten Studentinnen und Dozentinnen. Sie
unterscheiden sich darin, dass die angemeldeten Dozentinnen einige zusätzliche Rechte als
die angemeldeten Studentinnen haben.
