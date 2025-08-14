import { useQuery } from '@tanstack/react-query'
import { networkService } from '@/services/network-service'

export function useNetworkNodes() {
  return useQuery({
    queryKey: ['network-nodes'],
    queryFn: networkService.getNodes,
    staleTime: 2 * 60 * 1000,
  })
}