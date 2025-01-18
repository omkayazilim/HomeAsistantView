import { DeviceTypeDefDto } from "./DeviceTypeDefDto";

export class DeviceDefDto {
    deviceTypeDef!: DeviceTypeDefDto;
    id!: number;
    deviceName!: string;
    deviceCode!: string;
    deviceAdressUrl!: string;
    isActive!: boolean;
    totalIOPortCount!: number;
  }