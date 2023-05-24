import { setupServer } from 'msw/node'
import {
  diffusionAPIs,
  favorabilityAPIs,
  hotkeywordAPIs,
  interactionAPIs,
  predictModuleAPIs,
  reputationAPIs,
  reputationModuleAPIs,
  socialAPIs,
  textlistAPIs,
  volumeAPIs,
  authAPIs,
  xlsxAPIs,
  swingModuleAPIs,
  competitorAPIs,
  constituencyAPIs,
  partyAdvantageAPIs,
} from './handlers'

// eslint-disable-next-line import/prefer-default-export
export const server = setupServer(
  ...diffusionAPIs,
  ...favorabilityAPIs,
  ...hotkeywordAPIs,
  ...interactionAPIs,
  ...predictModuleAPIs,
  ...reputationAPIs,
  ...reputationModuleAPIs,
  ...socialAPIs,
  ...textlistAPIs,
  ...volumeAPIs,
  ...authAPIs,
  ...xlsxAPIs,
  ...swingModuleAPIs,
  ...competitorAPIs,
  ...constituencyAPIs,
  ...partyAdvantageAPIs,
)
