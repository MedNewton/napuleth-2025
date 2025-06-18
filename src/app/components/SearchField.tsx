import {
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import CloseIcon from "@mui/icons-material/Close";
  
  interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
  
  export default function SearchFieldOutlined({
    value,
    onChange,
    placeholder = "Search",
  }: Props) {
    return (
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#757575" }} />
            </InputAdornment>
          }
          endAdornment={
            value && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => onChange("")}
                  aria-label="Clear search"
                >
                  <CloseIcon sx={{ color: "#757575" }} />
                </IconButton>
              </InputAdornment>
            )
          }
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
            height: "48px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            fontSize: "1rem",
          }}
        />
      </FormControl>
    );
  }
  