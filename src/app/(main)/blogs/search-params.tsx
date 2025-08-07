import { createLoader, parseAsString } from "nuqs/server"

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const coordinatesSearchParams = {
	search: parseAsString.withDefault(""),
	// longitude: parseAsString.withDefault(0),
}

export const loadSearchParams = createLoader(coordinatesSearchParams)
