import { EntriesProvider } from "../context/EntriesContext"
import { EntryList } from "./EntryList"

export const Home = () => {
    return (
        <>
        <h1>home</h1>
        <EntriesProvider>
            <EntryList></EntryList>
        </EntriesProvider>
        </>
    )
}