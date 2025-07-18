import React from 'react';
import {Table, TableHeader,TableHead, TableBody,TableCell,TableRow} from "@/components/ui/table";
import useGpuLogs from "@/hooks/useGpuLogs";
//TODO: Pagination
//TODO: Filtering
//TODO: Status coloring
//TODO:
const GpuLogList = () => {
   const {data, error, isLoading} = useGpuLogs();
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-neutral-900">
                    <TableHead className="w-[100px]">Time</TableHead>
                    <TableHead>Log Type</TableHead>
                    <TableHead>Gpu</TableHead>
                    <TableHead>Gpu Type</TableHead>
                    <TableHead>on/off</TableHead>
                    <TableHead>Fuel Level</TableHead>
                    <TableHead>Def Blue Level</TableHead>
                    <TableHead>Spot</TableHead>
                    <TableHead>Moved To</TableHead>
                    <TableHead>Notes</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { data?.map((gpuLog,index) =>
                <TableRow key={gpuLog.gpuLogId} className={`${index % 2 === 0 ? '':'bg-neutral-900'}`}>
                    <TableCell>  {new Date(gpuLog.timestamp).toLocaleString('en-CA', {
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    })}</TableCell>
                    <TableCell>{gpuLog.logType}</TableCell>
                    <TableCell>{gpuLog.gpu.gpuNumber}</TableCell>
                    <TableCell>{gpuLog.gpu.powerType.name}</TableCell>
                    <TableCell>{gpuLog.gpu.powered ? 'ON':'OFF'}</TableCell>
                    <TableCell>{gpuLog.resourceLevel}</TableCell>
                    <TableCell>{gpuLog.defBlueLevel ?? 'N/A'}</TableCell>
                    <TableCell>{gpuLog.oldSpot?.name ?? 'N/A'}</TableCell>
                    <TableCell>{gpuLog.newSpot?.name ?? 'N/A'}</TableCell>
                    <TableCell>{gpuLog.note ?? ''}</TableCell>
                </TableRow>)}
            </TableBody>

        </Table>
    );
};

export default GpuLogList;