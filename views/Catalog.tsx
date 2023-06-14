import {SafeAreaView} from 'react-native';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import useFilteredData from '../hooks/useFitleredData';

const Catalog = () => {
  const {filteredData, searchText, handleSearch, error, isLoading} =
    useFilteredData();

  if (error && 'error' in error) {
    return <Error errorStatus={error.status} errorMessage={error.error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <ProductList
        products={filteredData ?? []}
        value={searchText}
        onTextChangeHandler={handleSearch}
      />
    </SafeAreaView>
  );
};

export default Catalog;
