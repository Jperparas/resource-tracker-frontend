
import {type Spot} from '../services/spotService'
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card.tsx";
import {Plane, Zap, ZapOff} from 'lucide-react';

interface Props {
    spot:Spot;
}


const SpotCard = ({spot}:Props) => {
    return (<div className="grid grid-cols-1 grid-rows-1 max-w-35">
        <Plane className="opacity-50 col-start-1 row-start-1 place-self-center" color={spot.hasAircraft ? "#ed4747" : "#47edb0"} size={75} />
       <Card className="col-start-1 row-start-1 flex flex-col w-35 h-35 p-3 text-left">

           <CardTitle className="p-0 mx-2">{spot.name}</CardTitle>
           <CardContent className="flex items-center justify-center p-0">

           </CardContent>
           <CardFooter className="flex items-center justify-end gap-1 my-8 p-0">
               <span>{spot.gpuCount}</span>
               {spot.gpuCount > 0 ?
                   <Zap size={14} color="yellow"/> :
                   <ZapOff size={14} color="red" />
               }
           </CardFooter>
       </Card>
        </div>
    );
};

export default SpotCard;