import { useState } from "react"
import { WordEntry } from "./types";
import { useMount } from "./hooks";
import { Credits, ErrorScreen, PredictiveText, SplashScreen } from "./components";

function App() {
  const [dictionary, setDictionary] = useState<WordEntry[]>([])
  
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useMount(() => {
    fetch('/fr.json')
      .then(res => res.json() as Promise<WordEntry[]>)
      // filter by most frequent word 
      .then(data => setDictionary(data.sort((a, b) => b.frequency - a.frequency)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  })

  
  if (isLoading) return <SplashScreen />
  
  if (isError) return <ErrorScreen />

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <Credits />
      <PredictiveText 
        dictionary={dictionary} 
      />
    </section>
  )
}

export default App
