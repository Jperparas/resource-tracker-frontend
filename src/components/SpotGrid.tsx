
import useSpots from "@/hooks/useSpots.ts";
import SpotCard from "@/components/SpotCard.tsx";

const SpotGrid = () => {
    const { data, error, isLoading } = useSpots();
    if (error) return <div>Error: {error?.message}</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
       <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] m-3 gap-2">
        {data?.map(spot=><SpotCard key={spot.id} spot ={spot}/>)}
       </div>

    );
};

export default SpotGrid;