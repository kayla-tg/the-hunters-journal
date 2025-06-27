import { EntriesContext } from "@/context/EntriesContext"
import { slug } from "@/lib/entries"
import Link from "next/link"
import {useContext} from "react"


export const EntryCard = ({id}: {id: string}) => {
    const entriesContextData = useContext(EntriesContext)
    const entries = entriesContextData.entries
    const entry = entries.find(entry => entry.id === id)

    if (entriesContextData.loading) return <p>Loading post…</p>
    if (entriesContextData.error) return <p>Error: {entriesContextData.error}</p>

    if(entry === undefined)
    {
        return <p>Entry not found</p>
    }

    return (
        <div id="entry-card">
            <h2>{entry.title}</h2>
            <p>{entry.body}</p>
            <Link href={`/${slug(entry.title)}`}>Read more</Link>
        </div>
    )
}