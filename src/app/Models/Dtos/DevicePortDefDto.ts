import { DeviceDefDto } from "./DeviceDefDto";

export class  DevicePortDefDto {
    deviceDef!: DeviceDefDto;
    id!: number;
    portNumber!: number;
    portCode!: string;
    portDesc!: string;
    ioPortType!: number;
    isActive!: boolean;
  }