const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let State = Object.freeze({
  offHook: "off hook",
  connecting: "connecting",
  connected: "connected",
  onHold: "on hold",
  onHook: "on hook",
});

let Trigger = Object.freeze({
  callDialed: "dial a number",
  hangup: "hang up",
  callConnected: "call is connected",
  placeOnHold: "placed on hold",
  takenOffHold: "taken off hold",
  leftMessage: "leave a message",
});

// The key is a state to mooving from. The value is an array of pairs
let rules = {};

rules[State.offHook] = [
  {
    trigger: Trigger.callDialed,
    state: State.connecting,
  },
];

rules[State.connecting] = [
  {
    trigger: Trigger.hangup,
    state: State.onHook,
  },
  {
    trigger: Trigger.callConnected,
    state: State.connected,
  },
];

rules[State.connected] = [
  {
    trigger: Trigger.leftMessage,
    state: State.onHook,
  },
  {
    trigger: Trigger.hangup,
    state: State.onHook,
  },
  {
    trigger: Trigger.placeOnHold,
    state: State.onHold,
  },
];

rules[State.onHold] = [
  {
    trigger: Trigger.takenOffHold,
    state: State.connected,
  },
  {
    trigger: Trigger.hangup,
    state: State.onHook,
  },
];

let state = State.offHook;
let exitState = State.onHook;

let getInput = () => {
  let prompt = [`The phone is currently in ${state}`, `What\'s next:`];
  for (let i = 0; i < rules[state].length; i++) {
    let t = rules[state][i].trigger;
    prompt.push(`${i}. ${t}`);
  }
  prompt.push("");

  rl.question(prompt.join("\n"), (answer) => {
    let input = parseInt(answer);
    state = rules[state][input].state;

    if (state !== exitState) {
      getInput();
    } else {
      console.log("The call has ended.");
      rl.close();
    }
  });
};

getInput();
