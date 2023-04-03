// Implement the launch sequence function here and export it as the default export.

// Load Payload core/load.js provides the loadPayload(payload) function.

import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";

//  Fueling core/fuel.js provides the fuel() function.

import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";

// Countdown core/countdown.js provides the countdown() function.

import { countdown } from "./core/countdown.js";

// Liftoff core/liftoff.js provides the liftoff() function.

import { liftoff } from "./core/liftoff.js";

// Deploy Payload core/deploy.js provides the deployPayload() function.

import { deployPayload } from "./core/deploy.js";

// return launchSequence;

export default function launch() {
  fuel();
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  for (let i = 0; i < 5; i++) {
    countdown();
  }
  liftoff();
  deployPayload();
}
