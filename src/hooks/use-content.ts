import { useQuery } from '@tanstack/react-query'
import { contentService } from '@/services/content-service'

export function useDescriptionContent() {
  return useQuery({
    queryKey: ['description-content'],
    queryFn: contentService.getDescription,
    staleTime: 5 * 60 * 1000,
  })
}

export function useExtraContent() {
  return useQuery({
    queryKey: ['extra-content'], 
    queryFn: contentService.getExtra,
    staleTime: 5 * 60 * 1000,
  })
}