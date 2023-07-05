import { create } from 'zustand'
import { addDays } from 'date-fns'

const useGlobalDateStore = create(
  (set) => (
    {
      startDate: addDays(new Date(), -30),
      endDate: addDays(new Date(), -1),
      update: ({ startDate, endDate }) => set({
        startDate,
        endDate,
      }),
    }
  ),
  {
    name: 'globalDate',
  },
)

export default useGlobalDateStore
