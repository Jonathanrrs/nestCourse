import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1>Websocket - client </h1>
   <span id="server-status"></span>

   <ul id="clients-ul"></ul>

   <form id="message-form">
    <input type="text" placeholder="message" id="message-input" />
   </form>

   <h3>Messages</h3>
   <ul id="messages-ul"></ul>
  </div>
`;

connectToServer();
