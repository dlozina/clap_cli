addEventListener("handler", (event) => {
  let response = `PhotonIQ FaaS function is working => Env Var MESSAGE = ${MESSAGE}`;

  // Log messages with the following methods: error, warn, info, debug, trace
  log.error(`[${file_line()}] Log an [ERROR] message`);

  return event.respondWith(new HttpResponseBuilder().body(response).build());
});
