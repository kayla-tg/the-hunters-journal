import {createContext, ReactNode, useEffect, useState} from "react"

export interface Entry {
    id: number,
    author: string,
    date: Date, 
    image: string,
    title: string, 
    body: string
}

interface EntriesContextValue {
    entries: Entry[]
    loading: boolean
    error: string | null
}

export const EntriesContext = createContext<EntriesContextValue>({
    entries: [],
    loading: false,
    error: null
})

export const EntriesProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const[entries, setEntries] = useState<Entry[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getEntries = async () => {
            const url = ''
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Network request failed")
                }
                const json = await response.json() as Entry[]
                setEntries(json)
                setLoading(false)
                setError(null)
                console.log(json)
            }
            catch (err) {
                let message: string
                if (err instanceof Error) {
                    message = (`Proper Error: ${err.message}`)
                }
                else {
                    message = (`Unknown Error: ${err}`)
                }
                console.error(message)
                setError(message)
                setLoading(false)
            }
        }
        getEntries()
        
        return () => {}
    }, [])
    
    return (
    
        <EntriesContext.Provider value = {
            {
                entries: entries,
                loading: loading,
                error: error
            }
        }>
            {children}
        </EntriesContext.Provider>
    )
}



