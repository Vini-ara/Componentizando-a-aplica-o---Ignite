import { createContext, ReactNode, useState } from "react";

interface GenresContextData {
  selectedGenreId: number; 
  setCurrentGenreId: (id: number) => void; 
}

interface GenresContextProviderProps {
  children: ReactNode; 
} 

export const GenresContext = createContext({} as GenresContextData)

export function GenresContextProvider({children}: GenresContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function setCurrentGenreId(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <GenresContext.Provider
    value={{
      selectedGenreId,
      setCurrentGenreId
    }}>
      {children}
    </GenresContext.Provider>
  );
}