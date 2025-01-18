export class DevicePortDefRequestDto {
    id!: number;
    portNumber!: number;
    portCode!: string;
    portDesc!: string;
    ioPortType!: number;
    isActive!: boolean;
    deviceDefId!: number;
  }