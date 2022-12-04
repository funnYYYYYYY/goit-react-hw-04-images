import { fetchImages } from 'helpers/pixabayApi';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import SearchBar from './Searchbar/SearchBar';

import { useState, useEffect } from 'react';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = query => {
    console.log(query);
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (query) {
      async function fetchData() {
        try {
          const searchImg = await fetchImages(query, page);
          if (searchImg) {
            setImages(prevState =>
              page === 1 ? searchImg.hits : [...prevState, ...searchImg.hits]
            );
            setTotalHits(
              page === 1
                ? searchImg.totalHits - searchImg.hits.length
                : searchImg.totalHits - [...searchImg, ...searchImg.hits].length
            );
            setIsLoading(true);
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    }
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmitForm} />
      {images.length > 0 && <ImageGallery images={images} />}

      {totalHits &&
        (!isLoading ? <LoadMore onLoadMore={handleLoadMore} /> : <Loader />)}
    </>
  );
}
