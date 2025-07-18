
import ApiClient from "@/services/apiClient.ts";

export interface Spot{
    id:number,
    name:string,
    gpuCount:number,
    hasAircraft:boolean,
}

export default new ApiClient<Spot>('/spots');