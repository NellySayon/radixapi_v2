import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import Image from "next/image";

const ReferenceCard = (props) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent sx={{backgroundColor: props.color, m: 1}}>
        <Link href={props.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={props.image}
            alt={props.title}
            width={240}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ReferenceCard;
