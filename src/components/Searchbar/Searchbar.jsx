import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { ButtonLabel, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styles";

export function Searchbar(){
  // test

    const [searchParams, setSearchParams] = useSearchParams();


    const updateQueryString = evt => {
        evt.preventDefault();
        const searchQuery = searchParams.get('query') ?? '';
        if (searchQuery === '') {
          toast.warning('The request cannot be empty!');
          return setSearchParams({});
        }
        setSearchParams(searchParams);
        evt.target.reset();
      };
    
      const handleChangeMovieId = event => {
        searchParams.set('query', event.currentTarget.value.toLowerCase());
      };
    
    

    return (
        <SearchForm onSubmit={updateQueryString}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={searchParams.query}
          onChange={handleChangeMovieId}
          placeholder="Search movies..."
        />
        <SearchFormButton type="submit" ><ButtonLabel>Search</ButtonLabel></SearchFormButton>
      </SearchForm>
    )
}