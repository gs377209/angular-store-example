import { Component } from "@angular/core";
import { add } from "lodash-es";

import { environment } from "./../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {
    console.log(environment.production, add(660, 6)); // Logs false for default environment
  }
  title = "app works!";
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
