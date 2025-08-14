import { mockApi } from '@/lib/api/mock-api'

export const riskService = {
  getAssessments: mockApi.getRiskAssessments,
  getSummary: mockApi.getRiskSummary,
}