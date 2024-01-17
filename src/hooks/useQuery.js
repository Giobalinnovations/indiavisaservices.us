
import axiosInstance from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export default function useQueryGet(apiEndpointUrl, formId, queryKey) {
  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.get(`${apiEndpointUrl}/${formId}`),
    enabled: !!formId,
  });

  return getQuery;
}
