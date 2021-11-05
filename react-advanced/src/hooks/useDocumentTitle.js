import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log('Clean up!');
    };
  });
}

export default useDocumentTitle;
