import { DevicePortDefDto } from "./DevicePortDefDto";

export class DeviceChannelDefDto {
    devicePortDef!: DevicePortDefDto;
    id!: number;
    deviceChannelNo!: number;
    deviceChannelCode!: string;
    deviceChannelDesc!: string;
    isActive!: boolean;
    deviceChannelIcon!:string
    channelStatus!:boolean
  }


