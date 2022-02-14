import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  const deboncedSearch = useDebounce(search, 300); 
  return(
    <div>
      <Search />
      <MoviesGrid key={deboncedSearch} search={deboncedSearch}/>
    </div>
  );
}