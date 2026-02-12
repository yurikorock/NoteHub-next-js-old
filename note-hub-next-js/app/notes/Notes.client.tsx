'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loader from '@/components/Loader/Loader';
import NoteList from '@/components/NoteList/NoteList';
import { getNotes, NotesListResponse } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function AppClient() {
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery<NotesListResponse>({
    queryKey: ['notes', { query: debouncedQuery, page: currentPage }],
    queryFn: () => getNotes(debouncedQuery, currentPage),

    refetchOnMount: false,
  });
  return (
    <>
      {isError ? (
        <ErrorMessage />
      ) : (
        data && data.notes.length > 0 && <NoteList notes={data.notes} />
      )}
      {isLoading && <Loader />}
    </>
  );
}
