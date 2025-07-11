import http from "k6/http";
import ws from "k6/ws";

export const options = {
  // Key configurations for spike in this section
  stages: [
    { duration: "2m", target: 100 }, // fast ramp-up to a high point
    // No plateau
    { duration: "1m", target: 0 }, // quick ramp-down to 0 users
  ],
};

export default function () {
  // Step 1: GET request to retrieve CSRF token
  const response = http.get("https://dcon-elixir.ftes.de/");
  const csrfToken = response
    .html()
    .find('meta[name="csrf-token"]')
    .attr("content");
  const phxId = response.html().find("[data-phx-main]").attr("id");
  const phxSession = response
    .html()
    .find("[data-phx-main]")
    .attr("data-phx-session");
  const phxStatic = response
    .html()
    .find("[data-phx-main]")
    .attr("data-phx-static");

  // Step 2: Establish WebSocket connection
  const url = `wss://dcon-elixir.ftes.de/live/websocket?_csrf_token=${csrfToken}&vsn=2.0.0`;

  ws.connect(url, {}, function (socket) {
    socket.on("open", function open() {
      console.log("open");
      // Join the LiveView
      socket.send(
        JSON.stringify([
          "4",
          "4",
          `lv:${phxId}`,
          "phx_join",
          {
            url: "https://dcon-elixir.ftes.de/",
            params: { _csrf_token: csrfToken, _mounts: 0, _mount_attempts: 0 },
            session: phxSession,
            static: phxStatic,
          },
        ]),
      );
    });

    socket.on("message", function (message) {
      const [a, b, c, type, payload] = JSON.parse(message);
      if (
        a == "4" &&
        b == "4" &&
        type == "phx_reply" &&
        payload.status == "ok"
      ) {
        console.log("sum");

        socket.send(
          JSON.stringify([
            "4",
            "26",
            `lv:${phxId}`,
            "event",
            {
              type: "form",
              event: "sum_submitted",
              value: "number=9999999999",
            },
          ]),
        );
      }
    });

    socket.setTimeout(function () {
      socket.close();
    }, 120_000);
  });
}
