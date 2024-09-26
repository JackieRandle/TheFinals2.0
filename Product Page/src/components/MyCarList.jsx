import {  useState, useEffect } from "react";
import { getLuxuryCars } from "../utils/apis";
import Card from "@mui/material/Card";
import CardContent from "mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

function MyCarList() {
    const [luxury, setLuxury] = useState([]);

    useEffect(() => {
        getLuxuryCars()
        .then((data) => {
            setLuxury(data);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2>My Car List</h2>
            {luxury.map((item) => {
                return (
                    <Card key={item.id} sx={{ maxWidth: 345 }} onClick={() => { Navigate("details/" + item.id) }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="400"
                            image={item.images.lg}
                            alt="gray"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {item.biography.firstAppearance}
                              </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                );

            })}
        </div>
    );
}


export default MyCarList;
