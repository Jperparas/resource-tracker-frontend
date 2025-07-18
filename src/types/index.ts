import type {Gpu} from "@/services/gpuService.ts";
import type {Spot} from "@/services/spotService.ts";

export interface Spot{
    id:number,
    name:string,
    gpuCount:number,
    hasAircraft:boolean,
}

export interface Gpu {
    id: number;
    gpuNumber: string;
    powered: boolean;
    spot: Spot;
    powerType: PowerType;
    resourceLevel: number;
    defBlueLevel: number | null;
    createdAt: string | null;
    updatedAt: string | null;
}
export interface PowerType {
    powerTypeId: number;
    name: string;
}
export interface GpuLog {

    gpuLogId: number;
    timestamp: string;
    logType: 'EQUIPMENT_CHECK' | 'MOVEMENT' | 'POWER_ON' | 'POWER_OFF';
    gpu: Gpu;
    resourceLevel: number;
    defBlueLevel: number | null;
    oldSpot?: Spot;
    newSpot?: Spot;
    note?: string;
}


