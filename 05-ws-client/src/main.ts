import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1>Websocket - client </h1>
   <span id="server-status"></span>
  </div>
`;

connectToServer();
