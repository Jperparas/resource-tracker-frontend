import ApiClient from "@/services/apiClient.ts";
import {type GpuLog} from "@/types";

export default new ApiClient<GpuLog>('/gpu-logs');