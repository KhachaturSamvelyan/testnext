import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ListService } from '../../../services/lists/lists.service';

export const useList = (page = 1, id=1) => {
  const router = useRouter()

  const { data, isLoading, isError } = useQuery(['lists', page], () => ListService.get(page), {
    select: ({ data }) => data.items,
    keepPreviousData: true,
  });

  const { data:modal, isLoading:isModalLoading, isError:isModalError } = useQuery(['modal', id], () => ListService.getList(id), {
    select: ({ data }) => data,
    keepPreviousData: true,
    enabled: router.query.id !== undefined
  });

  return {
    data,
    isLoading,
    isError,
    modal,
    isModalLoading,
    isModalError
  };
};