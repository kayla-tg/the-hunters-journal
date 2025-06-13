import {useContext, useState} from "react"
import {EntriesContext} from "../context/EntriesContext"
import {EntryDetail} from "./EntryDetail"

const ENTRIES_PER_PAGE = 12

export const EntryList: React.FC = () => {
    const entryContextData   = useContext(EntriesContext)

    const [page, setPage] = useState<number>(1)

    const totalPages = Math.ceil(entryContextData.entries.length / ENTRIES_PER_PAGE)
    const startIndex = (page - 1) * ENTRIES_PER_PAGE
    const currentEntries = entryContextData.entries.slice(startIndex, startIndex+ENTRIES_PER_PAGE)

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page-1)
        }
        return
    }

    const handleNextClick = () => {
        if (page < totalPages) {
            setPage(page+1)
        }
        return
    }

    if (entryContextData.loading) {
        return <p>Loading journal entries...</p>
    }
    if (entryContextData.error) {
        return <p>Error loading journal entries: {entryContextData.error}</p>
    }

    return (
        <div className="entry-list">
            {
                currentEntries.map( entry => (
                    <div>
                        <EntryDetail key={entry.id} id={entry.id}></EntryDetail>
                    </div>
                ))
            }
            <div className="pagination">
                <button onClick={handlePrevClick}>Prev</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick = {handleNextClick}>Next</button>
            </div>
        </div>
    )
}