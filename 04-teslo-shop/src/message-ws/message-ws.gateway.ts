import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageWsService } from './message-ws.service';

@WebSocketGateway({ cors: true })
export class MessageWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messageWsService: MessageWsService) {}
  handleConnection(client: Socket) {
    // console.log('client connected', client.id);
    this.messageWsService.registerClient(client);
    console.log(this.messageWsService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    // console.log('client disconnected', client.id);
    this.messageWsService.removeClient(client.id);
    console.log(this.messageWsService.getConnectedClients());
  }
}
