import MaterialGrid from "@material-ui/core/Grid";
import { useTheme } from "ui/styles";

const Grid = ({ spacing, ...restOfProps }) => {
  const theme = useTheme();

  if (spacing) {
    return (
      <div style={{ padding: (spacing * theme.spacing(1)) / 2 }}>
        <MaterialGrid spacing={spacing} {...restOfProps} />
      </div>
    );
  }
  return <MaterialGrid {...restOfProps} />;
};

export default Grid;
