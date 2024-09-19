import { CheckCircle2, CircleDashed } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
    id: string;
    name: string | null;
    email: string;
    is_confirmed: boolean;
}

export const Guests = () => {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])

    useEffect(() => {
        api.get(`trips/${tripId}/participants`).then(res => setParticipants(res.data.participants))
    }, [tripId])

    return (
            <div className="space-y-5">
                {participants.map((participant, index) => (
                    <div key={participant.id} className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">{participant.name ?? `Convidado ${index}`}</span>
                            <span className="block text-sm text-zinc-400 truncate">
                                {participant.email}
                            </span>
                        </div>

                        {participant.is_confirmed ? (
                            <CheckCircle2 className="text-green-400 size-5 shrink-0" />
                        ) : (
                            <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                        )}
                    </div>
                ))}
            </div>
    )
}