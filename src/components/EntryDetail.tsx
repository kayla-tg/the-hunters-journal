import {useContext} from "react"
import { EntriesContext } from "../context/EntriesContext"

interface EntryDetailProps {
    id: number
}

export const EntryDetail: React.FC<EntryDetailProps> = ({id}) => {
    const entryContextData = useContext(EntriesContext)

    if (entryContextData.loading) return <p>Loading journal entry</p>
    if (entryContextData.error) return <p>Error: {entryContextData.error}</p>
    const entry = entryContextData.entries.find( (entry) => entry.id === id)

    if (entry === undefined) {
        return <p>Journal entry not found</p>
    }

    return (
        <div className="entry-detail">
            <h3>{entry.title}</h3>
            <p>{entry.body}</p>
        </div>
    )
}