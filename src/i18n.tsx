import { createContext, useContext, useEffect, useMemo, useState } from "react"
import en from "./locales/en.json"
import es from "./locales/es.json"

export type Language = "es" | "en"
type Dictionary = Record<string, unknown>

const dictionaries: Record<Language, Dictionary> = { es, en }
const LANGUAGE_KEY = "portfolio-language"

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es"
  return window.localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "es"
}

function read(dictionary: Dictionary, key: string): unknown {
  return key.split(".").reduce<unknown>((value, part) =>
    value && typeof value === "object" ? (value as Dictionary)[part] : undefined,
  dictionary)
}

type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  list: (key: string) => string[]
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_KEY, nextLanguage)
    setLanguageState(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key: string) => {
      const value = read(dictionaries[language], key)
      return typeof value === "string" ? value : key
    },
    list: (key: string) => {
      const value = read(dictionaries[language], key)
      return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
    },
  }), [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used inside I18nProvider")
  return context
}
