import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
  width: string;
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
        style: { color: "white" },
      }}
      className="custom-input"
    />
  );
};

export default CustomInput;
