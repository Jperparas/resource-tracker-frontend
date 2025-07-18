import {useQuery} from "@tanstack/react-query";
import spotService from "@/services/spotService.ts";
import gpuLogService from "@/services/gpuLogService.ts";

const useGpuLogs = () =>{
    return useQuery({
        queryKey: ['gpuLogs'],
        queryFn: gpuLogService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
    });
}


export default useGpuLogs;