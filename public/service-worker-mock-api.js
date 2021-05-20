/* eslint-disable no-undef, no-restricted-globals */
const isGetRequest = (event) => event.request.method === "GET";
const isPostRequest = (event) => event.request.method === "POST";
const isDeleteRequest = (event) => event.request.method === "DELETE";
const isPutRequest = (event) => event.request.method === "PUT";

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

const user = {
  id: 801,
  name: "Super Admin",
  apiKey: "test",
  permissions: {
    api: [
      { path: "/api/v1/campaign", method: "GET" },
    ],
  },
};

const init = { "headers" : {"content-type": "application/json"}};


self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const path = url.pathname;
  const searchParams = url.searchParams;
  if (isGetRequest(event) && path.includes("/api/login")) {
    event.respondWith(Promise.resolve(
        new Response(JSON.stringify({ user }), init),
    ));
  }
});
