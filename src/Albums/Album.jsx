import Card from "ui/Card";
import CardContent from "ui/CardContent";
import Typography from "ui/Typography";

const Album = ({ albumTitle, artist: { name }, condition, year }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{albumTitle}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h5">{year}</Typography>
        <Typography variant="h5">{condition}</Typography>
      </CardContent>
    </Card>
  );
};

export default Album;
