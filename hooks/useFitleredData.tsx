import {useState, useEffect} from 'react';
import {useGetProductsQuery} from '../features/products/productsAPI';
import {Product} from '../types';

const useFitleredData = () => {
  const {data, isLoading, error} = useGetProductsQuery();
  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Product[] | undefined>(data);

  useEffect(() => {
    filterData();
  }, [searchText, data]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filterData = () => {
    if (searchText.trim() === '') {
      setFilteredData(data);
    } else {
      const filtered = data?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return {filteredData, searchText, handleSearch, isLoading, error};
};
export default useFitleredData;
