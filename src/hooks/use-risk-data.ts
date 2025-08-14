import { useQuery } from '@tanstack/react-query'
import { riskService } from '@/services/risk-service'

export function useRiskAssessments() {
  return useQuery({
    queryKey: ['risk-assessments'],
    queryFn: riskService.getAssessments,
    staleTime: 3 * 60 * 1000,
  })
}

export function useRiskSummary() {
  return useQuery({
    queryKey: ['risk-summary'],
    queryFn: riskService.getSummary,
    staleTime: 3 * 60 * 1000,
  })
}