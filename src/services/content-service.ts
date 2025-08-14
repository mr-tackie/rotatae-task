import { mockApi } from '@/lib/api/mock-api'

export const contentService = {
  getDescription: mockApi.getDescriptionContent,
  getExtra: mockApi.getExtraContent,
}