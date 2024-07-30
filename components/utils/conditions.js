const conditions_small = [
  "Credits: 100,000",
  "Valid: 90 days",
  "Usuable for: all public get endpoints",
  "Rate limit: 10 calls / minute",
];

const conditions_medium = [
  "Credits: 250,000",
  "Valid: 90 days",
  "Usuable for: all public get endpoints",
  "Rate limit: 30 calls / minute",
];

const conditions_large = [
  "Credits: 1,000,000",
  "Valid: 30 days",
  "Usuable for: all public get endpoints",
  "Rate limit: 60 calls / minute",
];

const conditions_socket = [
  "Parallel sessions: 5",
  "Valid: 30 days",
  "Usuable for: transaction WebSocket",
];

const conditions_rola = [
  "Credits: 100,000",
  "Valid: 30 days",
  "Usuable for: ROLA endpoints",
  "Rate limit: 180 calls / minute",
];

const conditions_listing = [  
  "Enables listing feature for one token", 
  "Valid: 365 days",
  "Usuable for: supply endpoints", 
];

export const plan_small = {
  name: "Small",
  plan: 2,
  price: 10,
  conditions: conditions_small,
};

export const plan_medium = {
  name: "Medium",
  plan: 3,
  price: 20,
  conditions: conditions_medium,
};

export const plan_large = {
  name: "Large",
  plan: 4,
  price: 50,
  conditions: conditions_large,
};

export const plan_rola = {
  name: "ROLA",
  plan: 5,
  price: 5,
  conditions: conditions_rola,
};

export const plan_socket = {
  name: "WebSocket 1",
  plan: 6,
  price: 5,
  conditions: conditions_socket,
};

export const plan_flatrate = {
  name: "Flatrate",
  plan: 8,
  price: 0,
  conditions: null,
};

export const plan_listing = {
  name: "Listing",
  plan: 14,
  price: 75,
  conditions: conditions_listing,
};
