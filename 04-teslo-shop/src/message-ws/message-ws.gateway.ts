import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessageWsService } from './message-ws.service';
import { NewMesageDto } from './dtos/new-message.dto';

@WebSocketGateway({ cors: true })
export class MessageWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  /* el decorador, tiene la info de todos los clientes conectador */
  @WebSocketServer() wss: Server;
  constructor(private readonly messageWsService: MessageWsService) {}

  handleConnection(client: Socket) {
    this.messageWsService.registerClient(client);
    this.wss.emit(
      'clients-updated',
      this.messageWsService.getConnectedClients(),
    );
  }

  handleDisconnect(client: Socket) {
    this.messageWsService.removeClient(client.id);
    this.wss.emit(
      'clients-updated',
      this.messageWsService.getConnectedClients(),
    );
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMesageDto) {
    console.log(client.id, payload);
  }
}
