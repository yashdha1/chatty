import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import "./sb-css.css";

export default function SearchSidebar() {
  return (
    <div className="searchBox">
      <IconButton>
        <SearchIcon/>
      </IconButton>
      <input type="text" placeholder='Search' className='searchBar'/>
    </div>
  );
}
