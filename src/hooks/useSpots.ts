import {useQuery} from "@tanstack/react-query";
import spotService from "@/services/spotService.ts";


const useSpots = () =>{
    return useQuery({
        queryKey: ['spots'],
        queryFn: spotService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
    });
}




export default useSpots;