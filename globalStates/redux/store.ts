import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

// Define the RootState type
type RootState = ReturnType<typeof rootReducer>

export { store, RootState }
