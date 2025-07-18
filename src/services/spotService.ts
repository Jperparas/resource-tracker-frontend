
import ApiClient from "@/services/apiClient.ts";
import {type Spot} from "@/types";


export default new ApiClient<Spot>('/spots');