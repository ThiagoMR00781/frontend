import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { Link2 } from "lucide-react"

interface Link {
    id: string;
    title: string;
    url: string;
}

export const Links = () => {
    const { tripId } = useParams()
    const [links, setLinks] = useState<Link[]>([])

    useEffect(() => {
        api.get(`trips/${tripId}/links`).then(res => setLinks(res.data.links))
    }, [tripId])

    return (
        <div className="space-y-5">
            {links.map(link => {
                return (
                    <div key={link.id} className="space-y-2.5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100">{link.title}</span>
                                    <a href={link.url} className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                                        {link.url}
                                    </a>
                            </div>
                            <Link2 className="size-5 text-zinc-400 shrink-0" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}