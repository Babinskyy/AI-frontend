import { TextField, useThemeProps } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      name={props.name}
      label={props.label}
      type={props.type}
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        style: { width: "400px", borderRadius: "10px", fontSize: 20, color: "white" },
      }}
    />
  );
};

export default CustomInput;
